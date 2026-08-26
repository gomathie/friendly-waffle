<template>
  <section class="phero" :class="[accent ? `accent-${accent}` : '', { 'phero--compact': compact }]">
    <div class="phero__bg" aria-hidden="true">
      <div v-if="bgImage" class="phero__img" :style="{ backgroundImage: `url(${bgImage})` }"></div>
      <div class="phero__veil"></div>
      <div class="phero__glow"></div>
      <div class="phero__grid"></div>
    </div>

    <div class="container phero__inner">
      <p v-if="eyebrow" class="eyebrow phero__eyebrow">{{ eyebrow }}</p>
      <h1 class="phero__title">{{ title }}</h1>
      <p v-if="subtitle" class="phero__sub">{{ subtitle }}</p>

      <ul v-if="tags.length" class="chip-row phero__tags">
        <li v-for="tag in tags" :key="tag" class="chip">{{ tag }}</li>
      </ul>

      <div v-if="hasActions" class="phero__actions">
        <slot name="actions" />
        <template v-if="!slots.actions">
          <a
            v-if="ctaText && ctaExternal"
            class="btn btn--primary btn--lg"
            :href="ctaLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ ctaText }}
            <ExternalLink :size="16" aria-hidden="true" />
            <span class="visually-hidden">(opens in a new tab)</span>
          </a>
          <router-link v-else-if="ctaText" class="btn btn--primary btn--lg" :to="ctaLink">{{ ctaText }}</router-link>
          <router-link v-if="secondaryText" class="btn btn--secondary btn--lg" :to="secondaryLink">
            {{ secondaryText }}
          </router-link>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, useSlots } from 'vue'
import { ExternalLink } from 'lucide-vue-next'

const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  eyebrow: { type: String, default: '' },
  tags: { type: Array, default: () => [] },
  ctaText: { type: String, default: '' },
  ctaLink: { type: String, default: '/contact' },
  ctaExternal: { type: Boolean, default: false },
  secondaryText: { type: String, default: '' },
  secondaryLink: { type: String, default: '/contact' },
  accent: { type: String, default: '' },
  compact: { type: Boolean, default: false },
  bgImage: { type: String, default: '' }
})

const slots = useSlots()
const hasActions = computed(() => Boolean(props.ctaText || props.secondaryText || slots.actions))
</script>

<style scoped>
.phero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 460px;
  padding: calc(76px + var(--space-16)) 0 var(--space-16);
  overflow: hidden;
  background: var(--gradient-hero);
}

.phero--compact {
  min-height: 380px;
  padding: calc(76px + var(--space-12)) 0 var(--space-12);
}

.phero__bg {
  position: absolute;
  inset: 0;
}

.phero__img {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.3;
}

.phero__veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(10, 22, 40, 0.9) 0%, rgba(10, 22, 40, 0.96) 100%);
}

.phero__glow {
  position: absolute;
  top: -20%;
  left: 8%;
  width: 560px;
  height: 460px;
  background: radial-gradient(ellipse, var(--accent-soft, rgba(37, 99, 235, 0.18)) 0%, transparent 70%);
  filter: brightness(1.8);
  pointer-events: none;
}

.phero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse at 30% 40%, black 10%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at 30% 40%, black 10%, transparent 70%);
}

/* Interior heroes are left-aligned: they introduce a page, they do not
   perform like the homepage banner. */
.phero__inner {
  position: relative;
  z-index: 1;
  max-width: 1280px;
}

.phero__eyebrow {
  color: var(--color-primary-on-dark);
  margin-bottom: var(--space-5);
  animation: fadeInUp 0.5s ease both;
}

.phero__title {
  font-size: clamp(2.1rem, 4.4vw, 3.4rem);
  font-weight: var(--font-weight-extrabold);
  letter-spacing: -0.03em;
  line-height: 1.08;
  color: var(--color-text-light);
  max-width: 18ch;
  margin-bottom: var(--space-5);
  animation: fadeInUp 0.5s ease 0.06s both;
}

.phero__sub {
  font-size: var(--font-size-lg);
  color: var(--color-text-dark-muted);
  line-height: var(--line-height-relaxed);
  max-width: 58ch;
  animation: fadeInUp 0.5s ease 0.12s both;
}

.phero__tags {
  margin-top: var(--space-8);
  animation: fadeInUp 0.5s ease 0.18s both;
}

.phero__tags .chip {
  color: var(--color-text-dark-muted);
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-border-dark);
}

.phero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-top: var(--space-10);
  animation: fadeInUp 0.5s ease 0.24s both;
}

@media (max-width: 640px) {
  .phero,
  .phero--compact {
    min-height: 0;
    padding: calc(76px + var(--space-10)) 0 var(--space-10);
  }

  .phero__title {
    max-width: 100%;
  }

  .phero__actions .btn {
    width: 100%;
  }
}
</style>
