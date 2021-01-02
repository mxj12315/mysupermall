<template>
  <div class="navbar" :style="bgcColor">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    navBgc: {
      type: String,
      default: ''
    }
  },
  computed: {
    bgcColor() {
      return this.navBgc ? {backgroundColor: this.navBgc} : {backgroundColor: "#42b983"}
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  height: 44px;
  line-height: 44px;

}

.center {
  flex: 1;
  text-align: center;
}

.left, .right {
  width: 60px;
}
</style>
