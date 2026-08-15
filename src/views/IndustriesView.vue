<template>
  <div>
    <HeroSection
      title="Perfect Fit for Any Industry"
      subtitle="Manage your drivers and vehicles with ease, as well as ensure compliance and safety across diverse sectors."
      badge="Industries"
      cta-text="Get Started"
      cta-link="/contact"
      bg-image="/images/hitrcae.com-construction-500x332-1.webp"
    />

    <section class="section">
      <div class="container">
        <div class="grid grid--3 stagger-children">
          <div class="industry-card hover-lift" v-for="ind in industries" :key="ind.title">
            <div class="industry-card__image-container">
              <img :src="ind.img" :alt="ind.title" class="industry-card__img" />
              <div class="industry-card__icon-badge">
                <component :is="ind.icon" :size="20" />
              </div>
            </div>
            <div class="industry-card__content">
              <h3 class="industry-card__title">{{ ind.title }}</h3>
              <p class="industry-card__desc">{{ ind.description }}</p>
              <router-link to="/contact" class="industry-card__link">
                Learn More 
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner
      title="Find Your Industry Solution"
      description="Contact us for a tailored fleet management plan."
      button-text="Book a Demo"
    />
  </div>
</template>

<script setup>
import { Truck, HardHat, Package, Briefcase, Wheat, Trash2, Siren, Pill, Droplets } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import CtaBanner from '../components/common/CtaBanner.vue'

const industries = [
  {
    icon: Truck,
    title: 'Transport & Logistics',
    img: '/images/Trucks-parked-lined-up-_-Premium-Photo.webp',
    description: 'Manage your drivers and vehicles with ease, as well as ensure compliance and safety.'
  },
  {
    icon: HardHat,
    title: 'Construction',
    img: '/images/hitrcae.com-construction-500x332-1.webp',
    description: 'Protect and maintain your assets, easily calculate costs, and manage workers.'
  },
  {
    icon: Package,
    title: 'Courier & Delivery',
    img: '/images/ad426e65-eaaf-442d-ad8e-e9d6777351cf.webp',
    description: "Track your vehicles' live locations, optimise fuel consumption, fleet efficiency, and size."
  },
  {
    icon: Briefcase,
    title: 'Service Providers',
    img: '/images/pexels-oleksandr-p-1031698-1-500x332-1.webp',
    description: 'Make work easier for every department – managers, field employees, and accountants.'
  },
  {
    icon: Wheat,
    title: 'Agriculture',
    img: '/images/tractor-agricultural-machine-cultivating-field-500x332-1.webp',
    description: 'Increase safety and efficiency, speed up administrative tasks and maintenance.'
  },
  {
    icon: Trash2,
    title: 'Waste Management',
    img: '/images/06f687e3-15d6-4a37-b4e4-1b75687a8e69-500x332-1.webp',
    description: 'Achieve better sustainability, fewer accidents, and more efficient back-office operations.'
  },
  {
    icon: Siren,
    title: 'Emergency Services',
    img: '/images/PTS-Vehicle-Hire-Berkshire-_-Ambulance-Hire-in-Berkshire.webp',
    description: 'Enhance Emergency Response, Optimise Route, & Monitor Driver Behaviour.'
  },
  {
    icon: Pill,
    title: 'Pharmaceutical',
    img: '/images/Pills-And-Capsules-In-The-Shopping-Cart-Medicine-Health-Pills-PNG-Transparent-Image-and-Clipart-for-Free-Download.webp',
    description: 'Control Temperature, Manage Drivers, & Track Vehicle in Real-time.'
  },
  {
    icon: Droplets,
    title: 'Oil & Gas',
    img: '/images/12e810a2-d2b3-4a64-84f8-571a1b423895.webp',
    description: 'Control Temperature in Real-Time, Improve Visibility, & Safeguard Cargo.'
  }
]
</script>

<style scoped>
.industry-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-base);
}

.industry-card:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-card-hover);
}

.industry-card__image-container {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: var(--color-dark);
}

.industry-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.industry-card:hover .industry-card__img {
  transform: scale(1.08);
}

.industry-card__icon-badge {
  position: absolute;
  bottom: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.industry-card__content {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.industry-card__title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-2);
}

.industry-card__desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
  flex: 1;
}

.industry-card__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  transition: gap var(--transition-fast);
}

.industry-card__link:hover {
  gap: var(--space-3);
}
</style>
