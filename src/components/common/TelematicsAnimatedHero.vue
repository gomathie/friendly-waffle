<template>
  <section class="telematics-hero">
    <div class="telematics-hero__bg">
      <div class="telematics-hero__grid"></div>
      
      <!-- Animated Telematics Elements -->
      <div class="telematics-hero__animation-container">
        <!-- Radar Sweep -->
        <div class="radar">
          <div class="radar-sweep"></div>
        </div>

        <!-- Animated Nodes (Vehicles/Data Points) -->
        <div class="node node-1">
          <div class="node-core"></div>
          <div class="node-pulse"></div>
        </div>
        <div class="node node-2">
          <div class="node-core"></div>
          <div class="node-pulse"></div>
        </div>
        <div class="node node-3">
          <div class="node-core"></div>
          <div class="node-pulse"></div>
        </div>
        <div class="node node-4">
          <div class="node-core"></div>
          <div class="node-pulse"></div>
        </div>
        <div class="node node-5">
          <div class="node-core"></div>
          <div class="node-pulse"></div>
        </div>

        <!-- Connecting Data Lines -->
        <svg class="data-lines" viewBox="0 0 800 400" preserveAspectRatio="none">
          <path class="data-line data-line-1" d="M200,150 L400,250" />
          <path class="data-line data-line-2" d="M400,250 L600,100" />
          <path class="data-line data-line-3" d="M600,100 L700,280" />
          <path class="data-line data-line-4" d="M200,150 L300,300" />
          <path class="data-line data-line-5" d="M300,300 L400,250" />
        </svg>
      </div>

      <div class="telematics-hero__overlay"></div>
    </div>
    
    <div class="telematics-hero__content container">
      <div class="telematics-hero__text">
        <span class="badge telematics-hero__badge">Telematics</span>
        <h1 class="telematics-hero__title">Smarter Vehicles. Better Decisions.</h1>
        <p class="telematics-hero__subtitle">Harness real-time data with Hitrace's advanced telematics solutions to improve fleet performance, safety, and operational efficiency.</p>
        <div class="telematics-hero__actions">
          <router-link to="/contact" class="btn btn--primary btn--lg">Request a Demo</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Animated Hero component specific for Telematics
</script>

<style scoped>
.telematics-hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 600px;
  padding: calc(72px + var(--space-16)) 0 var(--space-16);
  overflow: hidden;
  background-color: #050b14; /* Deep dark blue for high contrast */
}

.telematics-hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.telematics-hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 102, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 102, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: center center;
  mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
  animation: panGrid 20s linear infinite;
}

@keyframes panGrid {
  0% { transform: translateY(0); }
  100% { transform: translateY(50px); }
}

/* Radar */
.radar {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  margin-top: -300px;
  margin-left: -300px;
  border-radius: 50%;
  border: 1px solid rgba(0, 102, 255, 0.2);
  box-shadow: 0 0 100px rgba(0, 102, 255, 0.1) inset;
  z-index: 1;
}

.radar::before, .radar::after {
  content: '';
  position: absolute;
  border: 1px solid rgba(0, 102, 255, 0.2);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.radar::before {
  width: 400px;
  height: 400px;
}

.radar::after {
  width: 200px;
  height: 200px;
}

.radar-sweep {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 50%;
  background: conic-gradient(from 0deg, transparent 70%, rgba(0, 102, 255, 0.6) 100%);
  transform-origin: 0% 100%;
  animation: sweep 4s linear infinite;
}

@keyframes sweep {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Nodes */
.telematics-hero__animation-container {
  position: absolute;
  inset: 0;
  max-width: 800px;
  height: 400px;
  margin: auto;
  z-index: 2;
}

.node {
  position: absolute;
  width: 16px;
  height: 16px;
  transform: translate(-50%, -50%);
}

.node-core {
  position: absolute;
  inset: 4px;
  background-color: var(--color-secondary);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--color-secondary);
}

.node-pulse {
  position: absolute;
  inset: 0;
  border: 2px solid var(--color-secondary);
  border-radius: 50%;
  animation: pulseNode 2s infinite ease-out;
}

@keyframes pulseNode {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(3); opacity: 0; }
}

.node-1 { top: 150px; left: 200px; animation-delay: 0s; }
.node-2 { top: 250px; left: 400px; animation-delay: 0.5s; }
.node-3 { top: 100px; left: 600px; animation-delay: 1s; }
.node-4 { top: 300px; left: 300px; animation-delay: 1.5s; }
.node-5 { top: 280px; left: 700px; animation-delay: 0.2s; }

.node-1 .node-pulse { animation-delay: 0s; }
.node-2 .node-pulse { animation-delay: 0.5s; }
.node-3 .node-pulse { animation-delay: 1s; }
.node-4 .node-pulse { animation-delay: 1.5s; }
.node-5 .node-pulse { animation-delay: 0.2s; }

/* Data Lines */
.data-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.data-line {
  fill: none;
  stroke: rgba(0, 102, 255, 0.4);
  stroke-width: 2;
  stroke-dasharray: 10;
  animation: dash 20s linear infinite;
}

@keyframes dash {
  to {
    stroke-dashoffset: -1000;
  }
}

.telematics-hero__overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 0%, rgba(5, 11, 20, 0.9) 80%);
  z-index: 3;
}

.telematics-hero__content {
  position: relative;
  z-index: 4;
  text-align: center;
  max-width: 840px;
  margin: 0 auto;
}

.telematics-hero__badge {
  display: inline-block;
  margin-bottom: var(--space-4);
  animation: fadeInUp 0.6s ease both;
}

.telematics-hero__title {
  font-size: var(--font-size-hero);
  font-weight: var(--font-weight-extrabold);
  color: var(--color-text-light);
  margin-bottom: var(--space-6);
  letter-spacing: -0.02em;
  line-height: 1.15;
  animation: fadeInUp 0.6s ease 0.1s both;
  text-shadow: 0 4px 20px rgba(0,0,0,0.5);
}

.telematics-hero__subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-dark-muted);
  max-width: 660px;
  margin: 0 auto var(--space-10);
  line-height: var(--line-height-relaxed);
  animation: fadeInUp 0.6s ease 0.2s both;
  text-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

.telematics-hero__actions {
  display: flex;
  justify-content: center;
  gap: var(--space-4);
  flex-wrap: wrap;
  animation: fadeInUp 0.6s ease 0.3s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 800px) {
  .radar {
    width: 400px;
    height: 400px;
    margin-top: -200px;
    margin-left: -200px;
  }
  .radar::before { width: 260px; height: 260px; }
  .radar::after { width: 130px; height: 130px; }
  .telematics-hero__animation-container {
    transform: scale(0.6);
  }
  .telematics-hero {
    min-height: 500px;
  }
}
</style>
