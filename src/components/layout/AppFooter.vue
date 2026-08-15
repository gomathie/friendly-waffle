<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__col">
            <router-link to="/" class="footer__logo">
              <div class="logo">
                <div class="logo__icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="8" fill="url(#footerLogoGrad)"/>
                    <path d="M8 16h6v-6h4v6h6v4h-6v6h-4v-6H8v-4z" fill="white"/>
                    <defs><linearGradient id="footerLogoGrad" x1="0" y1="0" x2="32" y2="32"><stop stop-color="#0066FF"/><stop offset="1" stop-color="#0052CC"/></linearGradient></defs>
                  </svg>
                </div>
                <div class="logo__text">
                  <span class="logo__name">Hitrace</span>
                  <span class="logo__tagline">Solutions</span>
                </div>
              </div>
            </router-link>
            <p class="footer__desc">Our cutting-edge technologies optimize all business processes to give the highest efficiency.</p>
            <div class="footer__social">
              <a href="https://www.facebook.com/hitracesolutions" target="_blank" rel="noopener" aria-label="Facebook" class="footer__social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/hitracesolutions" target="_blank" rel="noopener" aria-label="Instagram" class="footer__social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/hitrace-solutions/" target="_blank" rel="noopener" aria-label="LinkedIn" class="footer__social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <div class="footer__col">
            <h4 class="footer__heading">Quick Links</h4>
            <ul class="footer__links">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/industries">Industries</router-link></li>
              <li><router-link to="/pricing">Pricing</router-link></li>
              <li><router-link to="/contact">Book a Demo</router-link></li>
              <li><router-link to="/faq">FAQ</router-link></li>
            </ul>
          </div>

          <div class="footer__col">
            <h4 class="footer__heading">What We Do</h4>
            <ul class="footer__links">
              <li><router-link to="/fleet-management">Fleet Management</router-link></li>
              <li><router-link to="/tracking-solutions">Tracking Solutions</router-link></li>
              <li><router-link to="/fuel-monitoring">Fuel Monitoring</router-link></li>
              <li><router-link to="/iot-and-smart-homes">IoT and Smart Homes</router-link></li>
              <li><router-link to="/web-services">Web Services</router-link></li>
              <li><router-link to="/telematics">Telematics</router-link></li>
            </ul>
          </div>

          <div class="footer__col">
            <h4 class="footer__heading">Contact Info</h4>
            <ul class="footer__contact">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Kasoa, Human Rights Road
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+233209403434">(+233) 20-940-3434</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href="mailto:info@hitracesolutions.com">info@hitracesolutions.com</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href="mailto:support@hitracesolutions.com">support@hitracesolutions.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container">
        <p>&copy; {{ currentYear }} Hitrace Solutions. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--color-dark);
  color: var(--color-text-dark-muted);
}

.footer__top {
  padding: var(--space-16) 0 var(--space-12);
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.3fr;
  gap: var(--space-10);
}

.footer__logo {
  display: inline-block;
  margin-bottom: var(--space-4);
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.logo__text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.logo__name {
  font-size: 1.3rem;
  font-weight: var(--font-weight-extrabold);
  color: var(--color-text-light);
}

.logo__tagline {
  font-size: 0.7rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

.footer__desc {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-6);
  max-width: 280px;
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
  transition: all var(--transition-base);
}

.footer__social-link:hover {
  background: var(--color-primary);
  color: var(--color-text-light);
  transform: translateY(-3px);
}

.footer__heading {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-light);
  margin-bottom: var(--space-6);
  position: relative;
  padding-bottom: var(--space-3);
}

.footer__heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--color-primary);
  border-radius: 1px;
}

.footer__links li {
  margin-bottom: var(--space-3);
}

.footer__links a {
  font-size: var(--font-size-sm);
  color: var(--color-text-dark-muted);
  transition: all var(--transition-fast);
}

.footer__links a:hover {
  color: var(--color-primary);
  padding-left: var(--space-2);
}

.footer__contact li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
  font-size: var(--font-size-sm);
}

.footer__contact svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--color-primary);
}

.footer__contact a {
  color: var(--color-text-dark-muted);
  transition: color var(--transition-fast);
}

.footer__contact a:hover {
  color: var(--color-primary);
}

.footer__bottom {
  border-top: 1px solid var(--color-border-dark);
  padding: var(--space-6) 0;
  text-align: center;
  font-size: var(--font-size-sm);
}

@media (max-width: 1024px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-10) var(--space-8);
  }
}

@media (max-width: 640px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }
}
</style>
