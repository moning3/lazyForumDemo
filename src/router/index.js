import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import Login from '@/page/login/login'
import List from '@/page/article/list'
import Details from '@/page/article/details'
import editDetails from '@/page/article/editDetails'
import userCenter from '@/page/user/userInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // 我的主题
    {
      path: '/article/list',
      name: 'list',
      component: List
    },
    {
      path: '/article/details/:id',
      name: 'details',
      component: Details
    },
    {
      path: '/article/editDetails/:id',
      name: 'editDetails',
      component: editDetails
    },
    // 用户中心
    {
      path: '/user/info',
      name: 'userInfo',
      component: userCenter
    }
  ]
})
