<template>
    <div class="rounded-t">
        <place-item 
            v-for="place in places" 
            :key="place.id" 
            :id="place.id" 
            :placeImg="place.placeImg"
            :name="place.name"
            :tags="place.tags"
            :stars="place.stars"
            :reviews="place.reviews"
            ></place-item>
    </div>
   
</template>

<script>
import PlaceItem from './PlaceItem.vue';

export default {
    data () {
        return {
            search: '',
        } 
    },
    props: {
        places: {
            type: Array,
            required: true,
        }
    },
    components: {
        'place-item': PlaceItem
    },
  }
</script>

<style scoped>
    
</style>
