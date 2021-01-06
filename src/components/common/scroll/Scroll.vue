<template>
  <div ref="wrapper" style="touch-action: none;">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// better-scroll
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    }
  },
  data() {
    return {
      Scroll: null
    }
  },
  methods: {
    backTop(x,y,time=600) {
      this.Scroll.scrollTo(x,y,time)
    },
    finishPullUps(){
      this.Scroll.finishPullUp()
    },
    getCurrentScrollY(){
     return  this.Scroll?this.Scroll.y:0
    },
    refresh(){
      this.Scroll.refresh()
    }
  },
  mounted() {
    this.Scroll = new BScroll(this.$refs.wrapper, {
      // 1. probeType 为 0，在任何时候都不派发 scroll 事件，
      // 2. probeType 为 1，仅仅当手指按在滚动区域上，每隔 momentumLimitTime 毫秒派发一次 scroll 事件，
      // 3. probeType 为 2，仅仅当手指按在滚动区域上，一直派发 scroll 事件，
      // 4. probeType 为 3，任何时候都派发 scroll 事件，包括调用 scrollTo 或者触发 momentum 滚动动画
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad, //触发上拉事件的阈值，默认是90
      scrollY: true,  //允许Y轴滚动
      click: true,  // 内部的子元素的能够触发事件
      observeImage:true,  //监听图片加载自动调用refresh()
      observeDOM:true,//监听content内部dom加载自动调用refresh()
      mouseWheel: {  //扩展 BetterScroll 鼠标滚轮的能力
        speed: 20,
        invert: false,
        easeTime: 300
      }
    })
    this.Scroll.on('scroll', (position) => {
      this.$emit('scrollOffset',[position.x, position.y])
    })


    this.Scroll.on('pullingUp', () => {
      this.Scroll.refresh()
      this.$emit('pullingUp',[])
      // setTimeout(()=>{
      //   this.Scroll.finishPullUp()
      // },1000)
    })
  },

}
</script>
<!--scoped 局部作用域-->
<style scoped>

</style>
