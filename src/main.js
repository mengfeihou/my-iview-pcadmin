// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false
import Axios from './api/http'
Vue.use(Axios);

Vue.use(iView);



import '../static/css/reset.css' //样式重置
import animated from 'animate.css';
Vue.use(animated);



/* eslint-disable no-new */
import FastClick from 'fastclick'
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false)
}

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
