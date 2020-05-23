import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth.js'
import info from './info.js'
import category from './category.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error){
      state.error = error
    },
    clearEror(){
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
  actions: {
  },
  modules: {
  	auth,
    info,
    category
  }
})
