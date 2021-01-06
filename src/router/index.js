import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import("@/pages/home/Home")
const CateGroy = () => import("@/pages/category/CateGory")
const Cart = () => import("@/pages/cart/Cart")
const ProFile = () => import("@/pages/profile/ProFile")
const Detail =()=> import('@/pages/detail/Detail')

// 使用第三方插件
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/category",
      component: CateGroy
    },
    {
      path: "/Cart",
      component: Cart
    },
    {
      path: "/profile",
      component: ProFile
    },
    {
      path: "/detail/:uid",
      component: Detail,
      meta:{
        keepAlive: false
      }

    }

  ]
})
