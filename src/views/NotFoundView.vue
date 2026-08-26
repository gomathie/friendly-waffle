<template>
  <div>
    <HeroSection
      eyebrow="404"
      title="That page has moved on."
      subtitle="The page you were looking for is not here. It may have moved to one of the businesses in the HiTrace Solutions ecosystem."
      cta-text="Back to home"
      cta-link="/"
      secondary-text="Explore Our Businesses"
      secondary-link="/businesses"
      compact
    />

    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>Where you might be headed</h2>
        </div>
        <ul class="nf-grid">
          <li v-for="business in businesses" :key="business.id" :class="`accent-${business.accent}`">
            <router-link :to="business.route">
              <component :is="business.icon" :size="20" aria-hidden="true" />
              <span>
                <strong>{{ business.name }}</strong>
                <em>{{ business.discipline }}</em>
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroSection from '../components/common/HeroSection.vue'
import { businesses } from '../data/businesses.js'
</script>

<style scoped>
.nf-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
  max-width: 800px;
  margin: 0 auto;
}

.nf-grid a {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-5) var(--space-6);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius-lg);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.nf-grid a:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-card);
}

.nf-grid svg {
  color: var(--accent);
  flex-shrink: 0;
}

.nf-grid strong {
  display: block;
  font-size: var(--font-size-base);
}

.nf-grid em {
  display: block;
  font-size: var(--font-size-xs);
  font-style: normal;
  color: var(--color-text-muted);
}

@media (max-width: 640px) {
  .nf-grid {
    grid-template-columns: 1fr;
  }
}
</style>
