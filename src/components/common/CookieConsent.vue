<template>
  <!-- Only rendered when analytics is actually configured and the provider
       stores identifiers. With no provider, or a cookieless one, there is
       nothing to consent to and no banner is shown. -->
  <transition name="consent">
    <aside
      v-if="visible"
      class="consent"
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      aria-describedby="consent-body"
    >
      <div class="consent__inner">
        <div class="consent__text">
          <h2 id="consent-title" class="consent__title">Cookies on this site</h2>
          <p id="consent-body" class="consent__body">
            We would like to set analytics cookies to understand how visitors use this site.
            They are optional — decline and nothing beyond what the site needs to work is stored.
            See our <router-link to="/privacy">Privacy Policy</router-link>.
          </p>
        </div>

        <div class="consent__actions">
          <button ref="declineButton" type="button" class="btn btn--quiet btn--sm" @click="decide('declined')">
            Decline
          </button>
          <button type="button" class="btn btn--primary btn--sm" @click="decide('accepted')">
            Accept
          </button>
        </div>
      </div>
    </aside>
  </transition>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { readConsent, setConsent } from '../../lib/consent.js'
import { loadAnalytics, provider, providerUsesCookies } from '../../lib/analytics.js'

const visible = ref(false)
const declineButton = ref(null)

const decide = (choice) => {
  setConsent(choice)
  visible.value = false
  if (choice === 'accepted') loadAnalytics()
}

onMounted(async () => {
  if (!provider) return

  const existing = readConsent()

  // A cookieless provider needs no permission, so it starts immediately and
  // the banner never appears.
  if (!providerUsesCookies) {
    loadAnalytics()
    return
  }

  if (existing === 'accepted') {
    loadAnalytics()
    return
  }
  if (existing === 'declined') return

  visible.value = true
  await nextTick()
  declineButton.value?.focus()
})
</script>

<style scoped>
.consent {
  position: fixed;
  left: var(--space-4);
  right: var(--space-4);
  bottom: var(--space-4);
  z-index: var(--z-modal);
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-5) var(--space-6);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
}

.consent__inner {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.consent__title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-1);
}

.consent__body {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
}

.consent__body a {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.consent__actions {
  display: flex;
  gap: var(--space-3);
  flex-shrink: 0;
}

.consent-enter-active,
.consent-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.consent-enter-from,
.consent-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

@media (prefers-reduced-motion: reduce) {
  .consent-enter-active,
  .consent-leave-active {
    transition: none;
  }
}

@media (max-width: 640px) {
  .consent {
    /* Clear of the floating WhatsApp button */
    bottom: 96px;
    padding: var(--space-5);
  }

  .consent__inner {
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-4);
  }

  .consent__actions .btn {
    flex: 1;
    min-height: 44px;
  }
}
</style>
