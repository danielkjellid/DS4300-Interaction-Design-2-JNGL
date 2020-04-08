<template>
  <!-- component do display meta info of amount of favorites, followers and following -->
  <div class="grid grid-cols-3 bg-white rounded shadow">
    <div class="px-4 py-3 border-r border-gray-300">
      <p class="text-xs font-medium text-gray-500 uppercase">Favoritter</p>
      <span class="text-sm font-medium text-gray-800">{{ user.favorites }}</span>
    </div>
    <div class="px-4 py-3 border-r border-gray-300">
      <p class="text-xs font-medium text-gray-500 uppercase">Følgere</p>
      <span class="text-sm font-medium text-gray-800">{{ user.followers }}</span>
    </div>
    <div class="px-4 py-3">
      <p class="text-xs font-medium text-gray-500 uppercase">Følger</p>
      <span class="text-sm font-medium text-gray-800">{{ user.following }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileMeta',
  props: {
    user: {
      type: Object,
      required: true,
    }
  }
}
</script>