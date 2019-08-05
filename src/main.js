/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import Aouter from './router'


new Vue({
  el: '#app',
  render: h => h(App),
  router:Aouter
})
