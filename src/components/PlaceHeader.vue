<template>
  <!-- component to display header with info of palce -->
  <div>
    <div class="px-5 py-5 bg-white">
      <div class="flex items-center">
        <!-- aquire image from images/places -->
        <img class="object-cover w-12 h-12 rounded-full" :src="require(`@/assets/images/places/${data.image}`)" :alt="`Bilde av ${data.name}`"/>
        <div class="ml-3">
          <p class="text-base font-medium text-gray-800">{{ data.name }}</p>
          <p class="text-sm font-normal text-gray-600">{{ data.address }}</p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 px-5 py-5 bg-gray-100 shadow">
      <!-- anchor / button linking to the place on google maps -->
      <a :href="`https://www.google.com/maps/search/?api=1&query=${nameToQuery}`" class="block m-auto text-sm font-medium text-center text-gray-900">
        <div class="flex items-center w-12 h-12 mb-2 border-2 border-gray-300 rounded-full">
          <svg viewBox="0 0 24 24" class="w-6 h-6 m-auto text-gray-600" fill="currentColor">
            <path d="M14 5.62l-4 2v10.76l4-2V5.62zm2 0v10.76l4 2V7.62l-4-2zm-8 2l-4-2v10.76l4 2V7.62zm7 10.5L9.45 20.9a1 1 0 0 1-.9 0l-6-3A1 1 0 0 1 2 17V4a1 1 0 0 1 1.45-.9L9 5.89l5.55-2.77a1 1 0 0 1 .9 0l6 3A1 1 0 0 1 22 7v13a1 1 0 0 1-1.45.89L15 18.12z" />
          </svg>
        </div>
        <span>Kart</span>
      </a>
      <!-- anchor / button linking to the place's website -->
      <a :href="data.website" class="block m-auto text-sm font-medium text-center text-gray-900">
        <div class="flex items-center w-12 h-12 mb-2 border-2 border-gray-300 rounded-full">
          <svg viewBox="0 0 24 24" class="w-6 h-6 m-auto text-gray-600" fill="currentColor">
            <path d="M4.06 13a8 8 0 0 0 5.18 6.51A18.5 18.5 0 0 1 8.02 13H4.06zm0-2h3.96a18.5 18.5 0 0 1 1.22-6.51A8 8 0 0 0 4.06 11zm15.88 0a8 8 0 0 0-5.18-6.51A18.5 18.5 0 0 1 15.98 11h3.96zm0 2h-3.96a18.5 18.5 0 0 1-1.22 6.51A8 8 0 0 0 19.94 13zm-9.92 0c.16 3.95 1.23 7 1.98 7s1.82-3.05 1.98-7h-3.96zm0-2h3.96c-.16-3.95-1.23-7-1.98-7s-1.82 3.05-1.98 7zM12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
          </svg>
        </div>
        <span>Nettside</span>
      </a>
      <!-- button to mark/remove the place as a favorite -->
      <button @click="handleFavorite" class="m-auto text-sm font-medium text-gray-900">
        <div class="flex items-center w-12 h-12 mx-auto mb-2 border-2 border-gray-300 rounded-full">
          <svg viewBox="0 0 24 24" class="w-6 h-6 m-auto text-gray-600" fill="currentColor">
            <!-- dynamic rendering of path (icon) based on the places favorite state -->
            <path v-bind:d="isFavorite() ? svgs.favorite : svgs.notFavorite" />
          </svg>
        </div>
        <!-- dynamic rendering of button text based on places favorite state -->
        <span>{{isFavorite() ? 'Favoritt' : 'Fjern favoritt'}}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaceHeader',
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      // data structure to replace icon path based on state in store
      svgs: {
        favorite: "M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z",
        notFavorite: "M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
      }
    }
  },
  computed: {
    // method to make place name queryable
    nameToQuery() {
      // return string where spaces is replaced with '+'
      return this.data.name.replace(/\s/g, '+')
    }
  },
  methods: {
    // method for adding/removing favorites
    handleFavorite() {
      // conditional check to check if the place is already added to favorites
      if (!this.$store.getters.getFavorites.find(favorite => favorite.id === this.data.id)) {
        // if not, add it
        this.$store.dispatch("addFavorite", this.data);
      } else {
        // if it is, remove it, and add an option to regret action, re-adding the place to favorites
        this.$store.dispatch("removeFavorite", this.data.id);
        this.$store.dispatch("setRegret", this.data);
      }
    },
    // method for cheking if the place is already a part of the favorites array
    isFavorite() {
      return !this.$store.getters.getFavorites.find(e => e.id === this.data.id);
    }
  },
}
</script>
