import Vue from 'vue'
import VueRouter from 'vue-router'
// import Course from '../views/Course.vue'
// import Header from '../components/Header.vue'
import Me from '../views/Me.vue'
import login from '../views/login.vue'
// home有关vue

import Home from '../views/Home.vue'
// 功能页面
import word from '../views/word/word.vue'
import listen from '../views/word/listen.vue'
import reading from '../views/word/reading.vue'
import composition from '../views/word/composition.vue'
import six from '../views/word/six.vue'



import { Swipe, SwipeItem } from 'mint-ui';
Vue.use(VueRouter)


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
const routes = [
    //六级词汇
    {
      path:'/login',
      component:login,
      meta:{
      keepAlive:true  
      }
    },
  //六级词汇
  {
    path:'/six',
    component:six,
    meta:{
    keepAlive:true  
    }
  },
  // 高分作文
   {
    path:'/composition',
    component:composition,
    meta:{
    keepAlive:true  
    }
  },
  //阅读分析
  {
    path:'/reading',
    component:reading,
    meta:{
    keepAlive:true  
    }
  },
  //听力训练
  {
    path:'/listen',
    component:listen,
    meta:{
    keepAlive:true  
    }
  },
//单词训练
  {
    path:'/word',
    component:word,
    meta:{
    keepAlive:true  
    }
  },
//个人中心
  {
    path:'/Me',
    component:Me
  },
  {
    path: '/',
    component: Home,
    // 需要被缓存下来，meta不能改名
    meta:{
      keepAlive:true  
      }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

  // 挂载路由导航



const router = new VueRouter({
  routes
})

export default router

