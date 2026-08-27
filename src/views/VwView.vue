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
    >
      <template #visual>
        <div class="journey__scene" aria-hidden="true">
          <div class="journey__sky">
            <span class="journey__node journey__node--one"><RadioTower :size="22" /></span>
            <span class="journey__node journey__node--two"><Wifi :size="20" /></span>
            <span class="journey__node journey__node--three"><Activity :size="20" /></span>
            <span class="journey__signal journey__signal--one"></span>
            <span class="journey__signal journey__signal--two"></span>
            <span class="journey__signal journey__signal--three"></span>
          </div>
          <div class="journey__route">
            <span class="journey__route-line"></span>
            <span class="journey__vehicle"><CarFront :size="32" /></span>
            <span class="journey__marker journey__marker--start"><MapPin :size="18" /></span>
            <span class="journey__marker journey__marker--end"><MapPin :size="18" /></span>
          </div>
        </div>
      </template>
    </HeroSection>

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
import { Activity, ArrowRight, CarFront, ExternalLink, MapPin, RadioTower, ShieldCheck, Wifi } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
</script>

<style scoped>
.journey__scene {
  position: relative;
  min-height: 230px;
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.035);
  overflow: hidden;
}

.journey__sky {
  position: absolute;
  inset: 0 0 92px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 42px 42px;
}

.journey__node,
.journey__signal,
.journey__marker,
.journey__vehicle {
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.journey__node {
  z-index: 2;
  width: 44px;
  height: 44px;
  color: var(--color-primary-on-dark);
  border: 1px solid rgba(127, 178, 255, 0.5);
  border-radius: 50%;
  background: rgba(37, 99, 235, 0.18);
  animation: nodeFloat 4.5s ease-in-out infinite;
}

.journey__node--one { top: 25px; left: 16%; }
.journey__node--two { top: 72px; left: 51%; animation-delay: -1.5s; }
.journey__node--three { top: 22px; right: 13%; animation-delay: -3s; }

.journey__signal {
  width: 76px;
  height: 76px;
  border: 1px solid rgba(127, 178, 255, 0.45);
  border-radius: 50%;
  transform: translate(-16px, -16px);
  animation: signalPulse 3.2s ease-out infinite;
}

.journey__signal--one { top: 47px; left: 20%; }
.journey__signal--two { top: 94px; left: 55%; animation-delay: -1.1s; }
.journey__signal--three { top: 44px; right: 15%; animation-delay: -2.2s; }

.journey__route {
  position: absolute;
  right: 7%;
  bottom: 0;
  left: 7%;
  height: 92px;
}

.journey__route-line {
  position: absolute;
  top: 49px;
  right: 0;
  left: 0;
  height: 2px;
  background: repeating-linear-gradient(90deg, var(--color-primary-on-dark) 0 24px, transparent 24px 40px);
  opacity: 0.5;
}

.journey__vehicle {
  z-index: 3;
  top: 29px;
  left: 0;
  width: 54px;
  height: 42px;
  color: #ffffff;
  border-radius: var(--radius-md);
  background: var(--color-primary);
  box-shadow: 0 0 24px rgba(37, 99, 235, 0.55);
  animation: driveAcross 7s ease-in-out infinite;
}

.journey__marker {
  top: 39px;
  color: var(--color-primary-on-dark);
}

.journey__marker--start { left: -8px; }
.journey__marker--end { right: -8px; }

@keyframes driveAcross {
  0%, 10% { left: 0; }
  45%, 60% { left: calc(100% - 54px); }
  90%, 100% { left: 0; }
}

@keyframes signalPulse {
  0%, 100% { opacity: 0.15; transform: translate(-16px, -16px) scale(0.72); }
  45% { opacity: 0.7; transform: translate(-16px, -16px) scale(1); }
}

@keyframes nodeFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-7px); }
}

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
