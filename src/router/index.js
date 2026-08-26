import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.js'
import { applyMeta } from './seo.js'
import { trackPageView } from '../lib/analytics.js'


// Vue Router restores position from its own history state, so the browser's
// restore only fights it - on a reload it would put the page part-way down and
// the router would then scroll up from there.
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Back/forward returns you where you were, instantly.
    if (savedPosition) return { ...savedPosition, behavior: 'instant' }
    // In-page anchors are the one case that should glide, offset for the header.
    if (to.hash) return { el: to.hash, top: 90, behavior: prefersReducedMotion() ? 'instant' : 'smooth' }
    return { top: 0, left: 0, behavior: 'instant' }
  }
})

router.afterEach((to) => {
  applyMeta(to)
  // A no-op until the visitor has consented and the script has loaded.
  trackPageView(to.fullPath, document.title)
})

export default router
