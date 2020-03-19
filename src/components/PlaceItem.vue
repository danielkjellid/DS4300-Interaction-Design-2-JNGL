<template>  
    <div class="">
        <img v-bind:src="require(`@/assets/images/${placeImg}`)" />
        <p>{{ name }}</p>
        <p>{{ tags }}</p>
        <p>{{ stars }}</p>
        <p>{{ reviews }}</p>
    </div>
</template>

<script>
export default {
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