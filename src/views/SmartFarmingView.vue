<template>
  <div>
    <HeroSection title="Smart Farming Solutions" subtitle="A straightforward yet powerful solution for the agribusiness sector, enabling the management of field activities through telematics data." badge="Agriculture" cta-text="Request a Demo" cta-link="/contact" />
    <section class="section">
      <div class="container">
        <div class="section-header reveal"><h2>Agriculture Fleet Management</h2><p>Manage your agricultural equipment and field activities with precision telematics data.</p></div>
        <div class="grid grid--3 stagger-children">
          <FeatureCard v-for="f in features" :key="f.title" :icon="f.icon" :title="f.title" :description="f.description" />
        </div>
      </div>
    </section>
    <section class="section section--alt">
      <div class="container">
        <div class="section-header reveal"><h2>Key Benefits</h2></div>
        <div class="benefits-grid stagger-children">
          <div class="benefit-item" v-for="b in benefits" :key="b"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg><span>{{ b }}</span></div>
        </div>
      </div>
    </section>
    <CtaBanner title="Modernize Your Farm Operations" description="Get precise data-driven insights for your agricultural fleet." button-text="Book a Demo" />
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
const benefits = ['Increase field productivity and efficiency', 'Reduce equipment downtime and repair costs', 'Optimize fuel and resource consumption', 'Track and verify all field activities', 'Make data-driven agricultural decisions']
</script>
<style scoped>
.benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-4); max-width: 800px; margin: 0 auto; }
.benefit-item { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-4) var(--space-5); background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); font-weight: var(--font-weight-medium); transition: all var(--transition-base); }
.benefit-item:hover { border-color: var(--color-primary); transform: translateX(4px); }
.benefit-item svg { color: var(--color-secondary); flex-shrink: 0; }
</style>
