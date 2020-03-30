import Vue from 'vue'
import Vuex from 'vuex'

import { boroughsData } from '../data/boroughs'
import { categoryData } from '../data/categories'
import { placeData } from '../data/places2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boroughs: [],
    categories: [],
    places: [],
    selectedBorough: [],
  },
  mutations: {
    'INIT_BOROUGHS' (state, boroughs) {
      state.boroughs = boroughs
    },
    'INIT_CATEGORIES' (state, categories) {
      state.categories = categories
    },
    'INIT_PLACES' (state, places) {
      state.places = places
    },
    // mutation to add location to the selectedBorough array, takes location as an arg
    'SET_LOCATION' (state, location) {
      state.selectedBorough = location
    },
  },
  actions: {
    initBoroughs: ({ commit }) => {
      commit('INIT_BOROUGHS', boroughsData)
    },
    initCategories: ({ commit }) => {
      commit('INIT_CATEGORIES', categoryData)
    },
    initPlaces: ({ commit }) => {
      commit('INIT_PLACES', placeData)
    },
    selectLocation: ({ commit }, location) => {
      // commit SET_LOCATION mutation with location as arg
      commit('SET_LOCATION', location)
    }
  },
  getters: {
    getBoroughs: state => {
      return state.boroughs
    },
    getCategories: state => {
      return state.categories
    },
    getPlaces: state => {
      return state.places
    },
    getLocation: state => {
      // return selectedBorough array
      return state.selectedBorough
    }
  },
  modules: {
  }
})
