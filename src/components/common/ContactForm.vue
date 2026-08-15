<template>
  <form class="contact-form" @submit.prevent="handleSubmit">
    <div class="contact-form__group">
      <label for="contact-name" class="contact-form__label">Your name</label>
      <input type="text" id="contact-name" v-model="form.name" class="contact-form__input" placeholder="John Doe" required />
    </div>
    <div class="contact-form__group">
      <label for="contact-email" class="contact-form__label">Your email</label>
      <input type="email" id="contact-email" v-model="form.email" class="contact-form__input" placeholder="john@example.com" required />
    </div>
    <div class="contact-form__group">
      <label for="contact-subject" class="contact-form__label">Subject</label>
      <input type="text" id="contact-subject" v-model="form.subject" class="contact-form__input" placeholder="How can we help?" />
    </div>
    <div class="contact-form__group">
      <label for="contact-message" class="contact-form__label">Your message</label>
      <textarea id="contact-message" v-model="form.message" class="contact-form__input contact-form__textarea" placeholder="Tell us about your project..." rows="5" required></textarea>
    </div>
    <button type="submit" class="btn btn--primary contact-form__submit" :disabled="submitted">
      {{ submitted ? 'Message Sent!' : 'Send Message' }}
    </button>
    <p v-if="submitted" class="contact-form__success">Thank you! We'll get back to you soon.</p>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({ name: '', email: '', subject: '', message: '' })
const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
  setTimeout(() => {
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
    setTimeout(() => { submitted.value = false }, 3000)
  }, 1000)
}
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.contact-form__label {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.contact-form__input {
  width: 100%;
  padding: 0.85rem 1.1rem;
  background: var(--color-surface);
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  color: var(--color-text);
  transition: all var(--transition-fast);
  outline: none;
}

.contact-form__input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-light);
}

.contact-form__input::placeholder {
  color: var(--color-text-muted);
  opacity: 0.6;
}

.contact-form__textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-form__submit {
  align-self: flex-start;
  min-width: 180px;
}

.contact-form__submit:disabled {
  opacity: 0.8;
  cursor: default;
  background: var(--color-secondary);
}

.contact-form__success {
  font-size: var(--font-size-sm);
  color: var(--color-secondary);
  font-weight: var(--font-weight-medium);
}
</style>
