import Vue from 'vue'
import App from './App.vue'
import VueTouch from 'vue-touch'
import router from './router/router'
import store from './store/store'
import './assets/css/tailwind.css'

Vue.use(VueTouch);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
