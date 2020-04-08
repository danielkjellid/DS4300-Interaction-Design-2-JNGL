<template>
  <!-- component to display the primary button style used in the application -->
  <button class="w-full py-3 text-sm text-center text-gray-800 bg-gray-200 rounded-md hover:text-gray-900 hover:bg-gray-300">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: 'CorePrimaryBtn',
  props: {
    btnText: {
      type: String,
      required: true,
      default: 'Button text'
    }
  }
}
</script>