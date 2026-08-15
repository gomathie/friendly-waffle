<template>
  <div>
    <HeroSection title="Perfect Fit for Any Industry" subtitle="Manage your drivers and vehicles with ease, as well as ensure compliance and safety." badge="Industries" compact cta-text="Get Started" cta-link="/contact" />
    <section class="section">
      <div class="container">
        <div class="grid grid--3 stagger-children">
          <div class="industry-card hover-lift" v-for="ind in industries" :key="ind.title">
            <div class="industry-card__icon"><component :is="ind.icon" :size="28" /></div>
            <h3 class="industry-card__title">{{ ind.title }}</h3>
            <p class="industry-card__desc">{{ ind.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <CtaBanner title="Find Your Industry Solution" description="Contact us for a tailored fleet management plan." button-text="Book a Demo" />
  </div>
</template>
<script setup>
import { Truck, HardHat, Package, Briefcase, Wheat, Trash2, Siren, Pill, Droplets } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import CtaBanner from '../components/common/CtaBanner.vue'
const industries = [
  { icon: Truck, title: 'Transport & Logistics', description: 'Manage your drivers and vehicles with ease, as well as ensure compliance and safety.' },
  { icon: HardHat, title: 'Construction', description: 'Protect and maintain your assets, easily calculate costs, and manage workers.' },
  { icon: Package, title: 'Courier & Delivery', description: "Track your vehicles' live locations, optimise fuel consumption, fleet efficiency, and size." },
  { icon: Briefcase, title: 'Service Providers', description: 'Make work easier for every department – managers, field employees, and accountants.' },
  { icon: Wheat, title: 'Agriculture', description: 'Increase safety and efficiency, speed up administrative tasks and maintenance.' },
  { icon: Trash2, title: 'Waste Management', description: 'Achieve better sustainability, fewer accidents, and more efficient back-office operations.' },
  { icon: Siren, title: 'Emergency Services', description: 'Enhance Emergency Response, Optimise Route, & Monitor Driver Behaviour.' },
  { icon: Pill, title: 'Pharmaceutical', description: 'Control Temperature, Manage Drivers, & Track Vehicle in Real-time.' },
  { icon: Droplets, title: 'Oil & Gas', description: 'Control Temperature in Real-Time, Improve Visibility, & Safeguard Cargo.' }
]
</script>
<style scoped>
.industry-card { background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: var(--space-8); text-align: center; transition: all var(--transition-base); }
.industry-card:hover { border-color: var(--color-primary); }
.industry-card__icon { display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 64px; border-radius: var(--radius-lg); background: var(--color-primary-light); color: var(--color-primary); margin-bottom: var(--space-5); transition: all var(--transition-base); }
.industry-card:hover .industry-card__icon { background: var(--gradient-primary); color: white; transform: scale(1.1); }
.industry-card__title { font-size: var(--font-size-h3); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-3); }
.industry-card__desc { font-size: var(--font-size-sm); color: var(--color-text-muted); line-height: var(--line-height-relaxed); }
</style>
