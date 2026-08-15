import fs from 'fs';
import path from 'path';

const stepsDir = 'C:/Users/gomat/.gemini/antigravity-ide/brain/dead5ab1-81c4-4150-93aa-f4718c8eef97/.system_generated/steps';

const audits = [
  { page: 'Home', step: 41, vue: 'src/views/HomeView.vue' },
  { page: 'Web Services', step: 46, vue: 'src/views/WebServicesView.vue' },
  { page: 'Telematics', step: 47, vue: 'src/views/TelematicsView.vue' },
  { page: 'Fleet Management', step: 48, vue: 'src/views/FleetManagementView.vue' },
  { page: 'Fuel Monitoring', step: 49, vue: 'src/views/FuelMonitoringView.vue' },
  { page: 'Tracking Solutions', step: 50, vue: 'src/views/TrackingSolutionsView.vue' },
  { page: 'IoT & Smart Homes', step: 51, vue: 'src/views/IoTSmartHomesView.vue' },
  { page: 'Contact', step: 52, vue: 'src/views/ContactView.vue' },
  { page: 'Industries', step: 53, vue: 'src/views/IndustriesView.vue' },
  { page: 'Pricing', step: 54, vue: 'src/views/PricingView.vue' },
  { page: 'Driver Behavior', step: 67, vue: 'src/views/DriverBehaviorView.vue' },
  { page: 'Smart Farming', step: 68, vue: 'src/views/SmartFarmingView.vue' },
  { page: 'FAQ', step: 69, vue: 'src/views/FaqView.vue' }
];

console.log('==================================================');
console.log('CONTENT VERIFICATION AUDIT (ORIGINAL WP vs VUE APP)');
console.log('==================================================\n');

for (const a of audits) {
  const contentPath = path.join(stepsDir, `${a.step}`, 'content.md');
  const vuePath = path.resolve(a.vue);

  let original = '';
  let vueCode = '';

  if (fs.existsSync(contentPath)) {
    original = fs.readFileSync(contentPath, 'utf8');
  }
  if (fs.existsSync(vuePath)) {
    vueCode = fs.readFileSync(vuePath, 'utf8');
  }

  console.log(`--- Page: ${a.page} ---`);
  console.log(`  Source: Step ${a.step} (${original.length} bytes)`);
  console.log(`  Target Vue: ${a.vue} (${vueCode.length} bytes)`);

  // Extract key phrases from original
  const lines = original.split('\n').map(l => l.trim()).filter(l => l.length > 20 && !l.startsWith('http') && !l.startsWith('![') && !l.startsWith('#') && !l.startsWith('*'));
  
  let matchCount = 0;
  const sampleChecks = lines.slice(0, 10);
  for (const sample of sampleChecks) {
    // clean punctuation
    const words = sample.split(/\s+/).slice(0, 4).join(' ');
    if (vueCode.includes(words)) {
      matchCount++;
    }
  }

  console.log(`  Key Content Verification: ${matchCount}/${sampleChecks.length} samples verified in Vue code.\n`);
}
