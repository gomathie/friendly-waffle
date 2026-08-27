<template>
  <div class="home">
    <!-- ===== Hero ===== -->
    <section
      ref="hero"
      class="hhero"
      aria-labelledby="hero-title"
      @pointermove="handlePointerMove"
      @pointerleave="resetParallax"
    >
      <div class="hhero__bg" aria-hidden="true">
        <div class="hhero__mesh"></div>
        <div class="hhero__grid"></div>
      </div>

      <div class="container hhero__inner">
        <div class="hhero__text">
          <p class="eyebrow hhero__eyebrow">{{ brand.descriptor }}</p>
          <h1 id="hero-title" class="hhero__title">Technology that moves businesses forward.</h1>
          <p class="hhero__sub">{{ brand.intro }}</p>
          <div class="hhero__actions">
            <router-link to="/businesses" class="btn btn--primary btn--lg">Explore Our Businesses</router-link>
            <router-link to="/contact" class="btn btn--secondary btn--lg">Talk to Us</router-link>
          </div>

          <ul class="hhero__strip">
            <li v-for="business in businesses" :key="business.id" :class="`accent-${business.accent}`">
              <span class="hhero__dot" aria-hidden="true"></span>
              {{ business.name }}
            </li>
          </ul>
        </div>

        <div class="hhero__visual">
          <EcosystemGraphic />
        </div>
      </div>
    </section>

    <!-- ===== Brand architecture: the group in one glance ===== -->
    <section class="section section--alt" aria-labelledby="architecture-title">
      <div class="container">
        <div class="section-header reveal">
          <h2 id="architecture-title">One group. Four specialisms.</h2>
          <p>
            HiTrace Solutions is the parent technology group. Each business below solves a
            different class of problem, and each one can be engaged on its own.
          </p>
        </div>
        <div class="reveal">
          <EcosystemDiagram />
        </div>
      </div>
    </section>

    <!-- ===== Our Businesses ===== -->
    <section id="businesses" class="section" aria-labelledby="businesses-title">
      <div class="container">
        <div class="section-header reveal">
          <h2 id="businesses-title">Our Businesses</h2>
          <p>
            Specialized technology businesses designed to solve different challenges across the
            modern organization.
          </p>
        </div>

        <div class="biz-grid stagger-children">
          <BusinessCard v-for="business in businesses" :key="business.id" :business="business" />
        </div>
      </div>
    </section>

    <!-- ===== Why HiTrace Solutions ===== -->
    <section class="section section--dark" aria-labelledby="why-title">
      <div class="container">
        <div class="why">
          <div class="why__intro reveal-left">
            <p class="eyebrow">Why HiTrace Solutions</p>
            <h2 id="why-title">Building technology for the way business works today.</h2>
            <p class="lead">
              HiTrace Solutions brings together technology, digital expertise and business
              transformation to help organizations adapt, operate smarter and create new
              opportunities.
            </p>
            <router-link to="/about" class="link-arrow why__link">
              More about the group
              <ArrowRight :size="16" aria-hidden="true" />
            </router-link>
          </div>

          <ul class="why__pillars stagger-children">
            <li v-for="pillar in pillars" :key="pillar.title" class="pillar">
              <span class="pillar__icon">
                <component :is="pillar.icon" :size="22" aria-hidden="true" />
              </span>
              <div>
                <h3 class="pillar__title">{{ pillar.title }}</h3>
                <p class="pillar__desc">{{ pillar.description }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ===== Consulting across the ecosystem ===== -->
    <section class="section consulting-band accent-teal" aria-labelledby="consulting-title">
      <div class="container">
        <div class="section-header section-header--left reveal">
          <p class="eyebrow">HiTrace Consulting</p>
          <h2 id="consulting-title">Need to transform your business?</h2>
          <p>
            From technology strategy to implementation, HiTrace Consulting helps organizations
            identify the right technologies, integrate systems and build a roadmap for digital
            transformation.
          </p>
        </div>

        <div class="reveal consulting-band__flow">
          <TransformationFlow :steps="transformationFlow" />
        </div>

        <div class="consulting-band__actions reveal">
          <router-link to="/consulting" class="btn btn--accent btn--lg">Talk to HiTrace Consulting</router-link>
        </div>
      </div>
    </section>

    <!-- ===== What We Do ===== -->
    <section class="section section--alt" aria-labelledby="services-title">
      <div class="container">
        <div class="section-header reveal">
          <p class="eyebrow">What We Do</p>
          <h2 id="services-title">Services across the group</h2>
          <p>
            Four disciplines that combine on most engagements — and stand alone when that is all
            you need.
          </p>
        </div>

        <div class="grid grid--4 stagger-children">
          <article v-for="group in serviceGroups" :key="group.title" class="cap">
            <span class="cap__icon">
              <component :is="group.icon" :size="22" aria-hidden="true" />
            </span>
            <h3 class="cap__title">{{ group.title }}</h3>
            <p class="cap__desc">{{ group.description }}</p>
            <ul class="cap__items">
              <li v-for="item in group.items" :key="item.name">{{ item.name }}</li>
            </ul>
          </article>
        </div>

        <div class="text-center reveal" style="margin-top: var(--space-10);">
          <router-link to="/services" class="btn btn--outline">See all services</router-link>
        </div>
      </div>
    </section>

    <!-- ===== About ===== -->
    <section class="section" aria-labelledby="about-title">
      <div class="container">
        <div class="about-split">
          <div class="reveal-left">
            <p class="eyebrow">About HiTrace Solutions</p>
            <h2 id="about-title">A technology company built around connected work.</h2>
            <p class="lead about-split__lead">
              HiTrace Solutions is a technology company focused on building and delivering
              solutions that help organizations operate smarter in an increasingly connected
              world.
            </p>
            <p class="lead about-split__lead">
              Our ecosystem brings together specialized businesses across telematics, enterprise
              software, digital experiences and technology consulting.
            </p>
            <router-link to="/about" class="btn btn--outline">Read about the group</router-link>
          </div>

          <img
            class="about-split__img reveal-right"
            src="/images/ChatGPT-Image-May-16-2025-01_31_08-AM-1024x683.jpg"
            alt="Abstract diagram of connected devices, cloud services and the people who use them"
            width="1024"
            height="683"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>

    <!-- ===== Final CTA ===== -->
    <FinalCta />
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import EcosystemGraphic from '../components/common/EcosystemGraphic.vue'
import EcosystemDiagram from '../components/common/EcosystemDiagram.vue'
import BusinessCard from '../components/common/BusinessCard.vue'
import TransformationFlow from '../components/common/TransformationFlow.vue'
import FinalCta from '../components/common/FinalCta.vue'
import { businesses, pillars, serviceGroups, transformationFlow } from '../data/businesses.js'
import { brand } from '../data/site.js'
import { pointerMotionAllowed, rafThrottle } from '../lib/motion.js'

/* Hero parallax.
 *
 * The backdrop is three separate layers, so moving them at different rates
 * against the pointer gives the hero real depth for the price of two custom
 * properties. Position is written to the section as --px/--py in the range
 * -1..1; the CSS decides how far each layer travels. */
const hero = ref(null)

const applyParallax = rafThrottle((x, y) => {
  const el = hero.value
  if (!el) return
  el.style.setProperty('--px', x.toFixed(3))
  el.style.setProperty('--py', y.toFixed(3))
})

const handlePointerMove = (event) => {
  if (!pointerMotionAllowed()) return
  const rect = hero.value?.getBoundingClientRect()
  if (!rect) return
  applyParallax(
    (event.clientX - rect.left) / rect.width * 2 - 1,
    (event.clientY - rect.top) / rect.height * 2 - 1
  )
}

const resetParallax = () => {
  applyParallax.cancel()
  hero.value?.style.setProperty('--px', '0')
  hero.value?.style.setProperty('--py', '0')
}

onBeforeUnmount(() => applyParallax.cancel())
</script>

<style scoped>
/* ===== Hero ===== */
.hhero {
  /* --px/--py are written by the pointer handler, -1..1 from centre. Each
     layer below multiplies them by its own depth. Defaulting to 0 means the
     hero is identical without JS, on touch, or under reduced motion. */
  --px: 0;
  --py: 0;
  position: relative;
  display: flex;
  align-items: center;
  min-height: 640px;
  padding: calc(76px + var(--space-16)) 0 var(--space-16);
  overflow: hidden;
  background: var(--gradient-hero);
}

.hhero__bg {
  position: absolute;
  inset: 0;
}

/* The backdrop is drawn, not photographed: layered radial washes and a faint
   engineering grid. It costs no image bytes, so the hero paints immediately,
   and it reads as infrastructure rather than as a fleet of vehicles. */
.hhero__mesh {
  position: absolute;
  inset: -6%;
  transform: translate3d(calc(var(--px) * 14px), calc(var(--py) * 10px), 0);
  transition: transform 400ms cubic-bezier(0.22, 1, 0.36, 1);
  background:
    radial-gradient(ellipse 60% 70% at 78% 18%, rgba(37, 99, 235, 0.34) 0%, transparent 62%),
    radial-gradient(ellipse 50% 60% at 92% 72%, rgba(13, 148, 136, 0.2) 0%, transparent 60%),
    radial-gradient(ellipse 55% 50% at 12% 88%, rgba(124, 58, 237, 0.16) 0%, transparent 62%);
}

.hhero__grid {
  position: absolute;
  inset: -4%;
  transform: translate3d(calc(var(--px) * -26px), calc(var(--py) * -16px), 0);
  transition: transform 400ms cubic-bezier(0.22, 1, 0.36, 1);
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(ellipse 70% 80% at 70% 45%, black 0%, transparent 72%);
  -webkit-mask-image: radial-gradient(ellipse 70% 80% at 70% 45%, black 0%, transparent 72%);
}

.hhero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  align-items: center;
  gap: var(--space-16);
  max-width: 1280px;
}

