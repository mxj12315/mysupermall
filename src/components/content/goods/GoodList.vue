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
      },
      validator: function (value) {
        // console.log('00000',value)
        return value.length%2==0?value:value.push({})
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
  margin: 10px 5px auto;

}
</style>
