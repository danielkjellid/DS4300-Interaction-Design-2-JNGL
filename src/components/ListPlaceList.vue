<template>
  <!-- component to add place item inside a container list -->
  <div class="bg-white rounded-lg shadow">
    <!-- loop through the palces array -->
    <div v-for="place in places" :key="place.id">
      <app-core-place-item :place="place" :favoriteBtnClick="favoriteBtnClick"></app-core-place-item>
    </div>
  </div>
</template>

<script>
// CORE IMPORTS
import CorePlaceItem from './CorePlaceItem';

export default {
  name: 'ListPlaceList',
  components: {
    'app-core-place-item': CorePlaceItem
  },
  props: {
    places: {
      type: Array,
      required: true,
    },
    favoriteBtnClick: Function
  },
}
</script>
