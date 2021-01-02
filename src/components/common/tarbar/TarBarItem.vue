<template>
  <div>
    <div class="tab-bar-item" @click="onactive">
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props: {
    path: {  // 路由跳转路径
      type: String,
      default: "/home",
    },
    activeColor: {  // 点击后的文字颜色
      type: String,
      default: '',
    },
  },
  data() {
    return {
      //   isActive: false, //这种设置所有都会受到影响
    };
  },
  computed: {
    isActive() {
      // 等于-1说明没有包含
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods: {
    onactive() {
      //如果当前以页面和要跳转的路由一致则不执行
      if (this.$route.path == this.path) {
        console.log(this.$route.path);
        return;
      }
      this.$router.replace({
        path: this.path,
      });
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  vertical-align: middle;
  margin-top: 3px;
}
</style>
