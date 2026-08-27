<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled, 'header--open': mobileOpen }">
    <div class="header__inner container">
      <router-link to="/" class="header__brand" @click="closeMobile">
        <img :src="brand.logo" :alt="`${brand.name} home`" class="header__logo" width="132" height="32" />
        <span class="header__descriptor">{{ brand.descriptor }}</span>
      </router-link>

      <nav v-show="!isMobile" class="header__nav" aria-label="Primary">
        <ul class="nav">
          <li class="nav__item">
            <router-link to="/" class="nav__link">Home</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/about" class="nav__link">About</router-link>
          </li>
          <li
            class="nav__item nav__item--dropdown"
            @mouseenter="dropdownOpen = true"
            @mouseleave="dropdownOpen = false"
          >
            <button
              type="button"
              class="nav__link nav__link--button"
              :class="{ 'nav__link--active': isBusinessesRoute }"
              aria-haspopup="true"
              :aria-expanded="dropdownOpen"
              @click="dropdownOpen = !dropdownOpen"
            >
              Solutions
              <ChevronDown :size="14" class="nav__chevron" aria-hidden="true" />
            </button>
            <div v-show="dropdownOpen" class="dropdown">
              <router-link to="/businesses" class="dropdown__overview" @click="dropdownOpen = false">
                <span>Ecosystem overview</span>
                <ArrowRight :size="14" aria-hidden="true" />
              </router-link>
              <ul class="dropdown__list">
                <li v-for="business in businesses" :key="business.id">
                  <router-link
                    :to="business.route"
                    class="dropdown__link"
                    :class="`accent-${business.accent}`"
                    @click="dropdownOpen = false"
                  >
                    <component :is="business.icon" :size="18" class="dropdown__icon" aria-hidden="true" />
                    <span class="dropdown__text">
                      <strong>{{ business.name }}</strong>
                      <em>{{ business.discipline }}</em>
                    </span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav__item">
            <router-link to="/services" class="nav__link">Services</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/industries" class="nav__link">Industries</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/contact" class="nav__link">Contact</router-link>
          </li>
        </ul>
      </nav>

      <div class="header__actions">
        <router-link v-show="!isMobile" to="/contact" class="btn btn--primary btn--sm">Talk to Us</router-link>
        <button
          v-show="isMobile"
          type="button"
          class="hamburger"
          :class="{ 'hamburger--active': mobileOpen }"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-nav"
          :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
          @click="mobileOpen = !mobileOpen"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <transition name="slide">
      <nav v-if="mobileOpen && isMobile" id="mobile-nav" class="mnav" aria-label="Primary">
        <div class="mnav__inner">
          <router-link to="/" class="mnav__link" @click="closeMobile">Home</router-link>
          <router-link to="/about" class="mnav__link" @click="closeMobile">About</router-link>

          <p class="mnav__heading">Solutions</p>
          <router-link
            v-for="business in businesses"
            :key="business.id"
            :to="business.route"
            class="mnav__business"
            :class="`accent-${business.accent}`"
            @click="closeMobile"
          >
            <component :is="business.icon" :size="20" class="mnav__icon" aria-hidden="true" />
            <span>
              <strong>{{ business.name }}</strong>
              <em>{{ business.discipline }}</em>
            </span>
          </router-link>
          <router-link to="/businesses" class="mnav__sublink" @click="closeMobile">
            See the full ecosystem
          </router-link>

          <router-link to="/services" class="mnav__link" @click="closeMobile">Services</router-link>
          <router-link to="/industries" class="mnav__link" @click="closeMobile">Industries</router-link>
          <router-link to="/contact" class="mnav__link" @click="closeMobile">Contact</router-link>

          <router-link to="/contact" class="btn btn--primary btn--lg mnav__cta" @click="closeMobile">
            Talk to Us
          </router-link>
        </div>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { ChevronDown, ArrowRight } from 'lucide-vue-next'
import { businesses } from '../../data/businesses.js'
import { brand } from '../../data/site.js'

const route = useRoute()
const isScrolled = ref(false)
const mobileOpen = ref(false)
const isMobile = ref(false)
const dropdownOpen = ref(false)

// The dropdown label lights up for any business profile page, including
// /consulting - it no longer has a standalone top-level nav item, so this is
// its only route to an active state.
const isBusinessesRoute = computed(
  () => route.path.startsWith('/businesses') || route.path === '/consulting'
)

