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
    favorites: []
  },
  mutations: {
    // mutation to initialize the boroughsData array, takes boroughs as an arg
    'INIT_BOROUGHS' (state, boroughs) {
      state.boroughs = boroughs
    },
    // mutation to initialize the categoriesData array, takes boroughs as an arg
    'INIT_CATEGORIES' (state, categories) {
      state.categories = categories
    },
    // mutation to initialize the placeData array, takes boroughs as an arg
    'INIT_PLACES' (state, places) {
      state.places = places
    },
    // mutation to initialize the favoritesData array, takes boroughs as an arg
    'INIT_FAVORITES' (state, favorites) {
      state.favorites = favorites
    },
    // mutation to add location to the selectedBorough array, takes location as an arg
    'SET_LOCATION' (state, location) {
      state.selectedBorough = location
    },
  },
  actions: {
    // actions to initialize mutations with data
    initBoroughs: ({ commit }) => {
      commit('INIT_BOROUGHS', boroughsData)
    },
    initCategories: ({ commit }) => {
      commit('INIT_CATEGORIES', categoryData)
    },
    initPlaces: ({ commit }) => {
      commit('INIT_PLACES', placeData)
    },
    initFavorites: ({ commit }) => {
      commit('INIT_FAVORITES', this.favorites) 
    },

    // action to select location, and update state
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
    getFavorites: state => {
      return state.favorites
    },
    getLocation: state => {
      // return selectedBorough array
      return state.selectedBorough
    }
  },
})
