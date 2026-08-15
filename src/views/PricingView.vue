<template>
  <div class="pricing-page">
    <HeroSection
      title="Simple, Transparent Pricing"
      subtitle="Flexible plans engineered for individual vehicle owners, growing logistics fleets, and enterprise operations. No hidden fees."
      badge="Pricing Plans"
      compact
      bg-image="/images/photo_2025-05-14_00-31-00.webp"
    />

    <section class="section">
      <div class="container">
        <!-- Billing Toggle -->
        <div class="billing-toggle reveal">
          <span :class="{ active: billingCycle === 'monthly' }">Monthly Billing</span>
          <button class="toggle-btn" @click="toggleBillingCycle" :aria-label="'Switch to ' + (billingCycle === 'monthly' ? 'Annual' : 'Monthly')">
            <span class="toggle-btn__thumb" :class="{ 'toggle-btn__thumb--annual': billingCycle === 'annual' }"></span>
          </button>
          <span :class="{ active: billingCycle === 'annual' }">
            Annual Billing <span class="discount-badge">Save 20%</span>
          </span>
        </div>

        <!-- Pricing Cards -->
        <div class="pricing-grid stagger-children">
          <div 
            v-for="plan in plans" 
            :key="plan.tier" 
            class="pricing-card hover-lift"
            :class="{ 'pricing-card--featured': plan.featured }"
          >
            <div class="pricing-card__badge" v-if="plan.featured">Most Popular</div>
            <div class="pricing-card__header">
              <h3 class="pricing-card__tier">{{ plan.tier }}</h3>
              <p class="pricing-card__name">{{ plan.name }}</p>
              <div class="pricing-card__price">
                <span class="currency">{{ plan.currency }}</span>
                <span class="amount">{{ billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice }}</span>
                <span class="period">/ vehicle / mo</span>
              </div>
              <p class="pricing-card__subtext">{{ plan.subtext }}</p>
            </div>
            
            <ul class="pricing-card__features">
              <li v-for="(feature, i) in plan.features" :key="i">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="pricing-card__check"><path d="M20 6 9 17l-5-5"/></svg>
                <span>{{ feature }}</span>
              </li>
            </ul>

            <router-link to="/contact" class="btn pricing-card__btn" :class="plan.featured ? 'btn--primary' : 'btn--outline'">
              {{ plan.ctaText }}
            </router-link>
          </div>
        </div>

        <!-- Hardware & Add-on Details -->
        <div class="pricing-addons reveal">
          <div class="section-header" style="margin-bottom: var(--space-8);">
            <h2>Hardware & Add-On Services</h2>
            <p>All plans include standard GSM connectivity, cloud storage, and platform maintenance.</p>
          </div>
          <div class="grid grid--3">
            <div class="addon-card">
              <h4>GPS Hardware Trackers</h4>
              <p class="addon-price">From GH₵ 450 <span class="text-muted">one-time</span></p>
              <p class="addon-desc">High-precision Teltonika 4G tracking devices with internal backup battery and tamper alerts.</p>
            </div>
            <div class="addon-card">
              <h4>Digital Fuel Sensors</h4>
              <p class="addon-price">From GH₵ 850 <span class="text-muted">one-time</span></p>
              <p class="addon-desc">High-accuracy capacitive level sensors with ±1% calibration for fuel theft detection.</p>
            </div>
            <div class="addon-card">
              <h4>AI Dual Dashcam</h4>
              <p class="addon-price">From GH₵ 1,200 <span class="text-muted">one-time</span></p>
              <p class="addon-desc">Forward-facing & driver-facing HD video monitoring with ADAS driver distraction warnings.</p>
            </div>
          </div>
        </div>

        <!-- Pricing FAQ -->
        <div class="pricing-faq reveal">
          <div class="section-header" style="margin-bottom: var(--space-8);">
            <h2>Frequently Asked Pricing Questions</h2>
          </div>
          <div class="grid grid--2">
            <div class="p-faq-item">
              <h4>Are there long-term contracts required?</h4>
              <p>No, our monthly plans can be cancelled at any time with 30 days notice. Annual plans provide a 20% discount and include free device installation.</p>
            </div>
            <div class="p-faq-item">
              <h4>Do you offer discounts for large fleets?</h4>
              <p>Yes! Fleets with more than 20 vehicles qualify for custom volume pricing and dedicated service level agreements (SLAs).</p>
            </div>
            <div class="p-faq-item">
              <h4>Is installation included?</h4>
              <p>Our certified technicians provide on-site installation anywhere in Ghana. Installation fees are waived on annual subscriptions.</p>
            </div>
            <div class="p-faq-item">
              <h4>What warranty is provided on devices?</h4>
              <p>All hardware comes with a 12-month replacement warranty and lifetime software maintenance.</p>
            </div>
          </div>
        </div>

        <div class="pricing-note reveal">
          <p>Need a customized multi-country or white-label fleet solution?</p>
          <router-link to="/contact" class="btn btn--primary btn--lg">Request a Custom Quote</router-link>
        </div>
      </div>
    </section>

    <CtaBanner
      title="Not Sure Which Plan is Right for You?"
      description="Our fleet specialists will analyze your vehicle operations and recommend the most cost-effective setup."
      button-text="Talk to Sales"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from '../components/common/HeroSection.vue'
