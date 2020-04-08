<template>
  <!-- component do display reviews the user has done -->
  <div>
    <!-- conditional dislpaying dynamic text based on if you view your own profile, or a other user's -->
    <h1 v-if="myAccount" class="text-lg font-medium text-gray-800">Mine anmeldelser</h1>
    <h1 v-else class="text-lg font-medium text-gray-800">>Anmeldelser</h1>
    <div class="mt-4 bg-white rounded shadow">
      <!-- check if the passed reviews array isn't empty -->
      <div v-if="reviews.length > 0">
        <div v-for="review in reviews" :key="review.id" class="px-5 py-5 border-b border-gray-300">
          <!-- link each review to the place where the review was made -->
          <router-link :to="{ name: 'Place', params: { id: review.placeId }}">
            <app-profile-review-item :review="review"></app-profile-review-item>
          </router-link>
        </div>
      </div>
      <div v-else class="px-5 py-5">
        <app-core-no-data :text="'Ingen anmeldelser gjort av denne brukeren enda!'"></app-core-no-data>
      </div>
    </div>
  </div>
</template>

<script>
// CORE IMPORTS
import CoreNoData from './CoreNoData'

// MODULE IMPORTS
import ProfileReviewItem from './ProfileReviewItem'

export default {
  name: 'ProfileReviewList',
  components: {
    'app-core-no-data': CoreNoData,
    'app-profile-review-item': ProfileReviewItem
  },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
    myAccount: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
}
</script>