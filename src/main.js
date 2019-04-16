// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import iView from 'iview'
import 'iview/dist/styles/iview.css';

import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.withCredentials=true;

Vue.prototype.axios = axios

Vue.use(iView,{
  size:'small'
})
Vue.use(router)

import {
  setCookie,
  getCookie,
  delCookie
} from './components/global/cookie.js'

import{
  $delete,
  $post,
  $get,
  $put
} from './components/global/api.js'
 
let host = location.host;
let protocol = location.protocol;
let http_url = "";

if (!window.API_HOST) {
  http_url = `${location.protocol}//${location.host}`+API_URL ;
} else {
  http_url = API_HOST+API_URL;
}

axios.defaults.baseURL = http_url;
Vue.prototype.API_HOST = http_url;
Vue.prototype.setCookie = setCookie;
Vue.prototype.getCookie = getCookie;
Vue.prototype.delCookie = delCookie;
Vue.prototype.$delete = $delete;
Vue.prototype.$post = $post;
Vue.prototype.$get = $get;
Vue.prototype.$put = $put;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
