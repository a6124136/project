import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path:'/Test',
      name:'test',
      component:()=>import('../views/Test.vue')
    }
  ]
})

export default router
