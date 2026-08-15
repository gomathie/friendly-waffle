<template>
  <div>
    <HeroSection title="Driver Behavior Monitoring" subtitle="Assess driver performance by evaluating skills through penalty points for violations such as speeding, excessive acceleration, and harsh braking." badge="Safety" cta-text="Request a Demo" cta-link="/contact" />
    <section class="section">
      <div class="container">
        <div class="section-header reveal"><h2>Monitor What Matters</h2><p>This solution assesses a driver's performance by evaluating their skills through penalty points for violations. Track and improve driving habits across your fleet.</p></div>
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
    <CtaBanner title="Improve Driver Safety Today" description="Get real-time insights into driver performance and reduce fleet risk." button-text="Book a Demo" />
  </div>
</template>
<script setup>
import { Gauge, AlertTriangle, Zap, Clock, Shield, Award } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import FeatureCard from '../components/common/FeatureCard.vue'
import CtaBanner from '../components/common/CtaBanner.vue'
const features = [
  { icon: Gauge, title: 'Speed Monitoring', description: 'Track and alert on speeding violations across your fleet in real-time.' },
  { icon: AlertTriangle, title: 'Harsh Braking Detection', description: 'Identify dangerous braking patterns and coach drivers for safer habits.' },
  { icon: Zap, title: 'Rapid Acceleration Tracking', description: 'Detect excessive acceleration that wastes fuel and increases wear.' },
  { icon: Clock, title: 'Idle Time Monitoring', description: 'Track excessive idling to reduce fuel waste and emissions.' },
  { icon: Shield, title: 'Safety Scoring', description: 'Assign safety scores to each driver based on their performance data.' },
  { icon: Award, title: 'Driver Ranking', description: 'Rank drivers and incentivize good behavior with gamification.' }
]
const benefits = ['Reduce accident rates and insurance costs', 'Improve fuel efficiency through better driving habits', 'Enhance fleet safety and regulatory compliance', 'Protect your brand reputation', 'Create a culture of responsible driving']
</script>
<style scoped>
.benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-4); max-width: 800px; margin: 0 auto; }
.benefit-item { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-4) var(--space-5); background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); font-weight: var(--font-weight-medium); transition: all var(--transition-base); }
.benefit-item:hover { border-color: var(--color-primary); transform: translateX(4px); }
.benefit-item svg { color: var(--color-secondary); flex-shrink: 0; }
</style>
