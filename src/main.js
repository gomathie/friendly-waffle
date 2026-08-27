import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/variables.css'
import './assets/css/base.css'
import './assets/css/animations.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

/* ===== Scroll reveal =====
 *
 * The rule: content that scrolls into view animates in; content that is
 * already on screen when the page paints does not. Without that second half,
 * every load and refresh shows the whole visible page sliding upward into
 * place, because each reveal element starts 30px below its final position.
 */

const REVEAL_SELECTOR = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children'
const root = document.documentElement

// While this class is set, reveal transitions are suppressed (see animations.css).
root.classList.add('reveal-boot')

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('revealed')
    })
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
)

/**
 * Show anything already within the viewport straight away and take it out of
 * the observer's hands. Runs while `reveal-boot` is on, so there is no
 * transition to see.
 */
const revealWhatIsAlreadyVisible = () => {
  document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
    if (el.dataset.observed) return
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('revealed')
      el.dataset.observed = 'true'
    }
  })
}

const observeRevealElements = () => {
  document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
    if (el.dataset.observed) return
    observer.observe(el)
    el.dataset.observed = 'true'
  })
}

// Vue has mounted synchronously above, so the first pass sees real geometry.
revealWhatIsAlreadyVisible()
observeRevealElements()

// Two frames: the first lets the instant reveals paint, the second lifts the
// suppression so everything revealed from here on animates normally.
requestAnimationFrame(() => {
  requestAnimationFrame(() => root.classList.remove('reveal-boot'))
})

// Catch elements Vue Router mounts later. On a route change the incoming page
// is a deliberate transition, so its content is allowed to animate in.
const mutationObserver = new MutationObserver(() => observeRevealElements())
mutationObserver.observe(document.body, { childList: true, subtree: true })
