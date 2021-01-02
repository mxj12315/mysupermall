<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainTabBar from "./components/content/mainTabBar/MainTabBar";


export default {
  name: 'App',
  components: {
    // HelloWorld,
    MainTabBar
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
