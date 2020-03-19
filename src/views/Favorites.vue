<template>
  <div>
      <search-bar></search-bar>
      <place-list></place-list>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar';
import PlaceList from '../components/PlaceList';

export default {
  components: {
    'search-bar': SearchBar,
    'place-list': PlaceList
  }
}
</script>

<style>

</style>