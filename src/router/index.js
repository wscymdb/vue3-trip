import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './../views/home/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/order',
    component: () => import('@/views/order/index.vue'),
  },
  {
    path: '/favor',
    component: () => import('@/views/favor/index.vue'),
  },
  {
    path: '/message',
    component: () => import('@/views/message/index.vue'),
  },
  {
    path: '/city',
    component: () => import('@/views/city/index.vue'),
    meta: {
      hiddenTabbar: true,
    },
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

export default router
