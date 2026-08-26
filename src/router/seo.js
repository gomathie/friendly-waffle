import { SITE_URL, brand } from '../data/site.js'
import { businessById } from '../data/businesses.js'

const DEFAULT_TITLE = 'HiTrace Solutions | Technology That Moves Businesses Forward'
const DEFAULT_DESCRIPTION =
  'HiTrace Solutions builds technology businesses and solutions across telematics, enterprise software, digital experiences, IoT and digital transformation.'
const DEFAULT_IMAGE = `${SITE_URL}/images/16406297_rm373batch2-06-scaled.webp`

/** Create or update a <meta> tag, keyed by name or property. */
const setMeta = (attr, key, content) => {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

const setCanonical = (url) => {
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

/**
 * Business profile pages take their metadata from the business record rather
 * than repeating it in the route definition.
 */
const metaForBusiness = (id) => {
  const business = businessById(id)
  if (!business) return null
  return {
    title: `${business.name} | ${business.discipline} | ${brand.name}`,
    description: `${business.summary} ${business.name} is ${business.relationship.toLowerCase()}.`
  }
}

export const applyMeta = (to) => {
  const fromBusiness = to.params.id ? metaForBusiness(to.params.id) : null
  const title = fromBusiness?.title || to.meta.title || DEFAULT_TITLE
  const description = fromBusiness?.description || to.meta.description || DEFAULT_DESCRIPTION
  const canonical = `${SITE_URL}${to.path === '/' ? '/' : to.path.replace(/\/$/, '')}`

  document.title = title
  document.documentElement.lang = 'en'

  setMeta('name', 'description', description)
  setMeta('property', 'og:type', 'website')
  setMeta('property', 'og:site_name', brand.name)
  setMeta('property', 'og:title', title)
  setMeta('property', 'og:description', description)
  setMeta('property', 'og:url', canonical)
  setMeta('property', 'og:image', DEFAULT_IMAGE)
  setMeta('name', 'twitter:card', 'summary_large_image')
  setMeta('name', 'twitter:title', title)
  setMeta('name', 'twitter:description', description)
  setMeta('name', 'twitter:image', DEFAULT_IMAGE)

  setCanonical(canonical)
}
