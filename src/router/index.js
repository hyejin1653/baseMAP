import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/components/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },

  ]
})

export default router
