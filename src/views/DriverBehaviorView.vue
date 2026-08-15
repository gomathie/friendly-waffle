<template>
  <div>
    <HeroSection
      title="Driver Behavior Monitoring"
      subtitle="Assess driver performance by evaluating skills through penalty points for violations such as speeding, excessive acceleration, and harsh braking."
      badge="Safety"
      cta-text="Request a Demo"
      cta-link="/contact"
      bg-image="/images/autonomous-car-sensor-system-concept-safety-driverless-mode-car-control-1-scaled-1.webp"
    />

    <section class="section">
      <div class="container">
        <div class="driver-showcase reveal">
          <div class="driver-showcase__text">
            <h2>Safety, Scoring & Risk Reduction</h2>
            <p>Combine telematics metrics with intelligent scoring algorithms to benchmark driver performance. Reward safe driving and identify risk patterns before accidents occur.</p>
            <div class="grid grid--2" style="margin-top: var(--space-6); gap: var(--space-4);">
              <div class="mini-box">
                <h4>Reduced Fuel Waste</h4>
                <p>Curb aggressive acceleration and high-rev idling.</p>
              </div>
              <div class="mini-box">
                <h4>Lower Insurance Risk</h4>
                <p>Proven safety records lead to lower fleet premiums.</p>
              </div>
            </div>
          </div>
          <div class="driver-showcase__img-box">
            <img src="/images/african-american-dispatch-operator-gives-directions-gps-coordinates.webp" alt="Driver Monitoring Console" class="driver-showcase__img" />
          </div>
        </div>

        <div class="grid grid--3 stagger-children" style="margin-top: var(--space-12);">
          <FeatureCard v-for="f in features" :key="f.title" :icon="f.icon" :title="f.title" :description="f.description" />
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <div class="section-header reveal">
          <h2>Key Benefits</h2>
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
      title="Improve Driver Safety Today"
      description="Get real-time insights into driver performance and reduce fleet risk."
      button-text="Book a Demo"
    />
  </div>
</template>

<script setup>
import { Gauge, AlertTriangle, Zap, Clock, Shield, Award } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import FeatureCard from '../components/common/FeatureCard.vue'
import CtaBanner from '../components/common/CtaBanner.vue'

const features = [
  { icon: Gauge, title: 'Speed Monitoring', description: 'Ensure absolute compliance with road speed limits. Our system triggers instant alerts for excessive speeding, allowing managers to intervene before costly fines or severe accidents occur.' },
  { icon: AlertTriangle, title: 'Harsh Braking Detection', description: 'Pinpoint dangerous, aggressive braking patterns. Use hard data to proactively coach drivers, improve overall road safety, and significantly reduce wear and tear on brake pads and rotors.' },
  { icon: Zap, title: 'Rapid Acceleration Tracking', description: 'Monitor jackrabbit starts and erratic acceleration. Eliminating this aggressive driving style is proven to substantially cut fuel waste and minimize stress on the vehicle drivetrain.' },
  { icon: Clock, title: 'Idle Time Monitoring', description: 'Combat unnecessary fuel burn and emissions. Identify drivers who leave engines running during extended stops and enforce corporate anti-idling policies to drastically reduce overhead.' },
  { icon: Shield, title: 'Safety Scoring', description: 'Automatically compile comprehensive telemetry data into a straightforward 0-100 safety score for each driver, giving you a clear, objective benchmark of fleet risk levels.' },
  { icon: Award, title: 'Driver Ranking', description: 'Foster a healthy culture of competition. Rank drivers on a dynamic leaderboard and introduce gamification to incentivize and reward your safest, most efficient operators.' }
]

const benefits = [
  'Dramatically reduce accident rates, liability claims, and insurance premiums',
  'Improve fleet-wide fuel efficiency by coaching out aggressive driving habits',
  'Enhance public brand reputation by ensuring your branded vehicles are driven safely',
  'Extend the lifespan of your vehicles by minimizing harsh mechanical wear and tear',
  'Create a transparent, accountable, and highly responsible corporate driving culture'
]
</script>

<style scoped>
.driver-showcase {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: var(--space-12);
  align-items: center;
}

.driver-showcase__text h2 {
  font-size: var(--font-size-h2);
  margin-bottom: var(--space-4);
}

.driver-showcase__text p {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
}

.mini-box {
  background: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  padding: var(--space-4);
  border-radius: var(--radius-md);
}

.mini-box h4 {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  margin-bottom: var(--space-1);
}

.mini-box p {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

.driver-showcase__img {
  width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  object-fit: cover;
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
  .driver-showcase {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}
</style>
