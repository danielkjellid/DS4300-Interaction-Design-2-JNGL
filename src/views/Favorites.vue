<template>
    <keep-alive>
        <div>
            <div class="px-5 py-5 bg-white shadow">
                <app-search-bar :query.sync="query" :showFilter="true"></app-search-bar>
            </div>
            <app-place-list class="mx-5 mt-5 rounded-t-lg" :places="filteredPlaces"></app-place-list>
            <app-modal
            v-if="isFirstLoad"
            icon="lightbulb.svg"
            header="Merk sted som favoritter"
            info="Visste du at du kan markere steder som favoritter ved å swipe til venstre?"
            ></app-modal>
        </div>
    </keep-alive>
</template>

<script>
import { places } from '../data/places'
import PlaceList from '../components/PlaceList'
import SearchBar from '../components/SearchBar'
import Modal from '../components/Modal'

export default {
    data() {
        return {
            query: '',
            places: places,
            isFirstLoad: true
        }
    },
    components: {
        'app-place-list': PlaceList,
        'app-search-bar': SearchBar,
        'app-modal': Modal
    },
    methods: {
        hide() {
            return this.isFirstLoad = false;
        }
    },
    mounted() {
        this.hide();
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
