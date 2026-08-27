<template>
  <!-- Decorative: the node labels are repeated in the surrounding copy, so the
       whole graphic is hidden from assistive technology. -->
  <div class="eco" aria-hidden="true">
    <svg class="eco__svg" viewBox="0 0 460 400" width="460" height="400" role="presentation" focusable="false">
      <defs>
        <radialGradient id="ecoCore" cx="42%" cy="34%" r="72%">
          <stop offset="0%" stop-color="#60A5FA" stop-opacity="0.98" />
          <stop offset="55%" stop-color="#2563EB" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#1E3A8A" stop-opacity="0.85" />
        </radialGradient>
        <radialGradient id="ecoNode" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stop-color="#BAE6FD" />
          <stop offset="100%" stop-color="#38BDF8" />
        </radialGradient>
        <linearGradient id="ecoSpoke" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#7DD3FC" stop-opacity="0.55" />
          <stop offset="100%" stop-color="#6366F1" stop-opacity="0.12" />
        </linearGradient>
        <radialGradient id="ecoShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0.55" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0" />
        </radialGradient>
        <filter id="ecoGlow" x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="9" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <!-- The orbital plane, drawn as an ellipse: a circle seen at a tilt -->
      <ellipse
        class="eco__orbit"
        :cx="CX" :cy="CY" :rx="RX" :ry="RY"
        fill="none" stroke="rgba(125,211,252,0.22)" stroke-width="1.2"
        stroke-dasharray="4 10"
      />
      <ellipse
        :cx="CX" :cy="CY" :rx="RX * 0.62" :ry="RY * 0.62"
        fill="none" stroke="rgba(125,211,252,0.1)" stroke-width="1"
      />

      <!-- Spokes run under everything, so the core sits on top of them -->
      <g class="eco__spokes" stroke="url(#ecoSpoke)" stroke-width="1.3" stroke-linecap="round" fill="none">
        <line v-for="n in nodes" :key="`s-${n.label}`" :x1="CX" :y1="coreY" :x2="n.x" :y2="n.y" />
      </g>

      <!-- Contact shadows on the plane sell the height of each node -->
      <g class="eco__shadows">
        <ellipse
          v-for="n in nodes" :key="`sh-${n.label}`"
          :cx="n.planeX" :cy="n.planeY" :rx="13 * n.scale" :ry="4.2 * n.scale"
          fill="url(#ecoShadow)" :opacity="0.28 + n.depth * 0.24"
        />
      </g>

      <!-- Stems from the plane up to each floating node -->
      <g class="eco__stems" stroke="rgba(125,211,252,0.3)" stroke-width="1" stroke-dasharray="2 4">
        <line v-for="n in nodes" :key="`st-${n.label}`" :x1="n.planeX" :y1="n.planeY" :x2="n.x" :y2="n.y + n.r" />
      </g>

      <!-- Nodes behind the core -->
      <g
        v-for="n in backNodes" :key="`b-${n.label}`"
        class="eco__node" :style="{ '--i': n.index, opacity: n.opacity }"
      >
        <circle :cx="n.x" :cy="n.y" :r="n.r" fill="url(#ecoNode)" />
        <circle :cx="n.x" :cy="n.y" :r="n.r + 5" fill="none" stroke="rgba(125,211,252,0.28)" stroke-width="1" />
        <text :x="n.x" :y="n.y - n.r - 10" class="eco__label" :style="{ fontSize: `${n.font}px` }">{{ n.label }}</text>
      </g>

      <!-- Core, floating above the centre of the plane -->
      <g class="eco__core">
        <ellipse :cx="CX" :cy="CY" :rx="58" :ry="23" fill="url(#ecoShadow)" opacity="0.5" />
        <ellipse :cx="CX" :cy="CY" :rx="58" :ry="23" fill="none" stroke="rgba(96,165,250,0.35)" stroke-width="1.2" />
        <line :x1="CX" :y1="CY" :x2="CX" :y2="coreY + 44" stroke="rgba(125,211,252,0.35)" stroke-width="1" stroke-dasharray="2 4" />
        <circle :cx="CX" :cy="coreY" r="46" fill="url(#ecoCore)" filter="url(#ecoGlow)" />
        <circle :cx="CX" :cy="coreY" r="46" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.2" />
        <ellipse :cx="CX" :cy="coreY" rx="46" ry="16" fill="none" stroke="rgba(255,255,255,0.16)" stroke-width="1" />
        <text :x="CX" :y="coreY - 3" class="eco__core-label">HiTrace</text>
        <text :x="CX" :y="coreY + 15" class="eco__core-sub">Solutions</text>
      </g>

      <!-- Nodes in front of the core -->
      <g
        v-for="n in frontNodes" :key="`f-${n.label}`"
        class="eco__node" :style="{ '--i': n.index, opacity: n.opacity }"
      >
        <circle :cx="n.x" :cy="n.y" :r="n.r" fill="url(#ecoNode)" />
        <circle :cx="n.x" :cy="n.y" :r="n.r + 5" fill="none" stroke="rgba(125,211,252,0.35)" stroke-width="1" />
        <text :x="n.x" :y="n.y - n.r - 10" class="eco__label" :style="{ fontSize: `${n.font}px` }">{{ n.label }}</text>
      </g>

      <!-- Data travelling out from the core along two spokes -->
      <g class="eco__pulses" fill="#BAE6FD">
        <circle r="3.4" class="eco__pulse" :style="{ offsetPath: pulsePath(1) }" />
        <circle r="3.4" class="eco__pulse eco__pulse--b" :style="{ offsetPath: pulsePath(4) }" />
      </g>
    </svg>
  </div>
