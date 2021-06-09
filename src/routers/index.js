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
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next('/')
  }
  const isLogin = localStorage.ele_login ? true : true
  if (to.path == '/login') {
    next()
  } else {
    // 是否在登录状态下
    isLogin ? next() : next('/login')
  }
})

router.afterEach(() => {})
export default router
