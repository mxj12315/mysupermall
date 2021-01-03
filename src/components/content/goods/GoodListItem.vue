<template>
  <div class="good-list-item">
    <div class="good">
      <a href="goodsItem.url" class="good-link">
        <div class="good-img">
          <img :src="goodsItem.img" alt="">
        </div>
        <div class="good-content">
        <span class="good-title" :title="goodsItem.title">
          {{ goodsItem.title }}
        </span>
          <div class="good-info">
            <span class="good-price">
          {{ goodsItem.price }}
        </span>
            <span class="good-star">
          <img src="~assets/img/home/collect_icon.png" alt=""> {{ goodsItem.star }}
        </span>
          </div>
        </div>
      </a>
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
  }
}
</script>

<style scoped>
.good-link {
  display: block;
}

.good-list-item {
  width: 150px;
  height: 250px;
}

.good-img img {
  width: 100%;
  height: 200px;
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
