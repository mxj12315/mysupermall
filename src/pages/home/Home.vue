<template>
  <div id="home">
    <!--顶部导航-->
    <div class="nav">
      <nav-bar navBgc="deeppink">
        <div class="home-navbar" slot="center">
          首页
        </div>
      </nav-bar>
    </div>
    <!--轮播图-->
    <home-swiper :banners="banners"/>
    <!--子菜单-->
    <recommend-view :recommends="recommends"/>
    <!--图片链接-->
    <feature/>
    <!--tabControl-->
    <tab-control class="tab-con" :titles="titles"/>
    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>
  </div>
</template>

<script>
// 组件导入
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/pages/home/chrildcomponents/HomeSwiper";
import RecommendView from "@/pages/home/chrildcomponents/RecommendView";
import Feature from "@/pages/home/chrildcomponents/Feature";
import TabControl from "@/components/content/tabControl/TabControl";
// 函数导入
import {
  getHomeMultiData,
  getHomeGoods
} from "@/network/home";


export default {
  name: 'Home',

  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['精选', '好物', '热销'],
      goods:{
        pop:{
          page:0,
          list:[]
        },
        news:{
          page:0,
          list:[]
        },
        sell:{
          page:0,
          list:[]
        }
      }
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl
  },
  methods: {
    // abc(){
    //   console.log('-----')
    //   console.log(this.$refs.homeSwiper);
    // }
  },
  created() {
    getHomeMultiData().then(res => {
      console.log(res);
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    }).catch(err => {
      console.log(err);
    })

    getHomeGoods('pop',10).then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  }

}
</script>

<style>
#home {
  padding-top: 44px;
  padding-bottom: 49px;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}

.home-navbar {
  color: #f6f6f6;
  font-size: 14px;
}

.tab-con {
  position: sticky;
  top: 44px;
}
</style>
