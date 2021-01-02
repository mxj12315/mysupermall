<template>
  <div class="rec-view">
    <div class="rec-view-item"  v-for="item in recommends" :key="item.tilde">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="rec-view-item-text">{{ item.title }}</div>
      </a>
    </div>

  </div>
</template>

<script>
export default {
name: "RecommendView",
  props:{
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.rec-view {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 10px solid #f6f6f6;
}
.rec-view-item {
  text-align: center;
}
.rec-view img {
  width: 60px;
  height: 60px;
}

.rec-view-item-text {
  margin: 10px auto;
}


</style>
