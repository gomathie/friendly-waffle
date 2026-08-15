<template>
  <div>
    <HeroSection title="Simple, Transparent Pricing" subtitle="Choose the plan that fits your fleet. No hidden fees, no surprises." badge="Pricing" compact />
    <section class="section">
      <div class="container">
        <div class="pricing-grid stagger-children">
          <PricingCard v-for="plan in plans" :key="plan.tier" :tier="plan.tier" :name="plan.name" :features="plan.features" :featured="plan.featured" />
        </div>
        <div class="pricing-note reveal">
          <p>All plans include access to our cloud platform, mobile app, and dedicated support.</p>
          <router-link to="/contact" class="btn btn--outline">Contact Sales for Custom Plans</router-link>
        </div>
      </div>
    </section>
    <CtaBanner title="Not Sure Which Plan is Right for You?" description="Our team will help you find the perfect fit for your fleet size and needs." button-text="Talk to Sales" />
  </div>
</template>
<script setup>
import HeroSection from '../components/common/HeroSection.vue'
import PricingCard from '../components/common/PricingCard.vue'
import CtaBanner from '../components/common/CtaBanner.vue'
const plans = [
  {
    tier: 'Basic',
    name: 'For Small Fleets',
    featured: false,
    features: [
      'Real-time GPS Tracking',
      'Geofencing (up to 5 zones)',
      'Trip History & Playback',
      'Basic Reports',
      'Mobile App Access',
      'Email Support'
    ]
  },
  {
    tier: 'Standard',
    name: 'For Growing Businesses',
    featured: true,
    features: [
      'Everything in Basic',
      'Fuel Monitoring',
      'Driver Behavior Scoring',
      'Advanced Analytics & Reports',
      'Unlimited Geofences',
      'Priority Support',
      'API Access'
    ]
  },
  {
    tier: 'Premium',
    name: 'For Enterprise Fleets',
    featured: false,
    features: [
      'Everything in Standard',
      'AI Video Monitoring',
      'White-Label Option',
      'Custom Integrations',
      'Dedicated Account Manager',
      'SLA Guarantee',
      'On-site Training'
    ]
  }
]
</script>
<style scoped>
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}
.pricing-note {
  text-align: center;
  margin-top: var(--space-12);
}
.pricing-note p {
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  margin-bottom: var(--space-6);
}
@media (max-width: 900px) {
  .pricing-grid { grid-template-columns: 1fr; max-width: 420px; }
}
</style>
