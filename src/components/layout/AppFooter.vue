<template>
  <footer class="footer">
    <div class="container footer__top">
      <div class="footer__grid">
        <div class="footer__brand-col">
          <router-link to="/" class="footer__brand" :aria-label="`${brand.name} home`">
            <img :src="brand.logo" :alt="brand.name" class="footer__logo" width="132" height="32" loading="lazy" />
          </router-link>
          <p class="footer__tagline">{{ brand.tagline }}</p>
          <p class="footer__descriptor">{{ brand.supportingStatement }}</p>

          <ul class="footer__social">
            <li v-for="social in socials" :key="social.name">
              <a
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__social-link"
                :aria-label="`${brand.name} on ${social.name}`"
              >
                <span v-html="socialIcon(social.name)" aria-hidden="true"></span>
              </a>
            </li>
          </ul>
        </div>

        <nav class="footer__col" aria-labelledby="footer-businesses">
          <h2 id="footer-businesses" class="footer__heading">Businesses</h2>
          <ul class="footer__links">
            <li v-for="business in businesses" :key="business.id">
              <router-link :to="business.route">{{ business.name }}</router-link>
            </li>
          </ul>
        </nav>

        <nav class="footer__col" aria-labelledby="footer-company">
          <h2 id="footer-company" class="footer__heading">Company</h2>
          <ul class="footer__links">
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/capabilities">Capabilities</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/careers">Careers</router-link></li>
            <li><router-link to="/privacy">Privacy Policy</router-link></li>
            <li><router-link to="/terms">Terms</router-link></li>
          </ul>
        </nav>

        <div class="footer__col">
          <h2 class="footer__heading">Contact</h2>
          <address class="footer__contact">
            <p class="footer__contact-line">
              <MapPin :size="16" aria-hidden="true" />
              <span>{{ contact.address.full }}</span>
            </p>
            <p v-for="phone in contact.phones" :key="phone.href" class="footer__contact-line">
              <Phone :size="16" aria-hidden="true" />
              <a :href="phone.href">{{ phone.display }}</a>
            </p>
            <p v-for="email in contact.emails.slice(0, 2)" :key="email.href" class="footer__contact-line">
              <Mail :size="16" aria-hidden="true" />
              <a :href="email.href">{{ email.display }}</a>
            </p>
          </address>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p>&copy; {{ currentYear }} {{ brand.name }}. All rights reserved.</p>
        <p class="footer__ecosystem">
          OneGPS Africa and DekaERP are part of the {{ brand.name }} technology ecosystem.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { MapPin, Phone, Mail } from 'lucide-vue-next'
import { businesses } from '../../data/businesses.js'
import { brand, contact, socials } from '../../data/site.js'

const currentYear = new Date().getFullYear()

// Inline brand marks: three small paths beat pulling in an icon font.
const icons = {
  LinkedIn:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  Facebook:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  Instagram:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>'
}

const socialIcon = (name) => icons[name] || ''
</script>

<style scoped>
.footer {
  background: var(--color-dark);
  color: var(--color-text-dark-muted);
}

.footer__top {
  padding: var(--space-16) var(--section-padding-x) var(--space-12);
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.4fr;
  gap: var(--space-12) var(--space-8);
}

.footer__brand {
  display: inline-block;
  margin-bottom: var(--space-5);
}

.footer__logo {
  height: 32px;
  width: auto;
  object-fit: contain;
  background: rgba(255, 255, 255, 0.95);
  padding: 6px 12px;
  border-radius: var(--radius-sm);
}

.footer__tagline {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-light);
  line-height: var(--line-height-tight);
  margin-bottom: var(--space-3);
  max-width: 280px;
}

.footer__descriptor {
  font-size: var(--font-size-sm);
  margin-bottom: var(--space-6);
  max-width: 300px;
}

.footer__social {
  display: flex;
  gap: var(--space-3);
}

.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.06);
  color: var(--color-text-dark-muted);
  transition: background var(--transition-base), color var(--transition-base), transform var(--transition-base);
}

.footer__social-link:hover {
  background: var(--color-primary);
  color: var(--color-text-light);
  transform: translateY(-3px);
}

.footer__heading {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-light);
  margin-bottom: var(--space-5);
}

.footer__links li {
  margin-bottom: var(--space-3);
}

.footer__links a {
  font-size: var(--font-size-sm);
  color: var(--color-text-dark-muted);
}

.footer__links a:hover {
  color: var(--color-text-light);
}

.footer__contact {
  font-style: normal;
}

.footer__contact-line {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-normal);
}

.footer__contact-line svg {
  flex-shrink: 0;
  margin-top: 3px;
  color: var(--color-primary);
}

.footer__contact-line a:hover {
  color: var(--color-text-light);
}

.footer__bottom {
  border-top: 1px solid var(--color-border-dark);
  padding: var(--space-6) 0;
}

.footer__bottom-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  font-size: var(--font-size-sm);
}

.footer__ecosystem {
  color: rgba(148, 163, 184, 0.75);
}

@media (max-width: 1024px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer__brand-col {
    grid-column: 1 / -1;
  }
}

@media (max-width: 640px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }

  .footer__bottom-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
