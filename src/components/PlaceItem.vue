<template>
  <router-link :to="{ name: 'PlaceDetail', params: { id: place.id }}" class="flex items-center px-5 py-5 border-b border-gray-300">
    <!-- get image from assets -->
    <img
      class="h-16 rounded"
      :src="require(`@/assets/images/places/${place.image}`)"
    />
    <swipe class="my-swipe">
        <swipe-item>
            <div class="ml-2">
                <h2 class="text-base font-medium text-gray-800">{{ place.name }}</h2>
                <div class="flex items-center">
                    <!-- loop and coniditional check to display types, adding margin and bullet to every item, except the last one -->
                    <span
                    v-for="(type, index) in place.types"
                    :key="type"
                    class="text-sm text-gray-600"
                    :class="{ 'ml-1': index != 0 }"
                    >
                    {{ type }}
                    <span v-if="index != place.types.length - 1">&#8226;</span>
                    </span>
                </div>
                <div class="flex items-center">
                    <div class="flex items-center">
                    <!-- loop and conditional check to add color to each star based on the place's reviews -->
                    <svg
                        v-for="(star, index) in 5"
                        :key="star"
                        class="w-4 h-4"
                        fill="currentColor"
                        :class="
                        index >=
                        (place.reviews.environment +
                            place.reviews.menu +
                            place.reviews.service +
                            place.reviews.value) /
                            5
                            ? 'text-gray-400'
                            : 'text-gray-800'
                        "
                    >
                        <path
                        d="M5.256 1.006c.295-.93 1.611-.93 1.906 0l.764 2.408a1 1 0 00.953.697H11.4c.963 0 1.37 1.228.597 1.803l-2.081 1.55a1 1 0 00-.356 1.104l.785 2.475c.293.926-.772 1.685-1.55 1.105l-1.989-1.48a1 1 0 00-1.194 0l-1.989 1.48c-.778.58-1.843-.179-1.55-1.105l.785-2.475a1 1 0 00-.356-1.105L.421 5.913c-.773-.574-.366-1.802.597-1.802h2.521a1 1 0 00.953-.697l.764-2.408z"
                        />
                    </svg>
                    </div>
                    <span class="ml-1 text-sm text-gray-600"
                    >{{ place.reviews.amountOfReviwes }} anm.</span
                    >
                </div>
            </div>
        </swipe-item>
    </swipe>
  </router-link>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
  props: {
    place: {
      type: Object,
      required: true
    },
    components: {
        'swipe': Swipe,
        'swipe-item': SwipeItem
    }
  }
};
</script>
