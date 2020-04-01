<template>
  <div>
    <div class="px-5 py-5 bg-white shadow">
        <app-search-bar :query.sync="query" :showFilter="true"></app-search-bar>
    </div>
    <app-place-list class="mx-5 mt-5 rounded-t-lg" :places="filteredPlaces"></app-place-list>
    <app-modal v-if="modal" 
      :tooltipType="modal.toolTipType"
      :icon="modal.icon"
      :header="modal.header"
      :info="modal.info"
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
            modal: undefined
        }
    },
    mounted() {
        !this.$store.getters.getTooltipShown('add_favorite') && this.$store.dispatch('setModal', {
            icon: "lightbulb.svg",
            header: "Merk sted som favoritter BALLEFRANS",
            info: "Visste du at du kan markere steder som favoritter ved å swipe til venstre?",
            toolTipType: "add_favorite",
            callback: () => this.$store.dispatch('updateTooltipShown', 'add_favorite')
        })
        this.data =  { ...this.data, modal: this.$store.getters.getModal }
        // På mount vil vi at this.data skal bli satt til storens
        // oppdaterte modal-verdi(dispatch(setModal)), som igjen skal 
        // bli plukket opp og spreadet inn som props til app-moda
        // Typ = this.data.modal = this.$store.getters.getModal
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