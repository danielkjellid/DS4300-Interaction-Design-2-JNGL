<template>
  <div>
    <div class="px-5 py-5 bg-white shadow">
        <app-search-bar :query.sync="query" :showFilter="true"></app-search-bar>
    </div>
    <app-place-list type="set_favorite" btnText="Legg til" class="mx-5 mt-5 rounded-t-lg" :places="filteredPlaces"></app-place-list>
    <app-modal
      tooltipType="add_favorite"
      icon="lightbulb.svg"
      header="Merk sted som favoritter"
      info="Visste du at du kan markere steder som favoritter ved å swipe til høyre?"
    ></app-modal>

  </div>
</template>

<script>
import PlaceList from '../components/PlaceList'
import SearchBar from '../components/SearchBar'
import Modal from '../components/Modal'

export default {
   data() {
        return {
            query: '',
            tooltipShown: this.$store.getters.getTooltipShown
        }
    },
    components: {
        'app-place-list': PlaceList,
        'app-search-bar': SearchBar,
        'app-modal': Modal
    },
    computed: {
        filteredPlaces() {
          return this.getPlaces.filter( el => {
              return el.name.toLowerCase().match(this.query.toLowerCase());
          })
        },
        getPlaces() {
            return this.$store.getters.getPlaces
        }
    }
}

</script>

<style>

</style>