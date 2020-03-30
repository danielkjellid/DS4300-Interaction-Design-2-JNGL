<template>
  <div>
    <!-- show overlay if search is active -->
    <div
      v-show="searchActive"
      @click="updateSearchActive"
      class="absolute top-0 left-0 w-full h-full bg-black opacity-25 cursor-pointer modal-overlay"
    ></div>
    <div
      class="absolute left-0 right-0 bg-white border-t border-gray-300 bottom-search"
    >
      <div class="px-5 py-5">
        <!-- when input is clicked, update the searchActive methods, activating modal -->
        <div @click="updateSearchActive">
          <app-search-bar
            :query.sync="query"
            :showFilter="false"
          ></app-search-bar>
        </div>
        <button class="flex items-center m-auto mt-4 font-medium text-gray-700">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 m-auto mr-2 text-gray-600"
          >
            <path
              d="M5.64 16.36a9 9 0 1112.72 0l-5.65 5.66a1 1 0 01-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 10-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg>
          <span>Bruk min nåværende posisjon</span>
        </button>
      </div>
      <!-- display a reduced (3 item) list of all boroughs -->
      <app-borough-item
        v-show="filterActive"
        v-for="borough in filteredBoroughs.slice(0, 3)"
        :key="borough.id"
        :borough="borough"
      >
      </app-borough-item>
    </div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
import BoroughItem from "./BoroughItem";

export default {
  data() {
    return {
      filterActive: false
    };
  },
  props: {
    searchActive: {
      type: Boolean,
      required: true
    },
    query: {
      type: String,
      required: false
    },
    boroughs: {
      type: Array,
      required: true
    }
  },
  methods: {
    // method to activate compressed list and modal -->
    updateSearchActive: function() {
      this.filterActive = !this.filterActive;
      this.searchActive = !this.searchActive;
    }
  },
  computed: {
    // method for "live searching" boroughs showing updates -->
    filteredBoroughs: function() {
      return this.boroughs.filter(el => {
        return el.name.toLowerCase().match(this.query.toLowerCase());
      });
    }
  },
  components: {
    "app-search-bar": SearchBar,
    "app-borough-item": BoroughItem
  }
};
</script>

<style scoped>
.bottom-search {
  bottom: 90px;
}
</style>
