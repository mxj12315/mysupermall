<template>
  <div class="home-swiper">
    <el-carousel :interval="2000" arrow="always" :height="swiperImageHeight+'px'">
      <el-carousel-item v-for="(item) in banners" :key="item.title">
        <a :href="item.link">
          <img ref="imgHeight" :src="item.image" alt="" @load="getImageHeight"/>
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {  //数组必默认值是函数
        return []
      }
    },
  },
  data(){
    return {
      // clientWidth: document.body.clientWidth  //屏幕可视区域的宽度
      swiperImageHeight:0
    }
  },
  methods:{

    getImageHeight(){
      if (this.$refs.imgHeight){
        this.$nextTick(()=>{
          let h= this.$refs.imgHeight[0].height
          this.swiperImageHeight=h
        })
      }

    }
  },
  mounted() {

    this.getImageHeight()  // 确保有高度
    window.addEventListener('resize',()=>{
      this.swiperImageHeight=this.$refs.imgHeight[0].height
    },false)
  }

}

</script>

<style scoped>
.home-swiper img {
  width: 100%;
  /*height: 100%;*/
  /*max-height: 200px;*/
}
</style>
