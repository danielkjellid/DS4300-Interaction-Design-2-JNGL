<template>
  <div class="flex items-center justify-between px-5 py-5 border-t border-gray-300">
    <div class="flex items-center">
      <img class="w-12 h-12 rounded-full" :src="placeImage">
      <div class="ml-3">
        <p class="text-base font-medium text-gray-800">{{ placeName }}</p>
        <p class="text-sm font-normal text-gray-600">{{ placeTagline }}</p>
      </div>
    </div>
    <div>
      <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6 text-gray-500">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
    name: 'BoroughItem',
    props: {
        placeName: {
            type: String,
            required: true
        },
        placeTagline: {
            type: String,
            required: true,
        },
        placeImage: {
            type: String,
            required: true,
        }
    }
}
</script>