<template>
  <div>
    <HeroSection
      title="Smart Farming Solutions"
      subtitle="A straightforward yet powerful solution for the agribusiness sector, enabling the management of field activities through telematics data."
      badge="Agriculture"
      cta-text="Request a Demo"
      cta-link="/contact"
      bg-image="/images/pexels-vahapdmr-12509457-scaled.webp"
    />

    <!-- Field Operations Highlight -->
    <section class="section">
      <div class="container">
        <div class="farming-showcase reveal">
          <div class="farming-showcase__content">
            <span class="badge">AgriTech</span>
            <h2>Field Activities & Telematics Management</h2>
            <p>Monitor plowing, harvesting, and cultivation cycles in real-time. Calculate exact acreage covered, track fuel rates across tractors, and prevent machinery misuse.</p>
            <ul class="farming-bullets">
              <li>Comprehensive field mapping & boundary geofences</li>
              <li>Engine hour tracking for preventive maintenance</li>
              <li>Real-time fuel siphoning & wastage detection</li>
            </ul>
          </div>
          <div class="farming-showcase__image-box">
            <img src="/images/field-cultivations-1024x640.webp" alt="Field Cultivations" class="farming-img" />
          </div>
        </div>

        <div class="grid grid--3 stagger-children" style="margin-top: var(--space-12);">
          <FeatureCard v-for="f in features" :key="f.title" :icon="f.icon" :title="f.title" :description="f.description" />
        </div>
      </div>
    </section>

    <!-- Visual Report Section -->
    <section class="section section--dark">
      <div class="container">
        <div class="farming-report reveal">
          <div class="farming-report__img-box">
            <img src="/images/report.webp" alt="Agricultural telematics reports" class="farming-report__img" />
          </div>
          <div class="farming-report__text">
            <h2>Actionable Agro Analytics</h2>
            <p>Generate detailed operational reports by season, machinery type, or field plots. Compare operator performance and maximize harvest yields.</p>
            <router-link to="/contact" class="btn btn--primary">Get Agri Solutions</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="section-header reveal">
          <h2>Key Benefits for Agribusiness</h2>
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
      title="Modernize Your Farm Operations"
      description="Get precise data-driven insights for your agricultural fleet."
      button-text="Book a Demo"
    />
  </div>
</template>

<script setup>
import { MapPin, Tractor, Thermometer, Droplets, BarChart3, Clock } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import FeatureCard from '../components/common/FeatureCard.vue'
import CtaBanner from '../components/common/CtaBanner.vue'

const features = [
  { icon: MapPin, title: 'Field Activity Tracking', description: 'Track all field operations in real-time including plowing, planting, and harvesting.' },
  { icon: Tractor, title: 'Equipment Management', description: 'Monitor your agricultural machinery and schedule maintenance proactively.' },
  { icon: Thermometer, title: 'Environmental Monitoring', description: 'Track temperature, humidity, and other environmental conditions affecting crops.' },
  { icon: Droplets, title: 'Fuel Optimization', description: 'Monitor fuel usage across your farming equipment to reduce costs.' },
  { icon: BarChart3, title: 'Performance Analytics', description: 'Gain insights into field productivity and equipment utilization.' },
  { icon: Clock, title: 'Work Hour Tracking', description: 'Track operator hours and optimize labor allocation across your farm.' }
]

const benefits = [
  'Increase field productivity and efficiency',
  'Reduce equipment downtime and repair costs',
  'Optimize fuel and resource consumption',
  'Track and verify all field activities',
  'Make data-driven agricultural decisions'
]
</script>

<style scoped>
.farming-showcase {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: var(--space-12);
  align-items: center;
}

.farming-showcase__content .badge {
  margin-bottom: var(--space-3);
}

.farming-showcase__content h2 {
  font-size: var(--font-size-h2);
  margin-bottom: var(--space-4);
}

.farming-showcase__content p {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  margin-bottom: var(--space-6);
  line-height: var(--line-height-relaxed);
}

.farming-bullets {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.farming-bullets li {
  position: relative;
  padding-left: var(--space-6);
  font-size: var(--font-size-sm);
  color: var(--color-text);
  font-weight: var(--font-weight-medium);
}

.farming-bullets li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-secondary);
  font-weight: bold;
}

.farming-img {
  width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  object-fit: cover;
}

.farming-report {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: var(--space-12);
  align-items: center;
}

.farming-report__img {
  width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  object-fit: cover;
}

.farming-report__text h2 {
  font-size: var(--font-size-h2);
  color: var(--color-text-light);
  margin-bottom: var(--space-4);
}

.farming-report__text p {
  font-size: var(--font-size-base);
  color: var(--color-text-dark-muted);
  margin-bottom: var(--space-8);
  line-height: var(--line-height-relaxed);
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
  .farming-showcase,
  .farming-report {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}
</style>
