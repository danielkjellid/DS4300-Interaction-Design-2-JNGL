<template>
  <div>
    <div 
      v-show="reviewActive" 
      @click="reviewActive = !reviewActive" 
      class="absolute top-0 left-0 w-full h-full bg-black opacity-25 cursor-pointer"
    >
    </div>
    <div v-if="reviewActive" class="absolute left-0 right-0 bg-white border-t border-gray-300 nav-padding rounded-custom">
      <div class="px-5 py-5 text-center border-b border-gray-300">
        <h1 class="text-base font-medium text-gray-800">Skriv en anmeldelse</h1>
      </div>
      <div v-if="reviewText" class="px-5 py-5">
        <label for="review" class="text-sm font-medium text-gray-800">Hva synes du om stedet?</label>
        <textarea v-model="review" id="review" class="block w-full mt-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md form-input" rows="4" placeholder="Skriv inn anmeldelsen her"></textarea>
        <div class="mt-5">
          <button @click="switchFormStep" class="w-full py-3 text-sm text-center text-gray-800 bg-gray-200 rounded hover:text-gray-900 hover:bg-gray-300">
            Fortsett
          </button>
        </div>
      </div>
      <div v-if="reviewSlider" class="px-5 py-5">
        <div class="border-b border-gray-300">
          <button @click="switchFormStep" class="flex items-center justify-center w-full py-3 mb-5 text-sm text-gray-800 bg-white border border-gray-300 rounded hover:bg-gray-100 hover:text-gray-900">
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 mr-2 text-gray-800">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            Hva synes du om stedet?
          </button>
        </div>
        <form>
          <div class="mt-5">
            <label for="environment" class="text-sm font-medium text-gray-800">Hvor mange stjerner vil du gi på miljø?</label>
            <div class="flex items-center justify-between mt-2">
              <input v-model="environmentValue" id="environment" class="mr-4" type="range" min="0" max="5">
              <div>
                <span class="font-medium text-gray-800">{{ environmentValue }}</span>
                <span class="font-medium text-gray-600">/5</span>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <label for="menu" class="text-sm font-medium text-gray-800">Hvor mange stjerner vil du gi på utvalg?</label>
            <div class="flex items-center justify-between mt-2">
              <input v-model="menuValue" id="menu" class="mr-4" type="range" min="0" max="5">
              <div>
                <span class="font-medium text-gray-800">{{ menuValue }}</span>
                <span class="font-medium text-gray-600">/5</span>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <label for="service" class="text-sm font-medium text-gray-800">Hvor mange stjerner vil du gi på service?</label>
            <div class="flex items-center justify-between mt-2">
              <input v-model="serviceValue" id="service" class="mr-4" type="range" min="0" max="5">
              <div>
                <span class="font-medium text-gray-800">{{ serviceValue }}</span>
                <span class="font-medium text-gray-600">/5</span>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <label for="value" class="text-sm font-medium text-gray-800">Hvor mange stjerner vil du gi på verdi?</label>
            <div class="flex items-center justify-between mt-2">
              <input v-model="totalValue" id="value" class="mr-4" type="range" min="0" max="5">
              <div>
                <span class="font-medium text-gray-800">{{ totalValue }}</span>
                <span class="font-medium text-gray-600">/5</span>
              </div>
            </div>
          </div>
        </form>
        <div class="mt-5">
          <button class="w-full py-3 text-sm text-center text-gray-800 bg-gray-200 rounded hover:text-gray-900 hover:bg-gray-300">
            Publiser anmeldelse
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviewText: true,
      reviewSlider: false,
      review: '',
      environmentValue: 0,
      menuValue: 0,
      serviceValue: 0,
      totalValue: 0,
    }
  },
  props: {
    reviewActive: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    switchFormStep() {
      this.reviewText = !this.reviewText
      this.reviewSlider = !this.reviewSlider
    }
  },
}
</script>

<style scoped>
.nav-padding {
  bottom: 90px;
}

.rounded-custom {
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

input[type=range] {
  -webkit-appearance: none; /* hide slider so that custom slider can be made */
  width: 100%;
  background: transparent;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type=range]::-ms-track {
  width: 100%;
  cursor: pointer;

  /* hide slider so custom styles can be added */
  background: transparent;
  border-color: transparent;
  color:transparent;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background-color: #2D3748;
  cursor: pointer;
  margin-top: -8px;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 12px;
  cursor: pointer;
  background: #CBD5E0;
  border-radius: 8px;
}
</style>
