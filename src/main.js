import Vue from 'vue'
import App from './App.vue'
import store from './store'

import MainButton from '@/components/small/MainButton'
Vue.component('main-button', MainButton)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
