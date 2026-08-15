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
  { icon: Truck, title: 'Vehicle Tracking', description: 'Live location, speed, route history, fuel usage, and driver behavior analytics.' },
  { icon: Package, title: 'Asset Tracking', description: 'Monitor valuable equipment or goods in transit with geo-fencing and movement alerts.' },
  { icon: BarChart3, title: 'Fleet Management', description: 'Full platform for dispatch, maintenance alerts, and analytics reporting.' }
]

const features = [
  { icon: MapPin, title: 'Real-Time GPS Tracking', description: 'Instant visibility into asset or vehicle locations.' },
  { icon: Map, title: 'Geofencing', description: 'Get alerts when items leave designated areas.' },
  { icon: Navigation, title: 'Route Optimization', description: 'Smarter paths for faster, cost-effective operations.' },
  { icon: UserCheck, title: 'Driver Behavior Monitoring', description: 'Track speeding, harsh braking, and idle times.' },
  { icon: FileText, title: 'Reporting & Analytics', description: 'Custom dashboards for performance insights.' },
  { icon: Smartphone, title: 'Mobile App', description: 'Monitor and control on the go.' }
]

const steps = [
  { title: 'Install Trackers', description: 'Install GPS-enabled trackers on vehicles, assets, or personnel.' },
  { title: 'Connect Platform', description: 'Connect to the Hitrace cloud platform.' },
  { title: 'Track & Monitor', description: 'Track & Monitor via web or mobile interface.' },
  { title: 'Act on Data', description: 'Act on real-time alerts and reports.' }
]

const benefits = [
  'Improved asset visibility and theft prevention',
  'Reduced fuel and maintenance costs',
  'Enhanced driver safety and compliance',
  'Better decision-making with real-time data',
  'Increased operational transparency and customer trust'
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
