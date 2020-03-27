<template>
  <div>
      <!--<search-bar :query></search-bar>-->
      <div class="flex flex-row items-center justify-between h-20 bg-white shadow">
          <input type="text" v-model="filter" class="flex flex-row items-center w-2/3 h-10 p-2 ml-5 mr-3 text-sm text-gray-600 bg-gray-100 border border-gray-300 rounded-md" placeholder="Søk" />
          <div class="flex flex-row items-center justify-between w-1/3 h-10 mr-5 text-gray-500 bg-white border border-gray-300 rounded-md">
              <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 ml-2 w6"><path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"></path></svg>
              <div class="text-sm font-semibold text-black">A-Å</div>
              <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 mr-2" id="dropArrow"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </div>
      </div>
      <place-list class="mx-5 mt-5 rounded-t-lg" :query.sync="filter"></place-list>
      <!--
      <modal
        :icon="favoritesModal.icon"
        :header="favoritesModal.header"
        :info="favoritesModal.info" 
        ></modal>
        -->
  </div>
</template>

<script>
//import SearchBar from '../components/SearchBar';
import PlaceList from '../components/PlaceList';
//import Modal from '../components/Modal';

export default {
  methods: {
    /*
    updateFilter: function(e) {
        this.$emit('update:query', e.target.value)
    }*/
  },
  components: {
    //'search-bar': SearchBar,
    'place-list': PlaceList,
    //'modal': Modal
  },
  data () {
    return {
      favoritesModal: {
        id: 1,
        icon: 'lightbulb.svg',
        header: 'Merk sted som favoritter',
        info: 'Visste du at du kan markere steder som favoritter ved å swipe til venstre?'
      }
    }
  }
}
</script>

<style scoped>
  place-list {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
</style>

