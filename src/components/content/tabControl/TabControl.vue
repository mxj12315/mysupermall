<template>
  <div class="tab-control">
    <div v-for="(title,index) in titles"
         :key="title"
         class="tab-control-item"
         :class="{active:index===currentIndex}"
    @click="onChangeIndex(index)">
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
name: "TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    onChangeIndex(index){
      this.currentIndex=index
      this.$emit('getTabControlIndex',index)
    }
  }
}
</script>

<style scoped>
.tab-control{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30px;
  line-height: 30px;
  background-color: #ffffff;
}


.tab-control span {
  padding: 5px 5px;
}

.active{
  color: deeppink;
  border-bottom: 2px solid deeppink;
}
</style>
