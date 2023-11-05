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
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/login.vue'),
      // children:[
      //   {
      //   path:'userUi',//children 可以不用加/ url會自動補上
      //   component:() => import('../components/userUi.vue')
      // }
      // ]
    },
    {
      path:'/askboard',
      name:'askBoard',
      component:() => import('../views/askBoard.vue')
    }
    ,
    {
      path:'/login/userUi',
      name:'userUi',
      component:()=>import('../views/userUi.vue')
    },
    // search的子路由，tag、block，block下面還有searchfin
    {
      path:'/search',
      name:'search',
      component:()=>import('../components/search.vue'),
      children:[
        {
          path:'searchtag',
          component:()=>import('../components/searchtag.vue')
        },
        {
          path:'searchblock',
          component:()=>import('../components/searchblock.vue'),
        },
        {
          path:'searchfin',
          component:()=>import('../components/searchfin.vue')
        }
      ],
      redirect: to=>{
        return 'search/searchtag'
      }
    }

  ]
})

export default router
