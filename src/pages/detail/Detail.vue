<template>
<div class="detail">
<!-- 详情页顶部导航 -->
  <detail-nav-bar/>
  <detail-swiper :detail-banners="imgUrlList"/>
  {{ uid }}

</div>
</template>

<script>
import DetailNavBar from "@/pages/detail/chrildComponents/DetailNavBar";
import DetailSwiper from "@/pages/detail/chrildComponents/DetailSwiper";


import {getDetail} from '@/network/detail'

export default {
  name: "Detail",
  data(){
    return {
      uid:null,  //商品id
      imgUrlList:[]
    }
  },
  components:{
    DetailNavBar,
    DetailSwiper
  },
  activated() {
    if (this.uid==this.$route.params.uid){
      console.log("数据相同")
      // 数据相同不在执行网络请求
    }else{
      this.uid = this.$route.params.uid
      // 网络请求
      getDetail(this.uid).then(res=>{
        console.log(res.data)
        this.imgUrlList=res.data.detail.topImages
      })
      .catch(err=>{
        console.log(err);
      })
    }
  },

}
</script>

<style scoped>

</style>
