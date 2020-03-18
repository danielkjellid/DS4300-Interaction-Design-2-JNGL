<template>
    <div class="">
        <h3>hei</h3>
        <section>
            <PlaceItem 
                v-for="place in places"
                v-bind:key="place.id"
                v-bind:placeImg="place.placeImg"
                v-bind:name="place.name"
                v-bind:tags="place.tags"
                v-bind:stars="place.stars"
                v-bind:reviews="place.reviews"
            />
        </section>
    </div>
</template>

<script>
import PlaceItem from './PlaceItem';

export default {
    name: 'PlaceList',
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
        PlaceItem
    }
}
</script>

<style scoped>

</style>
