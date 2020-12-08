import Vue from 'vue'
import App from './App.vue'

import ImageShadow from '../src'
Vue.component('image-shadow', ImageShadow)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
