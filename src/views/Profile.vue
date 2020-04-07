<template>
  <div>
    <div v-if="user">
      <div v-if="user.id === 3">
        <!-- your user data -->
        <app-profile-header :user="user" :myAccount="true"></app-profile-header>
        <div class="px-5 py-5">
          <app-profile-meta :user="user"></app-profile-meta>
          <app-profile-bio class="mt-5" :bio="user.bio" :myAccount="true"></app-profile-bio>
          <app-profile-reviews class="mt-5" :reviews="reviewsByUser" :myAccount="true"></app-profile-reviews>
        </div>
      </div>
      <div v-else>
        <!-- normal user data -->
        <app-profile-header :user="user" :myAccount="false"></app-profile-header>
        <div class="px-5 py-5">
          <app-profile-meta :user="user"></app-profile-meta>
          <app-profile-bio class="mt-5" :bio="user.bio" :myAccount="false"></app-profile-bio>
          <app-profile-reviews class="mt-5" :reviews="reviewsByUser" :myAccount="true"></app-profile-reviews>
        </div>
      </div>
    </div>
    <div v-else>
      <!-- user not found -->
      <app-404></app-404>
    </div>
  
  </div>
</template>

<script>
import ProfileHeader from '../components/ProfileHeader'
import ProfileMeta from '../components/ProfileMeta'
import ProfileBio from '../components/ProfileBio'
import ProfileReviews from '../components/ProfileReviews'
import NotFound from '../components/404'

export default {
  computed: {
    user() {
      return this.$store.getters.getUser(parseInt(this.$route.params.id))
    },
    reviewsByUser() {
      return this.$store.getters.getUserReviews(parseInt(this.$route.params.id))
    }
  },
  components: {
    'app-profile-header': ProfileHeader,
    'app-profile-meta': ProfileMeta,
    'app-profile-bio': ProfileBio,
    'app-profile-reviews': ProfileReviews,
    'app-404': NotFound
  },
}
</script>
