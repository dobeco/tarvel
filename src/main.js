// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/iconfont/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import 'swiper/dist/css/swiper.css'
import store from './store'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})


/*
//cordova 打包
document.addEventListener('deviceready',onDeviceReady);
function  onDeviceReady() {

}

*/


