import fs from 'fs';
import path from 'path';

const checks = [
  {
    name: 'HomeView.vue',
    file: 'src/views/HomeView.vue',
    requiredPhrases: [
      'Cutting-Edge Fleet & Technology Solutions',
      'Fleet / Fuel Management',
      'Fuel represents a significant cost for a fleet',
      'Telematics',
      'Gain essential insights for effective fleet',
      'IoT and Smart Homes',
      'smart home security systems',
      'Web Services',
      'custom web solutions',
      'Perfect fit for any industry',
      'Seamless API Integrations',
      'Hardware-Agnostic Solution',
      'Technical Consulting',
      'White-Labeling',
      'Hitrace Community',
      'Interested in a tracker installation',
      'Our Mission & Vision',
      '15 years of experience',
      'Affordability',
      'Advanced Technologies'
    ]
  },
  {
    name: 'TelematicsView.vue',
    file: 'src/views/TelematicsView.vue',
    requiredPhrases: [
      'Smarter Vehicles. Better Decisions.',
      'What is Telematics',
      'telecommunications and informatics',
      'Live GPS Tracking',
      'Vehicle Diagnostics',
      'Driver Behavior Monitoring',
      'Fuel Monitoring',
      'Trip History & Playback',
      'Custom Reports',
      'AI Video Monitoring',
      'Geofencing',
      'Install Devices',
      'Transmit Data',
      'Access Insights',
      'Logistics & Transport',
      'Public Transportation',
      'cut fuel costs by 25%'
    ]
  },
  {
    name: 'FleetManagementView.vue',
    file: 'src/views/FleetManagementView.vue',
    requiredPhrases: [
      "Your Fleet's Efficiency and Safety",
      'Fleet Management Overview',
      'planning, monitoring, and expense tracking',
      'Oversee Multi-Level Fleets',
      'Critical Event Management',
      'Optimize Asset Utilization',
      'Data-Driven Asset Renewal',
      'Compile a list of vehicles',
      'Define service frequency',
      'System Capabilities',
      'mileage, engine hours, services'
    ]
  },
  {
    name: 'FuelMonitoringView.vue',
    file: 'src/views/FuelMonitoringView.vue',
    requiredPhrases: [
      'Fuel Monitoring',
      'lower expenses, decrease CO2 emissions',
      'Safeguard Fuel Against Theft',
      'Improve Driving Culture',
      'Enhance Fuel Efficiency',
      'Aerial Perspective',
      'Real-time Control',
      'Past Records',
      'Accuracy Throughout Projects',
      'Fuel Level Sensor',
      'Fuel Consumption Sensor',
      'CAN Bus'
    ]
  },
  {
    name: 'TrackingSolutionsView.vue',
    file: 'src/views/TrackingSolutionsView.vue',
    requiredPhrases: [
      'Real-Time Tracking Solutions',
      'Vehicle Tracking',
      'Asset Tracking',
      'Fleet Management',
      'Geofencing',
      'Route Optimization',
      'Driver Behavior Monitoring',
      'Reporting & Analytics',
      'Mobile App'
    ]
  },
  {
    name: 'DriverBehaviorView.vue',
    file: 'src/views/DriverBehaviorView.vue',
    requiredPhrases: [
      'Driver Behavior Monitoring',
      'penalty points for violations',
      'speeding, excessive acceleration',
      'Speed Monitoring',
      'Harsh Braking Detection',
      'Rapid Acceleration Tracking',
      'Idle Time Monitoring',
      'Safety Scoring',
      'Driver Ranking'
    ]
  },
  {
    name: 'SmartFarmingView.vue',
    file: 'src/views/SmartFarmingView.vue',
    requiredPhrases: [
      'Smart Farming Solutions',
      'agribusiness sector',
      'field activities through telematics data',
      'Field Activity Tracking',
      'Equipment Management',
      'Environmental Monitoring',
      'Fuel Optimization',
      'Performance Analytics',
      'Work Hour Tracking'
    ]
  },
  {
    name: 'IoTSmartHomesView.vue',
    file: 'src/views/IoTSmartHomesView.vue',
    requiredPhrases: [
      'IoT & Smart Home Solutions',
      'Smart Automation',
      'Remote Control',
      'Energy Efficiency',
      'Home Security',
      'Amara K.'
    ]
  },
  {
    name: 'WebServicesView.vue',
    file: 'src/views/WebServicesView.vue',
    requiredPhrases: [
      'Build, Launch, and Scale with Confidence',
      'Custom Website Development',
      'Web Application Development',
      'E-commerce Solutions',
      'API Development & Integration',
      'Maintenance & Support',
      'Discovery',
      'Design',
      'Development',
      'Testing',
      'Launch',
      'Support'
    ]
  },
  {
    name: 'IndustriesView.vue',
    file: 'src/views/IndustriesView.vue',
    requiredPhrases: [
      'Perfect Fit for Any Industry',
      'Transport & Logistics',
      'Construction',
      'Courier & Delivery',
      'Service Providers',
      'Agriculture',
      'Waste Management',
      'Emergency Services',
      'Pharmaceutical',
      'Oil & Gas'
    ]
  },
  {
    name: 'PricingView.vue',
    file: 'src/views/PricingView.vue',
    requiredPhrases: [
      'Simple, Transparent Pricing',
      'Basic',
      'Standard',
      'Premium',
      'GPS Tracking',
      'Fuel Monitoring',
      'AI Video Monitoring'
    ]
  },
  {
    name: 'ContactView.vue',
    file: 'src/views/ContactView.vue',
    requiredPhrases: [
      'Get In Touch',
      'Kasoa, Human Rights Road',
      '(+233) 20-940-3434',
      '+233-20-794-9676',
      'info@hitracesolutions.com',
      'support@hitracesolutions.com'
    ]
  },
  {
    name: 'FaqView.vue',
    file: 'src/views/FaqView.vue',
    requiredPhrases: [
      'Frequently Asked Questions',
      'What is telematics',
      'How does fuel monitoring work',
      'What industries do you serve',
      'white-label solutions',
      'How do I get started',
      'What types of GPS devices do you support',
      'mobile app available',
      'How secure is my data'
    ]
  }
];

let allPassed = true;

console.log('Running detailed phrase audit across all 13 views...\n');

for (const c of checks) {
  const content = fs.readFileSync(c.file, 'utf8');
  let missing = [];
  for (const phrase of c.requiredPhrases) {
    if (!content.toLowerCase().includes(phrase.toLowerCase())) {
      missing.push(phrase);
    }
  }

  if (missing.length === 0) {
    console.log(`[PASS] ${c.name} - All ${c.requiredPhrases.length} required content sections verified.`);
  } else {
    console.log(`[FAIL] ${c.name} - Missing ${missing.length} phrases:`, missing);
    allPassed = false;
  }
}

if (allPassed) {
  console.log('\n>>> SUCCESS: ALL 13 PAGES CONTAIN 100% OF EXPECTED HITRACE SOLUTIONS CONTENT! <<<');
} else {
  console.log('\n>>> INCOMPLETE: Some phrases were missing. <<<');
}
