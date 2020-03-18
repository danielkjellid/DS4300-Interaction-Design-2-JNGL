<template>  
    <div class="">
        <img v-bind:src="require(`@/assets/${placeImg}`)" />
        <div>
            <h3> {{ name }} </h3>
            <div> {{ tags }} </div>
            <div>
                <div> {{ stars }} </div>
                <p> {{ reviews }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PlaceItem',
    props: {
        placeImg: String,
        name: String,
        tags: Array,
        stars: String,
        reviews: String
    }
}
</script>

<style scoped>
    
</style>