<template>
  <div>
    <HeroSection
      eyebrow="Contact"
      title="Let's build what comes next."
      subtitle="Whether you need technology, digital experiences, enterprise software or transformation expertise, we're ready to help."
      bg-image="/images/16406297_rm373batch2-06-scaled.webp"
      compact
    />

    <section class="section" aria-labelledby="contact-title">
      <div class="container">
        <h2 id="contact-title" class="visually-hidden">Contact HiTrace Solutions</h2>

        <div class="cgrid">
          <div class="cinfo reveal-left">
            <h3 class="cinfo__title">Talk to HiTrace</h3>
            <p class="lead cinfo__lead">
              Tell us which part of the ecosystem you need — or describe the problem and we will
              point you to the right team.
            </p>

            <ul class="cinfo__list">
              <li>
                <span class="cinfo__icon"><MapPin :size="18" aria-hidden="true" /></span>
                <div>
                  <h4>Head office</h4>
                  <p>{{ contact.address.full }}</p>
                </div>
              </li>
              <li>
                <span class="cinfo__icon"><Phone :size="18" aria-hidden="true" /></span>
                <div>
                  <h4>Phone</h4>
                  <p v-for="phone in contact.phones" :key="phone.href">
                    <a :href="phone.href">{{ phone.display }}</a>
                    <span class="tag">{{ phone.label }}</span>
                  </p>
                </div>
              </li>
              <li>
                <span class="cinfo__icon"><Mail :size="18" aria-hidden="true" /></span>
                <div>
                  <h4>Email</h4>
                  <p v-for="email in contact.emails" :key="email.href">
                    <a :href="email.href">{{ email.display }}</a>
                    <span class="tag">{{ email.label }}</span>
                  </p>
                </div>
              </li>
              <li>
                <span class="cinfo__icon"><Clock :size="18" aria-hidden="true" /></span>
                <div>
                  <h4>Office hours</h4>
                  <p v-for="line in contact.hours" :key="line">{{ line }}</p>
                </div>
              </li>
            </ul>

            <!-- Direct routes to the independent businesses -->
            <div class="direct">
              <h4 class="direct__title">Going direct to a business?</h4>
              <ul class="direct__list">
                <li v-for="business in externalBusinesses" :key="business.id" :class="`accent-${business.accent}`">
                  <a :href="business.externalUrl" target="_blank" rel="noopener noreferrer">
                    <component :is="business.icon" :size="18" aria-hidden="true" />
                    <span>
                      <strong>{{ business.name }}</strong>
                      <em>{{ prettyUrl(business.externalUrl) }}</em>
                    </span>
                    <ExternalLink :size="15" aria-hidden="true" />
                    <span class="visually-hidden">(opens in a new tab)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="cform-card reveal-right">
            <h3 class="cform-card__title">Send us a message</h3>
            <p class="cform-card__sub">Fields marked * are required.</p>
            <ContactForm :default-interest="defaultInterest" />
          </div>
        </div>

        <div class="map reveal">
          <div class="map__head">
            <h3>Visit our office in Kasoa</h3>
            <p>{{ contact.address.full }}</p>
          </div>
          <iframe
            class="map__frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9238321034444!2d-0.4282824!3d5.5398254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfa382c40c88c7%3A0xb3e6a0d0dcf3f081!2sKasoa%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
            width="100%"
            height="360"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Map showing the HiTrace Solutions office in Kasoa, Ghana"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import ContactForm from '../components/common/ContactForm.vue'
import { contact } from '../data/site.js'
import { businesses, interestAreas, isExternal } from '../data/businesses.js'

const route = useRoute()

// /contact?interest=DekaERP preselects the matching option in the form
const defaultInterest = computed(() => {
  const requested = String(route.query.interest || '').trim().toLowerCase()
  if (!requested) return ''
  return interestAreas.find((area) => area.toLowerCase().includes(requested)) || ''
})

const externalBusinesses = computed(() => businesses.filter(isExternal))
const prettyUrl = (url) => url.replace(/^https?:\/\//, '')
</script>

<style scoped>
.cgrid {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: var(--space-16);
  align-items: start;
}

.cinfo__title {
  font-size: var(--font-size-h2);
  letter-spacing: -0.02em;
  margin-bottom: var(--space-4);
}

.cinfo__lead {
  margin-bottom: var(--space-10);
}

.cinfo__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  margin-bottom: var(--space-10);
}

.cinfo__list li {
  display: flex;
  gap: var(--space-4);
}

.cinfo__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background: var(--color-primary-light);
  color: var(--color-primary);
  flex-shrink: 0;
}

.cinfo__list h4 {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-2);
}

.cinfo__list p {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--space-1);
  line-height: var(--line-height-relaxed);
}

.cinfo__list a {
  color: var(--color-text);
  font-weight: var(--font-weight-medium);
}

.cinfo__list a:hover {
  color: var(--color-primary);
}

.tag {
  display: inline-block;
  margin-left: var(--space-2);
  padding: 1px 7px;
  font-size: 0.68rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-muted);
  background: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

/* Direct links out to the independent businesses */
.direct {
  padding: var(--space-6);
  background: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.direct__title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-4);
}

.direct__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.direct__list a {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: border-color var(--transition-fast), transform var(--transition-fast);
}

.direct__list a:hover {
  border-color: var(--accent);
  transform: translateX(3px);
}

.direct__list a > svg:first-child {
  color: var(--accent);
  flex-shrink: 0;
}

.direct__list span:not(.visually-hidden) {
  flex: 1;
  min-width: 0;
}

.direct__list strong {
  display: block;
  font-size: var(--font-size-sm);
}

.direct__list em {
  display: block;
  font-size: var(--font-size-xs);
  font-style: normal;
  color: var(--color-text-muted);
}

/* Form card */
.cform-card {
  padding: var(--space-10);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

.cform-card__title {
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-1);
}

.cform-card__sub {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--space-8);
}

/* Map */
.map {
  margin-top: var(--space-20);
  padding: var(--space-8);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
}

.map__head {
  margin-bottom: var(--space-6);
}

.map__head h3 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-1);
}

.map__head p {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

.map__frame {
  display: block;
  width: 100%;
  border: 0;
  border-radius: var(--radius-lg);
}

@media (max-width: 1024px) {
  .cgrid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }
}

@media (max-width: 640px) {
  .cform-card,
  .map {
    padding: var(--space-6);
  }

  .map {
    margin-top: var(--space-12);
  }
}
</style>
