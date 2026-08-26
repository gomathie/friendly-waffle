/**
 * Consent state, stored in localStorage rather than a cookie - a consent
 * banner that sets a cookie before you have answered it defeats its own point.
 */

const STORAGE_KEY = 'hitrace:cookie-consent'
const VERSION = 1

const listeners = new Set()

/** @returns {'accepted'|'declined'|null} null means the visitor has not chosen. */
export const readConsent = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    // A changed policy version invalidates the previous answer.
    if (parsed.version !== VERSION) return null
    return parsed.choice === 'accepted' || parsed.choice === 'declined' ? parsed.choice : null
  } catch {
    // Private mode, blocked storage, or corrupt value: treat as undecided.
    return null
  }
}

export const setConsent = (choice) => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ choice, version: VERSION, decidedAt: new Date().toISOString() })
    )
  } catch {
    // Storage unavailable - the choice still applies for this page view.
  }
  for (const listener of listeners) listener(choice)
}

export const onConsentChange = (listener) => {
  listeners.add(listener)
  return () => listeners.delete(listener)
}
