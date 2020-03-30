<template>
    <div>
        <div v-for="(category, index) in categories" :key="category.id" :class="{'mt-10' : index != 0}">
            <div class="flex justify-between">
            <h1 class="text-lg font-medium text-gray-800">{{ category.name }}</h1>
            <a href="" class="flex items-center text-sm font-medium text-gray-800">
                Se alle
                <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 ml-1 text-gray-600">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
            </a>
            </div>
            <div class="mt-4 bg-white rounded-lg shadow">
            <div v-for="place in places" :key="place.id">
                <div v-if="place.boroughId == location.boroughId">
                <div v-if="place.categoryId == category.id">
                    <app-place-item :place="place"></app-place-item>
                </div>
                </div>
            </div>
            <a href="#" class="block py-3 mx-auto text-sm text-center text-gray-700">
                Se alle
            </a>
            </div>
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
        categories: {
            type: Array,
            required: true,
        },
        location: {
            type: Object,
            required: true,
        }
    },
    components: {
        'app-place-item': PlaceItem
    },
  }
</script>
