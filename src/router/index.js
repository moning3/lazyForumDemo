import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import List from '@/page/article/list'
import Details from '@/page/article/details'
import editDetails from '@/page/article/editDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
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
    }
  ]
})
