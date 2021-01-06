<template>
  <div class="good-list-item" @click="getGoodId">
    <div class="good" v-if="Object.keys(goodsItem)">
      <div class="good-img">
        <img :src="goodsItem.img" alt="">
      </div>
      <div class="good-content">
        <span class="good-title" :title="goodsItem.title">
          {{ goodsItem.title }}
        </span>
        <div class="good-info">
            <span class="good-price">
          ￥{{ goodsItem.price }}
        </span>
          <span class="good-star">
          <img src="~assets/img/home/collect_icon.png" alt=""> {{ goodsItem.star }}
        </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods:{
    // 获取商品的id,并且做路由跳转
    getGoodId(){
      // console.log(this.goodsItem.id);
      this.$router.push('/detail/'+this.goodsItem.id)
    }
  }
}
</script>

<style scoped>


.good-list-item {
  width: 48%;
}

.good-img img {
  width: 100%;
  min-height: 200px;
  border-radius: 3%;

}

.good-content {
  height: 50px;
  font-size: 12px;
  margin-top: 10px;
}

.good-title {
  display: inline-block; /* span是inline元素，不可设置宽度和高度 */
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.good-info{
  text-align: right;
  padding-right: 5px;
}

.good-price {
  margin-left: 20px;
  color: red;
}

.good-star {
  color: pink;
  margin-left: 20px;
}

.good-star img {
  width: 10px;
  height: 10px;
}
</style>
