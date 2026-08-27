/**
 * Single source of truth for HiTrace Solutions corporate details.
 * All values here were taken from the existing HiTrace Solutions website —
 * do not add claims, offices or figures that are not already published.
 */

export const SITE_URL = 'https://hitracesolutions.com'

export const brand = {
  name: 'HiTrace Solutions',
  descriptor: 'Technology Solutions',
  tagline: 'Technology that moves businesses forward.',
  supportingStatement: 'Building technology solutions for a connected world.',
  intro:
    'HiTrace Solutions builds technology businesses and solutions that help organizations connect, manage, transform and grow.',
  logo: '/images/hit-logo-web.png'
}

export const contact = {
  address: {
    street: 'Human Rights Road',
    locality: 'Kasoa',
    region: 'Central Region / Greater Accra',
    country: 'Ghana',
    full: 'Kasoa, Human Rights Road, Central Region / Greater Accra, Ghana'
  },
  phones: [
    { label: 'Main Line', display: '(+233) 20-940-3434', href: 'tel:+233209403434' },
    { label: 'Support', display: '+233-20-794-9676', href: 'tel:+233207949676' }
  ],
  emails: [
    { label: 'General Enquiries', display: 'info@hitracesolutions.com', href: 'mailto:info@hitracesolutions.com' },
    { label: 'Technical Support', display: 'support@hitracesolutions.com', href: 'mailto:support@hitracesolutions.com' },
    { label: 'Sales & Partnerships', display: 'sales@hitracesolutions.com', href: 'mailto:sales@hitracesolutions.com' }
  ],
  hours: [
    'Monday – Friday: 8:00 AM – 5:30 PM GMT',
    'Saturday: 9:00 AM – 2:00 PM GMT'
  ],
  whatsapp:
    'https://wa.me/233209403434?text=Hello%20HiTrace%20Solutions,%20I%20would%20like%20to%20talk%20about%20a%20technology%20project.'
}

export const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/hitrace-solutions/' },
  { name: 'Facebook', url: 'https://www.facebook.com/hitracesolutions' },
  { name: 'Instagram', url: 'https://www.instagram.com/hitracesolutions' }
]
