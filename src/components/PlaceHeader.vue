<template>
  <!-- header -->
  <div>
      <div class="px-5 py-5 bg-white">
          <div class="flex items-center">
            <img class="object-cover w-12 h-12 rounded-full" :src="require(`@/assets/images/places/${data.image}`)"/>
            <div class="ml-3">
              <p class="text-base font-medium text-gray-800">{{ data.name }}</p>
              <p class="text-sm font-normal text-gray-600">{{ data.address }}</p>
            </div>
          </div>
      </div>
      <div class="flex items-center justify-around px-5 py-5 bg-gray-100 shadow">
          <a :href="`https://www.google.com/maps/search/?api=1&query=${nameToQuery}`" class="block m-auto text-sm font-medium text-center text-gray-900">
              <div class="flex items-center w-12 h-12 mb-2 border-2 border-gray-300 rounded-full">
                  <svg viewBox="0 0 24 24" class="w-6 h-6 m-auto text-gray-600" fill="currentColor">
                      <path d="M14 5.62l-4 2v10.76l4-2V5.62zm2 0v10.76l4 2V7.62l-4-2zm-8 2l-4-2v10.76l4 2V7.62zm7 10.5L9.45 20.9a1 1 0 0 1-.9 0l-6-3A1 1 0 0 1 2 17V4a1 1 0 0 1 1.45-.9L9 5.89l5.55-2.77a1 1 0 0 1 .9 0l6 3A1 1 0 0 1 22 7v13a1 1 0 0 1-1.45.89L15 18.12z"/>
                  </svg>
              </div>
              <p>Kart</p>
          </a>
          <a :href="data.website" class="block m-auto text-sm font-medium text-center text-gray-900">
              <div class="flex items-center w-12 h-12 mb-2 border-2 border-gray-300 rounded-full">
                  <svg viewBox="0 0 24 24" class="w-6 h-6 m-auto text-gray-600" fill="currentColor">
                      <path d="M4.06 13a8 8 0 0 0 5.18 6.51A18.5 18.5 0 0 1 8.02 13H4.06zm0-2h3.96a18.5 18.5 0 0 1 1.22-6.51A8 8 0 0 0 4.06 11zm15.88 0a8 8 0 0 0-5.18-6.51A18.5 18.5 0 0 1 15.98 11h3.96zm0 2h-3.96a18.5 18.5 0 0 1-1.22 6.51A8 8 0 0 0 19.94 13zm-9.92 0c.16 3.95 1.23 7 1.98 7s1.82-3.05 1.98-7h-3.96zm0-2h3.96c-.16-3.95-1.23-7-1.98-7s-1.82 3.05-1.98 7zM12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/>
                  </svg>
              </div>
              <p>Nettside</p>
          </a>
          <button @click="handleFavorite" class="m-auto text-sm font-medium text-gray-900">
              <div class="flex items-center w-12 h-12 mb-2 border-2 border-gray-300 rounded-full">
                  <svg viewBox="0 0 24 24" class="w-6 h-6 m-auto text-gray-600 items-center" fill="currentColor">
                      <path v-bind:d="isFavorite() ? svgs.favorite : svgs.notFavorite" />
                  </svg>
              </div>
              <p>{{isFavorite() ? 'Favoritt' : 'Fjern favoritt'}}</p>
          </button>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    // methods that replaces spaces in string with +, so that it can be used in the google maps query
    nameToQuery() {
      return this.data.name.replace(/\s/g, '+')
    }
  },
  data() {
    return {
      svgs: {
        favorite: "M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z",
        notFavorite: "M0.488464 0.507837C0.800696 0.195386 1.22412 0.0198598 1.66561 0.0198598C2.10711 0.0198598 2.53053 0.195386 2.84276 0.507837L9.99057 7.66284L17.1384 0.507837C17.292 0.348654 17.4757 0.221683 17.6788 0.134335C17.882 0.0469865 18.1004 0.00100939 18.3215 -0.000913634C18.5426 -0.00283666 18.7618 0.0393325 18.9665 0.123134C19.1711 0.206935 19.357 0.330691 19.5133 0.487178C19.6696 0.643666 19.7933 0.829753 19.877 1.03458C19.9607 1.23941 20.0028 1.45887 20.0009 1.68017C19.999 1.90147 19.9531 2.12017 19.8658 2.32351C19.7785 2.52685 19.6517 2.71076 19.4927 2.8645L12.3449 10.0195L19.4927 17.1745C19.796 17.4888 19.9638 17.9098 19.96 18.3468C19.9562 18.7838 19.7811 19.2019 19.4724 19.5109C19.1637 19.8199 18.7461 19.9952 18.3095 19.999C17.873 20.0028 17.4524 19.8348 17.1384 19.5312L9.99057 12.3762L2.84276 19.5312C2.52874 19.8348 2.10816 20.0028 1.6716 19.999C1.23505 19.9952 0.817448 19.8199 0.508745 19.5109C0.200043 19.2019 0.0249367 18.7838 0.0211432 18.3468C0.0173496 17.9098 0.185172 17.4888 0.488464 17.1745L7.63627 10.0195L0.488464 2.8645C0.176326 2.55196 0.000976562 2.12811 0.000976562 1.68617C0.000976562 1.24423 0.176326 0.820384 0.488464 0.507837Z"
      }
    }
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      default: 'set_favorite'
    }
  },
  methods: {
    // Adds a place to favorites array, or removes it based on the type
    handleFavorite() {
      if(!this.$store.getters.getFavorites.find(favorite => favorite.id === this.data.id)) {
         this.$store.dispatch("addFavorite", this.data);
      } else {
         this.$store.dispatch("removeFavorite", this.data.id);
         this.$store.dispatch("setRegret", this.data);
      }
    },
    isFavorite() {
      return !this.$store.getters.getFavorites.find(e => e.id === this.data.id);
    }
  },
}
</script>
