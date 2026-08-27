<template>
  <div>
    <HeroSection
      eyebrow="Services"
      title="Specialist practices. One group behind them."
      subtitle="Technology, digital, transformation and creative work — delivered by specialists who already work together, so the pieces fit when a project needs more than one of them."
      cta-text="Talk to Us"
      cta-link="/contact"
      secondary-text="Explore Our Businesses"
      secondary-link="/businesses"
    />

    <!-- Jump links: the page is long, so give people a way past it -->
    <nav class="jump" aria-label="Service practices">
      <div class="container jump__inner">
        <span class="jump__label">Jump to</span>
        <ul class="jump__list">
          <li v-for="group in serviceGroups" :key="group.id" :class="`accent-${group.accent}`">
            <a :href="`#${group.id}`" class="jump__link">{{ group.title }}</a>
          </li>
          <li><a href="#how-we-work" class="jump__link">How we work</a></li>
        </ul>
      </div>
    </nav>

    <!-- Framing: what the practices are for -->
    <section class="section" aria-labelledby="intro-title">
      <div class="container">
        <div class="intro">
          <div class="reveal-left">
            <p class="eyebrow">What we do</p>
            <h2 id="intro-title" class="intro__title">Start from the problem, not the product.</h2>
            <p class="lead intro__lead">
              Most organizations do not arrive asking for a service. They arrive with a symptom —
              stock that never matches the system, a fleet nobody can see, a brand that no longer
              fits the business, a plan that keeps stalling.
            </p>
            <p class="lead intro__lead">
              The practices below are how we answer those. Any one of them can be engaged on
              its own; on larger programmes they run together, which is the point of keeping them
              in one group.
            </p>
          </div>

          <ul class="intro__stats reveal-right">
            <li v-for="group in serviceGroups" :key="group.id" :class="`accent-${group.accent}`">
              <component :is="group.icon" :size="20" aria-hidden="true" />
              <div>
                <strong>{{ group.title }}</strong>
                <span>{{ group.description }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Each practice in full -->
    <section
      v-for="(group, index) in serviceGroups"
      :id="group.id"
      :key="group.id"
      class="section practice"
      :class="[`accent-${group.accent}`, index % 2 === 1 ? 'section--alt' : '']"
      :aria-labelledby="`${group.id}-title`"
    >
      <div class="container">
        <div class="practice__head reveal">
          <span class="practice__icon">
            <component :is="group.icon" :size="26" aria-hidden="true" />
          </span>
          <div class="practice__headings">
            <p class="practice__eyebrow">{{ group.description }}</p>
            <h2 :id="`${group.id}-title`" class="practice__title">{{ group.title }}</h2>
          </div>
        </div>

        <p class="practice__intent reveal">{{ group.intent }}</p>

        <ul class="practice__items stagger-children">
          <li v-for="item in group.items" :key="item.name" class="item">
            <h3 class="item__name">{{ item.name }}</h3>
            <p class="item__desc">{{ item.description }}</p>
          </li>
        </ul>

        <!-- Which business actually does this work -->
        <div class="practice__owners reveal">
          <span class="practice__owners-label">Delivered by</span>
          <router-link
            v-for="owner in ownersFor(group)"
            :key="owner.id"
            :to="owner.route"
            class="owner-pill"
            :class="`accent-${owner.accent}`"
          >
            <component :is="owner.icon" :size="16" aria-hidden="true" />
            {{ owner.name }}
            <ArrowRight :size="14" aria-hidden="true" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- Engagement process -->
    <section id="how-we-work" class="section section--dark" aria-labelledby="how-title">
      <div class="container">
        <div class="section-header section-header--left reveal">
          <p class="eyebrow">How we work</p>
          <h2 id="how-title">Every engagement runs the same way.</h2>
          <p>
            Whichever service you start from, the shape is the same — understand the problem
            first, put the recommendation in writing, then build.
          </p>
        </div>

        <div class="reveal how__flow">
          <TransformationFlow :steps="engagementSteps" dark />
        </div>
      </div>
    </section>

    <!-- Cross-practice argument -->
    <section class="section" aria-labelledby="together-title">
      <div class="container container--narrow text-center">
        <p class="eyebrow" style="justify-content: center;">Why one group</p>
        <h2 id="together-title" class="together__title">Breadth, without being unfocused.</h2>
        <p class="lead">
          A single organization rarely needs only one of these. A fleet operator that wants live
          vehicle data usually also needs the finance system to receive it, the process around it
          redesigned, and the result explained to customers. The group is built so those pieces
          can be delivered by teams that already work together — and so no one is stuck
          coordinating separate suppliers who blame each other.
        </p>
        <div class="together__actions">
          <router-link to="/consulting" class="btn btn--primary btn--lg">Talk to HiTrace Consulting</router-link>
          <router-link to="/industries" class="btn btn--outline btn--lg">See Industries We Serve</router-link>
        </div>
      </div>
    </section>

    <FinalCta />
  </div>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import TransformationFlow from '../components/common/TransformationFlow.vue'
import FinalCta from '../components/common/FinalCta.vue'
import { serviceGroups, engagementSteps, businessById } from '../data/businesses.js'

// Practices carry their own accent for rhythm down the page. Business identity
// stays with the owner pills, which use each business's real colour.
const ownersFor = (group) => group.deliveredBy.map(businessById).filter(Boolean)
</script>

<style scoped>
/* ===== Jump links ===== */
.jump {
  position: sticky;
  top: 76px;
  z-index: var(--z-dropdown);
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}

.jump__inner {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  padding-top: var(--space-3);
  padding-bottom: var(--space-3);
}

.jump__label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  flex-shrink: 0;
}

