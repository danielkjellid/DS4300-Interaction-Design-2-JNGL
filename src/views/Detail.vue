<template>
  <div>
      <div v-if="place">
          <app-detail-header :data="place"></app-detail-header>
          <div class="px-5 py-5">
            <app-detail-meta :data="place"></app-detail-meta>
            <app-detail-info :data="place" class="mt-5"></app-detail-info>
            <app-detail-assesment :data="place" class="mt-5"></app-detail-assesment>
            <app-reviews class="mt-5"></app-reviews>
          </div>
      </div>
      <div v-else>
          <p>Error</p>
      </div>
  </div>
</template>

<script>
import DetailHeader from '../components/DetailHeader'
import DetailMeta from '../components/DetailMeta'
import DetailInfo from '../components/DetailInfo'
import DetailAssesment from '../components/DetailAssesment'
import Reviews from '../components/Reviews'

export default {
    computed: {
        place() {
            return this.$store.getters.getPlace(parseInt(this.$route.params.id))
        }
    },
    components: {
      'app-detail-header': DetailHeader,
      'app-detail-meta': DetailMeta,
      'app-detail-info': DetailInfo,
      'app-detail-assesment': DetailAssesment,
      'app-reviews': Reviews
    }
}
</script>