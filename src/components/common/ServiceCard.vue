<template>
  <div class="service-card hover-lift" :class="{ 'service-card--dark': dark }">
    <div class="service-card__icon">
      <component :is="icon" :size="28" />
    </div>
    <h3 class="service-card__title">{{ title }}</h3>
    <p class="service-card__desc">{{ description }}</p>
    <router-link v-if="link" :to="link" class="service-card__link">
      Learn More
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: [Object, Function], required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, default: '' },
  dark: { type: Boolean, default: false }
})
</script>

<style scoped>
.service-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  transition: all var(--transition-base);
}

.service-card--dark {
  background: var(--color-dark-card);
  border-color: var(--color-border-dark);
}

.service-card:hover {
  border-color: var(--color-primary);
}

.service-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  background: var(--color-primary-light);
  color: var(--color-primary);
  margin-bottom: var(--space-5);
  transition: all var(--transition-base);
}

.service-card:hover .service-card__icon {
  background: var(--gradient-primary);
  color: var(--color-text-light);
  transform: scale(1.05);
}

.service-card__title {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-3);
}

.service-card--dark .service-card__title {
  color: var(--color-text-light);
}

.service-card__desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
  flex: 1;
}

.service-card--dark .service-card__desc {
  color: var(--color-text-dark-muted);
}

.service-card__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-5);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  transition: all var(--transition-fast);
}

.service-card__link:hover {
  gap: var(--space-3);
}
</style>
