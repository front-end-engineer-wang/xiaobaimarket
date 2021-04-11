import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail',
    name: 'detail',
    component: ()=>import ('views/Detail.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: ()=>import ('views/Profile.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: ()=>import ('views/Cart.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: ()=>import ('views/Category.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: ()=>import ('views/Detail.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
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
