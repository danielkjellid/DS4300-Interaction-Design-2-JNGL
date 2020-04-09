import Vue from "vue";
import Vuex from "vuex";

import { boroughsData } from "../data/boroughs";
import { categoryData } from "../data/categories";
import { placeData } from "../data/places";
import { userData } from "../data/users";
import { reviewData } from "../data/reviews";

Vue.use(Vuex);

// application store
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
      removeFavorite: false,
    },
    regret: undefined,
    willDelete: undefined
  },
  mutations: {
    // mutation to initialize the boroughsData array, takes boroughs as an arg
    INIT_BOROUGHS(state, boroughs) {
      state.boroughs = boroughs;
    },
    // mutation to initialize the categoriesData array, takes categories as an arg
    INIT_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    // mutation to initialize the placeData array, takes places as an arg
    INIT_PLACES(state, places) {
      state.places = places;
    },
    // mutation to initialize the userData array, takes users as an arg
    INIT_USERS(state, users) {
      state.users = users;
    },
    // mutation to initialize the reviewData array, takes reviews as an arg
    INIT_REVIEWS(state, reviews) {
      state.reviews = reviews;
    },
    // mutation to initialize the favoritesData array, takes favorites as an arg
    INIT_FAVORITES(state, favorites) {
      state.favorites = favorites;
    },
    // mutation to add favorites to store, takes favorite as an arg
    ADD_FAVORITE(state, favorite) {
      state.favorites = [...state.favorites, favorite];
    },
    // mutation to remove favortie from store. takes id as an arg
    REMOVE_FAVORITE(state, id) {
      state.favorites = state.favorites.filter((f) => f.id !== id);
    },
    // mutation to add location to the selectedBorough array, takes location as an arg
    SET_LOCATION(state, location) {
      state.selectedBorough = location;
    },
    // mutation to add the ability to regret removal of favorites
    SET_REGRET(state, place) {
      state.regret = place;
    },
    UPDATE_TOOLTIP_SHOWN(state, type) {
      switch (type) {
        case "add_favorite":
          state.tooltipShown = { ...state.tooltipShown, addFavorite: true };
          break;

        case "remove_favorite":
          state.tooltipShown = { ...state.tooltipShown, removeFavorite: true };
          break;

        default:
          break;
      }
    },
    // mutation for adding a review to the store, takes review as an arg
    ADD_REVIEW(state, review) {
      state.reviews = [...state.reviews, review];
    },
    SET_WILL_DELETE(state, place) {
      state.willDelete = place;
    }
  },
  actions: {
    // actions to initialize mutations with data
    // init actions is fires on application load, dispatched in App.vue
    initBoroughs: ({ commit }) => {
      commit("INIT_BOROUGHS", boroughsData);
    },
    initCategories: ({ commit }) => {
      commit("INIT_CATEGORIES", categoryData);
    },
    initPlaces: ({ commit }) => {
      commit("INIT_PLACES", placeData);
    },
    initUsers: ({ commit }) => {
      commit("INIT_USERS", userData);
    },
    initReviews: ({ commit }) => {
      commit("INIT_REVIEWS", reviewData);
    },
    addFavorite: ({ commit }, favorite) => {
      commit("ADD_FAVORITE", favorite);
    },
    removeFavorite: ({ commit }, id) => {
      commit("REMOVE_FAVORITE", id);
    },
    updateTooltipShown: ({ commit }, type) => {
      commit("UPDATE_TOOLTIP_SHOWN", type);
    },
    // action to select location, and update state
    selectLocation: ({ commit }, location) => {
      // commit SET_LOCATION mutation with location as arg
      commit("SET_LOCATION", location);
    },
    setRegret: ({ commit }, place) => {
      commit("SET_REGRET", place);
    },
    setWillDelete: ({ commit }, place) => {
      commit("SET_WILL_DELETE", place);
    },
    addReview: ({ commit }, review) => {
      commit("ADD_REVIEW", review);
    },
  },
  getters: {
    // getters get data accross the application
    getBoroughs: (state) => {
      return state.boroughs;
    },
    // getter for getting all categories in store
    getCategories: (state) => {
      return state.categories;
    },
    // getter for getting all places in store
    getPlaces: (state) => {
      return state.places;
    },
    // getter for getting all favorites in store
    getFavorites: (state) => {
      return state.favorites;
    },
    // getter for getting place based on ID
    getPlace: (state) => (id) => {
      return state.places.find((place) => place.id === id);
    },
    // getter for getting value of assesment
    getPlaceAssesment: (state, getters) => (placeId) => (assesment) => {

      const averageAmount = state.reviews.filter((review) => review.placeId === placeId)
                          // reduce array to get total value of assesment arg
                          .reduce((prev, cur) => prev + cur.review[assesment], 0) 
                            // divide by the amount of reviews to get average
                            / getters.getPlaceAmountOfReviews(placeId)

      // if there isnt any review the variable will return NaN
      // therefore we check is the number is NaN, and if it is, returnes 0 instead                      
      if(isNaN(averageAmount)) {
        return 0
      } else {
        return averageAmount
      }
    },
    // getter for getting total average assesment value
    getPlaceAssesmentValue: (state, getters) => (id) => {
      // get reviews accosiated with palce
      const assesment = state.reviews.filter((review) => review.placeId === id)
                        // reduce array to get total value of environment, selection, service and value
                        .reduce((prev, cur) => prev + (
                          ((cur.review.environment) + (cur.review.selection) + (cur.review.service) + (cur.review.value))/4), 0)
                            // divide by the amount of reviews to get average
                            / getters.getPlaceAmountOfReviews(id)

      // if there isnt any review the variable will return NaN
      // therefore we check is the number is NaN, and if it is, returnes 0 instead                      
      if(isNaN(assesment)) {
        return 0
      } else {
        return assesment
      }
    },
    // getter for getting amount of reviews made to a place
    getPlaceAmountOfReviews: (state) => (id) => {
      return state.reviews.filter((review) => review.placeId === id).length
    },
    // getter for getting selected location
    getLocation: (state) => {
      return state.selectedBorough;
    },
    // getter for getting regretable favorite removal
    getRegret: (state) => {
      return state.regret;
    },
    // getter for getting user based on ID
    getUser: (state) => (id) => {
      return state.users.find((user) => user.id === id);
    },
    getTooltipShown: (state) => (type) => {
      switch (type) {
        case "add_favorite":
          return state.tooltipShown.addFavorite;

        case "remove_favorite":
          return state.tooltipShown.removeFavorite;

        default:
          return false;
      }
    },
    // getter for getting all reviews in the reviews array
    getReviews: (state) => {
      return state.reviews;
    },
    // getter for getting reviews that belongs to each respected place
    getPlaceReviews: (state) => (id) => {
      return state.reviews.filter((review) => review.placeId === id);
    },
    // getter for getting reviews a user has done
    getUserReviews: (state) => (id) => {
      return state.reviews.filter((review) => review.userId === id)
    },
    getWillDelete: (state) => {
      return state.willDelete;
    }
  },
});
