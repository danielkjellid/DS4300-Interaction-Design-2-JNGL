<template>
  <div>
      <search-bar></search-bar>
      <place-list class="mt-5 mx-5 rounded-t-lg"></place-list>
      <modal></modal>
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
  }
}
</script>

<style scoped>
  place-list {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
</style>

