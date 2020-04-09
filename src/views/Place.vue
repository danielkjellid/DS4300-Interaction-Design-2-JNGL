<template>
  <!-- view to displace a single place, and info about it -->
  <div>
    <!-- check if the palce exists -->
    <div v-if="place">
      <!-- display header, meta, info, assesment and reviews -->
      <app-place-header :data="place"></app-place-header>
      <div class="px-5 py-5">
        <app-place-meta :place="place" :assesmentValue="assesmentValue"></app-place-meta>
        <app-place-info :data="place" class="mt-5"></app-place-info>
        <app-place-assesment-list :environmentValue="assesment('environment')" :selectionValue="assesment('selection')" :serviceValue="assesment('service')" :valueValue="assesment('value')" :totalValue="assesmentValue" class="mt-5"></app-place-assesment-list>
        <app-place-review-list :reviews="getPlaceReviews" @toggleModal="reviewActive = !reviewActive" class="mt-5"></app-place-review-list>
        <app-place-review-modal :reviewActive="reviewActive" @close="reviewActive = !reviewActive">
        </app-place-review-modal>
      </div>
    </div>
    <!-- if the place does not exist, display 404 -->
    <div v-else>
      <app-core-404></app-core-404>
    </div>
  </div>
</template>

<script>
// CORE IMPORTS
import CoreNotFound from '../components/Core404'

// MODULE IMPORTS
import PlaceHeader from '../components/PlaceHeader'
import PlaceMeta from '../components/PlaceMeta'
import PlaceInfo from '../components/PlaceInfo'
import PlaceAssesmentList from '../components/PlaceAssesmentList'
import PlaceReviewList from '../components/PlaceReviewList'
import PlaceReviewModal from '../components/PlaceReviewModal'

export default {
  name: 'Place',
  components: {
    'app-core-404': CoreNotFound,
    'app-place-header': PlaceHeader,
    'app-place-meta': PlaceMeta,
    'app-place-info': PlaceInfo,
    'app-place-assesment-list': PlaceAssesmentList,
    'app-place-review-list': PlaceReviewList,
    'app-place-review-modal': PlaceReviewModal,
  },
  data() {
    return {
      reviewActive: false,
    }
  },
  computed: {
    // method for getting place
    place() {
      // getting place from store based in id in route
      return this.$store.getters.getPlace(parseInt(this.$route.params.id))
    },
    // method for getting reviews of place
    getPlaceReviews() {
      // getiing reviews of place based in id in route
      return this.$store.getters.getPlaceReviews(parseInt(this.$route.params.id))
    },
    // method for getting values of different assesments in store
    assesment(assesment) {
      return this.$store.getters.getPlaceAssesment(parseInt(this.$route.params.id), assesment)
    },
    // method for getting total assesment value from store
    assesmentValue() {
      return this.$store.getters.getPlaceAssesmentValue(parseInt(this.$route.params.id))
    },
  },
}
</script>