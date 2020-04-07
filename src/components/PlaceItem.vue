<template>
  <div class="place-item">
    <button @click="handleFavorite" class="favorite-btn">
      <svg width="20" height="20" viewBox="0 0 20 20" class="" v-bind:fill="isFavorite() ? svgs.favorite.fill : svgs.notFavorite.fill" >
          <path v-bind:d="isFavorite() ? svgs.favorite.path : svgs.notFavorite.path" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>     
    <router-link :to="{ name: 'Place', params: { id: place.id }}" class="">
            <!-- <button @click="handleFavorite"> {{btnText}} </button> -->
      <div class="flex items-center px-5 py-5 bg-white border-b border-gray-300">
        <img
          class="w-24 h-16 rounded"
          :src="require(`@/assets/images/places/${place.image}`)"
        />
        <div class="ml-2">
          <h2 class="text-base font-medium text-gray-800">{{ place.name }}</h2>
          <div class="flex items-center">
              <!-- loop and coniditional check to display types, adding margin and bullet to every item, except the last one -->
              <span
              v-for="(type, index) in place.types"
              :key="type"
              class="text-sm text-gray-600"
              :class="{ 'ml-1': index != 0 }"
              >
              {{ type }}
              <span v-if="index != place.types.length - 1">&#8226;</span>
              </span>
          </div>
          <div class="flex items-center">
            <div class="flex items-center">
              <!-- loop and conditional check to add color to each star based on the place's reviews -->
            <svg
              v-for="(star, index) in 5"
              :key="index"
              class="w-4 h-4"
              fill="currentColor"
              :class="
              index >=
              (place.reviews.environment +
                  place.reviews.selection +
                  place.reviews.service +
                  place.reviews.value) /
                  4
                  ? 'text-gray-400'
                  : 'text-gray-800'
              "
            >
              <path
                d="M5.256 1.006c.295-.93 1.611-.93 1.906 0l.764 2.408a1 1 0 00.953.697H11.4c.963 0 1.37 1.228.597 1.803l-2.081 1.55a1 1 0 00-.356 1.104l.785 2.475c.293.926-.772 1.685-1.55 1.105l-1.989-1.48a1 1 0 00-1.194 0l-1.989 1.48c-.778.58-1.843-.179-1.55-1.105l.785-2.475a1 1 0 00-.356-1.105L.421 5.913c-.773-.574-.366-1.802.597-1.802h2.521a1 1 0 00.953-.697l.764-2.408z"
              />
            </svg>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  props: {
    place: {
      type: Object,
      required: true
    },
    type: String,
    btnText: String
  },
  data() {
    return {
      svgs: {
        favorite: {
          path: "M2.59837 2.26499C2.25014 2.61321 1.97391 3.02661 1.78546 3.48158C1.597 3.93656 1.5 4.4242 1.5 4.91666C1.5 5.40912 1.597 5.89676 1.78546 6.35173C1.97391 6.80671 2.25014 7.2201 2.59837 7.56833L9.00003 13.97L15.4017 7.56833C16.105 6.86506 16.5001 5.91123 16.5001 4.91666C16.5001 3.92209 16.105 2.96826 15.4017 2.26499C14.6984 1.56173 13.7446 1.16664 12.75 1.16664C11.7555 1.16664 10.8016 1.56173 10.0984 2.26499L9.00003 3.36333L7.9017 2.26499C7.55348 1.91677 7.14008 1.64054 6.68511 1.45208C6.23013 1.26362 5.74249 1.16663 5.25003 1.16663C4.75757 1.16663 4.26993 1.26362 3.81496 1.45208C3.35998 1.64054 2.94659 1.91677 2.59837 2.26499V2.26499Z",
          fill: "transparent"
        } ,
        notFavorite: {
          path: "M2.59837 2.26499C2.25014 2.61321 1.97391 3.02661 1.78546 3.48158C1.597 3.93656 1.5 4.4242 1.5 4.91666C1.5 5.40912 1.597 5.89676 1.78546 6.35173C1.97391 6.80671 2.25014 7.2201 2.59837 7.56833L9.00003 13.97L15.4017 7.56833C16.105 6.86506 16.5001 5.91123 16.5001 4.91666C16.5001 3.92209 16.105 2.96826 15.4017 2.26499C14.6984 1.56173 13.7446 1.16664 12.75 1.16664C11.7555 1.16664 10.8016 1.56173 10.0984 2.26499L9.00003 3.36333L7.9017 2.26499C7.55348 1.91677 7.14008 1.64054 6.68511 1.45208C6.23013 1.26362 5.74249 1.16663 5.25003 1.16663C4.75757 1.16663 4.26993 1.26362 3.81496 1.45208C3.35998 1.64054 2.94659 1.91677 2.59837 2.26499V2.26499Z",
          fill: "white"
        } 
      }
    }
  },
  methods: {
    // Adds a place to favorites array, or removes it based on the type
    handleFavorite() {
      if(!this.$store.getters.getFavorites.find(favorite => favorite.id === this.place.id)) {
         this.$store.dispatch("addFavorite", this.place);
      } else {
         this.$store.dispatch("removeFavorite", this.place.id);
         this.$store.dispatch("setRegret", this.place)
      }
    },
    isFavorite() {
      return !this.$store.getters.getFavorites.find(favorite => favorite.id === this.place.id);
    }
  },
  components: {
   
  }
}
</script>

<style scoped>
  .heart {
    height: 109px;
    z-index: 0;
  }
  .swipe{
    z-index: 1;
  }
  .place-item{
    position: relative;
  }
  .favorite-btn{
    position: absolute;
    top: 30px;
    left: 25px;
  }
</style>