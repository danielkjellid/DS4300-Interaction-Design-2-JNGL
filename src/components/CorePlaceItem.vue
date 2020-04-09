<template>
  <!-- component to display a place item inside a place list -->
  <div class="relative">
    <!-- top left icon to mark places as favorites -->
    <button @click="handleFavorite" class="favorite-btn">
      <!-- dynamically render the icon, and color of icon based on the state of favorties in store -->
      <svg width="20" height="20" viewBox="0 0 20 20" class="" :fill="isFavorite() ? svgs.favorite.fill : svgs.notFavorite.fill">
        <!-- dynamically set path based on state -->
        <path :d="isFavorite() ? svgs.favorite.path : svgs.notFavorite.path" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <!-- link to place, using the id as a paramter to get the place from store -->
    <router-link :to="{ name: 'Place', params: { id: place.id }}" class="">
      <div class="flex items-center px-5 py-5 bg-white border-b border-gray-300">
        <!-- get place image from assets/places -->
        <img class="w-24 h-16 rounded" :src="require(`@/assets/images/places/${place.image}`)" :alt="`Bilde av ${place.name}`"/>
        <div class="ml-2">
          <h2 class="text-base font-medium text-gray-800">{{ place.name }}</h2>
          <div class="flex items-center">
            <!-- loop and coniditional check to display types, adding margin and bullet to every item, except the last one -->
            <span v-for="(type, index) in place.types" :key="type" class="text-sm text-gray-600" :class="{ 'ml-1': index != 0 }">
              {{ type }}
              <span v-if="index != place.types.length - 1">&#8226;</span>
            </span>
          </div>
          <div class="flex items-center mt-1">
            <app-core-stars :conditional="assesmentValue(place.id)"></app-core-stars>
            <span class="ml-1 text-sm text-gray-600">{{ amountOfReviews(place.id) }} Anmeld.</span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import CoreStars from './CoreStars'

export default {
  name: 'CorePlaceItem',
  components: {
    'app-core-stars': CoreStars,
  },
  props: {
    place: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      // data structure to conditionally render icons based on selected favorites
      svgs: {
        favorite: {
          path: "M2.59837 2.26499C2.25014 2.61321 1.97391 3.02661 1.78546 3.48158C1.597 3.93656 1.5 4.4242 1.5 4.91666C1.5 5.40912 1.597 5.89676 1.78546 6.35173C1.97391 6.80671 2.25014 7.2201 2.59837 7.56833L9.00003 13.97L15.4017 7.56833C16.105 6.86506 16.5001 5.91123 16.5001 4.91666C16.5001 3.92209 16.105 2.96826 15.4017 2.26499C14.6984 1.56173 13.7446 1.16664 12.75 1.16664C11.7555 1.16664 10.8016 1.56173 10.0984 2.26499L9.00003 3.36333L7.9017 2.26499C7.55348 1.91677 7.14008 1.64054 6.68511 1.45208C6.23013 1.26362 5.74249 1.16663 5.25003 1.16663C4.75757 1.16663 4.26993 1.26362 3.81496 1.45208C3.35998 1.64054 2.94659 1.91677 2.59837 2.26499V2.26499Z",
          fill: "transparent"
        },
        notFavorite: {
          path: "M2.59837 2.26499C2.25014 2.61321 1.97391 3.02661 1.78546 3.48158C1.597 3.93656 1.5 4.4242 1.5 4.91666C1.5 5.40912 1.597 5.89676 1.78546 6.35173C1.97391 6.80671 2.25014 7.2201 2.59837 7.56833L9.00003 13.97L15.4017 7.56833C16.105 6.86506 16.5001 5.91123 16.5001 4.91666C16.5001 3.92209 16.105 2.96826 15.4017 2.26499C14.6984 1.56173 13.7446 1.16664 12.75 1.16664C11.7555 1.16664 10.8016 1.56173 10.0984 2.26499L9.00003 3.36333L7.9017 2.26499C7.55348 1.91677 7.14008 1.64054 6.68511 1.45208C6.23013 1.26362 5.74249 1.16663 5.25003 1.16663C4.75757 1.16663 4.26993 1.26362 3.81496 1.45208C3.35998 1.64054 2.94659 1.91677 2.59837 2.26499V2.26499Z",
          fill: "white"
        }
      }
    }
  },
  methods: {
    // method for adding/removing favorites
    handleFavorite() {
      // conditional check to check if the place is already added to favorites
      if (!this.$store.getters.getFavorites.find(favorite => favorite.id === this.place.id)) {
        // if not, add it
        this.$store.dispatch("addFavorite", this.place);
      } else {
        // if it is, remove it, and add an option to regret action, re-adding the place to favorites
        this.$store.dispatch("removeFavorite", this.place.id);
        this.$store.dispatch("setRegret", this.place)
      }
    },
    // method for cheking if the place is already a part of the favorites array
    isFavorite() {
      return !this.$store.getters.getFavorites.find(favorite => favorite.id === this.place.id);
    },
    // method for getting total average assesment value to color stars from store
    assesmentValue(placeId) {
      return this.$store.getters.getPlaceAssesmentValue(placeId)
    },
    // method for getting total amount of reviews made to a place
    amountOfReviews(placeId) {
      return this.$store.getters.getPlaceAmountOfReviews(placeId)
    }
  },
}
</script>

<style scoped>
  .heart {
    height: 109px;
    z-index: 0;
  }
  .favorite-btn {
    position: absolute;
    top: 30px;
    left: 25px;
  }
</style>