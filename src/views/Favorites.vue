<template>
    <div>
        <div class="px-5 py-5 bg-white shadow">
            <app-search-bar :query.sync="query" :showFilter="true"></app-search-bar>
        </div>
            <div v-if="!!this.getRegret()" class=" relative flex flex-row mx-5 mt-5 p-3 text-xs justify-center items-center bg-white rounded"> 
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#FED7D7"/>
                    <path d="M24 21.1248V23.4999V21.1248ZM24 28.2499H24.0112H24ZM16.2428 33H31.7572C33.4815 33 34.5586 31.0204 33.6965 29.4374L25.9393 15.1872C25.0771 13.6043 22.9229 13.6043 22.0607 15.1872L14.3035 29.4374C13.4414 31.0204 14.5185 33 16.2428 33Z" stroke="#9B2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="pl-3 pr-3">
                    <p class="text">Du har nylig fjernet {{this.$store.getters.getRegret && this.$store.getters.getRegret.name}} fra favoritter. <button @click="handleRegret(true)" class="font-bold btnText bor">Angre?</button></p>
                    
                   <button @click="handleRegret(false)" class="x-out">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 12L10 10L8 12ZM10 10L12 8L10 10ZM10 10L8 8L10 10ZM10 10L12 12L10 10ZM19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" stroke="#CBD5E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                   </button>
                </div> 
            </div>
        <p class="font-medium text-lg px-5 py-5">Favoritter</p>
        <app-place-list btnText="Slett" type="remove_favorite" class="mx-5 rounded-t-lg" :places="filteredPlaces"></app-place-list>
        <app-modal
            tooltipType="remove_favorite"
            icon="cross.svg"
            header="Fjerne favoritter"
            info="Visste du at du kan fjerne steder fra favoritter ved å trykke på hjerte ikonet?"
        ></app-modal>
    </div>
</template>

<script>
import SearchBar from '../components/SearchBar'

import PlaceList from '../components/PlaceList'
import Modal from '../components/Modal'

export default {
    data() {
        return {
            query: '',
            tooltipShown: this.$store.getters.getTooltipShown
        }
    },
    components: {
        'app-place-list': PlaceList,
        'app-search-bar': SearchBar,
        'app-modal': Modal
    },
    computed: {
        filteredPlaces() {
          return this.getFavorites().filter( el => {
              return el.name.toLowerCase().match(this.query.toLowerCase());
          })
        }
    },
    methods: {
        handleRegret(restorePlace) {
            if(restorePlace) {
                this.$store.dispatch("addFavorite", this.getRegret());
            }
            this.$store.dispatch("setRegret", undefined);
        },
        getFavorites() {
            return this.$store.getters.getFavorites;
        },
        getRegret() {
            return this.$store.getters.getRegret;
        }
    }
}
</script>

<style scoped>
    p{
        color: #2D3748;
    }
    .text{
        color: #718096;
    }
    .btnText{
        color: #2D3748;
        border-bottom: 1px solid #2D3748;
    }
    .x-out{
        position: absolute;
        left: 296px;
        bottom: 50px;
    }
</style>
