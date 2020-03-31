<template>
    <div>
        <div class="px-5 py-5 bg-white shadow">
            <app-search-bar :query.sync="query" :showFilter="true"></app-search-bar>
        </div>
        <p class="font-medium text-lg px-5 py-5">Favoritter</p>
    </div>
</template>

<script>
import SearchBar from '../components/SearchBar'
/* import Modal from '../components/Modal' */

export default {
    components: {
        'app-search-bar': SearchBar,
        /* 'app-modal': Modal */
    }
}
</script>

<style scoped>
    p{
        color: #2D3748;
    }
</style>
