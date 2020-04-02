<template>
    <div class="bg-white rounded-lg shadow">
      <div v-for="place in places" :key="place.id">
        <app-place-item :btnText="btnText" :type="type" :place="place"></app-place-item>
      </div>
    </div>
</template>

<script>
import PlaceItem from './PlaceItem';

export default {
    props: {
        places: {
            type: Array,
            required: true,
        },
        type: String,
        btnText: String
    },
    components: {
        'app-place-item': PlaceItem
    },
  }
</script>
