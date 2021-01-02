<template>
  <div>
    <nav-bar navBgc="deeppink">
      <div class="home-navbar" slot="center">
        首页
      </div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends"/>

    <!--    <h2>首页</h2>-->
  </div>
</template>

<script>
// 组件导入
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/pages/home/chrildcomponents/HomeSwiper";
import RecommendView from "@/pages/home/chrildcomponents/RecommendView";
// 函数导入
import {getHomeMultiData} from "@/network/home";


export default {
  name: 'Home',

  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
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
  }

}
</script>

<style>
.home-navbar {
  color: #f6f6f6;
  font-size: 14px;
}


</style>
