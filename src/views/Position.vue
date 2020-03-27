<template>
<div>
  <div class="bg-white">
    <div class="flex items-center justify-center py-5 border-b border-gray-300">
      <h1 class="text-base font-medium text-gray-800">Velg posisjon</h1>
    </div>
    <div class="flex items-center justify-between px-5 py-5 border-b border-gray-300" v-for="borough in boroughs" :key="borough.id">
      <div class="flex items-center">
        <img class="w-12 h-12 rounded-full" :src="require(`@/assets/images/boroughs/${borough.image}`)">
        <div class="ml-3">
          <p class="text-base font-medium text-gray-800">{{ borough.name }}</p>
          <p class="text-sm font-normal text-gray-600">{{ borough.tagline }}</p>
        </div>
      </div>
      <div>
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6 text-gray-500">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
        </svg>
      </div>
    </div>
  </div>
  <div class="sticky bottom-0 bg-white border-t border-gray-300">
    <div class="px-5 py-5">
      <div @click="searchActive = !searchActive">
        <app-search-bar :query.sync="query" :showFilter="false"></app-search-bar>
      </div>
      <button class="flex items-center m-auto mt-4 font-medium text-gray-700">
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto mr-2 text-gray-600">
          <path d="M5.64 16.36a9 9 0 1112.72 0l-5.65 5.66a1 1 0 01-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 10-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"/>
        </svg>
        <span>Bruk min nåværende posisjon</span>
      </button>
    </div>
    <div v-show="searchActive" class="flex items-center justify-between px-5 py-5 border-t border-gray-300" v-for="borough in filteredBoroughs.slice(0, 3)" :key="borough.id">
      <div class="flex items-center">
        <img class="w-12 h-12 rounded-full" :src="require(`@/assets/images/boroughs/${borough.image}`)">
        <div class="ml-3">
          <p class="text-base font-medium text-gray-800">{{ borough.name }}</p>
          <p class="text-sm font-normal text-gray-600">{{ borough.tagline }}</p>
        </div>
      </div>
      <div>
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6 text-gray-500">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
        </svg>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { boroughsData } from '../data/boroughs'
import SearchBar from '../components/SearchBar'

export default {
  data() {
    return {
      query: '',
      boroughs: boroughsData,
      searchActive: false,
    }
  },
  computed: {
    filteredBoroughs: function() {
      return this.boroughs.filter( el => {
          return el.name.toLowerCase().match(this.query.toLowerCase());
      })
    }
  },
  components: {
    'app-search-bar': SearchBar,
  }
}
</script>

<style scoped>

</style>