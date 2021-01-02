<template>
  <tab-bar>
    <tab-bar-item path="/home" >
      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/home-fill.png"
        alt=""
      />
      <div slot="item-text" >首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/all.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/all-fill.png"
        alt=""
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/add-cart.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/add-cart-fill.png"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img
        slot="item-icon"
        src="~assets/img/tabbar/bussiness-man.png"
        alt=""
      />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/bussiness-man-fill.png"
        alt=""
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../common/tarbar/TabBar";
import TabBarItem from "../common/tarbar/TarBarItem";

export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
