<template>
  <div class="step-card" :class="{ 'step-card--dark': dark }">
    <div class="step-card__number">{{ String(number).padStart(2, '0') }}</div>
    <div class="step-card__line" v-if="!isLast"></div>
    <h3 class="step-card__title">{{ title }}</h3>
    <p class="step-card__desc">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  number: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  dark: { type: Boolean, default: false },
  isLast: { type: Boolean, default: false }
})
</script>

<style scoped>
.step-card {
  position: relative;
  text-align: center;
  padding: var(--space-6);
}

.step-card__number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: var(--color-text-light);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-5);
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 15px rgba(0, 102, 255, 0.3);
}

.step-card__line {
  display: none;
}

.step-card__title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-2);
}

.step-card--dark .step-card__title {
  color: var(--color-text-light);
}

.step-card__desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
}

.step-card--dark .step-card__desc {
  color: var(--color-text-dark-muted);
}

@media (min-width: 768px) {
  .step-card__line {
    display: block;
    position: absolute;
    top: 34px;
    left: calc(50% + 36px);
    width: calc(100% - 72px);
    height: 2px;
    background: linear-gradient(90deg, var(--color-primary), rgba(0,102,255,0.2));
  }
}
</style>
