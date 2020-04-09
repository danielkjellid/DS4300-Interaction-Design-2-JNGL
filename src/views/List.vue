<template>
  <!-- view to display a list over all places -->
  <div>
    <div class="px-5 py-5 bg-white shadow">
      <!-- search bar to filter through places -->
      <app-core-search-bar :query.sync="query" :showFilter="true"></app-core-search-bar>
    </div>
    <!-- list of places -->
    <app-list-place-list type="set_favorite" btnText="Legg til" class="mx-5 my-5 rounded-t-lg" :places="filteredPlaces" :favoriteBtnClick="showModal"></app-list-place-list>
    <app-core-modal tooltipType="add_favorite" icon="lightbulb.svg" header="Merk sted som favoritter" info="Visste du at du kan markere steder som favoritter ved å trykke på hjerte ikonet?"></app-core-modal>
    <app-core-msg-modal v-if="showFavoriteModal" icon="favorite.svg" header="Ny favoritt" :info="getLastAddedFavorite" :onClick="closeModal"></app-core-msg-modal>
    <app-core-msg-modal v-if="!!getWillDelete" icon="deletewarning.svg" header="Fjern favoritt" :info="'Er du sikker på at du ønsker å fjerne ' + getWillDelete.name +  ' som favoritt?'" :onClick="resetWillDelete" :deletePlace="getWillDelete"></app-core-msg-modal>
  </div>
</template>

<script>
// CORE IMPORTS
import CoreSearchBar from '../components/CoreSearchBar'
import CoreModal from '../components/CoreModal'
import CoreMsgModal from '../components/CoreMsgModal'

//MODULE IMPORTS
import ListPlaceList from '../components/ListPlaceList'

export default {
  name: 'List',
  components: {
    'app-core-search-bar': CoreSearchBar,
    'app-core-modal': CoreModal,
    'app-core-msg-modal': CoreMsgModal,
    'app-list-place-list': ListPlaceList
  },
  data() {
    return {
      query: '',
      showFavoriteModal: false,
      tooltipShown: this.$store.getters.getTooltipShown
    }
  },
  computed: {
    // method to display places after search
    filteredPlaces() {
      // takes favorites from store and filters based on name
      return this.getPlaces.filter(el => {
        return el.name.toLowerCase().match(this.query.toLowerCase());
      })
    },
    // method for getting all places
    getPlaces() {
      // gets places from store using the getter getPlaces
      return this.$store.getters.getPlaces
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