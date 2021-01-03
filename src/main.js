import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Button,Carousel,CarouselItem} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


require('./mock')
Vue.use(Button)
Vue.use(Carousel);
Vue.use(CarouselItem);


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
