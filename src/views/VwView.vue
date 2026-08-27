<template>
  <div class="accent-blue">
    <HeroSection
      eyebrow="VW partner portal"
      title="Stay connected to your monitoring platform."
      subtitle="HiTrace Solutions provides the monitoring platform for VW. Use the secure portal to access your fleet information and operational view."
      accent="blue"
      cta-text="Log in to monitoring"
      cta-link="https://hosting.wialon.eu"
      cta-external
      secondary-text="Contact HiTrace Solutions"
      secondary-link="/contact"
    />

    <section class="section portal" aria-labelledby="portal-title">
      <div class="container portal__layout">
        <div class="portal__intro reveal-left">
          <p class="eyebrow">Your monitoring access</p>
          <h2 id="portal-title">Everything starts at the partner portal.</h2>
          <p class="lead">
            Sign in to the Wialon-hosted monitoring platform provided by HiTrace Solutions.
            Your existing platform credentials will take you to your monitoring workspace.
          </p>
          <a
            class="btn btn--outline btn--lg"
            href="https://hosting.wialon.eu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Log in to monitoring
            <ExternalLink :size="16" aria-hidden="true" />
            <span class="visually-hidden">(opens in a new tab)</span>
          </a>
        </div>

        <aside class="portal__card reveal-right" aria-label="Portal details">
          <span class="portal__icon">
            <ShieldCheck :size="24" aria-hidden="true" />
          </span>
          <h3>VW monitoring platform</h3>
          <p>
            Access is provided through the hosted Wialon platform. For account or platform
            support, contact the HiTrace Solutions team.
          </p>
          <router-link to="/contact" class="link-arrow">
            Contact support
            <ArrowRight :size="15" aria-hidden="true" />
          </router-link>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ArrowRight, ExternalLink, ShieldCheck } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
</script>

<style scoped>
.portal__layout {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.portal__intro h2 {
  font-size: var(--font-size-h2);
  margin: var(--space-4) 0 var(--space-5);
}

.portal__intro .lead {
  max-width: 58ch;
  margin-bottom: var(--space-8);
}

.portal__card {
  padding: var(--space-8);
  background: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  border-top: 3px solid var(--accent);
  border-radius: var(--radius-xl);
}

.portal__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: var(--space-5);
  color: var(--accent);
  background: var(--accent-soft);
  border-radius: var(--radius-md);
}

.portal__card h3 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-3);
}

.portal__card p {
  color: var(--color-text-muted);
  margin-bottom: var(--space-6);
}

@media (max-width: 760px) {
  .portal__layout {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }

  .portal__intro .btn {
    width: 100%;
  }
}
</style>
