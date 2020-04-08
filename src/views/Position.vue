<template>
  <!-- view for displaing a list over boroughs -->
  <div>
    <div class="bg-white bottom-list">
      <div class="flex items-center justify-center py-5">
        <h1 class="text-base font-medium text-gray-800">Velg posisjon</h1>
      </div>
      <!-- list over boroughs -->
      <app-position-borough-item v-for="borough in getBoroughs" :key="borough.id" :borough="borough">
      </app-position-borough-item>
    </div>
    <!-- borough search modal -->
    <app-position-borough-list-search-modal :query.sync="query" :searchActive="searchActive" :boroughs="getBoroughs"></app-position-borough-list-search-modal>
  </div>
</template>

<script>
// MODULE IMPORTS
import PositionBoroughListSearchModal from '../components/PositionBoroughListSearchModal'
import PositionBoroughItem from '../components/PositionBoroughItem'

export default {
  name: 'Position',
  components: {
    'app-position-borough-list-search-modal': PositionBoroughListSearchModal,
    'app-position-borough-item': PositionBoroughItem,
  },
  data() {
    return {
      query: '',
      selectorActive: false,
      searchActive: false,
    }
  },
  computed: {
    getBoroughs() {
      return this.$store.getters.getBoroughs
    },
  },
}
</script>

<style scoped>
  .modal {
    transition: opacity 0.25s ease;
  }

  .bottom-list {
    margin-bottom: 122px;
  }
</style>