<template>
<div>
    <div class="bg-white bottom-list">
      <div class="flex items-center justify-center py-5">
        <h1 class="text-base font-medium text-gray-800">Velg posisjon</h1>
      </div>
      <app-borough-item 
      v-for="borough in boroughs" 
      :key="borough.id"
      :borough="borough"
      >
      </app-borough-item>
    </div>
    <app-borough-search :query.sync="query" :searchActive="searchActive" :boroughs="boroughs"></app-borough-search>
</div>

</template>

<script>
import { boroughsData } from '../data/boroughs'
import BoroughSearchModal from '../components/BoroughSearchModal'
import BoroughItem from '../components/BoroughItem'

export default {
  data() {
    return {
      query: '',
      boroughs: boroughsData,
      selectorActive: false,
      searchActive: false,
    }
  },
  components: {
    'app-borough-search': BoroughSearchModal,
    'app-borough-item': BoroughItem,
  }
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