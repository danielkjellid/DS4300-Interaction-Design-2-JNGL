<template>
  <div>
      <div v-if="place">
          <app-detail-header :data="place"></app-detail-header>
          <div class="px-5 py-5">
            <app-detail-meta :data="place"></app-detail-meta>
            <app-detail-info :data="place" class="mt-5"></app-detail-info>
            <app-detail-assesment :data="place" class="mt-5"></app-detail-assesment>
            <app-reviews :reviews="getPlaceReviews" class="mt-5">
              <template v-slot:review-button>
                <div class="px-5 py-5 m-auto">
                  <button @click="reviewActive = !reviewActive" class="w-full py-3 text-sm text-center text-gray-800 bg-gray-200 rounded hover:text-gray-900 hover:bg-gray-300">
                    Skriv en anmeldelse
                  </button>
                </div>
              </template>
            </app-reviews>
            <app-detail-review-modal :reviewActive="reviewActive"></app-detail-review-modal>
          </div>
      </div>
      <div v-else>
          <p>Finner ikke sted.</p><router-link to="/"><a>Gå tilbake til utforsk?</a></router-link>
      </div>
  </div>
</template>

<script>
import DetailHeader from '../components/DetailHeader'
import DetailMeta from '../components/DetailMeta'
import DetailInfo from '../components/DetailInfo'
import DetailAssesment from '../components/DetailAssesment'
import Reviews from '../components/Reviews'
import DetailReviewModal from '../components/DetailReviewModal'

export default {
  data() {
    return {
      reviewActive: false,
    }
  },
  computed: {
      place() {
          return this.$store.getters.getPlace(parseInt(this.$route.params.id))
      },
      getPlaceReviews() {
        return this.$store.getters.getPlaceReviews(parseInt(this.$route.params.id))
      }
  },
  components: {
    'app-detail-header': DetailHeader,
    'app-detail-meta': DetailMeta,
    'app-detail-info': DetailInfo,
    'app-detail-assesment': DetailAssesment,
    'app-reviews': Reviews,
    'app-detail-review-modal': DetailReviewModal,
  }
}
</script>