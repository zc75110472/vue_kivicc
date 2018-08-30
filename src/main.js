// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Vuex from 'vuex'
import mint from 'mint-ui'
import $ from 'jquery'
import 'mint-ui/lib/style.css'
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)
import '../static/css/global.css'
import '../static/fonts/iconfont.js'
/* 默认请求的url   怪载到vue的原型链上*/
Axios.defaults.baseURL = 'http://47.96.29.109/vueProject/'
Vue.prototype.$http = Axios
Vue.prototype.dataURL = function (file,title,id) {
  id = (id === undefined)?'':id;
  return file+'?title='+title+id;
}
Vue.use(mint)
Vue.prototype.$jq = $
Vue.config.productionTip = false
Vue.use(Vuex)
let store = new Vuex.Store({
  state:{
    num:1,
    shopList:{}
  },
  mutations:{
    addCartCount(state){
      state.num++
    },
    reduceCartCount(state){
      state.num--
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
