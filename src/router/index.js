import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'
import home from '@/components/home'
import notfound from '@/components/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        header:header,
        body: home
      }
    },
    {
      path:'/404',
      name:'notfound',
      components: {
        header:header,
        body: notfound
      }
    }
  ]
})
