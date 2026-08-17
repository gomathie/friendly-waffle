import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/variables.css'
import './assets/css/base.css'
import './assets/css/animations.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

// Scroll reveal observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        // Optional: Stop observing once revealed
        // observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
)

const observeRevealElements = () => {
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children').forEach((el) => {
    if (!el.dataset.observed) {
      observer.observe(el)
      el.dataset.observed = 'true'
    }
  })
}

// Initial observe
observeRevealElements()

// Use MutationObserver to reliably catch elements as they are dynamically mounted by Vue Router
const mutationObserver = new MutationObserver(() => {
  observeRevealElements()
})
mutationObserver.observe(document.body, { childList: true, subtree: true })
