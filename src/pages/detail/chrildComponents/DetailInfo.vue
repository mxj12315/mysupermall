<template>
  <div class="detail-info">
    <detail-swiper :detail-banners="goodInfo.imgUrlList"/>
    <div class="detail-group">
      <div class="detail-title">
        {{ goodInfo.title }}
      </div>
      <div class="price">
        <div class="detail-price-group">
          <div class="new-price">{{ newPrice }}</div>
          <div class="old-price">{{ oldPrice }}</div>
        </div>
        <div class="tag-price">
          {{ goodInfo.discount }}
        </div>
      </div>
      <div class="other-group">
       <div class="other-item" v-for="item in goodInfo.columns">{{item}}</div>
      </div>
    </div>

  </div>
</template>

<script>
import DetailSwiper from "@/pages/detail/chrildComponents/DetailSwiper";

export default {
  name: "DetailInfo",
  props: {
    goodInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    DetailSwiper,
  },
  computed: {
    newPrice() {
      return '￥' + this.goodInfo.newPrice
    },
    oldPrice() {
      return '￥' + this.goodInfo.oldPrice
    }
  }
}
</script>

<style scoped>
.detail-group {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px 15px 10px;
  height: 150px;
  border-bottom: 1px solid #f6f6f6;
}

.detail-title {
  font-size: 20px;
  font-weight: 500;
}

.detail-price-group {
  margin-top: 10px;
  display: flex;
  justify-content: start;
  align-items: baseline;
}
.price {
  display: flex;
  justify-content: start;
  align-items: center;
}
.new-price {
  color: red;
  font-size: 24px;
  font-weight: 700;
}

.old-price {
  font-size: 12px;
  margin-left: 5px;
  color: #666666;
  text-decoration: #373938 line-through;
}

.tag-price {
  height: 16px;
  line-height: 16px;
  color: #f6f6f6;
  font-size: 12px;
  padding: 5px;
  margin-left: 5px;
  background-color: pink;
  border-radius: 5px;
}

.other-group{
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
}
</style>
