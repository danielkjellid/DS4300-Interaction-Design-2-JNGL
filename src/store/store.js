import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedBorough: [],
  },
  mutations: {
    // mutation to add location to the selectedBorough array, takes location as an arg
    'SET_LOCATION' (state, location) {
      state.selectedBorough = location
    }
  },
  actions: {
    selectLocation: ({ commit }, location) => {
      // commit SET_LOCATION mutation with location as arg
      commit('SET_LOCATION', location)
    }
  },
  getters: {
    getLocation: state => {
      // return selectedBorough array
      return state.selectedBorough
    }
  },
  modules: {
  }
})
