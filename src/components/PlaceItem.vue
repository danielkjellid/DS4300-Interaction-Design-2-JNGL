<template>

    <v-touch @swipe="handleFavorite" :swipe-options="{ threshold: 100 }" class="swipe">
      
      <swipe class="my-swipe" :noDragWhenSingle="false" :speed="500">
        <!-- <div class="heart w-24 bg-green-400 absolute "></div> -->
        <swipe-item>
          <!-- <router-link :to="{ name: 'PlaceDetail', params: { id: place.id }}" class="flex items-center px-5 py-5 border-b border-gray-300">   -->
    <!-- get image from assets -->
    <button @click="handleFavorite" class="favorite-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" class="" fill="white">
                <path v-bind:d="isFavorite() ? svgs.favorite : svgs.notFavorite" />
            </svg>
          </button>     
          <router-link :to="{ name: 'PlaceDetail', params: { id: place.id }}" class="">
            <!-- <button @click="handleFavorite"> {{btnText}} </button> -->
            <div class="flex items-center px-5 py-5 border-b border-gray-300 bg-white">
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
        </swipe-item>
      </swipe>
    </v-touch>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
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
        favorite: "M3.59837 5.26499C3.25014 5.61321 2.97391 6.02661 2.78546 6.48158C2.597 6.93656 2.5 7.4242 2.5 7.91666C2.5 8.40912 2.597 8.89676 2.78546 9.35173C2.97391 9.80671 3.25014 10.2201 3.59837 10.5683L10 16.97L16.4017 10.5683C17.105 9.86506 17.5001 8.91123 17.5001 7.91666C17.5001 6.92209 17.105 5.96826 16.4017 5.26499C15.6984 4.56173 14.7446 4.16664 13.75 4.16664C12.7555 4.16664 11.8016 4.56173 11.0984 5.26499L10 6.36333L8.9017 5.26499C8.55348 4.91677 8.14008 4.64054 7.68511 4.45208C7.23013 4.26362 6.74249 4.16663 6.25003 4.16663C5.75757 4.16663 5.26993 4.26362 4.81496 4.45208C4.35998 4.64054 3.94659 4.91677 3.59837 5.26499V5.26499Z",
        notFavorite: "M2.59837 2.26499C2.25014 2.61321 1.97391 3.02661 1.78546 3.48158C1.597 3.93656 1.5 4.4242 1.5 4.91666C1.5 5.40912 1.597 5.89676 1.78546 6.35173C1.97391 6.80671 2.25014 7.2201 2.59837 7.56833L9.00003 13.97L15.4017 7.56833C16.105 6.86506 16.5001 5.91123 16.5001 4.91666C16.5001 3.92209 16.105 2.96826 15.4017 2.26499C14.6984 1.56173 13.7446 1.16664 12.75 1.16664C11.7555 1.16664 10.8016 1.56173 10.0984 2.26499L9.00003 3.36333L7.9017 2.26499C7.55348 1.91677 7.14008 1.64054 6.68511 1.45208C6.23013 1.26362 5.74249 1.16663 5.25003 1.16663C4.75757 1.16663 4.26993 1.26362 3.81496 1.45208C3.35998 1.64054 2.94659 1.91677 2.59837 2.26499V2.26499Z"
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
    'swipe': Swipe,
    'swipe-item': SwipeItem 
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
  .favorite-btn{
    position: absolute;
    left: 45px;
    margin-top: 30px;
  }
</style>