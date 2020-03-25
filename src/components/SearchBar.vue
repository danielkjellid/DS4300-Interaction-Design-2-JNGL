<template>
    <div class="bg-white h-20 shadow flex flex-row items-center justify-between">
       
        <input type="text" v-model="search" class="h-10 w-2/3 bg-gray-100 rounded-md border border-gray-300 ml-5 mr-3 text-sm text-gray-600 flex flex-row items-center p-2" placeholder="Søk" />
        <div class="h-10 w-1/3 bg-white rounded-md border border-gray-300 mr-5 flex flex-row items-center justify-between text-gray-500">
            <svg viewBox="0 0 20 20" fill="currentColor" class="w6 h-6 ml-2"><path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"></path></svg>
            <div class="text-sm text-black font-semibold">A-Å</div>
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 mr-2" id="dropArrow"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </div>

    </div>
</template>

<script>

export default {
    name: 'SearchBar'
}
</script>

<style scoped>
    #dropArrow:hover {
        cursor: pointer;
    }
</style>