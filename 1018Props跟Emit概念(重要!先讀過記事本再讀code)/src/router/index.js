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
      children:[
        {
        path:'child',//children 可以不用加/ url會自動補上
        component:() => import('../components/child.vue')
      }
      ]
    },
    // 這個路徑被用來玩子傳父父傳子了
    {
      path:'/login/userUi',
      name:'userUi',
      component:()=>import('../views/userUi.vue'),
      children:[
        {
          path:'tofather',
          component:()=>import('../components/toFatherChild.vue')
        },
        {
          path:'fromfather',
          component:()=>import('../components/fromFather.vue')
        },
      ]
    },
    {
      path:'/emit',
      name:'emit',
      component:()=>import('../views/emit.vue'),
      children:[
        {
          path:'emitchild',
          component:()=>import('../components/emitchild.vue')
        }
      ]
    },
    {
      path:'/search',
      name:'search',
      component:()=>import('../components/search.vue'),
      children:[
        {
          path:'searchtag',
          component:()=>import('../components/searchtag.vue')
        
        }
      ],
      redirect: to=>{
        return 'search/searchtag'
      }
    }

  ]
})

export default router
