<template>
  <!-- component to display meta of palce, giving an indication for assesment and pricepoint -->
  <div class="grid grid-cols-2 bg-white rounded shadow">
    <div class="px-4 py-3 border-r border-gray-300">
      <p class="text-xs font-medium text-gray-500 uppercase">Vurdering</p>
      <div class="flex items-center mt-1">
        <!-- loop and conditional check to add color to each star based on the place's reviews -->
        <svg v-for="(star, index) in 5" :key="star" class="w-4 h-4" fill="currentColor" :class="
              index >=
              (data.reviews.environment +
                data.reviews.menu +
                data.reviews.service +
                data.reviews.value) /
                5
                ? 'text-gray-400'
                : 'text-gray-800'
            ">
          <path d="M5.256 1.006c.295-.93 1.611-.93 1.906 0l.764 2.408a1 1 0 00.953.697H11.4c.963 0 1.37 1.228.597 1.803l-2.081 1.55a1 1 0 00-.356 1.104l.785 2.475c.293.926-.772 1.685-1.55 1.105l-1.989-1.48a1 1 0 00-1.194 0l-1.989 1.48c-.778.58-1.843-.179-1.55-1.105l.785-2.475a1 1 0 00-.356-1.105L.421 5.913c-.773-.574-.366-1.802.597-1.802h2.521a1 1 0 00.953-.697l.764-2.408z" />
        </svg>
      </div>
    </div>
    <div class="px-4 py-3">
      <p class="text-xs font-medium text-gray-500 uppercase">Prisnivå</p>
      <div class="flex items-center">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 mr-1 text-gray-500">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span class="text-sm font-medium text-gray-800">{{ data.pricepoint }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaceMeta',
  props: {
    data: {
      type: Object,
      required: true,
    }
  }
}
</script>