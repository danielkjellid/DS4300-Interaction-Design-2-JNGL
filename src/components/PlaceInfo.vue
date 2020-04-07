<template>
  <div class="bg-white rounded shadow">
    <div class="px-5 py-5 border-b border-gray-300">
      <p class="text-sm text-gray-800">{{ data.bio }}</p>
    </div>
    <div class="px-5 py-5">
      <span v-for="(tag, index) in data.tags" :key="index" class="inline-flex items-center px-3 py-1 mb-2 mr-2 text-sm font-medium leading-5 text-blue-800 bg-blue-100 rounded-full">
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>