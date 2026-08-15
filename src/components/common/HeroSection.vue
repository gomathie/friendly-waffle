<template>
  <section class="hero" :class="[`hero--${variant}`, { 'hero--compact': compact }]">
    <div class="hero__bg">
      <div class="hero__glow"></div>
      <div class="hero__grid-pattern"></div>
    </div>
    <div class="hero__content container">
      <div class="hero__text">
        <span v-if="badge" class="badge hero__badge" style="animation: fadeInUp 0.6s ease both;">{{ badge }}</span>
        <h1 class="hero__title" style="animation: fadeInUp 0.6s ease 0.1s both;">{{ title }}</h1>
        <p class="hero__subtitle" style="animation: fadeInUp 0.6s ease 0.2s both;">{{ subtitle }}</p>
        <div class="hero__actions" style="animation: fadeInUp 0.6s ease 0.3s both;">
          <slot name="actions">
            <router-link v-if="ctaText" :to="ctaLink" class="btn btn--primary btn--lg">{{ ctaText }}</router-link>
            <router-link v-if="secondaryText" :to="secondaryLink" class="btn btn--secondary btn--lg">{{ secondaryText }}</router-link>
          </slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  badge: { type: String, default: '' },
  ctaText: { type: String, default: '' },
  ctaLink: { type: String, default: '/contact' },
  secondaryText: { type: String, default: '' },
  secondaryLink: { type: String, default: '/' },
  variant: { type: String, default: 'default' },
  compact: { type: Boolean, default: false }
})
</script>

<style scoped>
.hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 520px;
  padding: calc(72px + var(--space-16)) 0 var(--space-16);
  overflow: hidden;
}

.hero--compact {
  min-height: 380px;
  padding: calc(72px + var(--space-10)) 0 var(--space-10);
}

.hero__bg {
  position: absolute;
  inset: 0;
  background: var(--gradient-hero);
  z-index: 0;
}

.hero__glow {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(0, 102, 255, 0.12) 0%, transparent 70%);
  pointer-events: none;
}

.hero__grid-pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
}

.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero__badge {
  margin-bottom: var(--space-4);
}

.hero__title {
  font-size: var(--font-size-hero);
  font-weight: var(--font-weight-extrabold);
  color: var(--color-text-light);
  margin-bottom: var(--space-6);
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.hero__subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-dark-muted);
  max-width: 640px;
  margin: 0 auto var(--space-10);
  line-height: var(--line-height-relaxed);
}

.hero__actions {
  display: flex;
  justify-content: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .hero {
    min-height: 420px;
  }
  .hero--compact {
    min-height: 320px;
  }
  .hero__actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
