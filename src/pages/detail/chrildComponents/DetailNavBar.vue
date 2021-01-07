<template>
<nav-bar navBgc="#f6f6f6" class="detail-nav">
  <div slot="left" class="back" @click="onBackHome">
    <img src="~assets/img/fanhui.png" alt="">
  </div>
  <div class="titles" slot="center">
    <div v-for="(title,index) in titles"
         class="title"
         :class="{active:currentIndex===index}"
         @click="onChangeActive(index)">
      {{title}}
    </div>
  </div>
</nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components:{
    NavBar
  },
  data(){
    return {
      isActive:false,
      titles:[
        '商品',
        '推荐',
        '详情',
        '评论'
      ],
      currentIndex:0
    }
  },
  methods:{
    onChangeActive(index){
      this.currentIndex=index
    },
    onBackHome(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.titles {
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.title{
  flex: 1;
}
.active{
  color: deeppink;
}
.back {
  text-align: center;
}
.back img{
  height: 20px;
  width: 20px;
}
</style>
