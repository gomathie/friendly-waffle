<template>
  <div>
    <HeroSection
      eyebrow="What We Do"
      title="Capabilities across the group."
      subtitle="Technology, digital, transformation and creative. Four disciplines that combine on most engagements — and stand alone when that is all you need."
      compact
    />

    <section class="section" aria-labelledby="groups-title">
      <div class="container">
        <h2 id="groups-title" class="visually-hidden">Capability groups</h2>
        <div class="capgrid stagger-children">
          <article v-for="group in capabilityGroups" :key="group.title" class="capgroup">
            <div class="capgroup__head">
              <span class="capgroup__icon">
                <component :is="group.icon" :size="24" aria-hidden="true" />
              </span>
              <div>
                <h3 class="capgroup__title">{{ group.title }}</h3>
                <p class="capgroup__desc">{{ group.description }}</p>
              </div>
            </div>
            <ul class="capgroup__items">
              <li v-for="item in group.items" :key="item">
                <Check :size="15" aria-hidden="true" />
                {{ item }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Which business delivers which capability -->
    <section class="section section--alt" aria-labelledby="delivery-title">
      <div class="container">
        <div class="section-header reveal">
          <p class="eyebrow">Who delivers</p>
          <h2 id="delivery-title">Every capability has an owner</h2>
          <p>Capabilities are not a menu of promises — each one sits with a specific business.</p>
        </div>

        <div class="owners stagger-children">
          <article v-for="business in businesses" :key="business.id" :class="`accent-${business.accent}`" class="owner">
            <header class="owner__head">
              <component :is="business.icon" :size="20" aria-hidden="true" />
              <div>
                <h3 class="owner__name">{{ business.name }}</h3>
                <p class="owner__role">{{ business.discipline }}</p>
              </div>
            </header>
            <ul class="chip-row owner__tags">
              <li v-for="tag in business.tags" :key="tag" class="chip">{{ tag }}</li>
            </ul>
            <router-link :to="business.route" class="link-arrow">
              {{ business.name }} in detail
              <ArrowRight :size="15" aria-hidden="true" />
            </router-link>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--dark" aria-labelledby="approach-title">
      <div class="container container--narrow text-center">
        <p class="eyebrow" style="justify-content: center;">How we work</p>
        <h2 id="approach-title" class="approach__title">Breadth, without being unfocused.</h2>
        <p class="lead">
          A single organization rarely needs only one of these. A fleet operator that wants live
          vehicle data usually also needs the finance system to receive it, the process around it
          redesigned, and the result explained to customers. The group is built so those pieces
          can be delivered by teams that already work together.
        </p>
        <div class="approach__actions">
          <router-link to="/consulting" class="btn btn--primary btn--lg">Talk to HiTrace Consulting</router-link>
          <router-link to="/businesses" class="btn btn--secondary btn--lg">Explore Our Businesses</router-link>
        </div>
      </div>
    </section>

    <FinalCta />
  </div>
</template>

<script setup>
import { Check, ArrowRight } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import FinalCta from '../components/common/FinalCta.vue'
import { capabilityGroups, businesses } from '../data/businesses.js'
</script>

<style scoped>
.capgrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.capgroup {
  padding: var(--space-8);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.capgroup:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
}

.capgroup__head {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.capgroup__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: var(--radius-md);
  background: var(--color-primary-light);
  color: var(--color-primary);
  flex-shrink: 0;
}

.capgroup__title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-1);
}

.capgroup__desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

.capgroup__items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-border);
}

.capgroup__items li {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.capgroup__items svg {
  color: var(--color-secondary);
  flex-shrink: 0;
}

/* Owners */
.owners {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-5);
}

.owner {
  display: flex;
  flex-direction: column;
  padding: var(--space-6);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-top: 3px solid var(--accent);
  border-radius: var(--radius-lg);
}

.owner__head {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
}

.owner__head svg {
  color: var(--accent);
  flex-shrink: 0;
}

.owner__name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
}

.owner__role {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

.owner__tags {
  margin-bottom: var(--space-6);
}

.owner .link-arrow {
  margin-top: auto;
}

.approach__title {
  font-size: var(--font-size-h2);
  color: var(--color-text-light);
  letter-spacing: -0.02em;
  margin: var(--space-4) 0 var(--space-5);
}

.approach__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-4);
  margin-top: var(--space-10);
}

@media (max-width: 900px) {
  .capgrid,
  .owners {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .capgroup {
    padding: var(--space-6);
  }

  .capgroup__items {
    grid-template-columns: 1fr;
  }

  .approach__actions .btn {
    width: 100%;
  }
}
</style>
