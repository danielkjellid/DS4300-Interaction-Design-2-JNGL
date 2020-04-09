<template>
  <!-- component to display a 2-part "write a review" modal -->
  <div>
    <!-- modal overlay, closes modal on click -->
    <div v-show="reviewActive" @click="$emit('close')" class="absolute top-0 left-0 w-full h-full bg-black opacity-25 cursor-pointer">
    </div>
    <!-- first part of modal, where you can write free text -->
    <div v-if="reviewActive" class="absolute left-0 right-0 bg-white border-t border-gray-300 nav-padding rounded-custom">
      <div class="px-5 py-5 text-center border-b border-gray-300">
        <h1 class="text-base font-medium text-gray-800">Skriv en anmeldelse</h1>
      </div>
      <div v-if="reviewText" class="px-5 py-5">
        <label for="review" class="text-sm font-medium text-gray-800">Hva synes du om stedet?</label>
        <textarea v-model="review" id="review" class="block w-full mt-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md form-input" rows="4" placeholder="Skriv inn anmeldelsen her"></textarea>
        <div class="mt-5">
          <app-core-primary-btn @click.native="switchFormStep" :btnText="'Fortsett'"></app-core-primary-btn>
        </div>
      </div>
      <!-- second part, where you slide and give stars based on your experience -->
      <div v-if="reviewSlider" class="px-5 py-5">
        <div class="border-b border-gray-300">
          <!-- button to go back to previous step -->
          <button @click="switchFormStep" class="flex items-center justify-center w-full py-3 mb-5 text-sm text-gray-800 bg-white border border-gray-300 rounded hover:bg-gray-100 hover:text-gray-900">
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 mr-2 text-gray-800">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            Hva synes du om stedet?
          </button>
        </div>
        <!-- range slider form -->
        <form>
          <app-place-reivew-modal-form-item :name="'Miljø'" :id="'environment'" :rangeValue.sync="environmentValue"></app-place-reivew-modal-form-item>
          <app-place-reivew-modal-form-item :name="'Utvalg'" :id="'selection'" :rangeValue.sync="selectionValue"></app-place-reivew-modal-form-item>
          <app-place-reivew-modal-form-item :name="'Service'" :id="'service'" :rangeValue.sync="serviceValue"></app-place-reivew-modal-form-item>
          <app-place-reivew-modal-form-item :name="'Verdi for pengene'" :id="'value'" :rangeValue.sync="totalValue"></app-place-reivew-modal-form-item>
        </form>
        <div class="mt-5">
          <!-- button to submit form, and add review to store -->
          <app-core-primary-btn @click.native="submitReview(reviews)" :btnText="'Publiser Anmeldelse'"></app-core-primary-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// CORE IMPORTS
import CorePrimaryBtn from './CorePrimaryBtn'

// MODULE IMPORTS
import PlaceReviewModalFormItem from './PlaceReviewModalFormItem'

export default {
  name: 'PlaceReviewModal',
  components: {
    'app-core-primary-btn': CorePrimaryBtn,
    'app-place-reivew-modal-form-item': PlaceReviewModalFormItem,
  },
  props: {
    reviewActive: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      reviewText: true,
      reviewSlider: false,
      review: '',
      environmentValue: 1,
      selectionValue: 1,
      serviceValue: 1,
      totalValue: 1,
    }
  },
  computed: {
    reviews() {
      // get reviews from store
      return this.$store.getters.getReviews
    },
  },
  methods: {
    // method for toggleing between the two steps in the review modal
    switchFormStep() {
      this.reviewText = !this.reviewText
      this.reviewSlider = !this.reviewSlider
    },
    // method for adding review to store
    submitReview() {

      // create a "review order"
      const review = {
        id: this.reviews.length + 1,
        userId: 3,
        placeId: parseInt(this.$route.params.id),
        review: {
          text: this.review,
          environment: parseInt(this.environmentValue),
          selection: parseInt(this.selectionValue),
          service: parseInt(this.serviceValue),
          value: parseInt(this.totalValue)
        },
        timeStamp: new Date()
      }

      // dispatch review to store
      this.$store.dispatch('addReview', review)

      // emit to parent component to close the modal
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
  .nav-padding {
    bottom: 90px;
  }

  .rounded-custom {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
</style>
