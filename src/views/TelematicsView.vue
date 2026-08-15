<template>
  <div class="telematics">
    <TelematicsAnimatedHero />

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

    <!-- Benefits with Visual Image -->
    <section class="section">
      <div class="container">
        <div class="telematics__benefits-layout reveal">
          <div class="telematics__benefits-img-box">
            <img src="/images/16406297_rm373batch2-06-scaled.webp" alt="Hitrace Telematics Technology" class="telematics__benefits-img" />
          </div>
          <div class="telematics__benefits-content">
            <h2>Benefits of Hitrace Telematics</h2>
            <p class="telematics__benefits-subtitle">Empowering organizations with visibility, predictability, and control across every vehicle.</p>
            <div class="benefits-list stagger-children">
              <div class="benefit-item" v-for="b in benefits" :key="b">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
                <span>{{ b }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial -->
    <section class="section section--dark">
      <div class="container">
        <div class="testimonial reveal">
          <div class="testimonial__avatar">
            <img src="/images/owp-people-2.jpg" alt="Tayo E." />
          </div>
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
import TelematicsAnimatedHero from '../components/common/TelematicsAnimatedHero.vue'
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

.telematics__benefits-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: var(--space-12);
  align-items: center;
}

.telematics__benefits-img-box {
  position: relative;
}

.telematics__benefits-img {
  width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  object-fit: cover;
}

.telematics__benefits-content h2 {
  font-size: var(--font-size-h2);
  margin-bottom: var(--space-3);
}

.telematics__benefits-subtitle {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  margin-bottom: var(--space-8);
  line-height: var(--line-height-relaxed);
}

.benefits-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
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

.testimonial__avatar {
  margin-bottom: var(--space-6);
}

.testimonial__avatar img {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  margin: 0 auto;
  border: 3px solid var(--color-primary);
  object-fit: cover;
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

@media (max-width: 900px) {
  .telematics__benefits-layout {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}
</style>
