<template>
  <!-- view for displaying a user profile -->
  <div>
    <!-- check if user exists -->
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
          <app-profile-review-list class="mt-5" :reviews="reviewsByUser" :myAccount="true"></app-profile-review-list>
        </div>
      </div>
    </div>
    <!-- if user not found -->
    <div v-else>
      <app-core-404></app-core-404>
    </div>

  </div>
</template>

<script>
// CORE IMPORTS
import CoreNotFound from '../components/Core404'

// MODULE IMPORTS
import ProfileHeader from '../components/ProfileHeader'
import ProfileMeta from '../components/ProfileMeta'
import ProfileBio from '../components/ProfileBio'
import ProfileReviewList from '../components/ProfileReviewList'

export default {
  name: 'Profile',
  components: {
    'app-profile-header': ProfileHeader,
    'app-profile-meta': ProfileMeta,
    'app-profile-bio': ProfileBio,
    'app-profile-review-list': ProfileReviewList,
    'app-core-404': CoreNotFound
  },
  computed: {
    // method for getting user
    user() {
      // gets user from store based on id in route
      return this.$store.getters.getUser(parseInt(this.$route.params.id))
    },
    // method for getting reviews done by user
    reviewsByUser() {
      // gets reviews from store based on userId in route
      return this.$store.getters.getUserReviews(parseInt(this.$route.params.id))
    }
  },
}
</script>
