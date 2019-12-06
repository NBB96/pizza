// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { store } from './store/store.js';

Vue.config.productionTip = false

axios.defaults.baseURL='https://axios-app-b8cca.firebaseio.com/'
Vue.prototype.http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// router.beforeEach((to,from,next)=>{
//   // alert('请先登陆')
//   // if(this.$store.getters.isLogin===false){

//   // }
//   if(to.path=='/login' || to.path=='/register'){
//     next()
//   }else{
//     alert('请先登陆')
//     next('./login')
//   }
// })

// router.afterEach((to,from)=>{

// })
