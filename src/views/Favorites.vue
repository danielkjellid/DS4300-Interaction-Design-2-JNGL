<template>
  <!-- view to display a users selected favorites -->
  <div>
    <!-- top serach bar to be able to search favorites -->
    <div class="px-5 py-5 bg-white shadow">
      <app-core-search-bar :query.sync="query" :showFilter="true"></app-core-search-bar>
    </div>
    <!-- content -->
    <div class="px-5 py-5">
      <h1 class="text-lg font-medium">Favoritter</h1>
      <!-- regret pane offering the ability to regret most recent removal -->
      <div v-if="!!this.getRegret()" class="relative flex justify-between px-2 py-3 my-4 text-sm bg-white rounded shadow">
        <div class="flex items-center">
          <div>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="24" fill="#FED7D7" />
              <path d="M24 21.1248V23.4999V21.1248ZM24 28.2499H24.0112H24ZM16.2428 33H31.7572C33.4815 33 34.5586 31.0204 33.6965 29.4374L25.9393 15.1872C25.0771 13.6043 22.9229 13.6043 22.0607 15.1872L14.3035 29.4374C13.4414 31.0204 14.5185 33 16.2428 33Z" stroke="#9B2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <!-- helper text showing recent removal and option to regret -->
          <p class="ml-2 text">Du har nylig fjernet {{this.$store.getters.getRegret && this.$store.getters.getRegret.name}} fra favoritter. <button @click="handleRegret(true)" class="font-bold btnText bor">Angre?</button></p> 
        </div>
        <!-- button to remove the pane -->
        <button @click="handleRegret(false)" class="absolute top-0 right-0 m-3">
          <svg class="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12L10 10L8 12ZM10 10L12 8L10 10ZM10 10L8 8L10 10ZM10 10L12 12L10 10ZM19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" stroke="#CBD5E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <!-- check if there are favorties in the favorites array in the store -->
      <div v-if="getFavorites.length > 0">
        <!-- if it is, display favorites -->
        <app-list-place-list btnText="Slett" type="remove_favorite" class="mt-4 rounded-t-lg" :places="filteredPlaces"></app-list-place-list>
        <app-core-modal tooltipType="remove_favorite" icon="cross.svg" header="Fjerne favoritter" info="Visste du at du kan fjerne steder fra favoritter ved å trykke på hjerte ikonet?"></app-core-modal>
      </div>
      <!-- if there is no favorites display error message -->
      <div v-else>
        <div class="px-5 py-5 mt-4 bg-white rounded shadow">
          <app-core-no-data :text="'Du har ikke lagt til noen favoritter enda. Trykk på hjerteikonet i oversikten over steder for å legge til stedet som favoritt!'"></app-core-no-data>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// CORE IMPORTS
import CoreSearchBar from '../components/CoreSearchBar'
import CoreModal from '../components/CoreModal'
import CoreNoData from '../components/CoreNoData'

// MODULE IMPORTS
import ListPlaceList from '../components/ListPlaceList'

export default {
  name: 'Favorites',
  components: {
    'app-list-place-list': ListPlaceList,
    'app-core-search-bar': CoreSearchBar,
    'app-core-modal': CoreModal,
    'app-core-no-data': CoreNoData
  },
  data() {
    return {
      query: '',
      tooltipShown: this.$store.getters.getTooltipShown
    }
  },
  computed: {
    // method to display places after searcg
    filteredPlaces() {
      // takes favorites from store and filters based on name
      return this.$store.getters.getFavorites.filter(el => {
        return el.name.toLowerCase().match(this.query.toLowerCase());
      })
    },
    // method for getting all favorites
    getFavorites() {
      // gets all favorites from store using the getter getFavorites
      return this.$store.getters.getFavorites;
    },
  },
  methods: {
    // method for handling regret
    handleRegret(restorePlace) {
      // if "Regret" is pressed, restore favorite
      if (restorePlace) {
        this.$store.dispatch("addFavorite", this.getRegret());
      }

      // if not, remove favorite completely
      this.$store.dispatch("setRegret", undefined);
    },
    // method for getting temp regret in store
    getRegret() {
      // gets regret using the getter getRegret
      return this.$store.getters.getRegret;
    }
  }
}
</script>

<style scoped>
  p {
    color: #2d3748;
  }
  .text {
    color: #718096;
  }
  .btnText {
    color: #2d3748;
    border-bottom: 1px solid #2d3748;
  }
</style>
