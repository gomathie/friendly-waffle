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
const observeRevealElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children').forEach((el) => {
    observer.observe(el)
  })
}

// Re-observe on route changes
router.afterEach(() => {
  setTimeout(observeRevealElements, 100)
})

// Initial observe
setTimeout(observeRevealElements, 200)
