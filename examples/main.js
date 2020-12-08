import Vue from 'vue'
import App from './App.vue'

import ComponentTemplate from '../src'
Vue.component('component-template', ComponentTemplate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
