<template>
  <!-- component to display review blocks on the place detail page -->
  <div class="flex">
    <!-- aquire image from images/users -->
    <img class="inline-block w-12 h-12 rounded-full" :src="require(`@/assets/images/users/${getReviewUser(review.userId).image}`)" :alt="`Bilde av ${getReviewUser(review.userId).name}`"/>
    <div class="ml-3">
      <p class="text-sm font-medium text-gray-800">{{ getReviewUser(review.userId).name }}</p>
      <p class="mt-1 mb-2 text-sm text-gray-600">{{ review.review.text }}</p>
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
  name: 'PlaceReviewItem',
  props: {
    review: {
      type: Object,
      required: true,
    }
  },
  components: {
    'app-core-stars': CoreStars
  },
  methods: {
    // method for getting user associated with review
    getReviewUser(reviewUserId) {

      // return user using the getUser getter in store
      return this.$store.getters.getUser(reviewUserId)
    },
    // method for formatting the date
    formatDate(date) {
      const today = new Date()
      // returns calculated difference between today and the date, so it displays x days since 
      return Math.round((today-date)/(1000*60*60*24))
    }
  },
}
</script>