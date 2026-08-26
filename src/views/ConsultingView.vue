<template>
  <div class="accent-teal">
    <HeroSection
      eyebrow="HiTrace Consulting"
      title="Technology consulting and digital transformation."
      :subtitle="consulting.summary"
      accent="teal"
      cta-text="Talk to Our Consultants"
      cta-link="/contact"
      secondary-text="See group capabilities"
      secondary-link="/capabilities"
      bg-image="/images/ChatGPT-Image-May-16-2025-01_31_08-AM-1024x683.jpg"
    />

    <!-- The transformation path -->
    <section class="section" aria-labelledby="transform-title">
      <div class="container">
        <div class="section-header section-header--left reveal">
          <p class="eyebrow">Digital Transformation</p>
          <h2 id="transform-title">Need to transform your business?</h2>
          <p>
            From technology strategy to implementation, HiTrace Consulting helps organizations
            identify the right technologies, integrate systems and build a roadmap for digital
            transformation.
          </p>
        </div>

        <div class="reveal consulting__flow">
          <TransformationFlow :steps="transformationFlow" />
        </div>
      </div>
    </section>

    <!-- Full service list -->
    <section class="section section--alt" aria-labelledby="services-title">
      <div class="container">
        <div class="section-header reveal">
          <h2 id="services-title">What we advise on</h2>
          <p>{{ consulting.longSummary }}</p>
        </div>

        <div class="svc-grid stagger-children">
          <article v-for="item in consulting.capabilities" :key="item.title" class="svc">
            <span class="svc__icon">
              <component :is="item.icon" :size="20" aria-hidden="true" />
            </span>
            <h3 class="svc__title">{{ item.title }}</h3>
            <p class="svc__desc">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Strategic vs creative: the distinction a first-time visitor needs -->
    <section class="section section--dark" aria-labelledby="distinction-title">
      <div class="container">
        <div class="section-header reveal">
          <h2 id="distinction-title">Consulting or Digital?</h2>
          <p>Two different questions, two different teams.</p>
        </div>

        <div class="split stagger-children">
          <article class="split__card accent-teal">
            <p class="split__label">HiTrace Consulting</p>
            <h3 class="split__q">“What technology should we be running, and in what order?”</h3>
            <ul class="split__list">
              <li v-for="item in consultingSignals" :key="item">{{ item }}</li>
            </ul>
            <router-link to="/contact" class="link-arrow split__link">
              Talk to our consultants
              <ArrowRight :size="15" aria-hidden="true" />
            </router-link>
          </article>

          <article class="split__card accent-amber">
            <p class="split__label">HiTrace Digital</p>
            <h3 class="split__q">“How should we look, sound and behave online?”</h3>
            <ul class="split__list">
              <li v-for="item in digitalSignals" :key="item">{{ item }}</li>
            </ul>
            <router-link to="/businesses/hitrace-digital" class="link-arrow split__link">
              Explore HiTrace Digital
              <ArrowRight :size="15" aria-hidden="true" />
            </router-link>
          </article>
        </div>
      </div>
    </section>

    <!-- Working across the ecosystem -->
    <section class="section" aria-labelledby="ecosystem-title">
      <div class="container">
        <div class="section-header section-header--left reveal">
          <p class="eyebrow">Across the ecosystem</p>
          <h2 id="ecosystem-title">Advice first — then whoever is right to build it.</h2>
          <p>
            HiTrace Consulting can draw on the group's telematics, enterprise software and
            creative teams, and works just as readily with the systems and vendors you already
            have.
          </p>
        </div>

        <ul class="eco-links stagger-children">
          <li v-for="sibling in siblings" :key="sibling.id" :class="`accent-${sibling.accent}`">
            <component :is="sibling.icon" :size="22" aria-hidden="true" />
            <div>
              <strong>{{ sibling.name }}</strong>
              <span>{{ sibling.discipline }}</span>
            </div>
            <router-link :to="sibling.route" class="link-arrow">
              View
              <ArrowRight :size="15" aria-hidden="true" />
            </router-link>
          </li>
        </ul>
      </div>
    </section>

    <FinalCta
      title="Start with a conversation."
      description="Tell us what the business needs to do differently. We will tell you honestly what technology can and cannot change about it."
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import TransformationFlow from '../components/common/TransformationFlow.vue'
import FinalCta from '../components/common/FinalCta.vue'
import { businesses, businessById, transformationFlow } from '../data/businesses.js'

const consulting = businessById('hitrace-consulting')
const siblings = computed(() => businesses.filter((b) => b.id !== 'hitrace-consulting'))

const consultingSignals = [
  'Systems that do not talk to each other',
  'A modernisation programme with no roadmap',
  'IoT or data projects that need a business case',
  'Architecture, cloud and integration decisions'
]

const digitalSignals = [
  'A brand that no longer fits the business',
  'A website or web application to design and build',
  'Campaign, content and social media creative',
  'Search and online growth'
]
</script>

<style scoped>
.consulting__flow {
  margin-top: var(--space-12);
}

.svc-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
}

.svc {
  padding: var(--space-6);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: transform var(--transition-base), border-color var(--transition-base);
}

.svc:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
}

.svc__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: var(--radius-md);
  background: var(--accent-soft);
  color: var(--accent);
  margin-bottom: var(--space-4);
}

.svc__title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-2);
}

.svc__desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
}

/* Consulting vs Digital */
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
}

.split__card {
  display: flex;
  flex-direction: column;
  padding: var(--space-8);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--color-border-dark);
  border-top: 3px solid var(--accent);
  border-radius: var(--radius-xl);
}

.split__label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: var(--space-4);
}

.split__q {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-light);
  line-height: var(--line-height-tight);
  margin-bottom: var(--space-6);
}

.split__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-8);
}

.split__list li {
  position: relative;
  padding-left: var(--space-5);
  font-size: var(--font-size-sm);
  color: var(--color-text-dark-muted);
}

.split__list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 9px;
  width: 6px;
  height: 6px;
  border-radius: var(--radius-full);
  background: var(--accent);
}

.split__link {
  margin-top: auto;
}

/* Ecosystem links */
.eco-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
  margin-top: var(--space-10);
}

.eco-links li {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-5) var(--space-6);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius-lg);
}

.eco-links svg:first-child {
  color: var(--accent);
  flex-shrink: 0;
}

.eco-links div {
  flex: 1;
  min-width: 0;
}

.eco-links strong {
  display: block;
  font-size: var(--font-size-base);
}

.eco-links span {
  display: block;
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

@media (max-width: 1024px) {
  .svc-grid,
  .eco-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 760px) {
  .split {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .svc-grid,
  .eco-links {
    grid-template-columns: 1fr;
  }

  .split__card {
    padding: var(--space-6);
  }
}
</style>
