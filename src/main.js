import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(VueAxios, axios)
Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
