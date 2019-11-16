import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout'
import Login from '../views/login'
import Home from '@/views/home'
import Publish from '@/views/publish'
import Article from '@/views/article'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  // 一级路由登录页
  {
    path: '/login',
    component: Login
  },
  // 一级路由主页
  {
    path: '/layout',
    component: Layout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: '/publish',
        component: Publish
      },
      {
        path: '/article',
        component: Article
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
