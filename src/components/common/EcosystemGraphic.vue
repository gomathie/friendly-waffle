<template>
  <!-- Decorative: the labels are duplicated in the surrounding copy, so the
       whole graphic is hidden from assistive technology. -->
  <div class="eco" aria-hidden="true">
    <svg
      class="eco__svg"
      viewBox="0 0 460 420"
      width="460"
      height="420"
      role="presentation"
      focusable="false"
    >
      <defs>
        <radialGradient id="ecoCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#1D4ED8" stop-opacity="0.6" />
        </radialGradient>
        <linearGradient id="ecoLink" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.7" />
          <stop offset="100%" stop-color="#6366F1" stop-opacity="0.25" />
        </linearGradient>
        <filter id="ecoGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <!-- Connections: core to each node, plus a ring around the outside -->
      <g class="eco__links" stroke="url(#ecoLink)" fill="none" stroke-linecap="round">
        <path v-for="node in nodes" :key="`link-${node.label}`" :d="`M230 210 L${node.x} ${node.y}`" stroke-width="1.4" />
        <path :d="ringPath" stroke-width="1" stroke-dasharray="5 9" opacity="0.5" />
      </g>

      <!-- Travelling pulses along two of the spokes -->
      <g class="eco__pulses" fill="#7DD3FC">
        <circle r="3.2" class="eco__pulse eco__pulse--a" />
        <circle r="3.2" class="eco__pulse eco__pulse--b" />
      </g>

      <!-- Core -->
      <g class="eco__core">
        <circle cx="230" cy="210" r="52" fill="url(#ecoCore)" filter="url(#ecoGlow)" />
        <circle cx="230" cy="210" r="52" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1.2" />
        <circle cx="230" cy="210" r="70" fill="none" stroke="rgba(125,211,252,0.25)" stroke-width="1" />
        <text x="230" y="205" class="eco__core-label">HiTrace</text>
        <text x="230" y="223" class="eco__core-sub">Solutions</text>
      </g>

      <!-- Outer nodes -->
      <g v-for="(node, i) in nodes" :key="node.label" class="eco__node" :style="{ '--i': i }">
        <circle :cx="node.x" :cy="node.y" r="27" fill="rgba(15, 32, 58, 0.92)" stroke="rgba(125,211,252,0.4)" stroke-width="1.2" />
        <circle :cx="node.x" :cy="node.y" r="4.5" fill="#7DD3FC" />
        <text :x="node.x" :y="node.labelY" class="eco__label">{{ node.label }}</text>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Six nodes on a circle around the core: the connected organization, not a map.
const labels = ['People', 'Systems', 'Data', 'Cloud', 'IoT', 'Digital']
const radius = 150
const cx = 230
const cy = 210

const nodes = labels.map((label, index) => {
  const angle = (Math.PI * 2 * index) / labels.length - Math.PI / 2
  const x = Math.round(cx + radius * Math.cos(angle))
  const y = Math.round(cy + radius * Math.sin(angle))
  return { label, x, y, labelY: y + 45 }
})

const ringPath = computed(() => {
  const points = nodes.map((n) => `${n.x} ${n.y}`)
  return `M${points.join(' L')} Z`
})
</script>

<style scoped>
.eco {
  position: relative;
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
}

.eco__svg {
  width: 100%;
  height: auto;
  overflow: visible;
}

.eco__core-label,
.eco__core-sub,
.eco__label {
  text-anchor: middle;
  font-family: var(--font-family);
  fill: #E2E8F0;
}

.eco__core-label {
  font-size: 17px;
  font-weight: 700;
  fill: #FFFFFF;
  letter-spacing: -0.01em;
}

.eco__core-sub {
  font-size: 11px;
  font-weight: 500;
  fill: rgba(226, 232, 240, 0.75);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.eco__label {
  font-size: 12px;
  font-weight: 600;
  fill: rgba(203, 213, 225, 0.9);
  letter-spacing: 0.04em;
}

/* Each node drifts on its own gentle cycle */
.eco__node {
  animation: ecoDrift 7s ease-in-out infinite;
  animation-delay: calc(var(--i) * -1.1s);
  transform-origin: center;
}

.eco__core {
  animation: ecoBreathe 6s ease-in-out infinite;
  transform-origin: 230px 210px;
}

.eco__links path {
  animation: ecoFade 5s ease-in-out infinite;
}

/* Without motion-path support the pulses would sit at the SVG origin, so they
   only appear where the browser can actually move them along a spoke. */
.eco__pulses {
  display: none;
}

@supports (offset-path: path('M0 0 L1 1')) {
  .eco__pulses {
    display: block;
  }
}

.eco__pulse {
  offset-rotate: 0deg;
}

.eco__pulse--a {
  offset-path: path('M230 210 L230 60');
  animation: ecoTravel 3.4s linear infinite;
}

.eco__pulse--b {
  offset-path: path('M230 210 L100 285');
  animation: ecoTravel 4.2s linear infinite 1.2s;
}

@keyframes ecoDrift {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

@keyframes ecoBreathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.035); }
}

@keyframes ecoFade {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
}

@keyframes ecoTravel {
  0% { offset-distance: 0%; opacity: 0; }
  15% { opacity: 1; }
  85% { opacity: 1; }
  100% { offset-distance: 100%; opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .eco__node,
  .eco__core,
  .eco__links path {
    animation: none;
  }

  .eco__pulses {
    display: none;
  }
}

@media (max-width: 640px) {
  .eco {
    max-width: 340px;
  }

  .eco__label {
    font-size: 13px;
  }
}
</style>
