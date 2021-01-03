<template>
  <div class="good-list" >
    <GoodListItem v-for="item in goodList" :goodsItem="item"/>
  </div>
</template>

<script>
import GoodListItem from "@/components/content/goods/GoodListItem";
export default {
  name: "GoodList",
  props:{
    goodList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodListItem
  }
}
</script>

<style scoped>
.good-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 10px;
}
</style>
