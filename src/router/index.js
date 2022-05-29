import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Register from '../pages/register/Register'
import PageLoading from '../pages/loading/PageLoading'
import Feed from '../pages/feed/Feed'
import Result from '../pages/result/Result'
Vue.use(Router)

export default new Router({
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
    },
    {
      path: '/feed',
      name: 'Feed',
      component: Feed
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]
})
