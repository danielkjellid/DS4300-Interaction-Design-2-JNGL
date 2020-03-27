<template>
<div>
    <app-search-bar :filter.sync="filter"></app-search-bar>
    <app-place-list class="mx-5 mt-5 rounted-t-lg" :places="filteredPlaces"></app-place-list>
</div>
</template>

<script>
import { places } from '../data/places'
import PlaceList from '../components/PlaceList'
import SearchBar from '../components/SearchBar'

export default {
    data() {
        return {
            filter: '',
            places: places,
            favoritesModal: {
              id: 1,
              icon: 'lightbulb.svg',
              header: 'Merk sted som favoritter',
              info: 'Visste du at du kan markere steder som favoritter ved å swipe til venstre?'
            }
        }
    },
    components: {
        'app-place-list': PlaceList,
        'app-search-bar': SearchBar
    },
    computed: {
        filteredPlaces: function() {
          return this.places.filter( el => {
              return el.name.toLowerCase().match(this.filter.toLowerCase());
          })
        }
    }
}
</script>
