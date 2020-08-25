import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import StarRating from 'vue-star-rating'
import Vuetify from 'vuetify'
import { Steps, Popover } from 'ant-design-vue';
import api from './http-common.js'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'popper.js/dist/popper.min'
import 'vuetify/dist/vuetify.min.css'

Vue.component(Steps);
Vue.use(Steps);
Vue.component(Popover);
Vue.use(Popover);
Vue.use(Vuetify)
Vue.component('star-rating', StarRating);
Vue.config.productionTip = false

if (localStorage.getItem('token')) {
  api.defaults.headers.common['Authorization'] = localStorage.getItem('token')
  store.dispatch('SET_USER_FROM_TOKEN')
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
