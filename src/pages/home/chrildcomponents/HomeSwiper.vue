<template>
  <div class="home-swiper">
    <el-carousel :interval="5000" arrow="always" height="200px">
      <el-carousel-item v-for="item in banners" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt=""/>
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
  }

}

</script>

<style scoped>
.home-swiper img {
  width: 100%;
  max-height: 200px;
}
</style>
