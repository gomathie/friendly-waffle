/**
 * Link checker: `npm run check:links`
 *
 * 1. Every internal `to="/..."` resolves to a real route (or a redirect).
 * 2. Every referenced /images/... asset exists in public/.
 * 3. Every external https:// link responds (skip with --offline).
 * 4. Every new-tab link carries rel="noopener noreferrer".
 *
 * Exits non-zero if anything is broken, so it can gate a deploy.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const offline = process.argv.includes('--offline')
const problems = []

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    return entry.isDirectory() ? walk(full) : [full]
  })

const sourceFiles = [
  ...walk(path.join(projectRoot, 'src')).filter((f) => /\.(vue|js)$/.test(f)),
  path.join(projectRoot, 'index.html')
]

// --- Build the set of paths the router will answer to --------------------
const { routes } = await import(new URL('../src/router/routes.js', import.meta.url).href)

const staticPaths = new Set()
const patterns = []
for (const route of routes) {
  if (route.path.includes('pathMatch')) continue
  const parameterised = route.path.match(/^(.*)\/:[A-Za-z]+\(([^)]+)\)$/)
  if (parameterised) {
    const [, prefix, options] = parameterised
    for (const option of options.split('|')) staticPaths.add(`${prefix}/${option}`)
    continue
  }
  if (route.path.includes(':')) {
    patterns.push(route.path)
    continue
  }
  staticPaths.add(route.path)
}

const routeExists = (urlPath) => staticPaths.has(urlPath) || patterns.length > 0

// --- Collect links -------------------------------------------------------
const internal = new Map() // path -> [files]
const external = new Map() // url  -> [files]
const images = new Map() // /images/x -> [files]

/**
 * URLs that appear in the source but are not pages to fetch:
 * identifiers, preconnect origins, embed endpoints that only answer inside an
 * iframe, and strings still holding a template placeholder.
 */
const notFetchable = [
  /schema\.org|sitemaps\.org|www\.w3\.org/, // XML/JSON-LD namespaces
  /^https:\/\/fonts\.(googleapis|gstatic)\.com\/?$/, // preconnect origins
  /google\.com\/maps\/embed/, // 404s outside an iframe by design
  /\$\{/ // unresolved template literal
]

const isFetchable = (url) => !notFetchable.some((pattern) => pattern.test(url))

const record = (map, key, file) => {
  if (!map.has(key)) map.set(key, [])
  map.get(key).push(path.relative(projectRoot, file))
}

for (const file of sourceFiles) {
  const source = fs.readFileSync(file, 'utf8')

  for (const match of source.matchAll(/(?:to|href)="(\/[^"#?]*)"/g)) {
    record(internal, match[1], file)
  }
  // Router-driven paths written as data, e.g. route: '/consulting'
  for (const match of source.matchAll(/\broute:\s*'(\/[^']*)'/g)) {
    record(internal, match[1], file)
  }
  for (const match of source.matchAll(/https:\/\/[^\s"'`)<]+/g)) {
    const url = match[0].replace(/[.,]$/, '')
    if (!isFetchable(url)) continue
    record(external, url, file)
  }
  for (const match of source.matchAll(/\/images\/[A-Za-z0-9._%-]+\.(?:webp|png|jpe?g|svg)/g)) {
    record(images, match[0], file)
  }
}

// --- 1. Internal routes --------------------------------------------------
for (const [urlPath, files] of internal) {
  if (urlPath.startsWith('/images/') || urlPath.startsWith('/favicon') || urlPath.startsWith('/apple-touch')) continue
  if (urlPath === '/src/main.js') continue
  if (!routeExists(urlPath)) {
    problems.push(`Internal link has no route: ${urlPath}  (${files.join(', ')})`)
  }
}

// --- 2. Images -----------------------------------------------------------
for (const [imagePath, files] of images) {
  if (!fs.existsSync(path.join(projectRoot, 'public', imagePath))) {
    problems.push(`Missing image: ${imagePath}  (${files.join(', ')})`)
  }
}

// --- 3. rel on new-tab links --------------------------------------------
for (const file of sourceFiles.filter((f) => f.endsWith('.vue'))) {
  const source = fs.readFileSync(file, 'utf8')
  for (const match of source.matchAll(/<a\b[\s\S]*?>/g)) {
    if (!/target="_blank"/.test(match[0])) continue
    if (!/rel="noopener noreferrer"/.test(match[0])) {
      problems.push(`New-tab link without rel="noopener noreferrer" in ${path.relative(projectRoot, file)}`)
    }
  }
}

// --- 4. External reachability -------------------------------------------
const checkExternal = async (url) => {
  const attempt = (method) =>
    fetch(url, { method, redirect: 'follow', signal: AbortSignal.timeout(15000) })

  try {
    let response = await attempt('HEAD')
    // Plenty of sites reject HEAD; fall back before calling it broken.
    if (response.status === 405 || response.status === 403 || response.status === 501) {
      response = await attempt('GET')
    }
    return { url, status: response.status, ok: response.ok }
  } catch (error) {
    return { url, status: error.name === 'TimeoutError' ? 'timeout' : 'unreachable', ok: false }
  }
}

console.log(`Checking ${internal.size} internal paths, ${images.size} images, ${external.size} external urls...\n`)

if (!offline) {
  const results = await Promise.all([...external.keys()].map(checkExternal))
  for (const result of results.sort((a, b) => a.url.localeCompare(b.url))) {
    const files = external.get(result.url)
    console.log(`  ${result.ok ? 'ok  ' : 'FAIL'}  ${String(result.status).padEnd(11)} ${result.url}`)
    if (!result.ok) {
      problems.push(`External link ${result.status}: ${result.url}  (${files.join(', ')})`)
    }
  }
} else {
  console.log('  (external checks skipped: --offline)')
}

console.log('')
if (problems.length) {
  console.error(`${problems.length} problem(s):\n` + problems.map((p) => `  - ${p}`).join('\n'))
  process.exit(1)
}
console.log('No broken links.')
