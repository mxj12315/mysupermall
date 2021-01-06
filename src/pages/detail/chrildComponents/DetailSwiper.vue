<template>
  <div class="detail-swiper">
    <el-carousel :interval="5000" arrow="always" height="300px">
      <el-carousel-item v-for="item in detailBanners" :key="item">
        <a href="javascript:;">
          <img :src="item" alt=""/>
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "DetailSwiper",
  props: {
    detailBanners: {
      type: Array,
      default() {  //数组必默认值是函数
        return []
      }
    },
  }

}

</script>

<style scoped>
.detail-swiper img {
  width: 100%;
  min-height: 200px;
}
</style>
