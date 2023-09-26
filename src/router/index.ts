import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import Home from '@/views/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/restaurant/:slug',
      name: 'restaurant',
      // @ts-ignore
      component: () => import('../views/Restourant.vue')
    }
  ]
})

export default router
