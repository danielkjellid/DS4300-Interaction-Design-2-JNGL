<template>
  <!-- component to display a search bar and/or filter -->
  <div>
    <!-- checking if showFilter prop return true or false, and adjust the size of the search bar accordingly -->
    <div :class="showFilter ? 'flex items-center justify-between' : 'w-full'">
      <div :class="{'mr-1' : showFilter}">
        <label for="search" class="sr-only">Search</label>
        <div class="relative rounded-md">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-600">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <!-- emits inputted text to parent component, which then filters the searched list -->
          <input @input="updateQuery" id="search" class="block w-full pl-10 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md form-input" placeholder="Søk" />
        </div>
      </div>
      <!-- if the showFilter prop is true, add a filter button to the right of the search bar -->
      <button v-if="showFilter" class="flex items-center justify-between px-2 py-2 text-gray-500 bg-white border border-gray-300 rounded-md cursor-pointer">
        <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w6">
          <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"></path>
        </svg>
        <div class="text-sm font-semibold text-black">A-Å</div>
        <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CoreSearchBar',
  props: {
    query: {
      type: String,
      required: false,
    },
    showFilter: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    // emit changes to the input event to parent component
    updateQuery(e) {
      this.$emit('update:query', e.target.value)
    }
  }
}
</script>