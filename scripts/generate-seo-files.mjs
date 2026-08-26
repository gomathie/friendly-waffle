/**
 * Generates public/sitemap.xml and public/robots.txt from the router table, so
 * a new page cannot be added without appearing in the sitemap.
 *
 * Runs automatically as part of `npm run build`.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(here, '..')
const SITE_URL = 'https://hitracesolutions.com'

const { routes } = await import(new URL('../src/router/routes.js', import.meta.url).href)

/** How often each area of the site is likely to change, and how it ranks. */
const weights = [
  { match: (p) => p === '/', changefreq: 'monthly', priority: '1.0' },
  { match: (p) => p.startsWith('/businesses'), changefreq: 'monthly', priority: '0.9' },
  { match: (p) => p === '/consulting', changefreq: 'monthly', priority: '0.9' },
  { match: (p) => ['/about', '/capabilities', '/contact'].includes(p), changefreq: 'monthly', priority: '0.8' },
  { match: (p) => p === '/careers', changefreq: 'monthly', priority: '0.5' },
  { match: () => true, changefreq: 'yearly', priority: '0.3' }
]

const weightFor = (urlPath) => weights.find((w) => w.match(urlPath))

/**
 * Turn the router's paths into concrete URLs. Redirects and the catch-all are
 * skipped; a parameterised path whose param is a fixed set of options
 * (`/businesses/:id(a|b|c)`) expands into one URL per option.
 */
const expand = (routePath) => {
  if (routePath.includes('pathMatch')) return []
  const parameterised = routePath.match(/^(.*)\/:[A-Za-z]+\(([^)]+)\)$/)
  if (parameterised) {
    const [, prefix, options] = parameterised
    return options.split('|').map((option) => `${prefix}/${option}`)
  }
  if (routePath.includes(':')) return []
  return [routePath]
}

const urls = routes
  .filter((route) => route.component && !route.redirect)
  .flatMap((route) => expand(route.path))

if (urls.length === 0) {
  console.error('generate-seo-files: no routes resolved - refusing to write an empty sitemap.')
  process.exit(1)
}

const lastmod = new Date().toISOString().slice(0, 10)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((urlPath) => {
    const { changefreq, priority } = weightFor(urlPath)
    return `  <url>
    <loc>${SITE_URL}${urlPath === '/' ? '/' : urlPath}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  })
  .join('\n')}
</urlset>
`

const robots = `# ${SITE_URL}
User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`

fs.writeFileSync(path.join(projectRoot, 'public', 'sitemap.xml'), sitemap)
fs.writeFileSync(path.join(projectRoot, 'public', 'robots.txt'), robots)

console.log(`generate-seo-files: wrote sitemap.xml (${urls.length} urls) and robots.txt`)
for (const urlPath of urls) console.log(`  ${urlPath}`)
