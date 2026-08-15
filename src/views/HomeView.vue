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
      bg-image="/images/photo_2025-05-14_00-31-08.webp"
    />

    <!-- Partners / Integrations Banner -->
    <section class="partners-banner">
      <div class="container">
        <p class="partners-banner__label">Trusted by industry leaders & hardware providers</p>
        <div class="partners-banner__logos">
          <div class="partner-logo" v-for="partner in partners" :key="partner.name">
            <img :src="partner.img" :alt="partner.name" />
          </div>
        </div>
      </div>
    </section>

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
        <div class="home__tracker reveal" style="background-image: url('/images/truck-vehicle-with-trailers-background_600x316.webp');">
          <div class="home__tracker-overlay"></div>
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
          <div class="home__mission-image-wrapper">
            <img 
              src="/images/portrait-african-american-man-factory.webp" 
              alt="HiTrace Mission and Operations" 
              class="home__mission-img"
            />
            <div class="home__mission-badge">
              <span class="badge">About Us</span>
              <h2>Our Mission & Vision</h2>
              <p>To revolutionize the way businesses manage their fleets, providing real-time insights and actionable data that drive smarter decisions, reduce costs, and improve safety.</p>
              <router-link to="/telematics" class="btn btn--outline">Learn More About Us</router-link>
            </div>
          </div>
          <div class="home__mission-stats stagger-children">
            <div class="stat-card">
              <div class="stat-card__icon-img">
                <img src="/images/trophy.png" alt="Experience" />
              </div>
              <div class="stat-card__text">
                <h3>Experience</h3>
                <p>We have more than 15 years of experience in providing Vehicle Tracking & Fleet Management solutions.</p>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-card__icon-img">
                <img src="/images/income_13431106.png" alt="Affordability" />
              </div>
              <div class="stat-card__text">
                <h3>Affordability</h3>
                <p>We offer dependable and high-quality GPS hardware and software that remains budget-friendly for everyone.</p>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-card__icon-img">
                <img src="/images/employee.png" alt="Advanced Technologies" />
              </div>
              <div class="stat-card__text">
                <h3>Advanced Technologies</h3>
                <p>Wonderful customer support with advanced technologies and 24/7 assistance.</p>
              </div>
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
import { Truck, Radio, Home as HomeIcon, Globe, LayoutGrid, Puzzle, Cpu, Headphones, Award } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import ServiceCard from '../components/common/ServiceCard.vue'
import FeatureCard from '../components/common/FeatureCard.vue'
import CtaBanner from '../components/common/CtaBanner.vue'

const partners = [
  { name: 'Teltonika', img: '/images/telto-e1724330667289-1.png' },
  { name: 'Pilot', img: '/images/pilot-logo-new-1-e1773316299924.png' },
  { name: 'Green', img: '/images/Green0-e1773316256847.png' },
  { name: 'Industrial', img: '/images/industrial-logo_logo2.webp' },
  { name: 'XBR', img: '/images/xbr1.png' }
]

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
/* Partners Banner */
.partners-banner {
  background: var(--color-surface-alt);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-6) 0;
}

.partners-banner__label {
  text-align: center;
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
  font-weight: var(--font-weight-semibold);
}

.partners-banner__logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-8);
  flex-wrap: wrap;
}

.partner-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  filter: grayscale(1) opacity(0.7);
  transition: all var(--transition-base);
}

.partner-logo:hover {
  filter: grayscale(0) opacity(1);
  transform: translateY(-2px);
}

.partner-logo img {
  max-height: 32px;
  width: auto;
  object-fit: contain;
}

/* Tracker Banner */
.home__tracker {
  position: relative;
  text-align: center;
  padding: var(--space-16) var(--space-8);
  background-size: cover;
  background-position: center;
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.home__tracker-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(10, 22, 40, 0.9) 0%, rgba(0, 102, 255, 0.85) 100%);
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
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: var(--space-8);
}

/* Mission Section */
.home__mission {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: var(--space-12);
  align-items: center;
}

.home__mission-image-wrapper {
  position: relative;
}

.home__mission-img {
  width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  object-fit: cover;
  max-height: 480px;
}

.home__mission-badge {
  margin-top: var(--space-6);
}

.home__mission-badge .badge {
  margin-bottom: var(--space-3);
}

.home__mission-badge h2 {
  font-size: var(--font-size-h2);
  margin-bottom: var(--space-4);
}

.home__mission-badge p {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  margin-bottom: var(--space-6);
  line-height: var(--line-height-relaxed);
}

.home__mission-stats {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.stat-card {
  display: flex;
  align-items: flex-start;
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

.stat-card__icon-img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  background: var(--color-primary-light);
  flex-shrink: 0;
  padding: 8px;
}

.stat-card__icon-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.stat-card__text h3 {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-1);
}

.stat-card__text p {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
}

@media (max-width: 900px) {
  .home__mission {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}
</style>