.jump__list {
  display: flex;
  gap: var(--space-2);
  overflow-x: auto;
  scrollbar-width: none;
}

.jump__list::-webkit-scrollbar {
  display: none;
}

.jump__link {
  display: block;
  padding: 0.4rem 0.9rem;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-muted);
  border-radius: var(--radius-full);
  white-space: nowrap;
  transition: background var(--transition-fast), color var(--transition-fast);
}

.jump__link:hover {
  background: var(--accent-soft, var(--color-surface-alt));
  color: var(--accent, var(--color-text));
}

/* ===== Intro ===== */
.intro {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: var(--space-16);
  align-items: start;
}

.intro__title {
  font-size: var(--font-size-h2);
  letter-spacing: -0.02em;
  margin: var(--space-4) 0 var(--space-5);
}

.intro__lead {
  margin-bottom: var(--space-5);
}

.intro__stats {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.intro__stats li {
  display: flex;
  gap: var(--space-4);
  padding: var(--space-5);
  background: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius-lg);
}

.intro__stats svg {
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 2px;
}

.intro__stats strong {
  display: block;
  font-size: var(--font-size-base);
}

.intro__stats span {
  display: block;
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

/* ===== Practice sections ===== */
.practice {
  scroll-margin-top: 132px;
}

.practice__head {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  margin-bottom: var(--space-6);
}

.practice__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: var(--radius-lg);
  background: var(--accent-soft);
  color: var(--accent);
  flex-shrink: 0;
}

.practice__eyebrow {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--accent);
  margin-bottom: var(--space-1);
}

.practice__title {
  font-size: var(--font-size-h2);
  letter-spacing: -0.02em;
}

.practice__intent {
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
  max-width: 68ch;
  margin-bottom: var(--space-10);
}

.practice__items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-5);
  margin-bottom: var(--space-10);
}

.item {
  padding: var(--space-6);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-top: 3px solid transparent;
  border-radius: var(--radius-lg);
  transition: transform var(--transition-base), border-color var(--transition-base), box-shadow var(--transition-base);
}

.section--alt .item {
  background: var(--color-surface);
}

.item:hover {
  transform: translateY(-4px);
  border-top-color: var(--accent);
  box-shadow: var(--shadow-card);
}

.item__name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-2);
}

.item__desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
}

/* Who delivers this practice */
.practice__owners {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-border);
}

.practice__owners-label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.owner-pill {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.5rem 1rem;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--accent);
  background: var(--accent-soft);
  border: 1px solid transparent;
  border-radius: var(--radius-full);
  transition: border-color var(--transition-fast), transform var(--transition-fast);
}

.owner-pill:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

/* ===== How we work ===== */
/* Anchor jumps are native here, so scroll-margin keeps the fixed header and
   the sticky jump bar from covering the heading you landed on. */
#how-we-work {
  scroll-margin-top: 132px;
}

.how__flow {
  margin-top: var(--space-12);
}

/* ===== Closing ===== */
.together__title {
  font-size: var(--font-size-h2);
  letter-spacing: -0.02em;
  margin: var(--space-4) 0 var(--space-5);
}

.together__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-4);
  margin-top: var(--space-10);
}

@media (max-width: 1024px) {
  .intro {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }
}

@media (max-width: 640px) {
  .jump {
    top: 76px;
  }

  .jump__inner {
    gap: var(--space-3);
  }

  .jump__label {
    display: none;
  }

  .practice {
    scroll-margin-top: 118px;
  }

  .practice__head {
    gap: var(--space-4);
    margin-bottom: var(--space-5);
  }

  .practice__icon {
    width: 48px;
    height: 48px;
  }

  .item {
    padding: var(--space-5);
  }

  .together__actions .btn {
    width: 100%;
  }
}
</style>
