<template>
  <article
    ref="card"
    class="biz"
    :class="[`accent-${business.accent}`, { 'biz--dark': dark }]"
    @pointermove="handlePointerMove"
    @pointerleave="resetTilt"
  >
    <span class="biz__sheen" aria-hidden="true"></span>
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
import { computed, ref, onBeforeUnmount } from 'vue'
import { ArrowRight, ExternalLink } from 'lucide-vue-next'
import { isExternal } from '../../data/businesses.js'
import { pointerMotionAllowed, rafThrottle } from '../../lib/motion.js'

const props = defineProps({
  business: { type: Object, required: true },
  dark: { type: Boolean, default: false },
  tagLimit: { type: Number, default: 5 }
})

const external = computed(() => isExternal(props.business))
const visibleTags = computed(() => props.business.tags.slice(0, props.tagLimit))

/* Card tilt.
 *
 * Rotation is capped low on purpose - past about six degrees the text edges
 * start to shimmer and the card reads as a toy rather than a surface. The
 * pointer position also drives the sheen, so the highlight tracks the tilt. */
const MAX_TILT = 5.5
const card = ref(null)

const applyTilt = rafThrottle((x, y) => {
  const el = card.value
  if (!el) return
  el.style.setProperty('--rx', `${(-y * MAX_TILT).toFixed(2)}deg`)
  el.style.setProperty('--ry', `${(x * MAX_TILT).toFixed(2)}deg`)
  el.style.setProperty('--mx', `${(50 + x * 50).toFixed(1)}%`)
  el.style.setProperty('--my', `${(50 + y * 50).toFixed(1)}%`)
  el.style.setProperty('--sheen', '1')
})

const handlePointerMove = (event) => {
  if (!pointerMotionAllowed()) return
  const rect = card.value?.getBoundingClientRect()
  if (!rect) return
  applyTilt(
    (event.clientX - rect.left) / rect.width * 2 - 1,
    (event.clientY - rect.top) / rect.height * 2 - 1
  )
}

const resetTilt = () => {
  applyTilt.cancel()
  const el = card.value
  if (!el) return
  el.style.setProperty('--rx', '0deg')
  el.style.setProperty('--ry', '0deg')
  el.style.setProperty('--sheen', '0')
}

onBeforeUnmount(() => applyTilt.cancel())
</script>

<style scoped>
.biz {
  /* Written by the pointer handler; all default to rest so the card is
     unchanged without JS, on touch, and under reduced motion. */
  --rx: 0deg;
  --ry: 0deg;
  --lift: 0px;
  --sheen: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: var(--space-8);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transform: perspective(900px) translate3d(0, var(--lift), 0) rotateX(var(--rx)) rotateY(var(--ry));
  transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow var(--transition-base), border-color var(--transition-base);
}

/* Highlight follows the pointer, so the tilt reads as a lit surface */
.biz__sheen {
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: inherit;
  pointer-events: none;
  opacity: var(--sheen);
  background: radial-gradient(
    340px circle at var(--mx, 50%) var(--my, 50%),
    rgba(255, 255, 255, 0.34),
    transparent 62%
  );
  mix-blend-mode: soft-light;
  transition: opacity 260ms ease;
}

.biz--dark .biz__sheen {
  background: radial-gradient(
    340px circle at var(--mx, 50%) var(--my, 50%),
    rgba(125, 211, 252, 0.16),
    transparent 62%
  );
  mix-blend-mode: screen;
}

/* Content sits above the sheen, so the highlight never washes out the text */
.biz > *:not(.biz__sheen) {
  position: relative;
  z-index: 1;
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
  --lift: -6px;
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
@media (prefers-reduced-motion: reduce) {
  .biz {
    transform: none;
  }

  .biz__sheen {
    display: none;
  }
}
</style>
