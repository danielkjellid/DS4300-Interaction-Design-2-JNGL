<template>
<div>
    <div class="px-5 py-5 bg-white shadow">
        <app-search-bar :query.sync="query" :showFilter="true"></app-search-bar>
    </div>
    <app-place-list class="mx-5 mt-5 rounted-t-lg" :places="filteredPlaces"></app-place-list>
    <app-modal
      icon="lightbulb.svg"
      header="Merk sted som favoritter"
      info="Visste du at du kan markere steder som favoritter ved å swipe til venstre?"
    ></app-modal>
</div>
</template>

<script>
import { places } from '../data/places'
import PlaceList from '../components/PlaceList'
import SearchBar from '../components/SearchBar'
import Modal from '../components/Modal'

export default {
    data() {
        return {
<<<<<<< HEAD
            filter: '',
            places: places
=======
            query: '',
            places: places,
            favoritesModal: {
              id: 1,
              icon: 'lightbulb.svg',
              header: 'Merk sted som favoritter',
              info: 'Visste du at du kan markere steder som favoritter ved å swipe til venstre?'
            }
>>>>>>> 4c93a8fbdb22597bf871f84c2ad87a3106048c87
        }
    },
    components: {
        'app-place-list': PlaceList,
        'app-search-bar': SearchBar,
        'app-modal': Modal
    },
    computed: {
        filteredPlaces: function() {
          return this.places.filter( el => {
              return el.name.toLowerCase().match(this.query.toLowerCase());
          })
        }
    }
}
</script>
