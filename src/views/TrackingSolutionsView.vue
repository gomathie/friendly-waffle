<template>
  <div>
    <HeroSection
      title="Real-Time Tracking Solutions"
      subtitle="Real-time GPS tracking solutions for vehicles, assets, and personnel—engineered for control, efficiency, and security."
      badge="Tracking"
      cta-text="Book a Demo"
      cta-link="/contact"
      bg-image="/images/7434632_3664521-scaled.webp"
    />

    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <h2>Tracking Solutions</h2>
          <p>Tailored tracking configurations for any moving or stationary asset.</p>
        </div>
        <div class="grid grid--3 stagger-children">
          <ServiceCard v-for="s in trackingTypes" :key="s.title" :icon="s.icon" :title="s.title" :description="s.description" />
        </div>
      </div>
    </section>

    <!-- Dispatch & Operations Visual Showcase -->
    <section class="section section--alt">
      <div class="container">
        <div class="tracking-showcase reveal">
          <div class="tracking-showcase__img-box">
            <img 
              src="/images/african-american-dispatch-operator-gives-directions-gps-coordinates.webp" 
              alt="Dispatch and GPS Tracking Operations" 
              class="tracking-showcase__img" 
            />
          </div>
          <div class="tracking-showcase__text">
            <span class="badge">Live Visibility</span>
            <h2>Complete Control Over Remote Operations</h2>
            <p>From central dispatch consoles to mobile field apps, Hitrace equips operators with instant telemetry, automated speed breach alerts, and intelligent geofence controls.</p>
            <div class="grid grid--2" style="margin-top: var(--space-6); gap: var(--space-4);">
              <div class="mini-feat">
                <h4>99.9% Uptime</h4>
                <p>Reliable satellite & cellular fallback connections.</p>
              </div>
              <div class="mini-feat">
                <h4>Instant Alerts</h4>
                <p>SMS, email & push notification dispatch.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container">
        <div class="section-header reveal">
          <h2>Core Features</h2>
          <p>Everything you need to monitor, control, and protect.</p>
        </div>
        <div class="grid grid--3 stagger-children">
          <FeatureCard v-for="f in features" :key="f.title" :icon="f.icon" :title="f.title" :description="f.description" dark />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <h2>How It Works</h2>
        </div>
        <div class="grid grid--4 stagger-children">
          <StepCard v-for="(s,i) in steps" :key="s.title" :number="i+1" :title="s.title" :description="s.description" :is-last="i===steps.length-1" />
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="section-header reveal">
          <h2>Benefits of Hitrace Tracking</h2>
        </div>
        <div class="benefits-grid stagger-children">
          <div class="benefit-item" v-for="b in benefits" :key="b">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
            <span>{{ b }}</span>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner
      title="Gain Full Control of Your Moving World"
      description="Take the first step toward smarter tracking today."
      button-text="Book a Demo"
    />
  </div>
</template>

<script setup>
import { Truck, Package, BarChart3, MapPin, Map, Navigation, UserCheck, FileText, Smartphone } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import ServiceCard from '../components/common/ServiceCard.vue'
import FeatureCard from '../components/common/FeatureCard.vue'
import StepCard from '../components/common/StepCard.vue'
import CtaBanner from '../components/common/CtaBanner.vue'

const trackingTypes = [
  { icon: Truck, title: 'Vehicle Tracking', description: 'Real-time location monitoring, speed analysis, route history playback, fuel consumption metrics, and comprehensive driver behavior analytics designed for any vehicle type.' },
  { icon: Package, title: 'Asset Tracking', description: 'Monitor the exact location of valuable equipment, generators, or goods in transit. Utilize advanced geo-fencing and receive instant movement or tamper alerts.' },
  { icon: BarChart3, title: 'Fleet Management', description: 'A robust, centralized platform for dispatch coordination, automated maintenance scheduling, compliance tracking, and deep-dive operational analytics reporting.' }
]

const features = [
  { icon: MapPin, title: 'Real-Time GPS Tracking', description: 'Gain instant, second-by-second visibility into your entire fleet or asset inventory from any device.' },
  { icon: Map, title: 'Geofencing', description: 'Establish virtual perimeters and automatically trigger alerts the moment an asset enters or leaves a designated safe zone.' },
  { icon: Navigation, title: 'Route Optimization', description: 'Calculate and dispatch the smartest, most efficient paths to reduce mileage, cut fuel costs, and ensure faster delivery times.' },
  { icon: UserCheck, title: 'Driver Behavior Monitoring', description: 'Protect your vehicles by monitoring and scoring drivers on speeding, harsh braking, rapid cornering, and excessive idling.' },
  { icon: FileText, title: 'Reporting & Analytics', description: 'Generate custom dashboards and schedule automated reports to track ROI, fuel usage, and overall fleet performance.' },
  { icon: Smartphone, title: 'Mobile App', description: 'Stay connected on the go with our fully-featured iOS and Android mobile applications, bringing fleet control to your pocket.' }
]

const steps = [
  { title: 'Install Trackers', description: 'Our certified engineers covertly install high-precision, tamper-proof GPS trackers on your vehicles, heavy assets, or specialized personnel equipment.' },
  { title: 'Connect Platform', description: 'The hardware automatically connects to the Hitrace cloud platform, initiating a secure, encrypted stream of real-time telemetry data.' },
  { title: 'Track & Monitor', description: 'Log in via our intuitive web portal or mobile app to immediately begin tracking movements, monitoring engine health, and viewing live maps.' },
  { title: 'Act on Data', description: 'Utilize automated alerts, predictive maintenance reports, and driver scores to make immediate decisions that boost safety and profitability.' }
]

const benefits = [
  'Achieve complete asset visibility and drastically reduce the risk of theft or unauthorized use',
  'Significantly lower operational costs by cutting unnecessary fuel burn and optimizing maintenance',
  'Enhance driver safety, enforce corporate driving policies, and ensure regulatory compliance',
  'Make rapid, informed business decisions backed by real-time telematics data and historical analytics',
  'Increase customer trust and satisfaction with precise dispatching and highly accurate arrival times'
]
</script>

<style scoped>
.tracking-showcase {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: var(--space-12);
  align-items: center;
}

.tracking-showcase__img {
  width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  object-fit: cover;
}

.tracking-showcase__text .badge {
  margin-bottom: var(--space-3);
}

.tracking-showcase__text h2 {
  font-size: var(--font-size-h2);
  margin-bottom: var(--space-4);
}

.tracking-showcase__text p {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
}

.mini-feat {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: var(--space-4);
  border-radius: var(--radius-md);
}

.mini-feat h4 {
  font-size: var(--font-size-base);
  color: var(--color-primary);
  margin-bottom: var(--space-1);
}

.mini-feat p {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-4);
  max-width: 800px;
  margin: 0 auto;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-5);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-base);
}

.benefit-item:hover {
  border-color: var(--color-primary);
  transform: translateX(4px);
}

.benefit-item svg {
  color: var(--color-secondary);
  flex-shrink: 0;
}

@media (max-width: 900px) {
  .tracking-showcase {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}
</style>
