<template>
  <div class="feature-card" :class="{ 'feature-card--dark': dark }">
    <div class="feature-card__number" v-if="number">{{ String(number).padStart(2, '0') }}</div>
    <div class="feature-card__icon" v-if="icon">
      <component :is="icon" :size="24" />
    </div>
    <h3 class="feature-card__title">{{ title }}</h3>
    <p class="feature-card__desc">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: [Object, Function], default: null },
  title: { type: String, required: true },
  description: { type: String, required: true },
  number: { type: Number, default: null },
  dark: { type: Boolean, default: false }
})
</script>

<style scoped>
.feature-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition: all var(--transition-base);
}

.feature-card--dark {
  background: var(--color-dark-card);
  border-color: var(--color-border-dark);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
  border-color: var(--color-primary);
}

.feature-card__number {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-extrabold);
  color: var(--color-primary);
  opacity: 0.3;
  margin-bottom: var(--space-3);
  line-height: 1;
}

.feature-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: var(--color-primary-light);
  color: var(--color-primary);
  margin-bottom: var(--space-4);
}

.feature-card__title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-2);
}

.feature-card--dark .feature-card__title {
  color: var(--color-text-light);
}

.feature-card__desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
}

.feature-card--dark .feature-card__desc {
  color: var(--color-text-dark-muted);
}
</style>
