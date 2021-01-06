<template>
  <div id="home">
    <!--顶部导航-->
    <div class="nav" @dblclick="onHomeDbClick">
      <nav-bar navBgc="deeppink">
        <div class="home-navbar" slot="center">
          首页
        </div>
      </nav-bar>
    </div>
    <!--吸顶-->
    <tab-control :class="{fixed:isPositions}" v-show="isPositions" ref="tabControl2" :titles="titles"
                 @getTabControlIndex="onGetTabControl"/>
    <scroll :probe-type="3"
            :pullUpLoad="true"
            @pullingUp="onPullingUp"
            @scrollOffset="onScrollOffset"
            ref="homeScroll"
            class="home-wrapper">
      <!--轮播图-->
      <home-swiper :banners="banners" />
      <!--子菜单-->
      <recommend-view :recommends="recommends"/>
      <!--图片链接-->
      <feature/>
      <!--tabControl-->
      <tab-control ref="tabControl1" :titles="titles" @getTabControlIndex="onGetTabControl"/>
      <div v-for="(item,key,index) in goods">
        <good-list v-if="homeCurrentIndex==index" :goodList="goods[key].list"/>
      </div>
      <load-more v-show="modelIsShow"/>
    </scroll>
    <back-top @click.native="onBackTop" v-show="isShow"/>
  </div>
</template>

<script>
// 组件导入
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/pages/home/chrildcomponents/HomeSwiper";
import RecommendView from "@/pages/home/chrildcomponents/RecommendView";
import Feature from "@/pages/home/chrildcomponents/Feature";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodList from "@/components/content/goods/GoodList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backTop/BackTop";
import ModelBox from "@/components/common/modelBox/ModelBox";
import LoadMore from "@/components/common/loadMore/LoadMore";

// 函数导入
import {
  getHomeMultiData,
  getHomeGoods
} from "@/network/home";

export default {
  name: 'Home',
  comments: false,
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['精选', '好物', '热销'],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      homeCurrentIndex: 0,
      scroll: null,
      isShow: false,
      modelIsShow: false,
      isPositions: false,
      offsetTop: 556,
      currentScroll:0
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
    GoodList,
    Scroll,
    BackTop,
    ModelBox,
    LoadMore,

  },
  methods: {
    getHomeTypeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page)
        .then(res => {
          // this.goods[type].list =[]  //非服务器的数据，需要重置为空
          for (const item of res.data[type]) {
            this.goods[type].list.push(item)
          }
          // this.goods[type].list = this.goods[type].list.concat(res.data[type])
          // console.log(res.data[type]);
          this.goods[type].page += 1
        })
        .catch(err => {
          console.log(err);
        })

    },
    onGetTabControl(index) {
      /*
      控制切换
      */
      this.homeCurrentIndex = index
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    onBackTop() {
      this.$refs.homeScroll.backTop(0, 0)
    },
    onScrollOffset(options) {   // 监听滚动条的位
      // options[1] > -500 ? this.isShow = false : this.isShow = true
      this.isShow = -options[1] > 500
      this.isPositions = -options[1] > this.offsetTop
    },
    // 上拉加载
    onPullingUp() {
      if (this.homeCurrentIndex == 0) {
        const isLoading = this.getHomeTypeGoods('pop')
        // 继续加载控制
        this.modelIsShow = true
        // this.modelIsShow=false
        setTimeout(() => {
          this.modelIsShow = false
          this.$refs.homeScroll.finishPullUps()
        }, 3000)
      } else if (this.homeCurrentIndex == 1) {
        this.getHomeTypeGoods('new')
        this.modelIsShow = true
        // 继续加载控制
        setTimeout(() => {
          this.modelIsShow = false
          this.$refs.homeScroll.finishPullUps()
        }, 3000)
      } else if (this.homeCurrentIndex == 2) {
        this.getHomeTypeGoods('sell')
        this.modelIsShow = true
        // 继续加载控制
        setTimeout(() => {
          this.modelIsShow = false
          this.$refs.homeScroll.finishPullUps()
        }, 3000)
      }
    },
    onHomeDbClick() {
      this.$refs.homeScroll.backTop(0, 0)
    }

  },
  activated() {
    // 进入时将离开时的y值复制给页面的scroll组件
    this.$refs.homeScroll.backTop(0,this.currentScroll,600)
    this.$refs.homeScroll.refresh()   // 执行一次刷新
  },
  deactivated() {
    // 离开时记录一下y坐标
    this.currentScroll =this.$refs.homeScroll.getCurrentScrollY()
  },
  created() {
    getHomeMultiData().then(res => {
      console.log(res);
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    }).catch(err => {
      console.log(err);
    })


    this.getHomeTypeGoods('pop')
    this.getHomeTypeGoods('new')
    this.getHomeTypeGoods('sell')

  },

  mounted() {  // 挂载到dom时候执行
    console.log(this.$refs.tabControl2)
    console.log(this.$refs.tabControl1)
  }

}
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}

/*中间部分已经是滚动，这里不需要了*/
/*.nav {*/
/*  position: fixed;*/
/*  top: 0;*/
/*  left: 0;*/
/*  right: 0;*/
/*  z-index: 9999;*/
/*}*/

.home-navbar {
  color: #f6f6f6;
  font-size: 14px;
}

/*betterscroll中失效*/
.fixed {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 999;
}

.home-wrapper {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
