import {
  Satellite, Radar, MapPin, Fuel, ShieldCheck, Video, Package, Gauge,
  Database, Wallet, Users, Boxes, Workflow, BarChart3, Layers,
  Palette, Monitor, Megaphone, PenTool, Search, Share2,
  Compass, Network, Cloud, Plug, Brain, LineChart, ClipboardCheck, Blocks
} from 'lucide-vue-next'

/**
 * The four businesses in the HiTrace Solutions ecosystem.
 *
 * `externalUrl` - when set, the card CTA leaves the corporate site.
 * `route`       - the in-site profile page for the business.
 *
 * HiTrace Digital and HiTrace Consulting currently live on this site. When a
 * dedicated domain is registered for either of them, set `externalUrl` here and
 * every CTA across the site follows automatically - nothing else needs editing.
 */
export const businesses = [
  {
    id: 'onegps-africa',
    name: 'OneGPS Africa',
    discipline: 'Telematics & Fleet Intelligence',
    accent: 'blue',
    icon: Satellite,
    summary:
      'Connecting vehicles, assets and operations through powerful GPS tracking and telematics solutions.',
    longSummary:
      'OneGPS Africa is the dedicated telematics business in the HiTrace Solutions ecosystem. It gives operators live visibility of vehicles, assets and drivers, and turns that movement data into decisions they can act on.',
    relationship: 'A HiTrace Solutions company',
    route: '/businesses/onegps-africa',
    externalUrl: 'https://onegps.africa',
    ctaLabel: 'Visit OneGPS Africa',
    tags: ['GPS Tracking', 'Fleet Management', 'Vehicle Monitoring', 'Fuel Monitoring', 'Driver Safety', 'Video Telematics', 'Asset Tracking', 'Fleet Intelligence'],
    capabilities: [
      { icon: MapPin, title: 'GPS Tracking', description: 'Live vehicle and asset positioning with trip history and geofencing.' },
      { icon: Radar, title: 'Fleet Management', description: 'One operating picture for vehicles, drivers, routes and utilisation.' },
      { icon: Gauge, title: 'Vehicle Monitoring', description: 'Engine, diagnostic and sensor data streamed from the vehicle.' },
      { icon: Fuel, title: 'Fuel Monitoring', description: 'Fuel level, consumption, refill and drain detection.' },
      { icon: ShieldCheck, title: 'Driver Safety', description: 'Driver behaviour scoring on harsh braking, speeding and cornering.' },
      { icon: Video, title: 'Video Telematics', description: 'Camera evidence tied to events, trips and driver records.' },
      { icon: Package, title: 'Asset Tracking', description: 'Trackers for trailers, generators, containers and mobile equipment.' },
      { icon: BarChart3, title: 'Fleet Intelligence', description: 'Reporting and analytics that turn fleet data into cost decisions.' }
    ]
  },
  {
    id: 'dekaerp',
    name: 'DekaERP',
    discipline: 'Enterprise Business Management Software',
    accent: 'violet',
    icon: Database,
    summary:
      'Powerful business management software designed to help organizations manage their operations, people, processes and growth.',
    longSummary:
      'DekaERP is the enterprise software business in the HiTrace Solutions ecosystem. It brings finance, people, inventory and operations into one system, so the whole organization works from the same numbers.',
    relationship: 'Part of the HiTrace Solutions ecosystem',
    route: '/businesses/dekaerp',
    externalUrl: 'https://dekaerp.com',
    ctaLabel: 'Explore DekaERP',
    tags: ['ERP', 'Business Management', 'Finance', 'HR', 'Inventory', 'Operations', 'Reporting', 'Workflow'],
    capabilities: [
      { icon: Layers, title: 'ERP', description: 'A single platform across the functions that run the business.' },
      { icon: Blocks, title: 'Business Management', description: 'Structure for the day-to-day work of departments and teams.' },
      { icon: Wallet, title: 'Finance', description: 'Accounts, invoicing, payments and financial control.' },
      { icon: Users, title: 'HR', description: 'People records, payroll inputs and organizational structure.' },
      { icon: Boxes, title: 'Inventory', description: 'Stock levels, movement and valuation across locations.' },
      { icon: Workflow, title: 'Operations', description: 'Orders, procurement and the processes that move work forward.' },
      { icon: BarChart3, title: 'Reporting', description: 'Operational and management reporting from live data.' },
      { icon: ClipboardCheck, title: 'Workflow', description: 'Approvals and business rules applied consistently.' }
    ]
  },
  {
    id: 'hitrace-digital',
    name: 'HiTrace Digital',
    discipline: 'Digital Experiences & Creative Solutions',
    accent: 'amber',
    icon: Palette,
    summary:
      'We create brands, websites and digital experiences that help businesses communicate, connect and grow.',
    longSummary:
      'HiTrace Digital is the creative and digital experience business in the ecosystem. It covers the work that shapes how an organization looks, sounds and behaves online - brand, website, product interface and the campaigns that carry them.',
    relationship: 'Part of the HiTrace Solutions ecosystem',
    route: '/businesses/hitrace-digital',
    externalUrl: null,
    ctaLabel: 'Explore HiTrace Digital',
    tags: ['Branding', 'Web Design', 'Web Applications', 'UX/UI', 'E-commerce', 'Graphic Design', 'Digital Marketing', 'SEO'],
    capabilities: [
      { icon: PenTool, title: 'Branding', description: 'Brand strategy, logo design, visual identity and brand guidelines.' },
      { icon: Monitor, title: 'Digital', description: 'Website design and development, web applications, UX/UI and digital experiences.' },
      { icon: Palette, title: 'Creative', description: 'Graphic design, marketing materials, social media design and campaign creative.' },
      { icon: Megaphone, title: 'Digital Marketing', description: 'Social media marketing, SEO, content, digital campaigns and online growth.' }
    ],
    serviceGroups: [
      { title: 'Branding', icon: PenTool, items: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Brand Guidelines'] },
      { title: 'Digital', icon: Monitor, items: ['Website Design & Development', 'Web Applications', 'UX/UI', 'E-commerce', 'Digital Experiences'] },
      { title: 'Creative', icon: Palette, items: ['Graphic Design', 'Marketing Materials', 'Social Media Design', 'Campaign Creative'] },
      { title: 'Digital Marketing', icon: Megaphone, items: ['Social Media Marketing', 'SEO', 'Content', 'Digital Campaigns', 'Online Growth'] }
    ]
  },
  {
    id: 'hitrace-consulting',
    name: 'HiTrace Consulting',
    discipline: 'Technology Consulting & Digital Transformation',
    accent: 'teal',
    icon: Compass,
    summary:
      'We help organizations turn technology into measurable business outcomes through technology consulting, digital transformation and IoT solutions.',
    longSummary:
      'HiTrace Consulting is the advisory and transformation arm of the group. It works across the ecosystem - and independently of it - to help organizations choose the right technology, integrate what they already run, and build a roadmap they can execute.',
    relationship: 'The transformation arm of HiTrace Solutions',
    route: '/consulting',
    externalUrl: null,
    ctaLabel: 'Talk to Our Consultants',
    tags: ['Technology Strategy', 'Digital Transformation', 'IoT', 'Systems Integration', 'Cloud', 'Data & Analytics', 'AI Strategy', 'Architecture'],
    capabilities: [
      { icon: Compass, title: 'Technology Strategy', description: 'Deciding what to build, buy, integrate or retire - and in what order.' },
      { icon: Blocks, title: 'Digital Transformation', description: 'Moving manual, disconnected operations onto systems that scale.' },
      { icon: Network, title: 'IoT Strategy & Implementation', description: 'Connected devices from concept through deployment and data.' },
      { icon: Workflow, title: 'Business Process Transformation', description: 'Redesigning processes before automating them.' },
      { icon: Plug, title: 'Systems Integration', description: 'Making existing platforms exchange data reliably.' },
      { icon: ClipboardCheck, title: 'Technology Audits', description: 'An honest read on the systems, risks and costs already in place.' },
      { icon: Layers, title: 'Software Architecture', description: 'Designing systems that stay maintainable as they grow.' },
      { icon: Cloud, title: 'Cloud & Infrastructure Advisory', description: 'Hosting, resilience and infrastructure decisions with cost in view.' },
      { icon: LineChart, title: 'Data & Analytics', description: 'Turning operational data into reporting people actually use.' },
      { icon: Brain, title: 'AI Strategy', description: 'Identifying where AI adds real value - and where it does not.' },
      { icon: Search, title: 'Technology Advisory', description: 'Ongoing counsel for teams making technology decisions.' },
      { icon: Share2, title: 'Ecosystem Delivery', description: 'Access to the telematics, software and creative teams across the group.' }
    ]
  }
]

export const businessById = (id) => businesses.find((b) => b.id === id)

/** Where a business card's primary CTA should point. */
export const businessDestination = (business) => business.externalUrl || business.route

export const isExternal = (business) => Boolean(business.externalUrl)

/** Area of Interest options for the contact form. */
export const interestAreas = [
  'OneGPS Africa / Telematics',
  'DekaERP',
  'HiTrace Digital',
  'HiTrace Consulting',
  'General Enquiry'
]

/** Cross-ecosystem capability groups shown on the Capabilities page. */
export const capabilityGroups = [
  {
    title: 'Technology',
    icon: Cloud,
    description: 'The systems that run the operation.',
    items: ['Software', 'Cloud', 'IoT', 'Systems Integration', 'Data']
  },
  {
    title: 'Digital',
    icon: Monitor,
    description: 'How the organization shows up and interacts.',
    items: ['Websites', 'Applications', 'Digital Experiences', 'E-commerce']
  },
  {
    title: 'Transformation',
    icon: Compass,
    description: 'Changing how the work itself gets done.',
    items: ['Digital Strategy', 'Process Optimization', 'Technology Advisory', 'Business Transformation']
  },
  {
    title: 'Creative',
    icon: Palette,
    description: 'The brand and the message around it.',
    items: ['Branding', 'Graphic Design', 'Digital Marketing', 'Content']
  }
]

/** The four pillars on the "Why HiTrace Solutions" section. */
export const pillars = [
  { icon: Cloud, title: 'Technology', description: 'Building and deploying practical technology solutions.' },
  { icon: Brain, title: 'Innovation', description: 'Exploring emerging technologies and new ways of solving business problems.' },
  { icon: Blocks, title: 'Transformation', description: 'Helping organizations modernize processes, systems and operations.' },
  { icon: Network, title: 'Connected Business', description: 'Connecting people, systems, assets and data.' }
]

/** The consulting engagement path, shown as a flow. */
export const transformationFlow = [
  { title: 'Strategy', description: 'Understand the business, the constraints and the goal.' },
  { title: 'Technology', description: 'Choose the platforms and tooling that fit the problem.' },
  { title: 'Integration', description: 'Connect new systems to what is already running.' },
  { title: 'Transformation', description: 'Move processes and people onto the new way of working.' },
  { title: 'Business Growth', description: 'Measure the outcome and build on it.' }
]
