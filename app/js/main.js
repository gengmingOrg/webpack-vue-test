// 整个入口js
import Vue from "vue";
import router from "./router/index.js";
import App from "./App.vue"

//声明不是生产环境
Vue.config.productionTip = false;

new Vue({
  el:"#app",
  router,
  template:"<App />",
  components:{
    App
  }

})
