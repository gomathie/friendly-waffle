<template>
  <section class="fcta" aria-labelledby="fcta-title">
    <div class="container">
      <div class="fcta__panel reveal">
        <div class="fcta__glow" aria-hidden="true"></div>
        <div class="fcta__content">
          <h2 id="fcta-title" class="fcta__title">{{ title }}</h2>
          <p class="fcta__desc">{{ description }}</p>
          <div class="fcta__actions">
            <router-link to="/contact" class="btn btn--primary btn--lg">Talk to HiTrace</router-link>
            <router-link to="/businesses" class="btn btn--secondary btn--lg">Explore Our Businesses</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: "Let's build what comes next." },
  description: {
    type: String,
    default:
      "Whether you need technology, digital experiences, enterprise software or transformation expertise, we're ready to help."
  }
})
</script>

<style scoped>
.fcta {
  padding: var(--space-20) 0;
}

.fcta__panel {
  position: relative;
  padding: clamp(var(--space-10), 6vw, var(--space-20)) var(--space-8);
  background: var(--gradient-dark);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-xl);
  overflow: hidden;
  text-align: center;
}

.fcta__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 720px;
  height: 360px;
  background: radial-gradient(ellipse, rgba(37, 99, 235, 0.22) 0%, transparent 70%);
  pointer-events: none;
}

.fcta__content {
  position: relative;
  z-index: 1;
}

.fcta__title {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-extrabold);
  letter-spacing: -0.02em;
  color: var(--color-text-light);
  margin-bottom: var(--space-4);
}

.fcta__desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-dark-muted);
  max-width: 60ch;
  margin: 0 auto var(--space-10);
}

.fcta__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-4);
}

@media (max-width: 640px) {
  .fcta {
    padding: var(--space-12) 0;
  }

  .fcta__panel {
    text-align: left;
  }

  .fcta__desc {
    margin-left: 0;
  }

  .fcta__actions {
    justify-content: stretch;
  }

  .fcta__actions .btn {
    width: 100%;
  }
}
</style>
