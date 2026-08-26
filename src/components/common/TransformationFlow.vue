<template>
  <ol class="flow" :class="{ 'flow--dark': dark }">
    <li v-for="(step, index) in steps" :key="step.title" class="flow__step">
      <div class="flow__marker" aria-hidden="true">
        <span class="flow__dot"></span>
        <span v-if="index < steps.length - 1" class="flow__rail"></span>
      </div>
      <div class="flow__body">
        <span class="flow__index">{{ String(index + 1).padStart(2, '0') }}</span>
        <h3 class="flow__title">{{ step.title }}</h3>
        <p class="flow__desc">{{ step.description }}</p>
      </div>
    </li>
  </ol>
</template>

<script setup>
defineProps({
  steps: { type: Array, required: true },
  dark: { type: Boolean, default: false }
})
</script>

<style scoped>
.flow {
  --flow-line: var(--color-border);
  --flow-muted: var(--color-text-muted);
  --flow-heading: var(--color-text);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-6);
  counter-reset: flow;
}

.flow--dark {
  --flow-line: var(--color-border-dark);
  --flow-muted: var(--color-text-dark-muted);
  --flow-heading: var(--color-text-light);
}

.flow__step {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.flow__marker {
  position: relative;
  display: flex;
  align-items: center;
  height: 14px;
}

.flow__dot {
  width: 14px;
  height: 14px;
  border-radius: var(--radius-full);
  background: var(--color-primary);
  box-shadow: 0 0 0 5px rgba(0, 102, 255, 0.14);
  flex-shrink: 0;
  z-index: 1;
}

.flow__rail {
  position: absolute;
  left: 14px;
  right: calc(var(--space-6) * -1);
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary), var(--flow-line));
}

.flow__index {
  display: block;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.14em;
  color: var(--color-primary);
  margin-bottom: var(--space-2);
}

.flow__title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--flow-heading);
  margin-bottom: var(--space-2);
}

.flow__desc {
  font-size: var(--font-size-sm);
  color: var(--flow-muted);
  line-height: var(--line-height-relaxed);
}

/* Below the desktop breakpoint the flow turns vertical, with the rail
   running down the left edge - the reading direction people expect. */
@media (max-width: 900px) {
  .flow {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .flow__step {
    flex-direction: row;
    gap: var(--space-5);
    padding-bottom: var(--space-8);
  }

  .flow__step:last-child {
    padding-bottom: 0;
  }

  .flow__marker {
    height: auto;
    align-items: flex-start;
    padding-top: 4px;
  }

  .flow__rail {
    left: 6px;
    right: auto;
    top: 18px;
    bottom: calc(var(--space-8) * -1);
    width: 2px;
    height: auto;
    background: linear-gradient(180deg, var(--color-primary), var(--flow-line));
  }
}
</style>