import CtaBanner from '../components/common/CtaBanner.vue'

const billingCycle = ref('monthly')

const toggleBillingCycle = () => {
  billingCycle.value = billingCycle.value === 'monthly' ? 'annual' : 'monthly'
}

const plans = [
  {
    tier: 'Basic',
    name: 'Standard Tracking',
    currency: '$',
    monthlyPrice: '15',
    annualPrice: '12',
    subtext: 'Ideal for individual vehicles & small delivery vans',
    featured: false,
    ctaText: 'Get Started',
    features: [
      'Real-time GPS Live Tracking (10s refresh)',
      'Geofencing (up to 10 zones)',
      '30-Day Trip History & Route Playback',
      'Speed & Idling Alarm Notifications',
      'Mobile App (iOS & Android) + Web Portal',
      'Daily Ignition & Mileage Reports',
      'Standard Email & Phone Support'
    ]
  },
  {
    tier: 'Standard',
    name: 'Fleet & Fuel Control',
    currency: '$',
    monthlyPrice: '25',
    annualPrice: '20',
    subtext: 'Recommended for commercial fleets & logistics trucks',
    featured: true,
    ctaText: 'Choose Standard',
    features: [
      'Everything in Basic Plan',
      'Digital Fuel Monitoring & Drain Alerts',
      'Driver Behavior Scoring (Harsh braking, speeding)',
      'Automated Maintenance & Service Reminders',
      'Unlimited Geofences & Landmark Points',
      '90-Day Comprehensive Data History',
      'Restricted Area & Night-Driving Curfew Alerts',
      'REST API Access for ERP & Accounting Systems',
      'Priority Support (Phone & WhatsApp)'
    ]
  },
  {
    tier: 'Premium',
    name: 'Enterprise & AI Video',
    currency: '$',
    monthlyPrice: '45',
    annualPrice: '36',
    subtext: 'For heavy equipment, corporate fleets & enterprise transport',
    featured: false,
    ctaText: 'Contact Enterprise',
    features: [
      'Everything in Standard Plan',
      'AI Video Telematics & Dual Dashcam Streaming',
      'CAN Bus Telemetry (RPM, Engine Temp, Odometer)',
      'Driver RFID / iButton Identification',
      'Temperature Monitoring for Cold-Chain Cargo',
      'Full White-Label Portal & Custom Branding',
      '365-Day Unlimited Cloud Storage',
      'Dedicated Account Manager & 99.9% SLA',
      '24/7 Stolen Vehicle Recovery Priority Dispatch'
    ]
  }
]
</script>

