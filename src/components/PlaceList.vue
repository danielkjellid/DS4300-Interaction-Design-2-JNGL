<template>
    <div>
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
            places: [
                {
                    id: 1,
                    placeImg: "hokkigai.jpg",
                    name: "Hokkigai Sushi",
                    tags: ["Asiatisk", "Wok", "Sushi"],
                    stars: "4",
                    reviews: "29 anmeldelser"
                },
                {
                    id: 2,
                    placeImg: "hokkigai.jpg",
                    name: "Hokkigai Sushi",
                    tags: ["Asiatisk", "Wok", "Sushi"],
                    stars: "4",
                    reviews: "29 anmeldelser"
                }
                
            ]
        }
    },
    components: {
        'place-item': PlaceItem
    }
}
</script>

<style scoped>

</style>
