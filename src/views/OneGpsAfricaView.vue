<template>
  <div class="onegps-page">
    <HeroSection
      title="OneGPS Africa Platform"
      subtitle="The ultimate White-Label GPS Tracking Software built for resellers and entrepreneurs to launch their own branded telematics business."
      badge="Reseller Platform"
      bg-image="/images/Laptop-Screen-Mockup.jpeg"
    />

    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>Launch Your Own GPS Brand</h2>
          <p>Don't spend millions building software from scratch. Partner with HiTrace and deploy our powerful telematics platform under your own domain, logo, and brand colors.</p>
        </div>

        <div class="grid grid--3">
          <FeatureCard
            v-for="(feature, index) in features"
            :key="index"
            :icon="feature.icon"
            :title="feature.title"
            :description="feature.description"
          />
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="split-layout">
          <div class="split-layout__content reveal">
            <h2>Everything You Need to Succeed</h2>
            <p>OneGPS Africa equips you with enterprise-grade administration tools to easily manage thousands of devices and multiple corporate client accounts.</p>
            <ul class="benefit-list">
              <li v-for="(benefit, index) in benefits" :key="index">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-secondary"><path d="M20 6 9 17l-5-5"/></svg>
                <span>{{ benefit }}</span>
              </li>
            </ul>
            <div style="margin-top: var(--space-8);">
              <router-link to="/contact" class="btn btn--primary">Become a Reseller</router-link>
            </div>
          </div>
          <div class="split-layout__image reveal">
            <img src="/images/16406297_rm373batch2-06-scaled.webp" alt="OneGPS Dashboard Platform" class="onegps-img" />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>How It Works</h2>
          <p>Start your telematics business in three simple steps.</p>
        </div>
        <div class="grid grid--3">
          <StepCard
            v-for="(step, index) in steps"
            :key="index"
            :number="index + 1"
            :title="step.title"
            :description="step.description"
          />
        </div>
      </div>
    </section>

    <CtaBanner
      title="Ready to Build Your Telematics Empire?"
      description="Join our network of successful resellers across Africa. Contact us for a live demo of the admin panel."
      button-text="Request White-Label Demo"
    />
  </div>
</template>

<script setup>
import HeroSection from '../components/common/HeroSection.vue'
import FeatureCard from '../components/common/FeatureCard.vue'
import StepCard from '../components/common/StepCard.vue'
import CtaBanner from '../components/common/CtaBanner.vue'
import { Palette, LayoutDashboard, Globe, ShieldCheck, Zap, Users } from 'lucide-vue-next'

const features = [
  { icon: Palette, title: '100% White-Label Branding', description: 'Fully customize the software with your own logo, domain name (e.g., track.yourbrand.com), and brand color schemes.' },
  { icon: LayoutDashboard, title: 'Master Admin Panel', description: 'Take full control. Manage billing, create client accounts, assign privileges, and oversee all active devices from a single master dashboard.' },
  { icon: Globe, title: 'Cloud Infrastructure', description: 'Hosted on lightning-fast, ultra-secure cloud servers. Experience 99.9% uptime with automated backups, so you never worry about IT.' },
  { icon: ShieldCheck, title: 'Secure Client Segregation', description: 'Create isolated sub-accounts for your clients so they only see their own vehicles, reports, and geo-fences.' },
  { icon: Zap, title: 'Zero Technical Skills Needed', description: 'We handle all backend software updates, server maintenance, and API integrations. You focus purely on sales and growth.' },
  { icon: Users, title: 'Dedicated Reseller Support', description: 'Get priority technical support from our engineering team to assist you with complex installations and client onboarding.' }
]

const benefits = [
  'Set your own retail pricing and profit margins',
  'Access hundreds of supported GPS tracker models natively',
  'Automated billing and invoicing tools for your clients',
  'Mobile apps available for iOS and Android under your brand',
  'Detailed API access for custom enterprise integrations'
]

const steps = [
  { title: 'Partner & Setup', description: 'Sign the reseller agreement. We provision your dedicated server space and apply your custom domain and branding.' },
  { title: 'Procure & Install', description: 'Purchase compatible tracking hardware at wholesale prices and install them in your clients\' vehicles.' },
  { title: 'Profit & Scale', description: 'Charge your clients recurring monthly software fees while we silently maintain the platform in the background.' }
]
</script>

<style scoped>
.onegps-img {
  width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--color-border);
}

.benefit-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-top: var(--space-6);
}

.benefit-list li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
}
</style>
