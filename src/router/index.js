import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Translatetion from '../views/Translatetion.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/translatetion',
      component:Translatetion
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
