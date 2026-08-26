<template>
  <div>
    <HeroSection
      eyebrow="About HiTrace Solutions"
      title="A technology company for an increasingly connected world."
      subtitle="HiTrace Solutions is a technology company focused on building and delivering solutions that help organizations operate smarter in an increasingly connected world."
      bg-image="/images/16406297_rm373batch2-06-scaled.webp"
      compact
    />

    <section class="section" aria-labelledby="who-title">
      <div class="container">
        <div class="who">
          <div class="reveal-left">
            <p class="eyebrow">Who we are</p>
            <h2 id="who-title" class="who__title">A group, not a single product.</h2>
            <p class="lead who__p">
              Our ecosystem brings together specialized businesses across telematics, enterprise
              software, digital experiences and technology consulting. Each has its own focus,
              its own team and its own customers.
            </p>
            <p class="lead who__p">
              The group's roots are in telematics — more than 15 years of vehicle tracking and
              fleet management work in Ghana. That work now belongs to
              <router-link to="/businesses/onegps-africa" class="who__inline">OneGPS Africa</router-link>,
              which frees HiTrace Solutions to do what a technology group should: build,
              advise and connect across everything an organization runs.
            </p>
            <router-link to="/businesses" class="btn btn--outline">Explore our businesses</router-link>
          </div>

          <ul class="facts reveal-right">
            <li>
              <MapPin :size="18" aria-hidden="true" />
              <div>
                <strong>Based in Ghana</strong>
                <span>{{ contact.address.full }}</span>
              </div>
            </li>
            <li>
              <Building2 :size="18" aria-hidden="true" />
              <div>
                <strong>Four businesses</strong>
                <span>Telematics, enterprise software, digital experiences and consulting</span>
              </div>
            </li>
            <li>
              <Network :size="18" aria-hidden="true" />
              <div>
                <strong>One ecosystem</strong>
                <span>Engage a single business, or the group on a larger programme</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section section--alt" aria-labelledby="structure-title">
      <div class="container">
        <div class="section-header reveal">
          <h2 id="structure-title">How HiTrace Solutions is structured</h2>
          <p>
            HiTrace Solutions is the parent technology group. Below it sit the businesses that do
            the work.
          </p>
        </div>
        <div class="reveal">
          <EcosystemDiagram />
        </div>
      </div>
    </section>

    <section class="section section--dark" aria-labelledby="pillars-title">
      <div class="container">
        <div class="section-header reveal">
          <p class="eyebrow">What we stand for</p>
          <h2 id="pillars-title">Building technology for the way business works today.</h2>
          <p>
            HiTrace Solutions brings together technology, digital expertise and business
            transformation to help organizations adapt, operate smarter and create new
            opportunities.
          </p>
        </div>

        <div class="grid grid--4 stagger-children">
          <article v-for="pillar in pillars" :key="pillar.title" class="pillar">
            <span class="pillar__icon">
              <component :is="pillar.icon" :size="22" aria-hidden="true" />
            </span>
            <h3 class="pillar__title">{{ pillar.title }}</h3>
            <p class="pillar__desc">{{ pillar.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <FinalCta />
  </div>
</template>

<script setup>
import { MapPin, Building2, Network } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import EcosystemDiagram from '../components/common/EcosystemDiagram.vue'
import FinalCta from '../components/common/FinalCta.vue'
import { pillars } from '../data/businesses.js'
import { contact } from '../data/site.js'
</script>

<style scoped>
.who {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: var(--space-16);
  align-items: start;
}

.who__title {
  font-size: var(--font-size-h2);
  letter-spacing: -0.02em;
  margin: var(--space-4) 0 var(--space-5);
}

.who__p {
  margin-bottom: var(--space-5);
}

.who__inline {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.facts {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.facts li {
  display: flex;
  gap: var(--space-4);
  padding: var(--space-5) var(--space-6);
  background: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.facts svg {
  color: var(--color-primary);
  flex-shrink: 0;
  margin-top: 3px;
}

.facts strong {
  display: block;
  font-size: var(--font-size-base);
  margin-bottom: 2px;
}

.facts span {
  display: block;
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
}

.pillar {
  padding: var(--space-6);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-lg);
  transition: transform var(--transition-base), border-color var(--transition-base);
}

.pillar:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary);
}

.pillar__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background: rgba(37, 99, 235, 0.16);
  color: #7FB2FF;
  margin-bottom: var(--space-4);
}

.pillar__title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-light);
  margin-bottom: var(--space-2);
}

.pillar__desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-dark-muted);
  line-height: var(--line-height-relaxed);
}

@media (max-width: 1024px) {
  .who {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }
}
</style>
