<template>
  <div class="fleet-page">
    <HeroSection
      title="Your Fleet's Efficiency and Safety"
      subtitle="From real-time GPS tracking to AI-driven fuel analytics, Hitrace provides the end-to-end visibility you need to reduce operational costs, eliminate unscheduled downtime, and scale."
      badge="Fleet Management"
      cta-text="Get Started"
      cta-link="/contact"
      bg-image="/images/truck-vehicle-with-trailers-background_600x316.webp"
    />

    <section class="section">
      <div class="container">
        <div class="fleet-overview reveal">
          <div class="fleet-overview__text">
            <h2>Fleet Maintenance & Operational Control</h2>
            <p>Fleet maintenance management solution: planning, monitoring, and expense tracking. Lower operational costs, prevent major breakdowns, and minimize time spent in service stations.</p>
            <div class="fleet-metrics-grid">
              <div class="metric-item">
                <h3>-25%</h3>
                <p>Maintenance Costs</p>
              </div>
              <div class="metric-item">
                <h3>+30%</h3>
                <p>Vehicle Lifespan</p>
              </div>
              <div class="metric-item">
                <h3>99%</h3>
                <p>On-Time Schedule</p>
              </div>
            </div>
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

    <!-- Operational Workflow Steps -->
    <section class="section section--dark">
      <div class="container">
        <div class="section-header reveal">
          <h2>Operation of the Fleet Management System</h2>
          <p>Four interconnected workflows designed to maintain vehicle readiness and operational transparency.</p>
        </div>
        <div class="grid grid--4 stagger-children">
          <StepCard v-for="(s, i) in steps" :key="s.title" :number="i+1" :title="s.title" :description="s.description" dark :is-last="i === steps.length-1" />
        </div>
      </div>
    </section>

    <!-- System Technical Capabilities & Specs -->
    <section class="section section--alt">
      <div class="container">
        <div class="section-header reveal">
          <h2>System Capabilities & Telemetry Support</h2>
          <p>Engineered to interface seamlessly with heavy trucks, construction equipment, and light commercial vehicles.</p>
        </div>
        
        <div class="capabilities reveal">
          <div class="capability-item" v-for="c in capabilities" :key="c">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
            <span>{{ c }}</span>
          </div>
        </div>

        <!-- Hardware & Protocol Compatibility Specs -->
        <div class="fleet-specs-box reveal">
          <h3>Technical Protocols & Compatibility</h3>
          <div class="grid grid--3" style="margin-top: var(--space-6);">
            <div class="spec-card">
              <h4>Vehicle Bus Interface</h4>
              <p>J1939 (Heavy duty trucks), J1708, OBD-II (ISO 15765-4 CAN), K-Line.</p>
            </div>
            <div class="spec-card">
              <h4>Sensor Input Options</h4>
              <p>RS232/RS485 digital probes, 0-10V Analog inputs, 1-Wire iButton & RFID reader.</p>
            </div>
            <div class="spec-card">
              <h4>Connectivity & Failover</h4>
              <p>4G LTE Cat-1 / Cat-M1 with 2G fallback and offline flash memory for 100,000+ records.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner
      title="Optimize Your Fleet Today"
      description="Start managing your fleet more efficiently with customized telematics."
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
  { 
    title: 'Compile a list of vehicles', 
    description: 'Catalog vehicle profiles, VINs, license plates, engine classifications, driver assignments, and fuel tank dimensions.' 
  },
  { 
    title: 'Define service frequency', 
    description: 'Configure automated triggers based on cumulative mileage (e.g. 5,000 km oil change), engine operating hours, or calendar dates.' 
  },
  { 
    title: 'Add services & tasks', 
    description: 'Assign work orders to authorized garages, log replacement parts, invoice amounts, and mechanic completion checklists.' 
  },
  { 
    title: 'Examine maintenance with reports', 
    description: 'Review total cost of ownership (TCO) dashboards, cost-per-kilometer trends, and predictive failure analysis reports.' 
  }
]

const capabilities = [
  'Availability of data regarding mileage, engine hours, services, and detailed information for each vehicle.',
  'Automated service generation based on time, mileage, and engine hours for designated vehicles.',
  'System registration of works: categories, timeframes, replacement parts, costs, and inspection outcomes.',
  'Evaluation of services conducted across fleets, vehicle categories, and selected reporting periods.',
  'Integration with ERP, accounting, and parts inventory systems via secure REST webhooks.'
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
  margin-bottom: var(--space-6);
}

.fleet-metrics-grid {
  display: flex;
  gap: var(--space-8);
  margin-top: var(--space-6);
}

.metric-item h3 {
  font-size: var(--font-size-2xl);
  color: var(--color-primary);
  font-weight: var(--font-weight-extrabold);
  margin-bottom: 2px;
}

.metric-item p {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  margin-bottom: 0;
}

.fleet-img {
  width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  object-fit: cover;
}

.capabilities {
  max-width: 860px;
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

/* Specs Box */
.fleet-specs-box {
  margin-top: var(--space-16);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
}

.fleet-specs-box h3 {
  font-size: var(--font-size-xl);
  text-align: center;
}

.spec-card {
  background: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.spec-card h4 {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  margin-bottom: var(--space-2);
}

.spec-card p {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
}

@media (max-width: 900px) {
  .fleet-overview {
    grid-template-columns: 1fr;
  }
  .fleet-metrics-grid {
    gap: var(--space-4);
  }
}
</style>
