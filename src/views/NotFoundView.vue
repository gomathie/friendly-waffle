<template>
  <div class="not-found">
    <HeroSection title="404 — Page Not Found" subtitle="The page you're looking for doesn't exist or has been moved." compact>
      <template #actions>
        <router-link to="/" class="btn btn--primary btn--lg">Back to Home</router-link>
        <router-link to="/contact" class="btn btn--secondary btn--lg">Contact Us</router-link>
      </template>
    </HeroSection>
  </div>
</template>
<script setup>
import HeroSection from '../components/common/HeroSection.vue'
</script>
