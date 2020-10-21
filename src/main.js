import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引进element
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'


require('echarts-wordcloud');
Vue.config.productionTip = false

// Vue.config.devtools = true;//开发者模式,能使用chrome上的vue工具
Vue.use(MintUI);
new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
