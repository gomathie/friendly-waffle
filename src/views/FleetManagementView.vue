<template>
  <div>
    <HeroSection
      title="Your Fleet's Efficiency and Safety"
      subtitle="From real-time GPS tracking to AI-driven fuel analytics, Hitrace provides the end-to-end visibility you need to reduce costs and scale your operations."
      badge="Fleet Management"
      cta-text="Get Started"
      cta-link="/contact"
      bg-image="/images/truck-vehicle-with-trailers-background_600x316.webp"
    />

    <section class="section">
      <div class="container">
        <div class="fleet-overview reveal">
          <div class="fleet-overview__text">
            <h2>Fleet Management Overview</h2>
            <p>Fleet maintenance management solution: planning, monitoring, and expense tracking. Lower operational costs, prevent major breakdowns, and minimize time spent in service stations.</p>
          </div>
          <div class="fleet-overview__image">
            <img src="/images/11754543_4804443-scaled.webp" alt="Fleet Operations" class="fleet-img" />
          </div>
        </div>

        <div class="grid grid--2 stagger-children" style="margin-top: var(--space-12);">
          <FeatureCard v-for="f in features" :key="f.title" :icon="f.icon" :title="f.title" :description="f.description" />
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container">
        <div class="section-header reveal">
          <h2>Operation of the Fleet Management System</h2>
          <p>Four simple steps to streamline every vehicle in your fleet.</p>
        </div>
        <div class="grid grid--4 stagger-children">
          <StepCard v-for="(s, i) in steps" :key="s.title" :number="i+1" :title="s.title" :description="s.description" dark :is-last="i === steps.length-1" />
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="section-header reveal">
          <h2>System Capabilities</h2>
        </div>
        <div class="capabilities reveal">
          <div class="capability-item" v-for="c in capabilities" :key="c">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
            <span>{{ c }}</span>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner
      title="Optimize Your Fleet Today"
      description="Start managing your fleet more efficiently."
      button-text="Book a Demo"
    />
  </div>
</template>

<script setup>
import { Users, AlertTriangle, BarChart3, RefreshCw } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import FeatureCard from '../components/common/FeatureCard.vue'
import StepCard from '../components/common/StepCard.vue'
import CtaBanner from '../components/common/CtaBanner.vue'

const features = [
  { icon: Users, title: 'Oversee Multi-Level Fleets', description: 'Define complex user hierarchies and granular access permissions. Allocate specific responsibilities to branch managers or dispatchers while maintaining a unified global view.' },
  { icon: AlertTriangle, title: 'Critical Event Management', description: 'Respond instantly to overdue services, unauthorized vehicle use, or sudden financial spikes. Our dashboard prioritizes high-impact alerts.' },
  { icon: BarChart3, title: 'Optimize Asset Utilization', description: 'Strategically organize workloads based on live vehicle health data. Identify inoperable units early and redistribute tasks.' },
  { icon: RefreshCw, title: 'Data-Driven Asset Renewal', description: 'Use detailed breakdown analytics to evaluate vehicle ROI. Pinpoint high-mileage assets that have become financial liabilities.' }
]

const steps = [
  { title: 'Compile a list of vehicles', description: 'Register assets, serials, and assignment profiles.' },
  { title: 'Define service frequency', description: 'Set maintenance intervals by miles, hours, or dates.' },
  { title: 'Add services & tasks', description: 'Schedule service stations, parts, and technician checklists.' },
  { title: 'Examine maintenance with reports', description: 'Review total cost of ownership and vehicle uptime.' }
]

const capabilities = [
  'Availability of data regarding mileage, engine hours, services, and detailed information for each vehicle.',
  'Automated service generation based on time, mileage, and engine hours for the designated vehicles.',
  'System registration of works: categories, timeframes, replacement parts, costs, and outcomes.',
  'Evaluation of the services conducted by fleets, vehicles, and periods.'
]
</script>

<style scoped>
.fleet-overview {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: var(--space-10);
  align-items: center;
}

.fleet-overview__text h2 {
  font-size: var(--font-size-h2);
  margin-bottom: var(--space-4);
}

.fleet-overview__text p {
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
}

.fleet-img {
  width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  object-fit: cover;
}

.capabilities {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.capability-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-5);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  transition: all var(--transition-base);
}

.capability-item:hover {
  border-color: var(--color-primary);
  transform: translateX(4px);
}

.capability-item svg {
  color: var(--color-secondary);
  flex-shrink: 0;
  margin-top: 2px;
}

@media (max-width: 900px) {
  .fleet-overview {
    grid-template-columns: 1fr;
  }
}
</style>
