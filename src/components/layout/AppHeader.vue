<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled, 'header--open': mobileOpen }">
    <div class="header__inner container">
      <router-link to="/" class="header__logo" @click="closeMobile">
        <div class="logo">
          <img src="/images/hit-logo-web.png" alt="Hitrace Solutions" class="logo__img" />
        </div>
      </router-link>

      <nav class="header__nav" v-show="!isMobile">
        <ul class="nav">
          <li class="nav__item">
            <router-link to="/" class="nav__link" active-class="nav__link--active" exact>Home</router-link>
          </li>
          <li class="nav__item nav__item--dropdown" @mouseenter="openDropdown('services')" @mouseleave="closeDropdown">
            <span class="nav__link nav__link--has-children">
              Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
            </span>
            <div class="dropdown" v-show="activeDropdown === 'services'">
              <div class="dropdown__section">
                <h4 class="dropdown__title">Telematics</h4>
                <router-link to="/telematics" class="dropdown__link" @click="closeDropdown">Overview</router-link>
                <router-link to="/fleet-management" class="dropdown__link" @click="closeDropdown">Fleet Management</router-link>
                <router-link to="/fuel-monitoring" class="dropdown__link" @click="closeDropdown">Fuel Monitoring</router-link>
                <router-link to="/tracking-solutions" class="dropdown__link" @click="closeDropdown">Tracking Solutions</router-link>
                <router-link to="/driver-behavior-monitoring" class="dropdown__link" @click="closeDropdown">Driver Behavior</router-link>
                <router-link to="/smart-farming" class="dropdown__link" @click="closeDropdown">Smart Farming</router-link>
              </div>
              <div class="dropdown__section">
                <h4 class="dropdown__title">Other Services</h4>
                <router-link to="/iot-and-smart-homes" class="dropdown__link" @click="closeDropdown">IoT & Smart Homes</router-link>
                <router-link to="/web-services" class="dropdown__link" @click="closeDropdown">Web Services</router-link>
              </div>
            </div>
          </li>
          <li class="nav__item">
            <router-link to="/industries" class="nav__link" active-class="nav__link--active">Industries</router-link>
          </li>
          <li class="nav__item">
            <router-link to="/pricing" class="nav__link" active-class="nav__link--active">Pricing</router-link>
          </li>
          <li class="nav__item nav__item--dropdown" @mouseenter="openDropdown('resources')" @mouseleave="closeDropdown">
            <span class="nav__link nav__link--has-children">
              Resources
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
            </span>
            <div class="dropdown dropdown--small" v-show="activeDropdown === 'resources'">
              <router-link to="/contact" class="dropdown__link" @click="closeDropdown">Contact</router-link>
              <router-link to="/faq" class="dropdown__link" @click="closeDropdown">FAQ</router-link>
            </div>
          </li>
        </ul>
      </nav>

      <div class="header__actions">
        <router-link to="/contact" class="btn btn--primary btn--sm header__cta" v-show="!isMobile">
          Book a Demo
        </router-link>
        <button class="hamburger" :class="{ 'hamburger--active': mobileOpen }" @click="toggleMobile" v-show="isMobile" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <transition name="slide">
      <div class="mobile-nav" v-if="mobileOpen && isMobile">
        <div class="mobile-nav__inner">
          <router-link to="/" class="mobile-nav__link" @click="closeMobile">Home</router-link>
          
          <div class="mobile-nav__group">
            <button class="mobile-nav__toggle" @click="toggleMobileSection('services')">
              Services
              <svg :class="{ rotated: mobileSection === 'services' }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="mobile-nav__sub" v-show="mobileSection === 'services'">
              <router-link to="/telematics" class="mobile-nav__sublink" @click="closeMobile">Telematics</router-link>
              <router-link to="/fleet-management" class="mobile-nav__sublink" @click="closeMobile">Fleet Management</router-link>
              <router-link to="/fuel-monitoring" class="mobile-nav__sublink" @click="closeMobile">Fuel Monitoring</router-link>
              <router-link to="/tracking-solutions" class="mobile-nav__sublink" @click="closeMobile">Tracking Solutions</router-link>
              <router-link to="/driver-behavior-monitoring" class="mobile-nav__sublink" @click="closeMobile">Driver Behavior</router-link>
              <router-link to="/smart-farming" class="mobile-nav__sublink" @click="closeMobile">Smart Farming</router-link>
              <router-link to="/iot-and-smart-homes" class="mobile-nav__sublink" @click="closeMobile">IoT & Smart Homes</router-link>
              <router-link to="/web-services" class="mobile-nav__sublink" @click="closeMobile">Web Services</router-link>
            </div>
          </div>

          <router-link to="/industries" class="mobile-nav__link" @click="closeMobile">Industries</router-link>
          <router-link to="/pricing" class="mobile-nav__link" @click="closeMobile">Pricing</router-link>
          <router-link to="/contact" class="mobile-nav__link" @click="closeMobile">Contact</router-link>
          <router-link to="/faq" class="mobile-nav__link" @click="closeMobile">FAQ</router-link>

          <router-link to="/contact" class="btn btn--primary mobile-nav__cta" @click="closeMobile">
            Book a Demo
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const mobileOpen = ref(false)
const isMobile = ref(false)
const activeDropdown = ref(null)
const mobileSection = ref(null)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const handleResize = () => {
  isMobile.value = window.innerWidth < 1024
  if (!isMobile.value) mobileOpen.value = false
}

