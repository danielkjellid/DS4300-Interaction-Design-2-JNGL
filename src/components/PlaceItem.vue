<template>  
    <div class="mb-px bg-white shadow place-card">
        <div class="flex flex-row items-center p-5">
            <img class="rounded" v-bind:src="require(`@/assets/images/${placeImg}`)" />
            <div class="ml-3">
                <p class="font-medium text name">{{ name }}</p>
                <div class="flex flex-row">
                    <p v-for="tag in tags" :key="tag.tag" class="text-xs my-1 tag">{{ tag.tag }}</p>
                </div>
                <div class="flex flex-row">
                    <p class="text-xs mr-2">{{ stars }}</p>
                    <p class="text-xs">{{ reviews }}</p>
                </div>
            </div>
        </div>
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
    img {
        width: 110px;
        height: 65px;
    }
    p {
        color: #64748B;
    }
    .name{
        color: #2D3748;
    }
    .place-card:hover{
        cursor: pointer;
    }
    .place-card:first-child {
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
    }
    .tag::before{
        content: '\2022';
        margin: 0 0.25rem;
    }
    .tag:first-child::before{
        content: '';
        margin: 0;
    }
</style>