<style scoped>
/* Billing Toggle */
.billing-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  margin-bottom: var(--space-12);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-muted);
}

.billing-toggle span.active {
  color: var(--color-text);
  font-weight: var(--font-weight-bold);
}

.discount-badge {
  display: inline-block;
  background: var(--color-secondary);
  color: white;
  font-size: var(--font-size-xs);
  padding: 2px 8px;
  border-radius: var(--radius-full);
  margin-left: var(--space-1);
}

.toggle-btn {
  width: 52px;
  height: 28px;
  background: var(--color-border);
  border-radius: var(--radius-full);
  position: relative;
  transition: background var(--transition-base);
  padding: 2px;
}

.toggle-btn__thumb {
  display: block;
  width: 24px;
  height: 24px;
  background: var(--color-primary);
  border-radius: 50%;
  transition: transform var(--transition-base);
}

.toggle-btn__thumb--annual {
  transform: translateX(24px);
  background: var(--color-secondary);
}

/* Pricing Grid */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
  align-items: stretch;
  max-width: 1140px;
  margin: 0 auto;
}

.pricing-card {
  position: relative;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-10) var(--space-8);
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: all var(--transition-base);
}

.pricing-card--featured {
  background: var(--color-dark);
  border-color: var(--color-primary);
  color: var(--color-text-light);
  transform: scale(1.04);
  box-shadow: 0 20px 60px rgba(0, 102, 255, 0.25);
}

.pricing-card__badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.35rem 1.25rem;
  background: var(--gradient-primary);
  color: var(--color-text-light);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: var(--radius-full);
  white-space: nowrap;
}

.pricing-card__header {
  margin-bottom: var(--space-6);
  padding-bottom: var(--space-6);
  border-bottom: 1px solid var(--color-border);
}

.pricing-card--featured .pricing-card__header {
  border-bottom-color: var(--color-border-dark);
}

.pricing-card__tier {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-extrabold);
  margin-bottom: var(--space-1);
}

.pricing-card__name {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-4);
}

.pricing-card__price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 2px;
  margin-bottom: var(--space-2);
}

.pricing-card__price .currency {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
}

.pricing-card__price .amount {
  font-size: 3rem;
  font-weight: var(--font-weight-extrabold);
  line-height: 1;
}

.pricing-card__price .period {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

.pricing-card--featured .pricing-card__price .period {
  color: var(--color-text-dark-muted);
}

.pricing-card__subtext {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

.pricing-card--featured .pricing-card__subtext {
  color: var(--color-text-dark-muted);
}

.pricing-card__features {
  flex: 1;
  margin-bottom: var(--space-8);
  text-align: left;
}

.pricing-card__features li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  font-size: var(--font-size-sm);
  border-bottom: 1px solid rgba(0,0,0,0.04);
}

.pricing-card--featured .pricing-card__features li {
  border-bottom-color: rgba(255,255,255,0.06);
  color: var(--color-text-dark-muted);
}

.pricing-card__check {
  color: var(--color-secondary);
  flex-shrink: 0;
  margin-top: 2px;
}

.pricing-card__btn {
  width: 100%;
}

/* Addons Section */
.pricing-addons {
  margin-top: var(--space-20);
  background: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-12) var(--space-8);
}

.addon-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition: all var(--transition-base);
}

.addon-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

.addon-card h4 {
  font-size: var(--font-size-base);
  margin-bottom: var(--space-2);
}

.addon-price {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--space-2);
}

.addon-desc {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
}

/* Pricing FAQ */
.pricing-faq {
  margin-top: var(--space-16);
}

.p-faq-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.p-faq-item h4 {
  font-size: var(--font-size-base);
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.p-faq-item p {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
}

.pricing-note {
  text-align: center;
  margin-top: var(--space-16);
}

.pricing-note p {
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  margin-bottom: var(--space-6);
}

@media (max-width: 960px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 480px;
  }
  .pricing-card--featured {
    transform: scale(1);
  }
}
</style>
