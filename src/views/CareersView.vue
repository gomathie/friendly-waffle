<template>
  <div>
    <HeroSection
      eyebrow="Careers"
      title="Work across four technology businesses."
      subtitle="Engineering, design, consulting and operations roles across telematics, enterprise software, digital experiences and technology transformation."
      compact
    />

    <section class="section" aria-labelledby="careers-title">
      <div class="container container--narrow">
        <h2 id="careers-title" class="careers__title">Open applications</h2>
        <p class="lead careers__lead">
          We do not keep a permanent list of vacancies on this page. Roles are opened as projects
          and businesses grow, and we keep speculative applications on file against them.
        </p>
        <p class="lead careers__lead">
          If you would like to be considered, send your CV — and a portfolio or code samples where
          relevant — to
          <a :href="contact.emails[0].href" class="careers__mail">{{ contact.emails[0].display }}</a>,
          with the area you work in as the subject line.
        </p>

        <ul class="careers__areas">
          <li v-for="business in businesses" :key="business.id" :class="`accent-${business.accent}`">
            <component :is="business.icon" :size="20" aria-hidden="true" />
            <div>
              <strong>{{ business.name }}</strong>
              <span>{{ business.discipline }}</span>
            </div>
          </li>
        </ul>

        <a :href="applicationMailto" class="btn btn--primary btn--lg careers__cta">Send an application</a>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroSection from '../components/common/HeroSection.vue'
import { businesses } from '../data/businesses.js'
import { contact } from '../data/site.js'

const applicationMailto = `${contact.emails[0].href}?subject=${encodeURIComponent('Open application')}`
</script>

<style scoped>
.careers__title {
  font-size: var(--font-size-h2);
  letter-spacing: -0.02em;
  margin-bottom: var(--space-5);
}

.careers__lead {
  margin-bottom: var(--space-5);
}

.careers__mail {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.careers__areas {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  margin: var(--space-10) 0;
}

.careers__areas li {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-5);
  background: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius-lg);
}

.careers__areas svg {
  color: var(--accent);
  flex-shrink: 0;
}

.careers__areas strong {
  display: block;
  font-size: var(--font-size-base);
}

.careers__areas span {
  display: block;
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

@media (max-width: 640px) {
  .careers__areas {
    grid-template-columns: 1fr;
  }

  .careers__cta {
    width: 100%;
  }
}
</style>
