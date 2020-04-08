<template>
  <!-- component to display a 2-part "write a review" modal -->
  <div class="mt-5">
    <label :for="id" class="text-sm font-medium text-gray-800">Hvor mange stjerner vil du gi på {{ name }}?</label>
    <div class="flex items-center justify-between mt-2">
      <!-- range slider which is synced with parent component -->
      <input @input="updateRangeValue" value="0" :id="id" class="mr-4" type="range" min="0" max="5">
      <div>
        <span class="font-medium text-gray-800">{{ rangeValue }}</span>
        <span class="font-medium text-gray-600">/5</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaceReviewModalFormItem',
  props: {
    id: {
      type: String,
      required: true,
      default: 'form-item'
    },
    name: {
      type: String,
      required: true,
    },
    rangeValue: {
      required: false,
      default: 0,
    }
  },
  methods: {
    // method for updating value in parent component
    updateRangeValue(e) {

      // emits synces changes to parent
      this.$emit('update:rangeValue', e.target.value)
    }
  }
}
</script>

<style scoped>
  input[type='range'] {
    -webkit-appearance: none; /* hide slider so that custom slider can be made */
    width: 100%;
    background: transparent;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input[type='range']::-ms-track {
    width: 100%;
    cursor: pointer;

    /* hide slider so custom styles can be added */
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 28px;
    width: 28px;
    border-radius: 50%;
    background-color: #2d3748;
    cursor: pointer;
    margin-top: -8px;
  }

  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 12px;
    cursor: pointer;
    background: #cbd5e0;
    border-radius: 8px;
  }
</style>