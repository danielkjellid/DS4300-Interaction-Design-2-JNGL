<template>
<div>
  <div class="bg-white rounded-custom">
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
</div>

</template>

<script>
import { boroughsData } from '../data/boroughs'
export default {
  data() {
    return {
      boroughs: boroughsData,
    }
  }
}
</script>

<style scoped>
  .rounded-custom {
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
  }
</style>