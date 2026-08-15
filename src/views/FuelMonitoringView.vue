<template>
  <div>
    <HeroSection
      title="Fuel Monitoring"
      subtitle="Monitor fuel usage for each vehicle in your fleet. Utilize fleet fuel tracking to lower expenses, decrease CO2 emissions, and encourage fuel-efficient practices!"
      badge="Fuel Management"
      cta-text="Get Started"
      cta-link="/contact"
      bg-image="/images/real-time-fuel-monitoring.webp"
    />

    <!-- Features -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <h2>Fuel Management Features</h2>
          <p>Gain absolute control over your fleet's fuel expenditure and consumption patterns.</p>
        </div>
        <div class="grid grid--4 stagger-children">
          <FeatureCard v-for="f in features" :key="f.title" :icon="f.icon" :title="f.title" :description="f.description" />
        </div>
      </div>
    </section>

    <!-- Fuel Insights Visual Section -->
    <section class="section section--alt">
      <div class="container">
        <div class="fuel-showcase reveal">
          <div class="fuel-showcase__content">
            <span class="badge">Analytics</span>
            <h2>Automated Fuel Reports & Drain Detection</h2>
            <p>The fleet fuel monitoring system offers details on fuel refills and withdrawals, including exact date, time, location, starting and ending fuel levels, and volume.</p>
            <ul class="fuel-showcase__bullets">
              <li>Instant alerts for sudden fuel drops (siphoning/theft)</li>
              <li>Accurate tank level readings under all operational conditions</li>
              <li>Exportable audit logs for finance and tax reporting</li>
            </ul>
          </div>
          <div class="fuel-showcase__image-box">
            <img src="/images/fuel-reports.webp" alt="Fuel analytics and reports" class="fuel-showcase__img" />
          </div>
        </div>
      </div>
    </section>

    <!-- Sensor Types (Real Product Images) -->
    <section class="section section--dark">
      <div class="container">
        <div class="section-header reveal">
          <h2>How Fuel Data Reaches You</h2>
          <p>Choose the right sensor setup for your vehicle models and operating environments.</p>
        </div>
        <div class="grid grid--3 stagger-children">
          <div class="sensor-card" v-for="s in sensors" :key="s.title">
            <div class="sensor-card__img-box">
              <img :src="s.img" :alt="s.title" class="sensor-card__img" />
            </div>
            <h3 class="sensor-card__title">{{ s.title }}</h3>
            <p class="sensor-card__desc">{{ s.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner
      title="Start Saving on Fuel Today"
      description="Our specialists will show you how fuel tracking can transform your fleet."
      button-text="Book a Demo"
    />
  </div>
</template>

<script setup>
import { ShieldCheck, UserCheck, TrendingUp, Eye, Activity, Clock, Target } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import FeatureCard from '../components/common/FeatureCard.vue'
import CtaBanner from '../components/common/CtaBanner.vue'

const features = [
  { icon: ShieldCheck, title: 'Safeguard Fuel Against Theft', description: 'Implement fuel monitoring systems to identify irregularities and safeguard your assets.' },
  { icon: UserCheck, title: 'Improve Driving Culture', description: 'Combine fuel monitoring with driver behavior analysis to identify fuel-wasting habits.' },
  { icon: TrendingUp, title: 'Enhance Fuel Efficiency', description: 'Immediate insights into fuel consumption trends. Detect inefficiencies and optimize usage.' },
  { icon: Eye, title: 'Aerial Perspective', description: 'Track every ounce of filled or used fuel and understand how it impacts the budget.' },
  { icon: Activity, title: 'Real-time Control', description: 'Track fuel consumption and current tank levels with just a few clicks.' },
  { icon: Clock, title: 'Past Records', description: 'Consistently review fuel data and pinpoint areas for improvement.' },
  { icon: Target, title: 'Accuracy Throughout Projects', description: 'Receive precise data for different vehicles, regardless of landscape or project conditions.' }
]

const sensors = [
  {
    title: 'Fuel Level Sensor',
    img: '/images/fleet-fuel-management-fuel-level-sensor.webp',
    description: 'Monitors the fuel level and its fluctuations in the tank. Interfaces with the GPS tracking device through a digital output.'
  },
  {
    title: 'Fuel Consumption Sensor',
    img: '/images/fleet-fuel-management-fuel-consumption-sensor.webp',
    description: "Monitors the amount of fuel flowing through a vehicle's fuel line. Widely used in rail, air, and maritime transportation."
  },
  {
    title: 'CAN Bus Integration',
    img: '/images/fleet-fuel-management-can-bus.webp',
    description: "Transmits live fuel level information from the vehicle's onboard computer to the satellite monitoring system. Simple to install and maintain."
  }
]
</script>

<style scoped>
.fuel-showcase {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: var(--space-12);
  align-items: center;
}

.fuel-showcase__content .badge {
  margin-bottom: var(--space-3);
}

.fuel-showcase__content h2 {
  font-size: var(--font-size-h2);
  margin-bottom: var(--space-4);
}

.fuel-showcase__content p {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  margin-bottom: var(--space-6);
  line-height: var(--line-height-relaxed);
}

.fuel-showcase__bullets {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.fuel-showcase__bullets li {
  position: relative;
  padding-left: var(--space-6);
  font-size: var(--font-size-sm);
  color: var(--color-text);
  font-weight: var(--font-weight-medium);
}

.fuel-showcase__bullets li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-secondary);
  font-weight: bold;
}

.fuel-showcase__img {
  width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  object-fit: cover;
}

/* Sensor Cards */
.sensor-card {
  background: var(--color-dark-card);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  text-align: center;
  transition: all var(--transition-base);
}

.sensor-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
}

.sensor-card__img-box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 180px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-5);
  overflow: hidden;
  padding: var(--space-4);
}

.sensor-card__img {
  max-height: 100%;
  width: auto;
  object-fit: contain;
  transition: transform var(--transition-base);
}

.sensor-card:hover .sensor-card__img {
  transform: scale(1.08);
}

.sensor-card__title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-light);
  margin-bottom: var(--space-2);
}

.sensor-card__desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-dark-muted);
  line-height: var(--line-height-relaxed);
}

@media (max-width: 900px) {
  .fuel-showcase {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}
</style>
