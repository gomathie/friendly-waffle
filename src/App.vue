<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <AppHeader />
  <main id="main" ref="main" tabindex="-1">
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <AppFooter />
  <WhatsAppFloat />
  <CookieConsent />
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import WhatsAppFloat from './components/common/WhatsAppFloat.vue'
import CookieConsent from './components/common/CookieConsent.vue'

const route = useRoute()
const main = ref(null)

// Moving focus to the main landmark on navigation means keyboard and screen
// reader users start at the new page rather than back in the header.
watch(
  () => route.fullPath,
  () => {
    requestAnimationFrame(() => main.value?.focus({ preventScroll: true }))
  }
)
</script>

<style>
#main:focus {
  outline: none;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.22s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .page-enter-active,
  .page-leave-active {
    transition: none;
  }
}
</style>
