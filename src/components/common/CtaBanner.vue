<template>
  <section class="cta-banner" :class="{ 'cta-banner--light': light }">
    <div class="container">
      <div class="cta-banner__inner">
        <div class="cta-banner__glow"></div>
        <div class="cta-banner__content">
          <h2 class="cta-banner__title">{{ title }}</h2>
          <p class="cta-banner__desc" v-if="description">{{ description }}</p>
          <div class="cta-banner__actions">
            <router-link :to="link" class="btn btn--primary btn--lg">{{ buttonText }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  buttonText: { type: String, default: 'Book a Demo' },
  link: { type: String, default: '/contact' },
  light: { type: Boolean, default: false }
})
</script>

<style scoped>
.cta-banner {
  padding: var(--space-20) 0;
}

.cta-banner__inner {
  position: relative;
  background: var(--gradient-dark);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-xl);
  padding: var(--space-16) var(--space-8);
  text-align: center;
  overflow: hidden;
}

.cta-banner--light .cta-banner__inner {
  background: var(--gradient-primary);
  border-color: transparent;
}

.cta-banner__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 300px;
  background: radial-gradient(ellipse, rgba(0, 102, 255, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.cta-banner__content {
  position: relative;
  z-index: 1;
}

.cta-banner__title {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-extrabold);
  color: var(--color-text-light);
  margin-bottom: var(--space-4);
}

.cta-banner__desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-dark-muted);
  max-width: 540px;
  margin: 0 auto var(--space-8);
}

.cta-banner--light .cta-banner__desc {
  color: rgba(255, 255, 255, 0.85);
}

.cta-banner__actions {
  display: flex;
  justify-content: center;
}

.cta-banner--light .btn--primary {
  background: white;
  color: var(--color-primary);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
</style>