.hhero__eyebrow {
  color: var(--color-primary-on-dark);
  margin-bottom: var(--space-5);
  animation: fadeInUp 0.6s ease both;
}

.hhero__title {
  font-size: clamp(2.4rem, 5.2vw, 4rem);
  font-weight: var(--font-weight-extrabold);
  letter-spacing: -0.035em;
  line-height: 1.05;
  color: var(--color-text-light);
  margin-bottom: var(--space-6);
  max-width: 15ch;
  animation: fadeInUp 0.6s ease 0.08s both;
}

.hhero__sub {
  font-size: var(--font-size-lg);
  color: var(--color-text-dark-muted);
  line-height: var(--line-height-relaxed);
  max-width: 52ch;
  margin-bottom: var(--space-10);
  animation: fadeInUp 0.6s ease 0.16s both;
}

.hhero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  animation: fadeInUp 0.6s ease 0.24s both;
}

.hhero__strip {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3) var(--space-6);
  margin-top: var(--space-12);
  padding-top: var(--space-6);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  animation: fadeInUp 0.6s ease 0.32s both;
}

.hhero__strip li {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-dark-muted);
}

.hhero__dot {
  width: 7px;
  height: 7px;
  border-radius: var(--radius-full);
  background: var(--accent);
}

.hhero__visual {
  animation: fadeIn 0.9s ease 0.3s both;
  transform:
    perspective(1100px)
    translate3d(calc(var(--px) * 22px), calc(var(--py) * 14px), 0)
    rotateY(calc(var(--px) * -5deg))
    rotateX(calc(var(--py) * 4deg));
  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

/* ===== Business grid ===== */
.biz-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

/* ===== Why pillars ===== */
.why {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: var(--space-16);
  align-items: center;
}

.why__intro h2 {
  font-size: var(--font-size-h2);
  color: var(--color-text-light);
  margin: var(--space-4) 0 var(--space-5);
  letter-spacing: -0.02em;
}

.why__link {
  margin-top: var(--space-6);
  color: var(--color-primary-on-dark);
}

.why__pillars {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
}

.pillar {
  display: flex;
  gap: var(--space-4);
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
  color: var(--color-primary-on-dark);
  flex-shrink: 0;
}

.pillar__title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-light);
  margin-bottom: var(--space-2);
}

