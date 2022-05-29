// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueLocalStorage from 'vue-localstorage'
import fastclick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import './assets/css/font.css'
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';

fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(vueLocalStorage)
Vue.use(Toast, {
  type: 'center',
  duration: 3000,
  wordWrap: true,
  width: '5rem'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vueLocalStorage,
  components: { App },
  template: '<App/>'
})
