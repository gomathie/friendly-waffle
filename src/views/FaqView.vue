<template>
  <div>
    <HeroSection title="Frequently Asked Questions" subtitle="Find answers to the most common questions about our telematics, fleet management, and IoT solutions." badge="FAQ" compact />
    <section class="section">
      <div class="container container--narrow">
        <div class="faq-list">
          <div class="faq-item reveal" v-for="(faq, i) in faqs" :key="i" :class="{ 'faq-item--open': openIndex === i }">
            <button class="faq-item__question" @click="toggle(i)">
              <span>{{ faq.q }}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="faq-item__chevron"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="faq-item__answer" v-show="openIndex === i">
              <p>{{ faq.a }}</p>
            </div>
          </div>
        </div>
        <div class="faq-cta reveal">
          <h3>Still have questions?</h3>
          <p>Our team is here to help you find the right solution for your business.</p>
          <router-link to="/contact" class="btn btn--primary">Contact Us</router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import HeroSection from '../components/common/HeroSection.vue'
const openIndex = ref(0)
const toggle = (i) => { openIndex.value = openIndex.value === i ? -1 : i }
const faqs = [
  {
    q: 'What is telematics?',
    a: 'Telematics is the fusion of telecommunications and informatics. It involves using GPS and onboard diagnostics to record vehicle movements, status, and behavior, transmitting this data to a cloud platform for analysis and reporting.'
  },
  {
    q: 'How does fuel monitoring work?',
    a: 'Our fuel management solution provides insightful reports and charts, helping you make data-driven decisions to improve overall fuel consumption, compare vehicle performance, and detect fuel theft or inefficiencies.'
  },
  {
    q: 'What industries do you serve?',
    a: 'We serve a wide range of industries including Transport & Logistics, Construction, Courier & Delivery, Service Providers, Agriculture, Waste Management, Emergency Services, Pharmaceutical, and Oil & Gas.'
  },
  {
    q: 'Do you offer white-label solutions?',
    a: 'Yes! Partners can use the fleet management platform under the Hitrace brand or opt for a customized, white-labeled solution with its own brand identity, tailored to their specific business needs.'
  },
  {
    q: 'How do I get started?',
    a: 'Simply contact us through our website or call us directly. Our team will assess your needs, recommend the right solution, and handle the complete installation and setup process for you.'
  },
  {
    q: 'What types of GPS devices do you support?',
    a: 'Hitrace integrates with most GPS device models — from small scooter trackers to complex devices with multiple inputs, CAN bus, and OBD support. We are hardware-agnostic and can work with your existing equipment.'
  },
  {
    q: 'Is there a mobile app available?',
    a: 'Yes, our platform includes a mobile app for both iOS and Android, giving you full access to tracking, alerts, and reports on the go.'
  },
  {
    q: 'How secure is my data?',
    a: 'We use enterprise-grade encryption and security protocols to ensure your fleet data is protected at all times. Our cloud infrastructure is hosted in secure data centers with 99.9% uptime guarantees.'
  }
]
</script>
<style scoped>
.faq-list { display: flex; flex-direction: column; gap: var(--space-3); margin-bottom: var(--space-16); }
.faq-item { background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); overflow: hidden; transition: all var(--transition-base); }
.faq-item--open { border-color: var(--color-primary); box-shadow: var(--shadow-card); }
.faq-item__question { display: flex; align-items: center; justify-content: space-between; width: 100%; padding: var(--space-5) var(--space-6); font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); text-align: left; color: var(--color-text); transition: color var(--transition-fast); }
.faq-item__question:hover { color: var(--color-primary); }
.faq-item__chevron { transition: transform var(--transition-base); flex-shrink: 0; color: var(--color-text-muted); }
.faq-item--open .faq-item__chevron { transform: rotate(180deg); color: var(--color-primary); }
.faq-item__answer { padding: 0 var(--space-6) var(--space-6); }
.faq-item__answer p { font-size: var(--font-size-sm); color: var(--color-text-muted); line-height: var(--line-height-relaxed); }
.faq-cta { text-align: center; padding: var(--space-10); background: var(--color-surface-alt); border-radius: var(--radius-xl); }
.faq-cta h3 { font-size: var(--font-size-xl); margin-bottom: var(--space-3); }
.faq-cta p { color: var(--color-text-muted); margin-bottom: var(--space-6); }
</style>
