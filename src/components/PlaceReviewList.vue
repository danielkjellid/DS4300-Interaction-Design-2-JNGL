<template>
  <!-- component to display a container for review items of palce -->
  <div class="bg-white rounded shadow">
    <!-- check if there as been made any reviews to the place -->
    <div v-if="reviews.length > 0">
      <div v-for="review in reviews" :key="review.id" class="px-5 py-5 border-b border-gray-300">
        <!-- link each review item to the person who's made the reivew's profile -->
        <router-link :to="{ name: 'Profile', params: { id: review.userId }}">
          <app-place-review-item :review="review"></app-place-review-item>
        </router-link>
      </div>
    </div>
    <!-- if there is no reviews for the palce, display icon and message -->
    <div v-else class="px-5 pt-5">
      <app-core-no-data :text="'Ingen anmeldelser for dette stedet enda. Du kan lage en gjennom knappen under!'"></app-core-no-data>
    </div>
    <div class="px-5 py-5 m-auto">
      <!-- button to open a modal where you can write a review -->
      <app-core-primary-btn @click.native="toggleModal" :btnText="'Skriv en anmeldelse'"></app-core-primary-btn>
    </div>
  </div>
</template>

<script>
// CORE IMPORTS
import CorePrimaryBtn from './CorePrimaryBtn'
import CoreNoData from './CoreNoData'

// MODULE IMPORTS
import PlaceReviewItem from './PlaceReviewItem'

export default {
  name: 'PlaceReviewList',
  components: {
    'app-core-primary-btn': CorePrimaryBtn,
    'app-core-no-data': CoreNoData,
    'app-place-review-item': PlaceReviewItem,
  },
  props: {
    reviews: {
      type: Array,
      required: true,
    }
  },
  methods: {
    // method for toggleing modal
    toggleModal() {
      // emits click to parent component, which controles data if the modal is active
      this.$emit('toggleModal')
    }
  },
}
</script>
