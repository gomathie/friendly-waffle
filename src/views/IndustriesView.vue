<template>
  <div>
    <HeroSection
      eyebrow="Industries We Serve"
      title="Technology shaped around the way your industry works."
      subtitle="Every organization has its own pressures, pace and priorities. We bring together practical systems, digital experiences and transformation support for the work that matters most."
      compact
    />

    <section class="section" aria-labelledby="industries-title">
      <div class="container">
        <div class="section-header reveal">
          <p class="eyebrow">Where we focus</p>
          <h2 id="industries-title">Built for connected operations</h2>
          <p>
            Start with the business problem, then bring in the right specialist from across the
            HiTrace Solutions ecosystem.
          </p>
        </div>

        <div class="industry-grid stagger-children">
          <article
            v-for="industry in industries"
            :key="industry.title"
            :class="`accent-${industry.accent}`"
            class="industry"
          >
            <div class="industry__head">
              <span class="industry__icon">
                <component :is="industry.icon" :size="24" aria-hidden="true" />
              </span>
              <h3>{{ industry.title }}</h3>
            </div>
            <p class="industry__description">{{ industry.description }}</p>
            <ul class="industry__services">
              <li v-for="service in industry.services" :key="service">
                <Check :size="15" aria-hidden="true" />
                {{ service }}
              </li>
            </ul>
            <router-link :to="industry.route" class="link-arrow industry__link">
              {{ industry.cta }}
              <ArrowRight :size="15" aria-hidden="true" />
            </router-link>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--alt" aria-labelledby="fit-title">
      <div class="container container--narrow text-center">
        <p class="eyebrow" style="justify-content: center;">The right starting point</p>
        <h2 id="fit-title">Your industry is the context. Your challenge is the brief.</h2>
        <p class="lead">
          Whether you need better visibility across a fleet, stronger control of stock and finance,
          a clearer digital presence or a roadmap for change, we can help identify the right next
          step.
        </p>
        <div class="industry__actions">
          <router-link to="/contact" class="btn btn--primary btn--lg">Talk to Us</router-link>
          <router-link to="/services" class="btn btn--outline btn--lg">Explore Our Services</router-link>
        </div>
      </div>
    </section>

    <FinalCta />
  </div>
</template>

<script setup>
import { ArrowRight, Check } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import FinalCta from '../components/common/FinalCta.vue'
import { industries } from '../data/businesses.js'
</script>

<style scoped>
.industry-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.industry {
  display: flex;
  flex-direction: column;
  padding: var(--space-8);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-top: 3px solid var(--accent);
  border-radius: var(--radius-lg);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.industry:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
}

.industry__head {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-5);
}

.industry__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  color: var(--accent);
  background: var(--accent-soft);
  border-radius: var(--radius-md);
}

.industry__head h3 {
  font-size: var(--font-size-xl);
}

.industry__description {
  color: var(--color-text-muted);
  margin-bottom: var(--space-6);
}

.industry__services {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3);
  padding-top: var(--space-5);
  border-top: 1px solid var(--color-border);
}

.industry__services li {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.industry__services svg {
  color: var(--color-success);
  flex-shrink: 0;
}

.industry__link {
  margin-top: var(--space-7);
}

.industry__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-4);
  margin-top: var(--space-8);
}

@media (max-width: 900px) {
  .industry-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .industry {
    padding: var(--space-6);
  }

  .industry__services {
    grid-template-columns: 1fr;
  }

  .industry__actions .btn {
    width: 100%;
  }
}
</style>
