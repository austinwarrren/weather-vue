import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

// Axios.js default URL:
axios.defaults.baseURL = 'http://api.openweathermap.org'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
