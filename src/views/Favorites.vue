<template>
  <div>
      <search-bar></search-bar>
      <place-list class="mt-5 mx-5 rounded-t-lg"></place-list>
      <modal
        :icon="favoritesModal.icon"
        :header="favoritesModal.header"
        :info="favoritesModal.info" 
        ></modal>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar';
import PlaceList from '../components/PlaceList';
import Modal from '../components/Modal';

export default {
  components: {
    'search-bar': SearchBar,
    'place-list': PlaceList,
    'modal': Modal
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

