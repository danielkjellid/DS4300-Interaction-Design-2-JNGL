<template>
  <!-- component to display a modal -->
  <div class="absolute inset-0 z-50 flex items-end w-full faded">
    <div class="p-6 m-3 text-center bg-white border rounded-lg z-60 modal">
      <div class="flex justify-center py-5">
        <!-- aquire icon used in the modal icon-circle -->
        <img :src="require(`@/assets/images/modalicons/${icon}`)" />
      </div>
      <div class="mb-8">
        <div class="mb-3 text-lg font-medium text-black">
          <!-- modal header text -->
          <p> {{ header }} </p>
        </div>
        <div class="text-sm info">
          <!-- modal info -->
          <p> {{ info }} </p>
        </div>
      </div>
      <!-- primary button to close modal and danger button to confirm action -->
      <app-core-primary-btn class="mb-2 text-red-800 bg-red-200 hover:text-red-900 hover:bg-red-300" v-if="!!deletePlace" @click.native="confirmDelete" :btnText="'Bekreft'"></app-core-primary-btn>
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
    onClick: Function,
    deletePlace: {
        required: false,
        type: Object
    }
  },
  methods: {
      confirmDelete() {
        this.$store.dispatch("removeFavorite", this.deletePlace.id);
        this.$store.dispatch("setWillDelete", undefined);
        this.$store.dispatch("setRegret", this.deletePlace);
      }
  }
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