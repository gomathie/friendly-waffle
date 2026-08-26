<template>
  <div class="arch" :class="{ 'arch--dark': dark }">
    <!-- Parent -->
    <div class="arch__parent">
      <span class="arch__parent-name">HiTrace Solutions</span>
      <span class="arch__parent-role">Technology Group</span>
    </div>

    <div class="arch__stem" aria-hidden="true"></div>

    <!-- The three delivery businesses -->
    <ul class="arch__row">
      <li
        v-for="business in children"
        :key="business.id"
        class="arch__node"
        :class="`accent-${business.accent}`"
      >
        <span class="arch__connector" aria-hidden="true"></span>
        <component :is="business.icon" :size="20" class="arch__node-icon" aria-hidden="true" />
        <span class="arch__node-name">{{ business.name }}</span>
        <span class="arch__node-role">{{ business.discipline }}</span>
      </li>
    </ul>

    <div class="arch__stem arch__stem--up" aria-hidden="true"></div>

    <!-- Consulting sits under all three: a capability, not a silo -->
    <div class="arch__base accent-teal">
      <component :is="consulting.icon" :size="20" class="arch__node-icon" aria-hidden="true" />
      <div>
        <span class="arch__node-name">{{ consulting.name }}</span>
        <span class="arch__node-role">{{ consulting.discipline }} &middot; works across the ecosystem</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { businesses } from '../../data/businesses.js'

defineProps({
  dark: { type: Boolean, default: false }
})

const children = computed(() => businesses.filter((b) => b.id !== 'hitrace-consulting'))
const consulting = computed(() => businesses.find((b) => b.id === 'hitrace-consulting'))
</script>

<style scoped>
.arch {
  --arch-line: var(--color-border);
  --arch-card: var(--color-surface);
  --arch-muted: var(--color-text-muted);
  --arch-heading: var(--color-text);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.arch--dark {
  --arch-line: var(--color-border-dark);
  --arch-card: rgba(255, 255, 255, 0.04);
  --arch-muted: var(--color-text-dark-muted);
  --arch-heading: var(--color-text-light);
}

/* Parent */
.arch__parent {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-5) var(--space-10);
  background: var(--gradient-primary);
  color: var(--color-text-light);
  border-radius: var(--radius-lg);
  box-shadow: 0 10px 30px rgba(0, 82, 204, 0.28);
  text-align: center;
}

.arch__parent-name {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-extrabold);
  letter-spacing: -0.01em;
}

.arch__parent-role {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.85;
}

.arch__stem {
  width: 2px;
  height: var(--space-8);
  background: var(--arch-line);
}

/* Three businesses */
.arch__row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
  width: 100%;
  position: relative;
}

/* Horizontal rail joining the three columns */
.arch__row::before {
  content: "";
  position: absolute;
  top: 0;
  left: 16.6667%;
  right: 16.6667%;
  height: 2px;
  background: var(--arch-line);
}

.arch__node {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-6) var(--space-4);
  margin-top: var(--space-8);
  background: var(--arch-card);
  border: 1px solid var(--arch-line);
  border-top: 3px solid var(--accent);
  border-radius: var(--radius-lg);
  text-align: center;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.arch__node:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card);
}

.arch__connector {
  position: absolute;
  top: calc(var(--space-8) * -1);
  left: 50%;
  width: 2px;
  height: var(--space-8);
  background: var(--arch-line);
}

.arch__node-icon {
  color: var(--accent);
  flex-shrink: 0;
}

.arch__node-name {
  display: block;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  color: var(--arch-heading);
}

.arch__node-role {
  display: block;
  font-size: var(--font-size-xs);
  color: var(--arch-muted);
  line-height: var(--line-height-normal);
}

/* Consulting base */
.arch__stem--up {
  height: var(--space-8);
}

.arch__base {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-5) var(--space-8);
  background: var(--accent-soft);
  border: 1px solid var(--accent);
  border-radius: var(--radius-lg);
  text-align: left;
}

@media (max-width: 760px) {
  .arch__row {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .arch__row::before {
    display: none;
  }

  .arch__node {
    flex-direction: row;
    align-items: center;
    text-align: left;
    margin-top: 0;
    padding: var(--space-4) var(--space-5);
    border-top: 1px solid var(--arch-line);
    border-left: 3px solid var(--accent);
  }

  .arch__connector {
    display: none;
  }

  .arch__stem {
    height: var(--space-5);
  }

  .arch__parent {
    width: 100%;
    padding: var(--space-5) var(--space-6);
  }

  .arch__base {
    width: 100%;
    padding: var(--space-4) var(--space-5);
  }
}
</style>