const openDropdown = (name) => { activeDropdown.value = name }
const closeDropdown = () => { activeDropdown.value = null }
const toggleMobile = () => { mobileOpen.value = !mobileOpen.value }
const closeMobile = () => { mobileOpen.value = false; mobileSection.value = null }
const toggleMobileSection = (name) => {
  mobileSection.value = mobileSection.value === name ? null : name
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize)
  handleResize()
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-sticky);
  background: rgba(10, 22, 40, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid transparent;
  transition: all var(--transition-base);
}

.header--scrolled {
  background: rgba(10, 22, 40, 0.95);
  border-bottom-color: var(--color-border-dark);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  max-width: 1300px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
}

.logo__img {
  height: 38px;
  width: auto;
  object-fit: contain;
}

/* Desktop Nav */
.nav {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.nav__link {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: 0.5rem 1rem;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-dark-muted);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  cursor: pointer;
  white-space: nowrap;
}

.nav__link:hover,
.nav__link--active {
  color: var(--color-text-light);
  background: rgba(255, 255, 255, 0.06);
}

.nav__link--has-children {
  user-select: none;
}

.nav__link--has-children svg {
  transition: transform var(--transition-fast);
}

.nav__item--dropdown:hover .nav__link--has-children svg {
  transform: rotate(180deg);
}

/* Dropdown */
.nav__item--dropdown {
  position: relative;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: var(--space-6);
  background: var(--color-dark-card);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  display: flex;
  gap: var(--space-8);
  min-width: 420px;
  animation: fadeIn 0.2s ease;
}

.dropdown--small {
  min-width: 200px;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-4);
}

.dropdown__title {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-3);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border-dark);
}

.dropdown__link {
  display: block;
  padding: 0.4rem 0.75rem;
  font-size: var(--font-size-sm);
  color: var(--color-text-dark-muted);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.dropdown__link:hover {
  color: var(--color-text-light);
  background: rgba(255, 255, 255, 0.06);
  padding-left: 1rem;
}

/* Header Actions */
.header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.header__cta {
  font-size: var(--font-size-sm);
}

/* Hamburger */
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text-light);
  border-radius: 2px;
  transition: all var(--transition-base);
  transform-origin: center;
}

.hamburger--active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger--active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger--active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Nav */
.mobile-nav {
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-dark);
  overflow-y: auto;
  z-index: var(--z-overlay);
}

.mobile-nav__inner {
  display: flex;
  flex-direction: column;
  padding: var(--space-6) var(--space-6) var(--space-12);
}

.mobile-nav__link {
  display: block;
  padding: var(--space-4) var(--space-4);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-dark-muted);
  border-bottom: 1px solid var(--color-border-dark);
  transition: color var(--transition-fast);
}

.mobile-nav__link:hover {
  color: var(--color-text-light);
}

.mobile-nav__toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--space-4);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-dark-muted);
  border-bottom: 1px solid var(--color-border-dark);
}

.mobile-nav__toggle svg {
  transition: transform var(--transition-base);
}

.mobile-nav__toggle svg.rotated {
  transform: rotate(180deg);
}

.mobile-nav__sub {
  padding-left: var(--space-6);
  background: rgba(0, 0, 0, 0.2);
}

.mobile-nav__sublink {
  display: block;
  padding: var(--space-3) var(--space-4);
  font-size: var(--font-size-base);
  color: var(--color-text-dark-muted);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: color var(--transition-fast);
}

.mobile-nav__sublink:hover {
  color: var(--color-primary);
}

.mobile-nav__cta {
  margin-top: var(--space-8);
  text-align: center;
}

/* Slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
