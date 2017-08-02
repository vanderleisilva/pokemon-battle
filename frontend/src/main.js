import Vue from 'vue'
import App from './App'
import router from './router'
import autoProgress from 'vue-auto-progress'
import toastr from 'vue-toastr'

window.jQuery = require('jquery');
require('bootstrap');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<div><App/><toastr ref="toastr"/><auto-progress/></div>',
  components: { App, toastr, autoProgress }
})