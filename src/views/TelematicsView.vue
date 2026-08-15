<template>
  <div class="telematics">
    <HeroSection
      title="Smarter Vehicles. Better Decisions."
      subtitle="Harness real-time data with Hitrace's advanced telematics solutions to improve fleet performance, safety, and operational efficiency."
      badge="Telematics"
      cta-text="Request a Demo"
      cta-link="/contact"
    />

    <!-- What is Telematics -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <h2>What is Telematics?</h2>
          <p>Telematics is the fusion of telecommunications and informatics—delivering data from your vehicles to your fingertips. With Hitrace, you get real-time insights into your fleet's movement, health, and driver behavior.</p>
        </div>
        <div class="grid grid--4 stagger-children">
          <FeatureCard v-for="f in features" :key="f.title" :icon="f.icon" :title="f.title" :description="f.description" />
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="section section--dark">
      <div class="container">
        <div class="section-header reveal">
          <h2>How It Works</h2>
        </div>
        <div class="grid grid--4 stagger-children">
          <StepCard v-for="(s, i) in steps" :key="s.title" :number="i + 1" :title="s.title" :description="s.description" dark :is-last="i === steps.length - 1" />
        </div>
      </div>
    </section>

    <!-- Industries -->
    <section class="section section--alt">
      <div class="container">
        <div class="section-header reveal">
          <h2>Industries We Serve</h2>
        </div>
        <div class="industries-list reveal">
          <div class="industry-tag" v-for="ind in industries" :key="ind">{{ ind }}</div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <h2>Benefits of Hitrace Telematics</h2>
        </div>
        <div class="benefits-grid stagger-children">
          <div class="benefit-item" v-for="b in benefits" :key="b">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
            <span>{{ b }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial -->
    <section class="section section--dark">
      <div class="container">
        <div class="testimonial reveal">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" class="testimonial__quote"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <blockquote class="testimonial__text">"The telematics insights from Hitrace helped us cut fuel costs by 25% and drastically improved our driver performance."</blockquote>
          <cite class="testimonial__author">Tayo E., Logistics Supervisor</cite>
        </div>
      </div>
    </section>

    <CtaBanner
      title="Unlock the Full Potential of Your Fleet"
      description="Let's transform the way you monitor, manage, and maintain your vehicles."
      button-text="Talk to an Expert"
    />
  </div>
</template>

<script setup>
import { MapPin, Settings, UserCheck, Fuel, Clock, FileText, Video, Map } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import FeatureCard from '../components/common/FeatureCard.vue'
import StepCard from '../components/common/StepCard.vue'
import CtaBanner from '../components/common/CtaBanner.vue'

const features = [
  { icon: MapPin, title: 'Live GPS Tracking', description: "Monitor every vehicle's real-time location." },
  { icon: Settings, title: 'Vehicle Diagnostics', description: 'Get instant alerts for engine faults, maintenance needs, and fuel levels.' },
  { icon: UserCheck, title: 'Driver Behavior Monitoring', description: 'Track speed, harsh braking, acceleration, and idling.' },
  { icon: Fuel, title: 'Fuel Monitoring', description: "Monitor every vehicle's fuel consumption rate." },
  { icon: Clock, title: 'Trip History & Playback', description: 'Review route histories with speed and stop reports.' },
  { icon: FileText, title: 'Custom Reports', description: 'Generate automated insights for performance, safety, and compliance.' },
  { icon: Video, title: 'AI Video Monitoring', description: 'Utilize cutting-edge AI-driven video technology to safeguard your most valuable assets.' },
  { icon: Map, title: 'Geofencing', description: 'Create custom zones and receive instant exit/entry notifications.' }
]

const steps = [
  { title: 'Install Devices', description: 'Install telematics devices in your vehicles' },
  { title: 'Transmit Data', description: "Transmit data to Hitrace's secure cloud" },
  { title: 'Access Insights', description: 'Access insights from your custom dashboard' },
  { title: 'Take Action', description: 'Take action to reduce risks and boost performance' }
]

const industries = ['Logistics & Transport', 'Public Transportation', 'Construction & Equipment Fleets', 'Corporate Vehicle Management', 'Emergency Services']

const benefits = [
  'Lower fuel and maintenance costs',
  'Improve driver safety and compliance',
  'Reduce downtime with proactive maintenance',
  'Boost productivity with smarter routing',
  'Enhance customer satisfaction through ETA accuracy'
]
</script>

<style scoped>
.industries-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-3);
}

.industry-tag {
  padding: 0.6rem 1.5rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-base);
}

.industry-tag:hover {
  border-color: var(--color-primary);
  background: var(--color-primary-light);
  color: var(--color-primary);
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
  background: var(--color-surface-alt);
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-base);
}

.benefit-item:hover {
  background: var(--color-primary-light);
  transform: translateX(4px);
}

.benefit-item svg {
  color: var(--color-secondary);
  flex-shrink: 0;
}

.testimonial {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  padding: var(--space-8);
}

.testimonial__quote {
  color: var(--color-primary);
  opacity: 0.4;
  margin-bottom: var(--space-6);
}

.testimonial__text {
  font-size: var(--font-size-xl);
  font-style: italic;
  color: var(--color-text-dark-muted);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-6);
}

.testimonial__author {
  font-style: normal;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
}
</style>
