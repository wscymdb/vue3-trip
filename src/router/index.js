import { createRouter, createWebHashHistory } from 'vue-router'
import Login from './../views/login.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
