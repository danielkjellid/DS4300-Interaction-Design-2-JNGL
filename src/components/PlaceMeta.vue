<template>
  <!-- component to display meta of palce, giving an indication for assesment and pricepoint -->
  <div class="grid grid-cols-2 bg-white rounded shadow">
    <div class="px-4 py-3 border-r border-gray-300">
      <p class="text-xs font-medium text-gray-500 uppercase">Vurdering</p>
      <app-core-stars :conditional="assesmentValue"></app-core-stars>
    </div>
    <div class="px-4 py-3">
      <p class="text-xs font-medium text-gray-500 uppercase">Prisnivå</p>
      <div class="flex items-center">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 mr-1 text-gray-500">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span class="text-sm font-medium text-gray-800">{{ place.pricepoint }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CoreStars from './CoreStars'

export default {
  name: 'PlaceMeta',
  components: {
    'app-core-stars': CoreStars
  },
  props: {
    place: {
      type: Object,
      required: true,
    },
    assesmentValue: {
      type: Number,
      required: true
    }
  },
}
</script>