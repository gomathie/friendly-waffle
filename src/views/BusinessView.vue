<template>
  <div v-if="business" :class="`accent-${business.accent}`">
    <HeroSection
      :eyebrow="business.discipline"
      :title="business.name"
      :subtitle="business.summary"
      :tags="business.tags"
      :accent="business.accent"
      :cta-text="external ? business.ctaLabel : ''"
      :cta-link="external ? business.externalUrl : '/contact'"
      :cta-external="external"
      secondary-text="Talk to Us"
      secondary-link="/contact"
      :bg-image="heroImage"
    />

    <!-- Positioning: what this business is, and where it sits in the group -->
    <section class="section" aria-labelledby="overview-title">
      <div class="container">
        <div class="overview">
          <div class="reveal-left">
            <p class="eyebrow">{{ business.relationship }}</p>
            <h2 id="overview-title" class="overview__title">{{ headline }}</h2>
            <p class="lead overview__lead">{{ business.longSummary }}</p>

            <div v-if="external" class="overview__actions">
              <a class="btn btn--accent" :href="business.externalUrl" target="_blank" rel="noopener noreferrer">
                {{ business.ctaLabel }}
                <ExternalLink :size="16" aria-hidden="true" />
                <span class="visually-hidden">(opens in a new tab)</span>
              </a>
              <span class="overview__url">{{ prettyUrl }}</span>
            </div>
          </div>

          <aside class="ecoside reveal-right" aria-label="Group context">
            <h3 class="ecoside__title">In the HiTrace Solutions ecosystem</h3>
            <p class="ecoside__body">
              {{ business.name }} is an independent business within the group. It can be engaged
              directly, or alongside the other HiTrace businesses on a larger programme.
            </p>
            <ul class="ecoside__list">
              <li v-for="sibling in siblings" :key="sibling.id" :class="`accent-${sibling.accent}`">
                <router-link :to="sibling.route" class="ecoside__link">
                  <component :is="sibling.icon" :size="18" aria-hidden="true" />
                  <span>
                    <strong>{{ sibling.name }}</strong>
                    <em>{{ sibling.discipline }}</em>
                  </span>
                </router-link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>

    <!-- What the business does -->
    <section class="section section--alt" aria-labelledby="capabilities-title">
      <div class="container">
        <div class="section-header reveal">
          <h2 id="capabilities-title">What {{ business.name }} does</h2>
        </div>
        <div class="cap-grid stagger-children">
          <article v-for="item in business.capabilities" :key="item.title" class="capcard">
            <span class="capcard__icon">
              <component :is="item.icon" :size="20" aria-hidden="true" />
            </span>
            <h3 class="capcard__title">{{ item.title }}</h3>
            <p class="capcard__desc">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Grouped services (HiTrace Digital) -->
    <section v-if="business.serviceGroups" class="section" aria-labelledby="services-title">
      <div class="container">
        <div class="section-header reveal">
          <p class="eyebrow">Services</p>
          <h2 id="services-title">Four ways we work</h2>
        </div>
        <div class="grid grid--4 stagger-children">
          <article v-for="group in business.serviceGroups" :key="group.title" class="svc">
            <span class="capcard__icon">
              <component :is="group.icon" :size="20" aria-hidden="true" />
            </span>
            <h3 class="svc__title">{{ group.title }}</h3>
            <ul class="svc__items">
              <li v-for="item in group.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Leaving-the-site prompt for the independent businesses -->
    <section v-if="external" class="section" aria-labelledby="visit-title">
      <div class="container">
        <div class="visit reveal">
          <div>
            <h2 id="visit-title" class="visit__title">{{ business.name }} has its own home.</h2>
            <p class="visit__desc">
              Product detail, pricing and support for {{ business.name }} live on its own site.
            </p>
          </div>
          <a class="btn btn--accent btn--lg" :href="business.externalUrl" target="_blank" rel="noopener noreferrer">
            {{ business.ctaLabel }}
            <ExternalLink :size="16" aria-hidden="true" />
            <span class="visually-hidden">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>

    <FinalCta />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ExternalLink } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import FinalCta from '../components/common/FinalCta.vue'
import { businesses, businessById, isExternal } from '../data/businesses.js'

const route = useRoute()
const business = computed(() => businessById(route.params.id))
const external = computed(() => Boolean(business.value && isExternal(business.value)))

const siblings = computed(() =>
  businesses.filter((b) => b.id !== route.params.id)
)

const headlines = {
  'onegps-africa': 'The telematics business of the group.',
  dekaerp: 'The enterprise software business of the group.',
  'hitrace-digital': 'The creative and digital experience business of the group.',
  'hitrace-consulting': 'The transformation arm of the group.'
}

const heroImages = {
  'onegps-africa': '/images/16406297_rm373batch2-06-scaled.webp',
  dekaerp: '/images/ChatGPT-Image-May-16-2025-01_31_08-AM-1024x683.jpg',
  'hitrace-digital': '/images/be-change-inspired-active-thunder-website.webp',
  'hitrace-consulting': '/images/16406297_rm373batch2-06-scaled.webp'
}

const headline = computed(() => headlines[route.params.id] || '')
const heroImage = computed(() => heroImages[route.params.id] || '')
const prettyUrl = computed(() =>
  business.value?.externalUrl ? business.value.externalUrl.replace(/^https?:\/\//, '') : ''
)
</script>

<style scoped>
.overview {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: var(--space-16);
  align-items: start;
}

.overview__title {
  font-size: var(--font-size-h2);
  letter-spacing: -0.02em;
  margin: var(--space-4) 0 var(--space-5);
}

.overview__lead {
  margin-bottom: var(--space-8);
}

.overview__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4);
}

.overview__url {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-muted);
}

/* Sibling navigation keeps the group visible from every business page */
.ecoside {
  padding: var(--space-8);
  background: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
}

.ecoside__title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-3);
}

.ecoside__body {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-6);
}

.ecoside__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.ecoside__link {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: border-color var(--transition-fast), transform var(--transition-fast);
}

.ecoside__link:hover {
  border-color: var(--accent);
  transform: translateX(3px);
}

.ecoside__link svg {
  color: var(--accent);
  flex-shrink: 0;
}

.ecoside__link strong {
  display: block;
  font-size: var(--font-size-sm);
  color: var(--color-text);
}

.ecoside__link em {
  display: block;
  font-size: var(--font-size-xs);
  font-style: normal;
  color: var(--color-text-muted);
}

/* Capability cards */
.cap-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-5);
}

.capcard,
.svc {
  padding: var(--space-6);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: transform var(--transition-base), border-color var(--transition-base);
}

.capcard:hover,
.svc:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
}

.capcard__icon {
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

.capcard__title,
.svc__title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-2);
}

.capcard__desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
}

.svc__items {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-top: var(--space-4);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}

.svc__items li {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

/* Visit banner */
.visit {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  padding: var(--space-10);
  background: var(--accent-soft);
  border: 1px solid var(--accent);
  border-radius: var(--radius-xl);
}

.visit__title {
  font-size: var(--font-size-2xl);
  letter-spacing: -0.02em;
  margin-bottom: var(--space-2);
}

.visit__desc {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  max-width: 52ch;
}

@media (max-width: 1024px) {
  .overview {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }

  .cap-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .cap-grid {
    grid-template-columns: 1fr;
  }

  .ecoside,
  .visit {
    padding: var(--space-6);
  }

  .visit .btn {
    width: 100%;
  }
}
</style>
