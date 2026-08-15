<template>
  <div>
    <HeroSection title="IoT & Smart Home Solutions" subtitle="Install smart sensors, cameras, and controllers. Advanced smart home security systems featuring real-time monitoring, remote access, and automated alerts." badge="Smart Living" cta-text="Request a Demo" cta-link="/contact" />
    <section class="section">
      <div class="container">
        <div class="section-header reveal"><h2>Smart Home Features</h2></div>
        <div class="grid grid--4 stagger-children">
          <FeatureCard v-for="f in features" :key="f.title" :icon="f.icon" :title="f.title" :description="f.description" />
        </div>
      </div>
    </section>
    <section class="section section--dark">
      <div class="container">
        <div class="section-header reveal"><h2>How It Works</h2></div>
        <div class="grid grid--4 stagger-children">
          <StepCard v-for="(s,i) in steps" :key="s.title" :number="i+1" :title="s.title" :description="s.description" dark :is-last="i===steps.length-1" />
        </div>
      </div>
    </section>
    <section class="section section--alt">
      <div class="container">
        <div class="section-header reveal"><h2>Why Choose Hitrace IoT & Smart Home Solutions?</h2></div>
        <div class="benefits-grid stagger-children">
          <div class="benefit-item" v-for="b in benefits" :key="b"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg><span>{{ b }}</span></div>
        </div>
      </div>
    </section>
    <section class="section section--dark">
      <div class="container">
        <div class="testimonial reveal">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" class="testimonial__quote"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <blockquote class="testimonial__text">"Hitrace made our home smart—easy to control and totally secure."</blockquote>
          <cite class="testimonial__author">— Amara K., Homeowner</cite>
        </div>
      </div>
    </section>
    <CtaBanner title="Ready to Make Your Home Smarter?" description="Connect with our team to build a custom smart home system today." button-text="Contact Us" />
  </div>
</template>
<script setup>
import { Cog, Smartphone, Zap, Shield } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import FeatureCard from '../components/common/FeatureCard.vue'
import StepCard from '../components/common/StepCard.vue'
import CtaBanner from '../components/common/CtaBanner.vue'
const features = [
  { icon: Cog, title: 'Smart Automation', description: 'Schedule lighting, climate, and appliances to suit your lifestyle.' },
  { icon: Smartphone, title: 'Remote Control', description: 'Manage devices from your phone—anytime, anywhere.' },
  { icon: Zap, title: 'Energy Efficiency', description: 'Track energy usage and reduce utility costs.' },
  { icon: Shield, title: 'Home Security', description: 'Live surveillance, smart locks, and real-time alerts to keep your home secure.' }
]
const steps = [
  { title: 'Install Devices', description: 'Install smart sensors, cameras, and controllers.' },
  { title: 'Connect Platform', description: 'Connect via secure cloud-powered IoT platform.' },
  { title: 'Control & Monitor', description: 'Control and monitor from your phone or voice assistant.' },
  { title: 'Automate', description: 'Automate based on your preferences and routines.' }
]
const benefits = ['Simple setup and seamless integration', 'Scalable for homes and smart buildings', 'End-to-end support and customization', 'Secure, encrypted device communication', 'Affordable, future-ready technology']
</script>
<style scoped>
.benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-4); max-width: 800px; margin: 0 auto; }
.benefit-item { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-4) var(--space-5); background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); font-weight: var(--font-weight-medium); transition: all var(--transition-base); }
.benefit-item:hover { border-color: var(--color-primary); transform: translateX(4px); }
.benefit-item svg { color: var(--color-secondary); flex-shrink: 0; }
.testimonial { text-align: center; max-width: 700px; margin: 0 auto; padding: var(--space-8); }
.testimonial__quote { color: var(--color-primary); opacity: 0.4; margin-bottom: var(--space-6); }
.testimonial__text { font-size: var(--font-size-xl); font-style: italic; color: var(--color-text-dark-muted); line-height: var(--line-height-relaxed); margin-bottom: var(--space-6); }
.testimonial__author { font-style: normal; font-weight: var(--font-weight-semibold); color: var(--color-text-light); font-size: var(--font-size-sm); }
</style>
