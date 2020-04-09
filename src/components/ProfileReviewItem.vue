<template>
  <!-- component to display review blocks on the profile page of users -->
  <div class="flex">
    <!-- aquire image from images/places -->
    <img class="inline-block w-12 h-12 rounded-full" :src="require(`@/assets/images/places/${getReviewPlace(review.placeId).image}`)" :alt="`Bilde av ${getReviewPlace(review.placeId).name}`"/>
    <div class="ml-3">
      <p class="text-sm font-medium text-gray-800">{{ getReviewPlace(review.placeId).name }}</p>
      <p class="mt-1 mb-1 text-sm text-gray-600">{{ review.review.text }}</p>
      <div class="mb-1">
        <app-core-stars :conditional="((review.review.environment + review.review.selection + review.review.service + review.review.value)/4)"></app-core-stars>
      </div>
      <!-- format date so it says 'x days since' instead of date -->
      <span v-if="formatDate(review.timeStamp) != 0" class="text-xs text-gray-600">{{ formatDate(review.timeStamp) }} dager siden</span>
      <!-- if the date is today, write 'today' -->
      <span v-else class="text-xs text-gray-600">I dag</span>
    </div>
  </div>
</template>

<script>
import CoreStars from './CoreStars'

export default {
  name: 'ProfileReviewItem',
  components: {
    'app-core-stars': CoreStars
  },
  props: {
    review: {
      type: Object,
      required: true,
    }
  },
  methods: {
    // method for getting place associated with review
    getReviewPlace(reviewPlaceId) {

      // return place using the getPlace getter in store
      return this.$store.getters.getPlace(reviewPlaceId)
    },
    // method for formatting the date
    formatDate(date) {
      const today = new Date()

      // returns calculated difference between today and the date, so it displays x days since 
      return Math.round((today - date) / (1000 * 60 * 60 * 24))
    }
  },
}
</script>