const closeMobile = () => {
  mobileOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const handleResize = () => {
  isMobile.value = window.innerWidth < 1024
  if (!isMobile.value) mobileOpen.value = false
}

const handleKeydown = (event) => {
  if (event.key !== 'Escape') return
  dropdownOpen.value = false
  mobileOpen.value = false
}

// Lock background scrolling while the full-screen mobile menu is open
watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

watch(() => route.fullPath, () => {
  dropdownOpen.value = false
  mobileOpen.value = false
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', handleKeydown)
  handleResize()
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: var(--z-sticky);
  background: rgba(10, 22, 40, 0.82);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid transparent;
  transition: background var(--transition-base), border-color var(--transition-base), box-shadow var(--transition-base);
}

.header--scrolled,
.header--open {
  background: rgba(10, 22, 40, 0.97);
  border-bottom-color: var(--color-border-dark);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  height: 76px;
  max-width: 1320px;
}

/* Brand lockup: logo plus the company descriptor, so the parent-company
   positioning reads from the very first element on the page. */
.header__brand {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-shrink: 0;
}

.header__logo {
  height: 30px;
  width: auto;
  object-fit: contain;
  background: rgba(255, 255, 255, 0.95);
  padding: 5px 10px;
  border-radius: var(--radius-sm);
  transition: transform var(--transition-base);
}

.header__brand:hover .header__logo {
  transform: translateY(-1px);
}

.header__descriptor {
  font-size: 0.68rem;
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-text-dark-muted);
  padding-left: var(--space-3);
  border-left: 1px solid var(--color-border-dark);
  white-space: nowrap;
}

.nav {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.nav__link {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: 0.55rem 0.9rem;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-dark-muted);
  border-radius: var(--radius-sm);
  white-space: nowrap;
  transition: color var(--transition-fast), background var(--transition-fast);
}

.nav__link--button {
  color: var(--color-text-dark-muted);
  font-family: inherit;
}

.nav__link:hover,
.nav__link--active,
.nav__link.router-link-exact-active {
  color: var(--color-text-light);
  background: rgba(255, 255, 255, 0.07);
}

.nav__chevron {
  transition: transform var(--transition-fast);
}

.nav__item--dropdown:hover .nav__chevron {
  transform: rotate(180deg);
}

/* Dropdown */
.nav__item--dropdown {
  position: relative;
}

.dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  width: 380px;
  padding: var(--space-3);
  background: var(--color-dark-card);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  animation: fadeIn 0.18s ease;
}

.dropdown__overview {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-4);
  margin-bottom: var(--space-2);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dark-muted);
  border-bottom: 1px solid var(--color-border-dark);
}

.dropdown__overview:hover {
  color: var(--color-text-light);
}

.dropdown__link {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  transition: background var(--transition-fast);
}

.dropdown__link:hover {
  background: rgba(255, 255, 255, 0.06);
}

.dropdown__icon {
  color: var(--accent);
  margin-top: 2px;
  flex-shrink: 0;
}

.dropdown__text strong {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-light);
}

.dropdown__text em {
  display: block;
  font-size: var(--font-size-xs);
  font-style: normal;
  color: var(--color-text-dark-muted);
  margin-top: 2px;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

/* Hamburger */
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  margin-right: -10px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text-light);
  border-radius: 2px;
  transition: transform var(--transition-base), opacity var(--transition-base);
}

.hamburger--active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger--active span:nth-child(2) {
  opacity: 0;
}

.hamburger--active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile navigation: a full-height sheet with generous tap targets, not a
   compressed copy of the desktop bar. */
.mnav {
  position: fixed;
  inset: 76px 0 0 0;
  background: var(--color-dark);
  overflow-y: auto;
  z-index: var(--z-overlay);
  -webkit-overflow-scrolling: touch;
}

.mnav__inner {
  display: flex;
  flex-direction: column;
  padding: var(--space-4) var(--space-6) var(--space-16);
}

.mnav__link {
  padding: var(--space-4) 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-light);
  border-bottom: 1px solid var(--color-border-dark);
}

.mnav__heading {
  margin: var(--space-8) 0 var(--space-4);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text-dark-muted);
}

.mnav__business {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4);
  margin-bottom: var(--space-3);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--color-border-dark);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius-md);
}

.mnav__icon {
  color: var(--accent);
  flex-shrink: 0;
}

.mnav__business strong {
  display: block;
  font-size: var(--font-size-base);
  color: var(--color-text-light);
}

.mnav__business em {
  display: block;
  font-size: var(--font-size-xs);
  font-style: normal;
  color: var(--color-text-dark-muted);
  margin-top: 2px;
}

.mnav__sublink {
  display: inline-block;
  padding: var(--space-2) 0 var(--space-4);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary-on-dark);
}

.mnav__cta {
  margin-top: var(--space-8);
  width: 100%;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 1180px) {
  .header__descriptor {
    display: none;
  }
}
</style>
