<template>
  <!-- component to display header info of user -->
  <div>
    <div class="px-5 py-5 bg-white border-b border-gray-200">
      <div class="flex items-center">
        <!-- aquire image from images/users -->
        <img class="object-cover w-12 h-12 rounded-full" :src="require(`@/assets/images/users/${user.image}`)" :alt="`Bilde av ${user.name}`"/>
        <div class="ml-3">
          <p class="text-base font-medium text-gray-800">{{ user.name }}</p>
          <!-- conditional to check if user is verified and display appropriate info -->
          <div v-if="user.verified" class="flex items-center">
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 mr-1 text-green-400">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-sm font-normal text-gray-600">Verifisert konto</span>
          </div>
          <div v-else class="flex items-center">
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 mr-1 text-red-400">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-sm font-normal text-gray-600">Ikke verifisert</span>
          </div>
        </div>
      </div>
    </div>
    <!-- action buttons for user profiles -->
    <!-- separated by the myAccount prop to display differen info if looking on own, or other profile -->
    <div class="flex items-center justify-center px-5 py-5 bg-white shadow">
      <app-core-primary-btn v-if="myAccount" :btnText="'Rediger'"></app-core-primary-btn>
      <app-core-primary-btn v-else :btnText="'Følg'"></app-core-primary-btn>
    </div>
  </div>
</template>

<script>
// CORE IMPORTS
import CorePrimaryBtn from './CorePrimaryBtn'

export default {
  name: 'ProfileHeader',
  components: {
    'app-core-primary-btn': CorePrimaryBtn
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    myAccount: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
}
</script>