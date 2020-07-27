import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: false
  },
  mutations: {
    increment (state,payload) {
      state.count = payload
    }
  }
})
Vue.prototype.$store = store