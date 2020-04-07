<template>
  <div>
    <h1 v-if="myAccount" class="text-lg font-medium text-gray-800">Min Biografi</h1>
    <h1 v-else class="text-lg font-medium text-gray-800">Biografi</h1>
    <div class="px-5 py-5 mt-4 bg-white rounded shadow">
      <p class="text-sm text-gray-800">{{ bio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bio: {
      type: String,
      required: true,
    },
    myAccount: {
      type: Boolean,
      required: true,
      default: false,
    }
  }
}
</script>