<template>
  <div>
    <HeroSection
      eyebrow="Our Businesses"
      title="Four businesses. One technology group."
      subtitle="Specialized technology businesses designed to solve different challenges across the modern organization. Engage one of them, or the group."
      compact
    />

    <section class="section" aria-labelledby="portfolio-title">
      <div class="container">
        <h2 id="portfolio-title" class="visually-hidden">Business portfolio</h2>
        <div class="biz-grid stagger-children">
          <BusinessCard v-for="business in businesses" :key="business.id" :business="business" :tag-limit="6" />
        </div>
      </div>
    </section>

    <section class="section section--alt" aria-labelledby="structure-title">
      <div class="container">
        <div class="section-header reveal">
          <h2 id="structure-title">How the group fits together</h2>
          <p>
            OneGPS Africa, DekaERP and HiTrace Digital deliver. HiTrace Consulting sets direction
            and connects the parts — including systems the group did not build.
          </p>
        </div>
        <div class="reveal">
          <EcosystemDiagram />
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="choose-title">
      <div class="container">
        <div class="section-header reveal">
          <p class="eyebrow">Where to start</p>
          <h2 id="choose-title">Find the right business for your need</h2>
        </div>

        <ul class="chooser stagger-children">
          <li v-for="row in chooser" :key="row.need" :class="`accent-${row.accent}`" class="chooser__row">
            <p class="chooser__need">{{ row.need }}</p>
            <ArrowRight :size="18" class="chooser__arrow" aria-hidden="true" />
            <router-link :to="row.route" class="chooser__answer">{{ row.business }}</router-link>
          </li>
        </ul>
      </div>
    </section>

    <FinalCta />
  </div>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import BusinessCard from '../components/common/BusinessCard.vue'
import EcosystemDiagram from '../components/common/EcosystemDiagram.vue'
import FinalCta from '../components/common/FinalCta.vue'
import { businesses } from '../data/businesses.js'

const chooser = [
  { need: 'I need to see where my vehicles, drivers and assets are', business: 'OneGPS Africa', route: '/businesses/onegps-africa', accent: 'blue' },
  { need: 'I need one system for finance, stock, people and operations', business: 'DekaERP', route: '/businesses/dekaerp', accent: 'violet' },
  { need: 'I need a brand, a website or a digital campaign', business: 'HiTrace Digital', route: '/businesses/hitrace-digital', accent: 'amber' },
  { need: 'I need to decide what technology to build, buy or integrate', business: 'HiTrace Consulting', route: '/consulting', accent: 'teal' }
]
</script>

<style scoped>
.biz-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.chooser {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 900px;
  margin: 0 auto;
}

.chooser__row {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: var(--space-5);
  padding: var(--space-5) var(--space-6);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius-lg);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.chooser__row:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-card);
}

.chooser__need {
  font-size: var(--font-size-base);
  color: var(--color-text);
}

.chooser__arrow {
  color: var(--color-text-muted);
}

.chooser__answer {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  color: var(--accent);
  white-space: nowrap;
}

@media (max-width: 900px) {
  .biz-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .chooser__row {
    grid-template-columns: 1fr;
    gap: var(--space-2);
  }

  .chooser__arrow {
    display: none;
  }
}
</style>
