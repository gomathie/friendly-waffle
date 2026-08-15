<template>
  <div class="pricing-card hover-lift" :class="{ 'pricing-card--featured': featured }">
    <div class="pricing-card__badge" v-if="featured">Most Popular</div>
    <div class="pricing-card__header">
      <h3 class="pricing-card__tier">{{ tier }}</h3>
      <p class="pricing-card__name">{{ name }}</p>
    </div>
    <ul class="pricing-card__features">
      <li v-for="(feature, i) in features" :key="i">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="pricing-card__check"><path d="M20 6 9 17l-5-5"/></svg>
        {{ feature }}
      </li>
    </ul>
    <router-link to="/contact" class="btn pricing-card__btn" :class="featured ? 'btn--primary' : 'btn--outline'">
      Purchase Now
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  tier: { type: String, required: true },
  name: { type: String, required: true },
  features: { type: Array, required: true },
  featured: { type: Boolean, default: false }
})
</script>

<style scoped>
.pricing-card {
  position: relative;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-10) var(--space-8);
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: all var(--transition-base);
}

.pricing-card--featured {
  background: var(--color-dark);
  border-color: var(--color-primary);
  color: var(--color-text-light);
  transform: scale(1.05);
  box-shadow: 0 20px 60px rgba(0, 102, 255, 0.2);
}

.pricing-card__badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.35rem 1.25rem;
  background: var(--gradient-primary);
  color: var(--color-text-light);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: var(--radius-full);
  white-space: nowrap;
}

.pricing-card__header {
  margin-bottom: var(--space-8);
  padding-bottom: var(--space-6);
  border-bottom: 1px solid var(--color-border);
}

.pricing-card--featured .pricing-card__header {
  border-bottom-color: var(--color-border-dark);
}

.pricing-card__tier {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-1);
}

.pricing-card__name {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
}

.pricing-card__features {
  flex: 1;
  margin-bottom: var(--space-8);
  text-align: left;
}

.pricing-card__features li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  font-size: var(--font-size-sm);
  border-bottom: 1px solid rgba(0,0,0,0.04);
}

.pricing-card--featured .pricing-card__features li {
  border-bottom-color: rgba(255,255,255,0.06);
  color: var(--color-text-dark-muted);
}

.pricing-card__check {
  color: var(--color-secondary);
  flex-shrink: 0;
  margin-top: 1px;
}

.pricing-card__btn {
  width: 100%;
}

@media (max-width: 768px) {
  .pricing-card--featured {
    transform: scale(1);
  }
}
</style>
