import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/HomeView.vue'), meta: { title: 'Home - Hitrace' } },
  { path: '/telematics', name: 'Telematics', component: () => import('../views/TelematicsView.vue'), meta: { title: 'Telematics - Hitrace' } },
  { path: '/fleet-management', name: 'FleetManagement', component: () => import('../views/FleetManagementView.vue'), meta: { title: 'Fleet Management - Hitrace' } },
  { path: '/fuel-monitoring', name: 'FuelMonitoring', component: () => import('../views/FuelMonitoringView.vue'), meta: { title: 'Fuel Monitoring - Hitrace' } },
  { path: '/tracking-solutions', name: 'TrackingSolutions', component: () => import('../views/TrackingSolutionsView.vue'), meta: { title: 'Tracking Solutions - Hitrace' } },
  { path: '/driver-behavior-monitoring', name: 'DriverBehavior', component: () => import('../views/DriverBehaviorView.vue'), meta: { title: 'Driver Behavior Monitoring - Hitrace' } },
  { path: '/smart-farming', name: 'SmartFarming', component: () => import('../views/SmartFarmingView.vue'), meta: { title: 'Smart Farming - Hitrace' } },
  { path: '/iot-and-smart-homes', name: 'IoTSmartHomes', component: () => import('../views/IoTSmartHomesView.vue'), meta: { title: 'IoT and Smart Homes - Hitrace' } },
  { path: '/web-services', name: 'WebServices', component: () => import('../views/WebServicesView.vue'), meta: { title: 'Web Services - Hitrace' } },
  { path: '/industries', name: 'Industries', component: () => import('../views/IndustriesView.vue'), meta: { title: 'Industries - Hitrace' } },
  { path: '/pricing', name: 'Pricing', component: () => import('../views/PricingView.vue'), meta: { title: 'Pricing - Hitrace' } },
  { path: '/contact', name: 'Contact', component: () => import('../views/ContactView.vue'), meta: { title: 'Contact - Hitrace' } },
  { path: '/onegps-africa', name: 'OneGpsAfrica', component: () => import('../views/OneGpsAfricaView.vue'), meta: { title: 'OneGPS Africa - Hitrace' } },
  { path: '/faq', name: 'FAQ', component: () => import('../views/FaqView.vue'), meta: { title: 'FAQ - Hitrace' } },
  { path: '/book-a-demo', redirect: '/contact' },
  { path: '/services', redirect: '/telematics' },
  { path: '/technical-support', redirect: '/contact' },
  { path: '/blog', redirect: '/' },
  { path: '/new-blog', redirect: '/' },
  { path: '/news', redirect: '/' },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFoundView.vue'), meta: { title: '404 - Hitrace' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'Hitrace Solutions'
})

export default router
