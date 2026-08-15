<template>
  <div>
    <HeroSection title="Build, Launch, and Scale with Confidence" subtitle="Custom web development, fast deployment, and secure, scalable solutions tailored to your business goals." badge="Web Services" cta-text="Get Started" cta-link="/contact" />
    <section class="section">
      <div class="container">
        <div class="section-header reveal"><h2>Our Web Services</h2></div>
        <div class="grid grid--3 stagger-children">
          <ServiceCard v-for="s in services" :key="s.title" :icon="s.icon" :title="s.title" :description="s.description" />
        </div>
      </div>
    </section>
    <section class="section section--alt">
      <div class="container">
        <div class="section-header reveal"><h2>Industries We Serve</h2></div>
        <div class="industries-list reveal">
          <div class="industry-tag" v-for="ind in industries" :key="ind">{{ ind }}</div>
        </div>
      </div>
    </section>
    <section class="section section--dark">
      <div class="container">
        <div class="section-header reveal"><h2>Our Process</h2></div>
        <div class="grid grid--3 stagger-children">
          <StepCard v-for="(s,i) in processSteps" :key="s.title" :number="i+1" :title="s.title" :description="s.description" dark :is-last="i===processSteps.length-1" />
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="section-header reveal"><h2>Why Choose Hitrace Web Services</h2></div>
        <div class="benefits-grid stagger-children">
          <div class="benefit-item" v-for="b in benefits" :key="b"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg><span>{{ b }}</span></div>
        </div>
      </div>
    </section>
    <CtaBanner title="Let's Build Something Great Together" description="From concept to code, we deliver web solutions that drive real business results." button-text="Book a Demo" />
  </div>
</template>
<script setup>
import { Globe, Code, ShoppingCart, Plug, Wrench } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import ServiceCard from '../components/common/ServiceCard.vue'
import StepCard from '../components/common/StepCard.vue'
import CtaBanner from '../components/common/CtaBanner.vue'
const services = [
  { icon: Globe, title: 'Custom Website Development', description: 'Responsive, SEO-ready websites built to engage and convert.' },
  { icon: Code, title: 'Web Application Development', description: 'Powerful, cloud-based apps designed for scale and performance.' },
  { icon: ShoppingCart, title: 'E-commerce Solutions', description: 'Fully integrated online stores with secure payments and real-time inventory.' },
  { icon: Plug, title: 'API Development & Integration', description: 'Connect your systems with scalable, secure REST and GraphQL APIs.' },
  { icon: Wrench, title: 'Maintenance & Support', description: 'Ongoing updates, security patches, and performance monitoring.' }
]
const industries = ['E-commerce & Retail', 'Logistics & Transportation', 'Healthcare', 'Startups & Tech Firms', 'Real Estate', 'Education']
const processSteps = [
  { title: 'Discovery', description: 'Understanding your goals and audience.' },
  { title: 'Design', description: 'Wireframes and prototypes for clear vision.' },
  { title: 'Development', description: 'Clean, modern code using best practices.' },
  { title: 'Testing', description: 'Speed, security, and cross-device compatibility.' },
  { title: 'Launch', description: 'Go live with confidence and precision.' },
  { title: 'Support', description: "We're here to help post-launch." }
]
const benefits = ['Experienced full-stack developers and designers', 'Agile, client-focused approach', 'Scalable solutions for growth', 'High-speed hosting and top-tier security', 'Transparent communication and timelines']
</script>
<style scoped>
.industries-list { display: flex; flex-wrap: wrap; justify-content: center; gap: var(--space-3); }
.industry-tag { padding: 0.6rem 1.5rem; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-full); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); transition: all var(--transition-base); }
.industry-tag:hover { border-color: var(--color-primary); background: var(--color-primary-light); color: var(--color-primary); }
.benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-4); max-width: 800px; margin: 0 auto; }
.benefit-item { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-4) var(--space-5); background: var(--color-surface-alt); border-radius: var(--radius-md); font-weight: var(--font-weight-medium); transition: all var(--transition-base); }
.benefit-item:hover { background: var(--color-primary-light); transform: translateX(4px); }
.benefit-item svg { color: var(--color-secondary); flex-shrink: 0; }
</style>
