<template>
  <!-- component to display a modal -->
  <div class="absolute inset-0 z-50 flex items-end w-full faded" v-if="show && !tooltipShown">
    <div class="p-6 m-3 text-center bg-white border rounded-lg z-60 modal" v-if="show && !tooltipShown">
      <div class="flex justify-center py-3">
        <!-- aquire icon used in the modal icon-circle -->
        <img :src="require(`@/assets/images/modalicons/${icon}`)" />
      </div>
      <div class="my-3">
        <div class="mb-2 text-lg font-medium text-black">
          <!-- modal header text -->
          <p> {{ header }} </p>
        </div>
        <div class="text-sm info">
          <!-- modal info -->
          <p> {{ info }} </p>
        </div>
      </div>
      <!-- primary button to close modal -->
      <app-core-primary-btn @click.native="onClick" :btnText="'Lukk'"></app-core-primary-btn>
    </div>
  </div>
</template>

<script>
// CORE IMPORTS
import CorePrimaryBtn from './CorePrimaryBtn'

export default {
  name: 'CoreModal',
  components: {
    'app-core-primary-btn': CorePrimaryBtn,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      required: true,
      default: 'Modal header'
    },
    info: {
      type: String,
      required: true,
      default: 'Modal info'
    },
    tooltipType: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      show: Boolean,
      // get info from store if tooltip has been showed previously
      // this is to only show the tooltip once, and not on each component created lifecycle
      tooltipShown: this.$store.getters.getTooltipShown(this.tooltipType)
    }
  },
  methods: {
    onClick() {
      this.show = !this.show;
      // when the "close modal" button is clicked, update store to not show modal again
      // this is done using the updateTooltipShown action
      this.tooltipType && this.$store.dispatch("updateTooltipShown", this.tooltipType);
    }
  },
}
</script>

<style scoped>
  .info {
    color: #718096;
  }
  .modal {
    border-radius: 2rem;
  }
  .faded {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
</style>