</template>

<script setup>
/**
 * The ecosystem as an orbital plane rather than a flat ring.
 *
 * The tilt is done in SVG geometry, not CSS 3D: a circle viewed at an angle is
 * an ellipse, so nodes are placed on one and scaled by how near the front they
 * sit. `transform-style: preserve-3d` is unreliable inside SVG, and this way
 * the depth cues — size, contact shadow, stem length, overlap order — are all
 * computed from one number and stay correct at any size.
 */
const CX = 230
const CY = 232
const RX = 168
const RY = 70
const coreY = CY - 70

const labels = ['People', 'Systems', 'Data', 'Cloud', 'IoT', 'Digital']

const nodes = labels.map((label, index) => {
  // Start at the back of the plane and walk round it.
  const angle = (Math.PI * 2 * index) / labels.length - Math.PI / 2
  const planeX = CX + RX * Math.cos(angle)
  const planeY = CY + RY * Math.sin(angle)

  // 0 at the far edge, 1 at the near edge. Everything else derives from this.
  const depth = (Math.sin(angle) + 1) / 2
  const scale = 0.8 + depth * 0.4

  return {
    label,
    index,
    depth,
    scale,
    planeX,
    planeY,
    x: planeX,
    y: planeY - (30 + depth * 12),
    r: 8 + depth * 4.5,
    font: 11 + depth * 2,
    opacity: 0.72 + depth * 0.28
  }
})

// Painter's algorithm: far nodes are drawn before the core, near ones after.
const backNodes = nodes.filter((n) => n.depth < 0.5)
const frontNodes = nodes.filter((n) => n.depth >= 0.5)

const pulsePath = (index) => {
  const n = nodes[index]
  return `path('M${CX} ${coreY} L${n.x.toFixed(1)} ${n.y.toFixed(1)}')`
}
</script>

<style scoped>
.eco {
  position: relative;
  width: 100%;
  max-width: 480px;
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
}

.eco__core-label {
  font-size: 18px;
  font-weight: 700;
  fill: #FFFFFF;
  letter-spacing: -0.01em;
}

.eco__core-sub {
  font-size: 10px;
  font-weight: 600;
  fill: rgba(226, 232, 240, 0.8);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.eco__label {
  font-weight: 600;
  fill: #CBD5E1;
  letter-spacing: 0.03em;
}

/* Nodes bob on the spot, each on its own offset cycle */
.eco__node {
  animation: ecoDrift 7s ease-in-out infinite;
  animation-delay: calc(var(--i) * -1.15s);
}

.eco__core {
  animation: ecoBreathe 6s ease-in-out infinite;
  transform-origin: 230px 162px;
}

.eco__orbit {
  animation: ecoFade 6s ease-in-out infinite;
}

@keyframes ecoDrift {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes ecoBreathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.025); }
}

@keyframes ecoFade {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
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
  animation: ecoTravel 3.6s linear infinite;
}

.eco__pulse--b {
  animation-duration: 4.4s;
  animation-delay: 1.3s;
}

@keyframes ecoTravel {
  0% { offset-distance: 0%; opacity: 0; }
  18% { opacity: 1; }
  82% { opacity: 1; }
  100% { offset-distance: 100%; opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .eco__node,
  .eco__core,
  .eco__orbit {
    animation: none;
  }

  .eco__pulses {
    display: none;
  }
}

@media (max-width: 640px) {
  .eco {
    max-width: 360px;
  }
}
</style>
