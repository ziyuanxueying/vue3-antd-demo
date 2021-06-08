import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '平台首页' },
    children: [
      //   { path: '', redirect: '/' } // 这里写跳转
      // {
      //   path: '/about',
      //   meta: { title: '工作台' },
      //   component: () => import('../views/about.vue')
      // }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/about.vue')
  // },
  {
    path: '/index',
    component: () => import('../layout/layout.vue'),
    children: [
      //   { path: '', redirect: '/' } // 这里写跳转
      {
        path: '/test',
        meta: { title: '工作台' },
        component: () => import('../views/test.vue')
      },
      {
        path: '/about',
        meta: { title: '工作台' },
        component: () => import('../views/about.vue')
      }
    ]
  }
]
const router = createRouter({
  // history: createWebHistory()
  // hash: createWebHashHistory()
  // abstract: createMemoryHistory()
  history: createWebHistory(),
  routes
})
router.beforeEach(() => {})

router.afterEach(() => {})
export default router
