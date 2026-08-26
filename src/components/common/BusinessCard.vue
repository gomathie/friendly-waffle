<template>
  <article class="biz" :class="[`accent-${business.accent}`, { 'biz--dark': dark }]">
    <div class="biz__top">
      <span class="biz__icon">
        <component :is="business.icon" :size="26" aria-hidden="true" />
      </span>
      <span class="biz__relationship">{{ business.relationship }}</span>
    </div>

    <h3 class="biz__name">{{ business.name }}</h3>
    <p class="biz__discipline">{{ business.discipline }}</p>
    <p class="biz__summary">{{ business.summary }}</p>

    <ul class="biz__tags" v-if="business.tags.length">
      <li v-for="tag in visibleTags" :key="tag" class="chip">{{ tag }}</li>
    </ul>

    <div class="biz__actions">
      <a
        v-if="external"
        class="btn btn--accent btn--sm biz__cta"
        :href="business.externalUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ business.ctaLabel }}
        <ExternalLink :size="15" aria-hidden="true" />
        <span class="visually-hidden">(opens in a new tab)</span>
      </a>
      <router-link v-else class="btn btn--accent btn--sm biz__cta" :to="business.route">
        {{ business.ctaLabel }}
        <ArrowRight :size="15" aria-hidden="true" />
      </router-link>

      <router-link v-if="external" class="link-arrow biz__more" :to="business.route">
        Learn more
        <ArrowRight :size="15" aria-hidden="true" />
      </router-link>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { ArrowRight, ExternalLink } from 'lucide-vue-next'
import { isExternal } from '../../data/businesses.js'

const props = defineProps({
  business: { type: Object, required: true },
  dark: { type: Boolean, default: false },
  tagLimit: { type: Number, default: 5 }
})

const external = computed(() => isExternal(props.business))
const visibleTags = computed(() => props.business.tags.slice(0, props.tagLimit))
</script>

<style scoped>
.biz {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: var(--space-8);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
}

/* A thin accent rule along the top edge identifies the business at a glance */
.biz::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 3px;
  background: var(--accent);
  transform: scaleX(0.18);
  transform-origin: left;
  transition: transform var(--transition-base);
}

.biz:hover,
.biz:focus-within {
  transform: translateY(-6px);
  border-color: var(--accent);
  box-shadow: var(--shadow-card-hover);
}

.biz:hover::before,
.biz:focus-within::before {
  transform: scaleX(1);
}

.biz--dark {
  background: var(--color-dark-card);
  border-color: var(--color-border-dark);
}

.biz__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.biz__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  background: var(--accent-soft);
  color: var(--accent);
  flex-shrink: 0;
  transition: background var(--transition-base), color var(--transition-base);
}

.biz:hover .biz__icon {
  background: var(--accent);
  color: #FFFFFF;
}

.biz__relationship {
  font-size: 0.7rem;
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  text-align: right;
  line-height: 1.4;
}

.biz--dark .biz__relationship {
  color: var(--color-text-dark-muted);
}

.biz__name {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-extrabold);
  letter-spacing: -0.02em;
  margin-bottom: var(--space-1);
}

.biz--dark .biz__name {
  color: var(--color-text-light);
}

.biz__discipline {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--accent);
  margin-bottom: var(--space-4);
}

.biz__summary {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-6);
}

.biz--dark .biz__summary {
  color: var(--color-text-dark-muted);
}

.biz__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
}

/* Push the actions to the bottom so cards in a row line up */
.biz__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3) var(--space-5);
  margin-top: auto;
}

.biz__cta {
  gap: var(--space-2);
}

@media (max-width: 640px) {
  .biz {
    padding: var(--space-6);
  }

  .biz__top {
    margin-bottom: var(--space-5);
  }

  .biz__relationship {
    font-size: 0.65rem;
  }

  .biz__cta {
    flex: 1 1 100%;
  }
}
</style>
