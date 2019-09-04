// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router" //光引入还是不能使用，通过Vue.use(VueRouter)后才能用，这句相当于：var VueRouter = require('vue-router')
import VueResource from 'vue-resource'

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter()
new Vue({
  el: '#app',
  render:function (h) {
    return h(App)
  }
})
