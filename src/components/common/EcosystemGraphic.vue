<template>
  <!-- Decorative: the node labels are repeated in the surrounding copy, so the
       whole graphic is hidden from assistive technology. -->
  <div class="eco" aria-hidden="true">
    <svg class="eco__svg" viewBox="0 0 480 420" width="480" height="420" role="presentation" focusable="false">
      <defs>
        <radialGradient id="ecoCore" cx="40%" cy="32%" r="74%">
          <stop offset="0%" stop-color="#93C5FD" />
          <stop offset="48%" stop-color="#3B82F6" />
          <stop offset="100%" stop-color="#1D4ED8" />
        </radialGradient>
        <radialGradient id="ecoNode" cx="36%" cy="30%" r="78%">
          <stop offset="0%" stop-color="#E0F2FE" />
          <stop offset="60%" stop-color="#7DD3FC" />
          <stop offset="100%" stop-color="#0EA5E9" />
        </radialGradient>
        <radialGradient id="ecoHalo" cx="50%" cy="50%" r="50%">
          <stop offset="55%" stop-color="#38BDF8" stop-opacity="0.32" />
          <stop offset="100%" stop-color="#38BDF8" stop-opacity="0" />
        </radialGradient>
        <!-- Gives the orbit a surface rather than just an outline -->
        <radialGradient id="ecoPlane" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.16" />
          <stop offset="70%" stop-color="#1E40AF" stop-opacity="0.06" />
          <stop offset="100%" stop-color="#1E3A8A" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="ecoSpoke" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#7DD3FC" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#6366F1" stop-opacity="0.1" />
        </linearGradient>
        <radialGradient id="ecoShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#020617" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#020617" stop-opacity="0" />
        </radialGradient>
        <filter id="ecoGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="11" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <!-- The orbital plane: a circle seen at a tilt, so an ellipse -->
      <ellipse :cx="CX" :cy="CY" :rx="RX" :ry="RY" fill="url(#ecoPlane)" />
      <ellipse
        class="eco__orbit"
        :cx="CX" :cy="CY" :rx="RX" :ry="RY"
        fill="none" stroke="rgba(125,211,252,0.3)" stroke-width="1.3" stroke-dasharray="3 9"
      />
      <ellipse
        :cx="CX" :cy="CY" :rx="RX * 0.6" :ry="RY * 0.6"
        fill="none" stroke="rgba(125,211,252,0.12)" stroke-width="1"
      />

      <!-- Spokes run under everything, so the core sits on top of them -->
      <g class="eco__spokes" stroke="url(#ecoSpoke)" stroke-width="1.4" stroke-linecap="round" fill="none">
        <line v-for="n in nodes" :key="`s-${n.label}`" :x1="CX" :y1="coreY" :x2="n.x" :y2="n.y" />
      </g>

      <!-- Contact shadows on the plane sell the height of each node -->
      <g class="eco__shadows">
        <ellipse
          v-for="n in nodes" :key="`sh-${n.label}`"
          :cx="n.planeX" :cy="n.planeY" :rx="16 * n.scale" :ry="5 * n.scale"
          fill="url(#ecoShadow)" :opacity="0.3 + n.depth * 0.28"
        />
      </g>

      <!-- Stems from the plane up to each floating node -->
      <g class="eco__stems" stroke="rgba(125,211,252,0.32)" stroke-width="1" stroke-dasharray="2 4">
        <line v-for="n in nodes" :key="`st-${n.label}`" :x1="n.planeX" :y1="n.planeY" :x2="n.x" :y2="n.y + n.r" />
      </g>

      <!-- Nodes behind the core -->
      <g v-for="n in backNodes" :key="`b-${n.label}`" class="eco__node" :style="{ '--i': n.index, opacity: n.opacity }">
        <circle :cx="n.x" :cy="n.y" :r="n.r + 11" fill="url(#ecoHalo)" />
        <circle :cx="n.x" :cy="n.y" :r="n.r" fill="url(#ecoNode)" stroke="rgba(255,255,255,0.5)" stroke-width="1.1" />
        <circle :cx="n.x - n.r * 0.3" :cy="n.y - n.r * 0.34" :r="n.r * 0.28" fill="rgba(255,255,255,0.55)" />
        <text :x="n.x" :y="n.y - n.r - 13" class="eco__label" :style="{ fontSize: `${n.font}px` }">{{ n.label }}</text>
      </g>

      <!-- Core, floating above the centre of the plane -->
      <g class="eco__core">
        <ellipse :cx="CX" :cy="CY" :rx="64" :ry="26" fill="url(#ecoShadow)" opacity="0.62" />
        <ellipse :cx="CX" :cy="CY" :rx="64" :ry="26" fill="none" stroke="rgba(96,165,250,0.4)" stroke-width="1.2" />
        <line :x1="CX" :y1="CY" :x2="CX" :y2="coreY + 50" stroke="rgba(125,211,252,0.4)" stroke-width="1" stroke-dasharray="2 4" />
        <circle :cx="CX" :cy="coreY" r="66" fill="none" stroke="rgba(125,211,252,0.16)" stroke-width="1" />
        <circle :cx="CX" :cy="coreY" r="52" fill="url(#ecoCore)" filter="url(#ecoGlow)" />
        <circle :cx="CX" :cy="coreY" r="52" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="1.3" />
        <ellipse :cx="CX" :cy="coreY" rx="52" ry="18" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="1" />
        <text :x="CX" :y="coreY - 4" class="eco__core-label">HiTrace</text>
        <text :x="CX" :y="coreY + 15" class="eco__core-sub">Solutions</text>
      </g>

      <!-- Nodes in front of the core -->
      <g v-for="n in frontNodes" :key="`f-${n.label}`" class="eco__node" :style="{ '--i': n.index, opacity: n.opacity }">
        <circle :cx="n.x" :cy="n.y" :r="n.r + 11" fill="url(#ecoHalo)" />
        <circle :cx="n.x" :cy="n.y" :r="n.r" fill="url(#ecoNode)" stroke="rgba(255,255,255,0.6)" stroke-width="1.2" />
        <circle :cx="n.x - n.r * 0.3" :cy="n.y - n.r * 0.34" :r="n.r * 0.28" fill="rgba(255,255,255,0.6)" />
        <text :x="n.x" :y="n.y - n.r - 13" class="eco__label" :style="{ fontSize: `${n.font}px` }">{{ n.label }}</text>
      </g>

      <!-- Data travelling out from the core along two spokes -->
      <g class="eco__pulses" fill="#E0F2FE">
        <circle r="3.6" class="eco__pulse" :style="{ offsetPath: pulsePath(1) }" />
        <circle r="3.6" class="eco__pulse eco__pulse--b" :style="{ offsetPath: pulsePath(4) }" />
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
 * the depth cues - size, contact shadow, stem length, overlap order - are all
 * computed from one number and stay correct at any size.
 */
