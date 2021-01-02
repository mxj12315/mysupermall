import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=>import("@/pages/home/Home")
const CateGroy = ()=>import("@/pages/category/CateGory")
const Cart = ()=>import("@/pages/cart/Cart")
const ProFile = ()=>import("@/pages/profile/ProFile")


// 使用第三方插件
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path:"/",
      component:Home
    },
    {
      path:"/home",
      component:Home
    },
    {
      path:"/category",
      component:CateGroy
    },
    {
      path:"/Cart",
      component:Cart
    },
    {
      path:"/profile",
      component:ProFile
    }

  ]
})
