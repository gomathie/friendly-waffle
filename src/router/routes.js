/**
 * The corporate site: the group, its four businesses, what it does and how to
 * reach it. Telematics detail now lives with OneGPS Africa, so the old
 * product URLs redirect to that business profile instead of 404ing.
 */
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: 'HiTrace Solutions | Technology That Moves Businesses Forward',
      description:
        'HiTrace Solutions builds technology businesses and solutions across telematics, enterprise software, digital experiences, IoT and digital transformation.'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'About | HiTrace Solutions',
      description:
        'HiTrace Solutions is a technology company building specialized businesses across telematics, enterprise software, digital experiences and technology consulting.'
    }
  },
  {
    path: '/businesses',
    name: 'Businesses',
    component: () => import('../views/BusinessesView.vue'),
    meta: {
      title: 'Our Businesses | HiTrace Solutions',
      description:
        'OneGPS Africa, DekaERP, HiTrace Digital and HiTrace Consulting - four specialized technology businesses in the HiTrace Solutions group.'
    }
  },
  // Consulting has a full page of its own; keep the businesses URL pointing at it.
  { path: '/businesses/hitrace-consulting', redirect: '/consulting' },
  {
    path: '/businesses/:id(onegps-africa|dekaerp|hitrace-digital)',
    name: 'Business',
    component: () => import('../views/BusinessView.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/ServicesView.vue'),
    meta: {
      title: 'Services | HiTrace Solutions',
      description:
        'Technology, digital, transformation and creative services delivered across the HiTrace Solutions group of businesses.'
    }
  },
  { path: '/capabilities', redirect: '/services' },
  {
    path: '/industries',
    name: 'Industries',
    component: () => import('../views/IndustriesView.vue'),
    meta: {
      title: 'Industries We Serve | HiTrace Solutions',
      description:
        'Technology, software, digital and transformation services for transport, logistics, agriculture, distribution and growing businesses.'
    }
  },
  {
    path: '/consulting',
    name: 'Consulting',
    component: () => import('../views/ConsultingView.vue'),
    meta: {
      title: 'HiTrace Consulting | Technology Consulting & Digital Transformation',
      description:
        'HiTrace Consulting helps organizations turn technology into business outcomes through technology strategy, digital transformation, IoT and systems integration.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact | HiTrace Solutions',
      description:
        'Talk to HiTrace Solutions about technology, enterprise software, digital experiences or digital transformation. Offices in Kasoa, Ghana.'
    }
  },
  {
    path: '/careers',
    name: 'Careers',
    component: () => import('../views/CareersView.vue'),
    meta: {
      title: 'Careers | HiTrace Solutions',
      description:
        'Engineering, design, consulting and operations roles across the HiTrace Solutions group of technology businesses.'
    }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../views/LegalView.vue'),
    meta: {
      document: 'privacy',
      title: 'Privacy Policy | HiTrace Solutions',
      description: 'How HiTrace Solutions handles information collected through this website.'
    }
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/LegalView.vue'),
    meta: {
      document: 'terms',
      title: 'Terms of Use | HiTrace Solutions',
      description: 'The terms on which the HiTrace Solutions corporate website is made available.'
    }
  },

  // --- Legacy URLs from the previous telematics-first site ---
  { path: '/telematics', redirect: '/businesses/onegps-africa' },
  { path: '/fleet-management', redirect: '/businesses/onegps-africa' },
  { path: '/fuel-monitoring', redirect: '/businesses/onegps-africa' },
  { path: '/tracking-solutions', redirect: '/businesses/onegps-africa' },
  { path: '/driver-behavior-monitoring', redirect: '/businesses/onegps-africa' },
  { path: '/smart-farming', redirect: '/businesses/onegps-africa' },
  { path: '/onegps-africa', redirect: '/businesses/onegps-africa' },
  { path: '/pricing', redirect: '/businesses/onegps-africa' },
  { path: '/iot-and-smart-homes', redirect: '/consulting' },
  { path: '/web-services', redirect: '/businesses/hitrace-digital' },
  { path: '/faq', redirect: '/contact' },
  { path: '/book-a-demo', redirect: '/contact' },
  { path: '/technical-support', redirect: '/contact' },
  { path: '/blog', redirect: '/' },
  { path: '/new-blog', redirect: '/' },
  { path: '/news', redirect: '/' },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue'),
    meta: { title: 'Page not found | HiTrace Solutions' }
  }
]