const CX = 240
const CY = 240
const RX = 172
const RY = 120
const coreY = CY - 76

const labels = ['People', 'Systems', 'Data', 'Cloud', 'IoT', 'Digital']

const nodes = labels.map((label, index) => {
  // Start at the back of the plane and walk round it.
  const angle = (Math.PI * 2 * index) / labels.length - Math.PI / 2
  const planeX = CX + RX * Math.cos(angle)
  const planeY = CY + RY * Math.sin(angle)

  // 0 at the far edge, 1 at the near edge. Everything else derives from this.
  const depth = (Math.sin(angle) + 1) / 2
  const scale = 0.82 + depth * 0.38

  return {
    label,
    index,
    depth,
    scale,
    planeX,
    planeY,
    x: planeX,
    y: planeY - (34 + depth * 14),
    r: 13 + depth * 5,
    font: 12.5 + depth * 1.5,
    opacity: 0.78 + depth * 0.22
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
  max-width: 500px;
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
  font-size: 20px;
  font-weight: 700;
  fill: #FFFFFF;
  letter-spacing: -0.015em;
}

.eco__core-sub {
  font-size: 10.5px;
  font-weight: 600;
  fill: rgba(226, 232, 240, 0.85);
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.eco__label {
  font-weight: 600;
  fill: #E2E8F0;
  letter-spacing: 0.02em;
}

/* Nodes bob on the spot, each on its own offset cycle */
.eco__node {
  animation: ecoDrift 7s ease-in-out infinite;
  animation-delay: calc(var(--i) * -1.15s);
}

.eco__core {
  animation: ecoBreathe 6s ease-in-out infinite;
  transform-origin: 240px 164px;
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
  50% { transform: scale(1.02); }
}

@keyframes ecoFade {
  0%, 100% { opacity: 0.65; }
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
    max-width: 380px;
  }
}
</style>
