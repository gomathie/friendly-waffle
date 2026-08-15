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
  { icon: MapPin, title: 'Live GPS Tracking', description: "Monitor every vehicle's real-time location with pinpoint accuracy. Our advanced satellite tracking ensures you always know the exact position, route history, and ETA of your assets, updating every few seconds." },
  { icon: Settings, title: 'Vehicle Diagnostics', description: 'Prevent breakdowns before they happen. Get instant, automated alerts for engine faults, battery voltage drops, scheduled maintenance needs, and critical fluid levels directly from the vehicle CAN bus.' },
  { icon: UserCheck, title: 'Driver Behavior Monitoring', description: 'Promote a culture of safety. Track and score drivers based on speeding, harsh braking, rapid acceleration, and excessive idling to reduce accidents and lower insurance premiums.' },
  { icon: Fuel, title: 'Fuel Monitoring', description: "Stop fuel theft and optimize consumption. High-precision sensors monitor every vehicle's fuel level in real-time, instantly notifying you of unauthorized drains or inefficient fuel usage rates." },
  { icon: Clock, title: 'Trip History & Playback', description: 'Review comprehensive route histories with detailed speed profiles and stop durations. Replay historical trips on the map to verify driver logs and investigate disputes.' },
  { icon: FileText, title: 'Custom Reports', description: 'Generate automated, actionable insights. Schedule daily, weekly, or monthly reports on fleet performance, safety scores, and regulatory compliance, delivered straight to your inbox.' },
  { icon: Video, title: 'AI Video Monitoring', description: 'Safeguard your most valuable assets with cutting-edge AI dashcams. Capture forward-facing and driver-facing video events triggered by harsh driving or distracted behavior.' },
  { icon: Map, title: 'Geofencing', description: 'Create custom virtual boundaries around depots, client sites, or restricted areas. Receive instant push notifications the moment a vehicle enters or exits a designated zone.' }
]

const steps = [
  { title: 'Install Devices', description: 'Our certified technicians seamlessly install robust, tamper-proof telematics hardware into your vehicles, ensuring zero disruption to your daily operations.' },
  { title: 'Transmit Data', description: "The hardware continuously transmits encrypted telemetry data over secure cellular networks directly to Hitrace's high-availability cloud infrastructure." },
  { title: 'Access Insights', description: 'Log into your intuitive, customized web dashboard or mobile app from anywhere in the world to view real-time fleet metrics and interactive maps.' },
  { title: 'Take Action', description: 'Leverage data-driven insights to proactively schedule maintenance, coach underperforming drivers, optimize dispatch routes, and ultimately reduce operational risks.' }
]

const industries = ['Logistics & Transport', 'Public Transportation', 'Construction & Equipment Fleets', 'Corporate Vehicle Management', 'Emergency Services', 'Cold Chain & Refrigerated Transport', 'Agriculture & Farming Equipment', 'Waste Management & Utilities']

const benefits = [
  'Significantly lower fuel consumption and ongoing maintenance costs',
  'Improve driver safety records and ensure strict regulatory compliance',
  'Reduce unexpected vehicle downtime with predictive, proactive maintenance',
  'Boost daily operational productivity with smarter, data-backed routing',
  'Enhance customer satisfaction and trust through precise ETA accuracy'
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
