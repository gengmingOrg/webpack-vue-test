import Vue from "vue";
import Router from "vue-router";
import Home from "../home/index.vue"

Vue.use(Router);

//const  Home = {template: '<div class="home"><h1>home</h1></div>'}
export default new Router({
  routes:[
    {path: '/',component: Home}
  ]
})
