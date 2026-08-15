<template>
  <div class="home">
    <!-- Hero -->
    <HeroSection
      title="Cutting-Edge Fleet & Technology Solutions"
      subtitle="Our cutting-edge technologies optimize all business processes to give the highest efficiency. The best solutions you can always trust!"
      cta-text="Book a Demo"
      cta-link="/contact"
      secondary-text="Explore Services"
      secondary-link="/telematics"
    />

    <!-- Services Grid -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <h2>Our Solutions</h2>
          <p>Comprehensive technology solutions tailored for your business needs</p>
        </div>
        <div class="grid grid--4 stagger-children">
          <ServiceCard
            v-for="service in services"
            :key="service.title"
            :icon="service.icon"
            :title="service.title"
            :description="service.description"
            :link="service.link"
          />
        </div>
      </div>
    </section>

    <!-- Partner Features -->
    <section class="section section--dark">
      <div class="container">
        <div class="section-header reveal">
          <h2>Why Partner With Hitrace</h2>
          <p>Everything you need to scale your fleet operations</p>
        </div>
        <div class="grid grid--3 stagger-children">
          <FeatureCard
            v-for="feature in partnerFeatures"
            :key="feature.title"
            :icon="feature.icon"
            :title="feature.title"
            :description="feature.description"
            dark
          />
        </div>
      </div>
    </section>

    <!-- Tracker Installation CTA -->
    <section class="section section--alt">
      <div class="container">
        <div class="home__tracker reveal">
          <div class="home__tracker-content">
            <h2>Interested in a tracker installation?</h2>
            <p>Talk to us today</p>
            <router-link to="/contact" class="btn btn--primary btn--lg">Book a Demo</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="section">
      <div class="container">
        <div class="home__mission reveal">
          <div class="home__mission-text">
            <span class="badge">About Us</span>
            <h2>Our Mission & Vision</h2>
            <p>To revolutionize the way businesses manage their fleets, providing real-time insights and actionable data that drive smarter decisions, reduce costs, and improve safety.</p>
            <router-link to="/" class="btn btn--outline">Learn More About Us</router-link>
          </div>
          <div class="home__mission-stats stagger-children">
            <div class="stat-card">
              <div class="stat-card__icon">
                <Award :size="28" />
              </div>
              <h3>Experience</h3>
              <p>We have more than 15 years of experience in providing Vehicle Tracking & Fleet Management solutions.</p>
            </div>
            <div class="stat-card">
              <div class="stat-card__icon">
                <DollarSign :size="28" />
              </div>
              <h3>Affordability</h3>
              <p>We offer dependable and high-quality GPS hardware and software that remains budget-friendly for everyone.</p>
            </div>
            <div class="stat-card">
              <div class="stat-card__icon">
                <Zap :size="28" />
              </div>
              <h3>Advanced Technologies</h3>
              <p>Wonderful customer support with advanced technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaBanner
      title="Ready to Get Started?"
      description="Let's transform the way you monitor, manage, and maintain your fleet."
      button-text="Book a Demo"
      link="/contact"
    />
  </div>
</template>

<script setup>
import { Truck, Radio, Home as HomeIcon, Globe, LayoutGrid, Puzzle, Cpu, Headphones, Award, DollarSign, Zap } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import ServiceCard from '../components/common/ServiceCard.vue'
import FeatureCard from '../components/common/FeatureCard.vue'
import CtaBanner from '../components/common/CtaBanner.vue'

const services = [
  {
    icon: Truck,
    title: 'Fleet / Fuel Management',
    description: 'Fuel represents a significant cost for a fleet. A comprehensive solution is necessary to effectively track and manage fuel usage and the fleet\'s activities.',
    link: '/fleet-management'
  },
  {
    icon: Radio,
    title: 'Telematics',
    description: 'Gain essential insights for effective fleet or asset management by obtaining precise, current information on the locations of vehicles, assets, and personnel.',
    link: '/telematics'
  },
  {
    icon: HomeIcon,
    title: 'IoT and Smart Homes',
    description: 'Advanced smart home security systems, featuring real-time monitoring, remote access, and automated alerts, ensuring your home and family are safe and secure.',
    link: '/iot-and-smart-homes'
  },
  {
    icon: Globe,
    title: 'Web Services',
    description: 'We deliver custom web solutions, from stunning website designs to fully functional e-commerce stores with expert digital and social media management.',
    link: '/web-services'
  }
]

const partnerFeatures = [
  {
    icon: LayoutGrid,
    title: 'Perfect fit for any industry',
    description: 'The Hitrace fleet management software fits diverse projects, from real-time fleet tracking to full digitalization and business intelligence, delivering valuable insights for strategic growth.'
  },
  {
    icon: Puzzle,
    title: 'Seamless API Integrations',
    description: 'Seamlessly transmit processed data to visualization tools and external systems through APIs. Build a tailored solution and integrate with ERP, BI, accounting, and more.'
  },
  {
    icon: Cpu,
    title: 'Hardware-Agnostic Solution',
    description: 'Hitrace integrates with most GPS device models — from small scooter trackers to complex devices with multiple inputs, CAN bus, and OBD support.'
  },
  {
    icon: Headphones,
    title: 'Technical Consulting',
    description: 'Partners benefit from technical support in five languages, project implementation assistance, expert-led training sessions, and certification opportunities.'
  },
  {
    icon: Globe,
    title: 'White-Labeling',
    description: 'Partners can use the fleet management platform under the Hitrace brand or opt for a customized, white-labeled solution with its own brand identity.'
  },
  {
    icon: Award,
    title: 'Hitrace Community',
    description: 'The largest network of telematics and IoT experts. A platform for knowledge exchange, technology sharing, and collaborative problem-solving.'
  }
]
</script>

<style scoped>
.home__tracker {
  text-align: center;
  padding: var(--space-16) var(--space-8);
  background: var(--gradient-dark);
  border-radius: var(--radius-xl);
  position: relative;
  overflow: hidden;
}

.home__tracker::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 250px;
  background: radial-gradient(ellipse, rgba(0, 102, 255, 0.12) 0%, transparent 70%);
}

.home__tracker-content {
  position: relative;
  z-index: 1;
}

.home__tracker h2 {
  font-size: var(--font-size-h2);
  color: var(--color-text-light);
  margin-bottom: var(--space-3);
}

.home__tracker p {
  font-size: var(--font-size-lg);
  color: var(--color-text-dark-muted);
  margin-bottom: var(--space-8);
}

/* Mission Section */
.home__mission {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
}

.home__mission-text .badge {
  margin-bottom: var(--space-4);
}

.home__mission-text h2 {
  font-size: var(--font-size-h2);
  margin-bottom: var(--space-6);
}

.home__mission-text p {
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  margin-bottom: var(--space-8);
  line-height: var(--line-height-relaxed);
}

.home__mission-stats {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.stat-card {
  display: flex;
  gap: var(--space-4);
  padding: var(--space-6);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.stat-card:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-card);
  transform: translateX(4px);
}

.stat-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  background: var(--color-primary-light);
  color: var(--color-primary);
  flex-shrink: 0;
}

.stat-card h3 {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-2);
}

.stat-card p {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
}

@media (max-width: 768px) {
  .home__mission {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}
</style>
