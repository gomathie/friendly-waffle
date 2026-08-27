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

/** Cross-ecosystem service groups shown on the Services page. */
export const serviceGroups = [
  {
    id: 'technology',
    title: 'Technology',
    icon: Cloud,
    accent: 'blue',
    description: 'The systems that run the operation.',
    intent:
      'Most operational pain is not a people problem. It is data trapped in one system, a process held together by spreadsheets, or infrastructure that was sized for a smaller company. This is the work of fixing that.',
    deliveredBy: ['dekaerp', 'onegps-africa', 'hitrace-consulting'],
    items: [
      { name: 'Software', description: 'Business applications built around a specific operation, rather than a template bent into shape.' },
      { name: 'Cloud', description: 'Hosting, environments and infrastructure sized to what the workload actually needs.' },
      { name: 'IoT', description: 'Connected devices, the network behind them, and the data they send back.' },
      { name: 'Systems Integration', description: 'Getting platforms that were never designed to talk to each other exchanging data reliably.' },
      { name: 'Data & Analytics', description: 'Turning operational records into reporting people actually use to decide things.' }
    ]
  },
  {
    id: 'digital',
    title: 'Digital',
    icon: Monitor,
    accent: 'amber',
    description: 'How the organization shows up and interacts.',
    intent:
      'The website is usually the first thing anyone sees, and increasingly the place the work itself happens. This covers both: the pages that win attention and the interfaces your team logs into.',
    deliveredBy: ['hitrace-digital'],
    items: [
      { name: 'Websites', description: 'Corporate and marketing sites that load fast, rank, and read properly on a phone.' },
      { name: 'Web Applications', description: 'The tools your team signs into — portals, dashboards and internal systems.' },
      { name: 'Digital Experiences', description: 'Interface and interaction design, from first wireframe through to production UI.' },
      { name: 'E-commerce', description: 'Online stores with payments, stock and fulfilment wired into the back office.' }
    ]
  },
  {
    id: 'transformation',
    title: 'Transformation',
    icon: Compass,
    accent: 'teal',
    description: 'Changing how the work itself gets done.',
    intent:
      'Technology only pays off when the way people work changes with it. This is the advisory half of the group: deciding what is worth doing, in what order, and making the change stick afterwards.',
    deliveredBy: ['hitrace-consulting'],
    items: [
      { name: 'Digital Strategy', description: 'A roadmap for what to build, buy, integrate or retire — and in what order.' },
      { name: 'Process Optimization', description: 'Redesigning how work flows before automating it, so the automation is worth having.' },
      { name: 'Technology Advisory', description: 'An independent read on the systems, vendors, risks and costs already in place.' },
      { name: 'Business Transformation', description: 'Moving people and processes onto new systems, not just installing the software.' }
    ]
  },
  {
    id: 'creative',
    title: 'Creative',
    icon: Palette,
    accent: 'violet',
    description: 'The brand and the message around it.',
    intent:
      'A good system nobody understands still fails. This is the work of making what you do legible — to customers, to partners and to the people you are trying to hire.',
    deliveredBy: ['hitrace-digital'],
    items: [
      { name: 'Branding', description: 'Brand strategy, visual identity, logo design and the guidelines that keep it consistent.' },
      { name: 'Graphic Design', description: 'Marketing collateral, presentations, signage and campaign assets.' },
      { name: 'Digital Marketing', description: 'Search, social and content campaigns aimed at measurable growth.' },
      { name: 'Content', description: 'The copy and imagery that give the brand something worth saying.' }
    ]
  }
]

/**
 * How an engagement runs, whichever service it starts from. Descriptive of
 * process only - it deliberately promises no timeline or service level.
 */
export const engagementSteps = [
  { title: 'Conversation', description: 'Tell us what the business needs to do differently. No cost and no obligation.' },
  { title: 'Discovery', description: 'We look at the systems, processes and constraints already in place.' },
  { title: 'Recommendation', description: 'A written view of the options, what each involves, and what we would do.' },
  { title: 'Delivery', description: 'The right team in the group builds, configures and integrates it.' },
  { title: 'Support', description: 'Handover, training and ongoing help once it is running.' }
]

/** Industries where the group's technology, software and advisory services apply. */
export const industries = [
  {
    title: 'Transport & Logistics',
    icon: Radar,
    description: 'Connect fleets, assets, people and operational systems so movement is easier to see and manage.',
    services: ['Fleet intelligence', 'Systems integration', 'Business management', 'Data & analytics'],
    route: '/businesses/onegps-africa',
    cta: 'Explore fleet intelligence',
    accent: 'blue'
  },
  {
    title: 'Agriculture & Agribusiness',
    icon: Layers,
    description: 'Bring field operations, mobile assets, inventory and business information into clearer view.',
    services: ['Connected operations', 'Asset tracking', 'Inventory', 'Process transformation'],
    route: '/contact',
    cta: 'Discuss your operation',
    accent: 'teal'
  },
  {
    title: 'Distribution & Wholesale',
    icon: Boxes,
    description: 'Coordinate stock, orders, finance and delivery workflows with systems built around the way work moves.',
    services: ['ERP', 'Inventory', 'Workflow', 'Operational reporting'],
    route: '/businesses/dekaerp',
    cta: 'Explore business software',
    accent: 'violet'
  },
  {
    title: 'Growing Businesses',
    icon: Blocks,
    description: 'Build a stronger foundation for growth with the right systems, digital presence and technology decisions.',
    services: ['Technology strategy', 'Business software', 'Brand and digital', 'Cloud advisory'],
    route: '/consulting',
    cta: 'Start with a conversation',
    accent: 'amber'
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
