<template>
  <div>
      <SearchBar />
      <PlaceList />
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar';
import PlaceList from '../components/PlaceList';

export default {
  name: 'Favorites',
  components: {
    SearchBar,
    PlaceList
  }
}
</script>

<style>

</style>