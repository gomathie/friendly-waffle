/**
 * Consent-gated analytics.
 *
 * Nothing is loaded, and no cookie or identifier is written, until the visitor
 * accepts. Nothing is loaded at all unless a provider is configured, so the
 * site ships analytics-free by default rather than reporting to an account
 * that does not exist.
 *
 * Configure one of these in `.env.local` (or your host's env settings):
 *
 *   VITE_GA_ID=G-XXXXXXXXXX          # Google Analytics 4 - sets cookies
 *   VITE_PLAUSIBLE_DOMAIN=example.com # Plausible - cookieless
 *
 * If both are set, Plausible wins: it needs no cookie banner of its own and is
 * the lighter script.
 */

const GA_ID = import.meta.env.VITE_GA_ID || ''
const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN || ''

export const provider = PLAUSIBLE_DOMAIN ? 'plausible' : GA_ID ? 'ga4' : null

/** True when the configured provider stores cookies or similar identifiers. */
export const providerUsesCookies = provider === 'ga4'

let loaded = false

const injectScript = (src, attributes = {}) =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.async = true
    script.src = src
    for (const [key, value] of Object.entries(attributes)) script.setAttribute(key, value)
    script.onload = resolve
    script.onerror = () => reject(new Error(`Failed to load ${src}`))
    document.head.appendChild(script)
  })

/**
 * Load the configured provider. Safe to call repeatedly - it only ever runs
 * once, and does nothing when no provider is configured.
 */
export const loadAnalytics = async () => {
  if (loaded || !provider || typeof document === 'undefined') return
  loaded = true

  try {
    if (provider === 'plausible') {
      await injectScript('https://plausible.io/js/script.js', {
        'data-domain': PLAUSIBLE_DOMAIN,
        defer: 'defer'
      })
      return
    }

    await injectScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`)
    window.dataLayer = window.dataLayer || []
    // gtag must push `arguments`, so this cannot be an arrow function.
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    // The SPA sends its own page_view per navigation; see trackPageView.
    window.gtag('config', GA_ID, { send_page_view: false, anonymize_ip: true })
  } catch (error) {
    // A blocked or failed analytics script must never break the page.
    loaded = false
    if (import.meta.env.DEV) console.warn('[analytics]', error.message)
  }
}

/** Record a route change. No-op until the script has actually loaded. */
export const trackPageView = (path, title) => {
  if (!loaded) return
  if (provider === 'plausible') {
    window.plausible?.('pageview', { u: `${window.location.origin}${path}` })
    return
  }
  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: `${window.location.origin}${path}`
  })
}
