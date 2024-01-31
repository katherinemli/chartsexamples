import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = 'https://golandbackend-09fdf720d244.herokuapp.com/api'


Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
