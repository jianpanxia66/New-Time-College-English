import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    a:0
  },
  mutations: {
    set(state,value){
      state.a=value
    }
  },
  actions: {
  },
  modules: {
  }
})
