import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Register from '../pages/register/Register'
import PageLoading from '../pages/loading/PageLoading'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/loading',
      name: 'PageLoading',
      component: PageLoading
    }
  ]
})
