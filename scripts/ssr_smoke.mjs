/**
 * Development smoke test: render every route through @vue/server-renderer and
 * fail on any Vue warning or error. Catches broken templates and bad component
 * references that a successful `vite build` will not.
 *
 *   node scripts/ssr_smoke.mjs
 */
import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createRouter, createMemoryHistory } from 'vue-router'

const problems = []

// The app touches document/window only in lifecycle hooks that SSR skips, but
// the router's afterEach hook writes meta tags - give it somewhere to write to.
const noopElement = () => ({
  setAttribute() {},
  getAttribute: () => null,
  appendChild() {}
})
globalThis.document = {
  title: '',
  documentElement: {},
  head: { querySelector: () => null, appendChild() {} },
  createElement: noopElement,
  querySelector: () => null
}
globalThis.window = { scrollY: 0, innerWidth: 1440, addEventListener() {}, removeEventListener() {} }

const App = (await import('../src/App.vue')).default
const routes = (await import('../src/router/index.js')).default.options.routes

const paths = [
  '/', '/about', '/businesses',
  '/businesses/onegps-africa', '/businesses/dekaerp', '/businesses/hitrace-digital',
  '/capabilities', '/consulting', '/contact', '/careers', '/privacy', '/terms',
  '/telematics', '/web-services', '/iot-and-smart-homes', '/pricing',
  '/this-route-does-not-exist'
]

for (const path of paths) {
  const app = createSSRApp(App)
  app.config.warnHandler = (msg, _i, trace) => problems.push(`${path}: WARN ${msg}${trace}`)
  const router = createRouter({ history: createMemoryHistory(), routes })
  app.use(router)
  router.push(path)
  await router.isReady()

  try {
    const html = await renderToString(app)
    const resolved = router.currentRoute.value.fullPath
    const heading = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1].replace(/<[^>]+>/g, '').trim()
    console.log(
      `${path.padEnd(32)} -> ${resolved.padEnd(30)} ${String(html.length).padStart(6)} chars  h1: ${heading || '(none)'}`
    )
    if (!heading) problems.push(`${path}: rendered without an <h1>`)
  } catch (error) {
    problems.push(`${path}: THREW ${error.message}`)
  }
}

console.log('')
if (problems.length) {
  console.error('PROBLEMS:\n' + problems.join('\n'))
  process.exit(1)
}
console.log('All routes rendered cleanly.')
