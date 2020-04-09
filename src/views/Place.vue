<template>
  <!-- view to displace a single place, and info about it -->
  <div>
    <!-- check if the palce exists -->
    <div v-if="place">
      <!-- display header, meta, info, assesment and reviews -->
      <app-place-header :favoriteBtnClick="showModal" :data="place"></app-place-header>
      <div class="px-5 py-5">
        <app-place-meta :place="place" :assesmentValue="assesmentValue"></app-place-meta>
        <app-place-info :data="place" class="mt-5"></app-place-info>
        <app-place-assesment-list :environmentValue="assesment('environment')" :selectionValue="assesment('selection')" :serviceValue="assesment('service')" :valueValue="assesment('value')" :totalValue="assesmentValue" class="mt-5"></app-place-assesment-list>
        <app-place-review-list :reviews="getPlaceReviews" @toggleModal="reviewActive = !reviewActive" class="mt-5"></app-place-review-list>
        <app-place-review-modal :reviewActive="reviewActive" @close="confirmReview"></app-place-review-modal>
        <app-core-modal @close="confimationModalActive = false" v-if="confimationModalActive" icon="cross.svg" header="Anmeldelse publisert!" info="Takk for at du tar deg tiden til å komme med anmeldelser."></app-core-modal>
      </div>
    </div>
    <!-- if the place does not exist, display 404 -->
    <div v-else>
      <app-core-404></app-core-404>
    </div>
     <app-core-msg-modal v-if="showFavoriteModal" icon="favorite.svg" header="Ny favoritt" :info="getLastAddedFavorite" :onClick="closeModal"></app-core-msg-modal>
    <app-core-msg-modal v-if="!!getWillDelete" icon="deletewarning.svg" header="Fjern favoritt" :info="'Er du sikker på at du ønsker å fjerne ' + getWillDelete.name +  ' som favoritt?'" :onClick="resetWillDelete" :deletePlace="getWillDelete"></app-core-msg-modal>
  </div>
</template>

<script>
// CORE IMPORTS
import CoreNotFound from '../components/Core404'
import CoreModal from '../components/CoreModal'

// MODULE IMPORTS
import PlaceHeader from '../components/PlaceHeader'
import PlaceMeta from '../components/PlaceMeta'
import PlaceInfo from '../components/PlaceInfo'
import PlaceAssesmentList from '../components/PlaceAssesmentList'
import PlaceReviewList from '../components/PlaceReviewList'
import PlaceReviewModal from '../components/PlaceReviewModal'
import CoreMsgModal from '../components/CoreMsgModal'

export default {
  name: 'Place',
  components: {
    'app-core-404': CoreNotFound,
    'app-core-modal': CoreModal,
    'app-place-header': PlaceHeader,
    'app-place-meta': PlaceMeta,
    'app-place-info': PlaceInfo,
    'app-place-assesment-list': PlaceAssesmentList,
    'app-place-review-list': PlaceReviewList,
    'app-place-review-modal': PlaceReviewModal,
    'app-core-msg-modal': CoreMsgModal
  },
  data() {
    return {
      reviewActive: false,
      showFavoriteModal: false,
      confimationModalActive: false,
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
    getWillDelete() {
      return this.$store.getters.getWillDelete;
    },
    getLastAddedFavorite() {
      return this.$store.getters.getFavorites.length && this.$store.getters.getFavorites[this.$store.getters.getFavorites.length - 1].name + " ble merket som favoritt, og kan finnes under favoritter"
    }
  },
  methods: {
    closeModal() {
      this.showFavoriteModal = false;
    },
    showModal() {
      this.showFavoriteModal = true;
    },
    resetWillDelete() {
      this.$store.dispatch("setWillDelete", undefined)
    },
    confirmReview() {
      this.reviewActive = false
      this.confimationModalActive = true
    }
  }
}
</script>