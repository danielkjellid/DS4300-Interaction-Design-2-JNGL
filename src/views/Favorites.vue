<template>
    <div>
        <div class="px-5 py-5 bg-white shadow">
            <app-search-bar :query.sync="query" :showFilter="true"></app-search-bar>
        </div>
        <p class="font-medium text-lg px-5 py-5">Favoritter</p>
        <app-place-list class="mx-5 rounded-t-lg" :places="filteredPlaces"></app-place-list>
    </div>
</template>

<script>
import SearchBar from '../components/SearchBar'

import PlaceList from '../components/PlaceList'
/* import Modal from '../components/Modal' */

export default {
    data() {
        return {
            query: '',
            show: false
        }
    },
    components: {
        'app-place-list': PlaceList,
        'app-search-bar': SearchBar
    },
    computed: {
        filteredPlaces() {
          return this.getFavorites.filter( el => {
              return el.name.toLowerCase().match(this.query.toLowerCase());
          })
        },
        getFavorites() {
            return this.$store.getters.getFavorites
        }
    }
}
</script>

<style scoped>
    p{
        color: #2D3748;
    }
</style>
