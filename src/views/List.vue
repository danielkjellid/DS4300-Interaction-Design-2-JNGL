<template>
  <!-- view to display a list over all places -->
  <div>
    <div class="px-5 py-5 bg-white shadow">
      <!-- search bar to filter through places -->
      <app-core-search-bar :query.sync="query" :showFilter="true"></app-core-search-bar>
    </div>
    <!-- list of places -->
    <app-list-place-list type="set_favorite" btnText="Legg til" class="mx-5 mt-5 rounded-t-lg" :places="filteredPlaces"></app-list-place-list>
    <app-core-modal tooltipType="add_favorite" icon="lightbulb.svg" header="Merk sted som favoritter" info="Visste du at du kan markere steder som favoritter ved å trykke på hjerte ikonet?"></app-core-modal>
  </div>
</template>

<script>
// CORE IMPORTS
import CoreSearchBar from '../components/CoreSearchBar'
import CoreModal from '../components/CoreModal'

//MODULE IMPORTS
import ListPlaceList from '../components/ListPlaceList'

export default {
  name: 'List',
  components: {
    'app-core-search-bar': CoreSearchBar,
    'app-core-modal': CoreModal,
    'app-list-place-list': ListPlaceList,
  },
  data() {
    return {
      query: '',
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
    }
  }
}
</script>