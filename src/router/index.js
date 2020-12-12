/*
 * @Author: mn
 * @Date: 2020-11-23 17:31:05
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './Router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue')
  },
  {
      path:"/app",
      redirect: '/app',
      component: () => import('@/views/layout/Layout.vue'),
      children:[
          ...Router
      ]
  }
]

const router = new VueRouter({
  routes
})

export default router