.pillar__desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-dark-muted);
  line-height: var(--line-height-relaxed);
}

/* ===== Consulting band ===== */
.consulting-band {
  position: relative;
  background:
    radial-gradient(ellipse at 15% 0%, rgba(13, 148, 136, 0.1) 0%, transparent 55%),
    var(--color-surface);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.consulting-band__flow {
  margin: var(--space-12) 0;
}

.consulting-band__actions {
  display: flex;
  justify-content: flex-start;
}

/* ===== Capability cards ===== */
.cap {
  display: flex;
  flex-direction: column;
  padding: var(--space-6);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.cap:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card);
}

.cap__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background: var(--color-primary-light);
  color: var(--color-primary);
  margin-bottom: var(--space-4);
}

.cap__title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-2);
}

.cap__desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
}

.cap__items {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}

.cap__items li {
  font-size: var(--font-size-sm);
  color: var(--color-text);
  font-weight: var(--font-weight-medium);
}

/* ===== About split ===== */
.about-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.about-split h2 {
  font-size: var(--font-size-h2);
  letter-spacing: -0.02em;
  margin: var(--space-4) 0 var(--space-5);
}

.about-split__lead {
  margin-bottom: var(--space-5);
}

.about-split__img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
}

/* ===== Responsive ===== */
@media (max-width: 1024px) {
  .hhero__inner {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }

  .hhero__title {
    max-width: 18ch;
  }

  .why,
  .about-split {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }
}

@media (max-width: 900px) {
  .biz-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hhero {
    min-height: 0;
    padding: calc(76px + var(--space-10)) 0 var(--space-12);
  }

  .hhero__sub {
    margin-bottom: var(--space-8);
  }

  .hhero__actions .btn {
    width: 100%;
  }

  .hhero__strip {
    margin-top: var(--space-8);
    gap: var(--space-2) var(--space-4);
  }

  /* The graphic stays on mobile — it is the fastest way to read what the
     group is — but it drops below the copy and loses its outer breathing room. */
  .hhero__visual {
    margin: 0 calc(var(--space-4) * -1);
  }

  .why__pillars {
    grid-template-columns: 1fr;
  }

  .consulting-band__actions .btn {
    width: 100%;
  }
}
</style>
