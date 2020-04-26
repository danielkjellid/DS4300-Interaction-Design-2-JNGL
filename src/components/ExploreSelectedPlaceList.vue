<template>
  <!-- component to add a list the the explore route if there is a borough selected -->
  <!-- this list devides the places into its respected categorites -->
  <div>
    <app-core-msg-modal v-if="showFavoriteModal" icon="favorite.svg" header="Ny favoritt" :info="getLastAddedFavorite" :onClick="closeModal"></app-core-msg-modal>
    <app-core-msg-modal v-if="!!getWillDelete" icon="deletewarning.svg" header="Fjern favoritt" :info="'Er du sikker på at du ønsker å fjerne ' + getWillDelete.name +  ' som favoritt?'" :onClick="resetWillDelete" :deletePlace="getWillDelete"></app-core-msg-modal>
    <!-- loop to display each category -->
    <div v-for="(category, index) in filteredCategories" :key="category.id" :class="{ 'mt-10': index != 0 }">
      <div class="flex justify-between">
        <h1 class="text-lg font-medium text-gray-800">{{ category.name }}</h1>
        <!-- router link to display all places -->
        <router-link to="/list" class="flex items-center text-sm font-medium text-gray-800">
          Se alle
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 ml-1 text-gray-600">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
          </svg>
        </router-link>
      </div>
      <div class="mt-4 bg-white rounded-lg shadow">
        <!-- loop to append places to each respected category -->
        <div v-for="place in filteredPlaces" :key="place.id">
            <!-- check to append each placeList based on category -->
            <div v-if="place.categoryId == category.id">
              <app-core-place-item :place="place" :favoriteBtnClick="showModal">"</app-core-place-item>
            </div>       
        </div>
        <!-- router link to display all places -->
        <router-link to="/list" class="block py-3 mx-auto text-sm text-center text-gray-700">
          Se alle
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CorePlaceItem from "./CorePlaceItem"
import CoreMsgModal from "../components/CoreMsgModal"


export default {
  name: 'ExplioreSelectedPlaceList',
  components: {
    "app-core-place-item": CorePlaceItem,
    'app-core-msg-modal': CoreMsgModal
  },
  data() {
    return {
       showFavoriteModal: false
    }
  },
  props: {
    places: {
      type: Array,
      required: true
    },
    categories: {
      type: Array,
      required: true
    },
    location: {
      type: Object,
      required: true
    },
    favoriteBtnClick: Function
  },
  computed: {
    // filter places based on selected location
    filteredPlaces() {
      return this.places.filter(place => place.boroughId === this.location.boroughId)
    },
    // filter categories based on filteredPlaces to remove unused categories
    filteredCategories() {
      return this.categories.filter(category => this.filteredPlaces.find(place => category.id === place.categoryId))
    },
     getWillDelete() {
      return this.$store.getters.getWillDelete;
    },
    getLastAddedFavorite() {
      return this.$store.getters.getFavorites.length && this.$store.getters.getFavorites[this.$store.getters.getFavorites.length - 1].name + " ble merket som favoritt, og kan finnes under favoritter"
    }
  },
  methods: {
    closeModal() {
      this.showFavoriteModal = false;
    },
    showModal() {
      this.showFavoriteModal = true;
    },
    resetWillDelete() {
      this.$store.dispatch("setWillDelete", undefined)
    }
  }
}
</script>
