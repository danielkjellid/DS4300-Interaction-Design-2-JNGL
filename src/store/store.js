import Vue from 'vue'
import Vuex from 'vuex'

import { boroughsData } from '../data/boroughs'
import { categoryData } from '../data/categories'
import { placeData } from '../data/places'
import { userData } from '../data/users'
import { reviewData } from '../data/reviews'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boroughs: [],
    categories: [],
    places: [],
    users: [],
    reviews: [],
    selectedBorough: [],
    favorites: [],
    tooltipShown: {
      addFavorite: false,
      removeFavorite: false
    },
    regret: undefined
  },
  mutations: {
    // mutation to initialize the boroughsData array, takes boroughs as an arg
    'INIT_BOROUGHS' (state, boroughs) {
      state.boroughs = boroughs
    },
    // mutation to initialize the categoriesData array, takes categories as an arg
    'INIT_CATEGORIES' (state, categories) {
      state.categories = categories
    },
    // mutation to initialize the placeData array, takes places as an arg
    'INIT_PLACES' (state, places) {
      state.places = places
    },
    // mutation to initialize the userData array, takes users as an arg
    'INIT_USERS' (state, users) {
      state.users = users
    },
    // mutation to initialize the reviewData array, takes reviews as an arg
    'INIT_REVIEWS' (state, reviews) {
      state.reviews = reviews
    },
    // mutation to initialize the favoritesData array, takes boroughs as an arg
    'INIT_FAVORITES' (state, favorites) {
      state.favorites = favorites
    },
    'ADD_FAVORITE' (state, favorite) {
      state.favorites = [ ...state.favorites, favorite ]
    },
    'REMOVE_FAVORITE' (state, id) {
      state.favorites = state.favorites.filter(f => f.id !== id)
    },
    // mutation to add location to the selectedBorough array, takes location as an arg
    'SET_LOCATION' (state, location) {
      state.selectedBorough = location
    },
    'SET_REGRET' (state, place) {
      state.regret = place
    },
    'UPDATE_TOOLTIP_SHOWN' (state, type) {

      switch (type) {
        case 'add_favorite':
          state.tooltipShown = { ...state.tooltipShown, addFavorite: true }
          break;
          
        case 'remove_favorite':
          state.tooltipShown = { ...state.tooltipShown, removeFavorite: true }
          break;

        default:
          break;
      } 
      
    },
    'ADD_REVIEW' (state, review) {
      state.reviews = [...state.reviews, review]
    }
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
    initUsers: ({ commit }) => {
      commit('INIT_USERS', userData)
    },
    initReviews: ({ commit }) => {
      commit('INIT_REVIEWS', reviewData)
    },
    addFavorite: ({ commit }, favorite) => {
      commit('ADD_FAVORITE', favorite)
    },
    removeFavorite: ({ commit }, id) => {
      commit('REMOVE_FAVORITE', id)
    },
    updateTooltipShown: ({ commit }, type) => {
      commit('UPDATE_TOOLTIP_SHOWN', type)
    },
    setModal: ({commit}, modal) => {
      commit('SET_MODAL', modal)
    },
    // action to select location, and update state
    selectLocation: ({ commit }, location) => {
      // commit SET_LOCATION mutation with location as arg
      commit('SET_LOCATION', location)
    },
    setRegret: ({ commit }, place) => {
      commit('SET_REGRET', place)
    addReview: ({ commit }, review) => {
      commit('ADD_REVIEW', review)
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
    getPlace: state => id => {
      return state.places.find(place => place.id === id)
    },
    getLocation: state => {
      // return selectedBorough array
      return state.selectedBorough
    },
    getRegret: state => {
      return state.regret
    },
    getUser: state => id => {
      return state.users.find(user => user.id === id)
    },
    getTooltipShown: state => type => {
      switch (type) {
        case 'add_favorite':
          return state.tooltipShown.addFavorite
          
        case 'remove_favorite':
          return state.tooltipShown.removeFavorite
          
        default:
          return false;
      } 
    }
    },
    getModal: state => {
      return state.modal
    },
    getReviews: state => {
      return state.reviews
    },
    getPlaceReviews: state => id => {
      return state.reviews.filter(review => review.placeId === id)
    },
  },
})
