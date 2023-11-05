import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/desert',
      name:'點心',
      component:()=>import('../views/Desert.vue')
    },
    {
      path:'/Vbind',
      name:'V綁定',
      component:()=>import('../views/Vbind.vue')
    },
    {
      path:'/',
      name:'老家',
      component:()=>import('../views/HomView.vue')
    },
    {
      path:'/WaterFall',
      name:'瀑布流',
      component:()=>import('../views/WaterFall.vue')
    },
    {
      path:'/VbindPokemon',
      name:'綁定寶可夢',
      component:()=>import('../views/VbindPokemon.vue')
    },
    {
      path:'/watchandcomputed',
      name:'監看跟計算',
      component:()=>import('../views/watchandcomputed.vue')
    }
  ]
})

export default router
