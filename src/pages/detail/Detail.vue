<template>
<div class="detail">
<!-- 详情页顶部导航 -->
  <detail-nav-bar/>

  <detail-info :goodInfo="goodInfo"/>

</div>
</template>

<script>
import DetailNavBar from "@/pages/detail/chrildComponents/DetailNavBar";
import DetailInfo from "@/pages/detail/chrildComponents/DetailInfo";

import {getDetail} from '@/network/detail'

export default {
  name: "Detail",
  data(){
    return {
      uid:null,  //商品id
      goodInfo:{
        imgUrlList:[],
        title:'',
        columns:[],
        desc:'',
        discount:'',
        newPrice:0,
        oldPrice:0,
        realPrice:0
      }

    }
  },
  components:{
    DetailNavBar,
    DetailInfo
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
        // 参数复杂时候也可以使用类封装
        this.goodInfo.imgUrlList=res.data.detail.topImages
        this.goodInfo.title=res.data.detail.title
        this.goodInfo.columns=res.data.detail.columns
        this.goodInfo.desc=res.data.detail.desc
        this.goodInfo.discount=res.data.detail.discount
        this.goodInfo.newPrice=res.data.detail.newPrice
        this.goodInfo.oldPrice=res.data.detail.oldPrice
        this.goodInfo.realPrice=res.data.detail.realPrice
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
