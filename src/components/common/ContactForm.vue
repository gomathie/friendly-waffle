<template>
  <form class="cform" novalidate @submit.prevent="handleSubmit">
    <div class="cform__row">
      <div class="cform__group">
        <label class="cform__label" for="cf-name">Name <span aria-hidden="true">*</span></label>
        <input
          id="cf-name"
          v-model.trim="form.name"
          class="cform__input"
          type="text"
          name="name"
          autocomplete="name"
          required
          :aria-invalid="Boolean(errors.name)"
          :aria-describedby="errors.name ? 'cf-name-error' : undefined"
        />
        <p v-if="errors.name" id="cf-name-error" class="cform__error">{{ errors.name }}</p>
      </div>

      <div class="cform__group">
        <label class="cform__label" for="cf-company">Company</label>
        <input
          id="cf-company"
          v-model.trim="form.company"
          class="cform__input"
          type="text"
          name="company"
          autocomplete="organization"
        />
      </div>
    </div>

    <div class="cform__row">
      <div class="cform__group">
        <label class="cform__label" for="cf-email">Email <span aria-hidden="true">*</span></label>
        <input
          id="cf-email"
          v-model.trim="form.email"
          class="cform__input"
          type="email"
          name="email"
          autocomplete="email"
          inputmode="email"
          required
          :aria-invalid="Boolean(errors.email)"
          :aria-describedby="errors.email ? 'cf-email-error' : undefined"
        />
        <p v-if="errors.email" id="cf-email-error" class="cform__error">{{ errors.email }}</p>
      </div>

      <div class="cform__group">
        <label class="cform__label" for="cf-phone">Phone</label>
        <input
          id="cf-phone"
          v-model.trim="form.phone"
          class="cform__input"
          type="tel"
          name="phone"
          autocomplete="tel"
          inputmode="tel"
        />
      </div>
    </div>

    <div class="cform__group">
      <label class="cform__label" for="cf-interest">Area of Interest</label>
      <select id="cf-interest" v-model="form.interest" class="cform__input cform__select" name="interest">
        <option v-for="area in interestAreas" :key="area" :value="area">{{ area }}</option>
      </select>
    </div>

    <div class="cform__group">
      <label class="cform__label" for="cf-message">Message <span aria-hidden="true">*</span></label>
      <textarea
        id="cf-message"
        v-model.trim="form.message"
        class="cform__input cform__textarea"
        name="message"
        rows="5"
        required
        :aria-invalid="Boolean(errors.message)"
        :aria-describedby="errors.message ? 'cf-message-error' : undefined"
      ></textarea>
      <p v-if="errors.message" id="cf-message-error" class="cform__error">{{ errors.message }}</p>
    </div>

    <div class="cform__footer">
      <button type="submit" class="btn btn--primary cform__submit" :disabled="state === 'sending'">
        {{ state === 'sending' ? 'Sending…' : 'Send Message' }}
      </button>
      <p class="cform__note">We reply to enquiries during office hours.</p>
    </div>

    <p class="cform__status" :class="`cform__status--${state}`" role="status" aria-live="polite">
      {{ statusMessage }}
    </p>
  </form>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { interestAreas } from '../../data/businesses.js'
import { contact } from '../../data/site.js'

/**
 * Submission target.
 *
 * Set VITE_CONTACT_ENDPOINT to a form-handling URL (any service that accepts a
 * JSON POST) and the form submits over fetch. With no endpoint configured the
 * form falls back to opening the visitor's mail client addressed to the
 * published general-enquiries mailbox, so no message is silently dropped.
 */
const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || ''
const fallbackMailbox = contact.emails[0].display

const props = defineProps({
  defaultInterest: { type: String, default: '' }
})

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  interest: props.defaultInterest || interestAreas[interestAreas.length - 1],
  message: ''
})

const errors = reactive({ name: '', email: '', message: '' })
const state = ref('idle') // idle | sending | sent | error

const statusMessage = computed(() => {
  if (state.value === 'sent') {
    return endpoint
      ? 'Thank you. Your message has been sent and we will be in touch.'
      : `Your mail client should now be open with the message ready to send to ${fallbackMailbox}.`
  }
  if (state.value === 'error') {
    return `Sorry, the message could not be sent. Please email ${fallbackMailbox} directly.`
  }
  return ''
})

const validate = () => {
  errors.name = form.name ? '' : 'Please tell us your name.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Please enter a valid email address.'
  errors.message = form.message.length >= 10 ? '' : 'Please give us a little more detail.'
  return !errors.name && !errors.email && !errors.message
}

const focusFirstError = () => {
  const field = ['name', 'email', 'message'].find((key) => errors[key])
  if (field) document.getElementById(`cf-${field}`)?.focus()
}

const buildMailto = () => {
  const subject = `${form.interest} enquiry from ${form.name}`
  const body = [
    `Name: ${form.name}`,
    `Company: ${form.company || '-'}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone || '-'}`,
    `Area of interest: ${form.interest}`,
    '',
    form.message
  ].join('\n')
  return `mailto:${fallbackMailbox}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const reset = () => {
  form.name = ''
  form.company = ''
  form.email = ''
  form.phone = ''
  form.message = ''
}

const handleSubmit = async () => {
  if (!validate()) {
    focusFirstError()
    return
  }

  if (!endpoint) {
    window.location.href = buildMailto()
    state.value = 'sent'
    return
  }

  state.value = 'sending'
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...form })
    })
    if (!response.ok) throw new Error(`Request failed with ${response.status}`)
    state.value = 'sent'
    reset()
  } catch {
    state.value = 'error'
  }
}
</script>

<style scoped>
.cform {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.cform__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
}

.cform__label {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.cform__label span {
  color: var(--color-accent);
}

.cform__input {
  width: 100%;
  padding: 0.8rem 1rem;
  background: var(--color-surface);
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  color: var(--color-text);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.cform__input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-light);
}

.cform__input[aria-invalid="true"] {
  border-color: #DC2626;
}

.cform__select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2.5'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

.cform__textarea {
  resize: vertical;
  min-height: 140px;
}

.cform__error {
  margin-top: var(--space-2);
  font-size: var(--font-size-sm);
  color: #DC2626;
}

.cform__footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4);
}

.cform__submit {
  min-width: 180px;
}

.cform__note {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

.cform__status:empty {
  display: none;
}

.cform__status {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
}

.cform__status--sent {
  color: #047857;
  background: rgba(4, 120, 87, 0.08);
}

.cform__status--error {
  color: #B91C1C;
  background: rgba(185, 28, 28, 0.08);
}

@media (max-width: 640px) {
  .cform__row {
    grid-template-columns: 1fr;
  }

  .cform__submit {
    width: 100%;
  }
}
</style>
