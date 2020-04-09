<template>
  <!-- component to display name and star assesment -->
  <div class="flex items-center justify-between px-5 py-5 border-b border-gray-300">
    <!-- name of assesment, as well as conditional class for the last "total" assesment -->
    <p class="text-sm font-medium text-gray-800" :class="{'font-bold' : name.startsWith('Totalt')}">{{ name }}</p>
    <!-- dynamically color stars based on assesment -->
    <app-core-stars :conditional="conditional"></app-core-stars>
  </div>
</template>

<script>
import CoreStars from './CoreStars'

export default {
  name: 'PlaceAssesmentItem',
  components: {
    'app-core-stars': CoreStars
  },
  props: {
    name: {
      type: String,
      required: true,
      default: 'Assesment Name'
    },
    conditional: {
      type: Number,
      required: true,
      default: 5,
    }
  }
}
</script>