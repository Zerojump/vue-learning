// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MyApp from './MyApp'
import App from './App'
import VueRouter from "vue-router" //光引入还是不能使用，通过Vue.use(VueRouter)后才能用，这句相当于：var VueRouter = require('vue-router')
import VueResource from 'vue-resource'
import Apple from './components/apple'
import Banana from './components/banana'
import YellowBanana from './components/yellow_banana'
import Vuex from 'vuex'

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    totalPrice: 0
  },
  getters: {
    getTotal(state) {
      return state.totalPrice
    }
  },
  mutations: {
    increment(state, price) {
      state.totalPrice += price
    }, decrement(state, price) {
      state.totalPrice -= price
    }
  }, actions: {
    increase(context, price) {
      context.commit('increment', price)
    }
  }
})
let router = new VueRouter({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   redirect: '/apple'
    // },
    // {
    //   path: '/apple/:color',
    //   component: Apple
    // },
    {
      path: '/apple',
      component: Apple
    },
    {
      path: '/banana',
      component: Banana,
      children: [
        {
          path: 'yellow',
          component: YellowBanana
        }
      ]
    }
  ]

})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
// new Vue({
//   el: '#app',
//   render:function (h) {
//     return h(MyApp)
//   }
// })
