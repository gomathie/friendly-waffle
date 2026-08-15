<template>
  <div>
    <HeroSection title="Fuel Monitoring" subtitle="Monitor fuel usage for each vehicle in your fleet. Utilize fleet fuel tracking to lower expenses, decrease CO2 emissions, and encourage fuel-efficient practices!" badge="Fuel Management" cta-text="Get Started" cta-link="/contact" />
    <section class="section">
      <div class="container">
        <div class="section-header reveal"><h2>Fuel Management Features</h2></div>
        <div class="grid grid--4 stagger-children">
          <FeatureCard v-for="f in features" :key="f.title" :icon="f.icon" :title="f.title" :description="f.description" />
        </div>
      </div>
    </section>
    <section class="section section--dark">
      <div class="container">
        <div class="section-header reveal"><h2>How Fuel Data Reaches You</h2><p>The fleet fuel monitoring system offers details on fuel refills and withdrawals, including exact date, time, location, starting and ending fuel levels, and volume.</p></div>
        <div class="grid grid--3 stagger-children">
          <FeatureCard v-for="s in sensors" :key="s.title" :icon="s.icon" :title="s.title" :description="s.description" dark />
        </div>
      </div>
    </section>
    <CtaBanner title="Start Saving on Fuel Today" description="Our specialists will show you how fuel tracking can transform your fleet." button-text="Book a Demo" />
  </div>
</template>
<script setup>
import { ShieldCheck, UserCheck, TrendingUp, Eye, Activity, Clock, Target, Gauge, Database, Wifi } from 'lucide-vue-next'
import HeroSection from '../components/common/HeroSection.vue'
import FeatureCard from '../components/common/FeatureCard.vue'
import CtaBanner from '../components/common/CtaBanner.vue'
const features = [
  { icon: ShieldCheck, title: 'Safeguard Fuel Against Theft', description: 'Implement fuel monitoring systems to identify irregularities and safeguard your assets.' },
  { icon: UserCheck, title: 'Improve Driving Culture', description: 'Combine fuel monitoring with driver behavior analysis to identify fuel-wasting habits.' },
  { icon: TrendingUp, title: 'Enhance Fuel Efficiency', description: 'Immediate insights into fuel consumption trends. Detect inefficiencies and optimize usage.' },
  { icon: Eye, title: 'Aerial Perspective', description: 'Track every ounce of filled or used fuel and understand how it impacts the budget.' },
  { icon: Activity, title: 'Real-time Control', description: 'Track fuel consumption and current tank levels with just a few clicks.' },
  { icon: Clock, title: 'Past Records', description: 'Consistently review fuel data and pinpoint areas for improvement.' },
  { icon: Target, title: 'Accuracy Throughout Projects', description: 'Receive precise data for different vehicles, regardless of landscape or project conditions.' }
]
const sensors = [
  { icon: Gauge, title: 'Fuel Level Sensor', description: 'Monitors the fuel level and its fluctuations in the tank. Interfaces with the GPS tracking device through a digital output.' },
  { icon: Database, title: 'Fuel Consumption Sensor', description: "Monitors the amount of fuel flowing through a vehicle's fuel line. Widely used in rail, air, and maritime transportation." },
  { icon: Wifi, title: 'CAN Bus', description: "Transmits live fuel level information from the vehicle's onboard computer to the satellite monitoring system. Simple to install and maintain." }
]
</script>
