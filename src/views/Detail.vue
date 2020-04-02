<template>
  <div>
      <div v-if="place">
          <!-- header -->
          <div>
              <div class="grid h-48 grid-cols-2 bg-white border-b border-gray-300">
                  <div class="bg-red-200 border-r border-white">Thumbnail</div>
                  <div>
                      <div class="h-24 bg-green-200 border-b border-white">Image 2</div>
                      <div class="h-24 bg-blue-200">Image 3</div>
                  </div>
              </div>
              <!-- place image, title and address -->
              <div class="px-5 py-5 bg-white">
                  <div class="flex items-center">
                    <!-- get image from assets -->
                    <img class="w-12 h-12 rounded-full" :src="require(`@/assets/images/places/${place.image}`)"/>
                    <div class="ml-3">
                      <p class="text-base font-medium text-gray-800">{{ place.name }}</p>
                      <p class="text-sm font-normal text-gray-600">{{ place.address }}</p>
                    </div>
                  </div>
              </div>
              <!-- place image, title and address end -->
              <!-- action buttons -->
              <div class="flex items-center justify-around px-5 py-5 bg-gray-100 shadow">
                  <button class="m-auto text-sm font-medium text-gray-900">
                      <div class="flex items-center w-12 h-12 mb-2 border-2 border-gray-300 rounded-full">
                          <svg viewBox="0 0 24 24" class="w-6 h-6 m-auto text-gray-600" fill="currentColor">
                              <path d="M14 5.62l-4 2v10.76l4-2V5.62zm2 0v10.76l4 2V7.62l-4-2zm-8 2l-4-2v10.76l4 2V7.62zm7 10.5L9.45 20.9a1 1 0 0 1-.9 0l-6-3A1 1 0 0 1 2 17V4a1 1 0 0 1 1.45-.9L9 5.89l5.55-2.77a1 1 0 0 1 .9 0l6 3A1 1 0 0 1 22 7v13a1 1 0 0 1-1.45.89L15 18.12z"/>
                          </svg>
                      </div>
                      Kart
                  </button>
                  <button class="m-auto text-sm font-medium text-gray-900">
                      <div class="flex items-center w-12 h-12 mb-2 border-2 border-gray-300 rounded-full">
                          <svg viewBox="0 0 24 24" class="w-6 h-6 m-auto text-gray-600" fill="currentColor">
                              <path d="M4.06 13a8 8 0 0 0 5.18 6.51A18.5 18.5 0 0 1 8.02 13H4.06zm0-2h3.96a18.5 18.5 0 0 1 1.22-6.51A8 8 0 0 0 4.06 11zm15.88 0a8 8 0 0 0-5.18-6.51A18.5 18.5 0 0 1 15.98 11h3.96zm0 2h-3.96a18.5 18.5 0 0 1-1.22 6.51A8 8 0 0 0 19.94 13zm-9.92 0c.16 3.95 1.23 7 1.98 7s1.82-3.05 1.98-7h-3.96zm0-2h3.96c-.16-3.95-1.23-7-1.98-7s-1.82 3.05-1.98 7zM12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/>
                          </svg>
                      </div>
                      Nettside
                  </button>
                  <button class="m-auto text-sm font-medium text-gray-900">
                      <div class="flex items-center w-12 h-12 mb-2 border-2 border-gray-300 rounded-full">
                          <svg viewBox="0 0 24 24" class="w-6 h-6 m-auto text-gray-600" fill="currentColor">
                              <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"/>
                          </svg>
                      </div>
                      Favoritt
                  </button>
              </div>
              <!-- action buttons end -->
          </div>
          <!-- header end -->
          <!-- content -->
          <div class="px-5 py-5">
            <!-- metadata -->
            <div class="grid grid-cols-2 bg-white rounded shadow">
                <div class="px-4 py-3 border-r border-gray-300">
                  <p class="text-xs font-medium text-gray-500 uppercase">Vurdering</p>
                  <div class="flex items-center mt-1">
                    <!-- loop and conditional check to add color to each star based on the place's reviews -->
                    <svg
                      v-for="(star, index) in 5"
                      :key="star"
                      class="w-4 h-4"
                      fill="currentColor"
                      :class="
                        index >=
                        (place.reviews.environment +
                          place.reviews.menu +
                          place.reviews.service +
                          place.reviews.value) /
                          5
                          ? 'text-gray-400'
                          : 'text-gray-800'
                      "
                    >
                      <path
                        d="M5.256 1.006c.295-.93 1.611-.93 1.906 0l.764 2.408a1 1 0 00.953.697H11.4c.963 0 1.37 1.228.597 1.803l-2.081 1.55a1 1 0 00-.356 1.104l.785 2.475c.293.926-.772 1.685-1.55 1.105l-1.989-1.48a1 1 0 00-1.194 0l-1.989 1.48c-.778.58-1.843-.179-1.55-1.105l.785-2.475a1 1 0 00-.356-1.105L.421 5.913c-.773-.574-.366-1.802.597-1.802h2.521a1 1 0 00.953-.697l.764-2.408z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="px-4 py-3">
                   <p class="text-xs font-medium text-gray-500 uppercase">Prisnivå</p>
                   <div class="flex items-center">
                     <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 mr-1 text-gray-500">
                       <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span class="text-sm font-medium text-gray-800">{{ place.pricepoint }}</span>
                   </div>
                </div>
            </div>
            <!-- metadata end -->
            <!-- bio -->
            <div class="mt-5 bg-white rounded shadow">
              <div class="px-5 py-5 border-b border-gray-300">
                <p class="text-sm text-gray-800">{{ place.bio }}</p>
              </div>
              <div class="px-5 py-5">
                <span v-for="(tag, index) in place.tags" :key="index" class="inline-flex items-center px-3 py-1 mb-2 mr-2 text-sm font-medium leading-5 text-blue-800 bg-blue-100 rounded-full">
                  {{ tag }}
                </span>
              </div>
            </div>
            <!-- bio end -->
            <!-- review detail -->
            <div class="mt-5 bg-white rounded shadow">
              <div class="flex items-center justify-between px-5 py-5 border-b border-gray-300">
                <p class="text-sm font-medium text-gray-800">Miljø</p>
                <div class="flex items-center mt-1">
                  <svg
                    v-for="(star, index) in 5"
                    :key="star"
                    class="w-4 h-4"
                    fill="currentColor"
                    :class="index >= place.reviews.environment ? 'text-gray-400' : 'text-gray-800'">
                    <path d="M5.256 1.006c.295-.93 1.611-.93 1.906 0l.764 2.408a1 1 0 00.953.697H11.4c.963 0 1.37 1.228.597 1.803l-2.081 1.55a1 1 0 00-.356 1.104l.785 2.475c.293.926-.772 1.685-1.55 1.105l-1.989-1.48a1 1 0 00-1.194 0l-1.989 1.48c-.778.58-1.843-.179-1.55-1.105l.785-2.475a1 1 0 00-.356-1.105L.421 5.913c-.773-.574-.366-1.802.597-1.802h2.521a1 1 0 00.953-.697l.764-2.408z"/>
                  </svg>
                </div>
              </div>
              <div class="flex items-center justify-between px-5 py-5 border-b border-gray-300">
                <p class="text-sm font-medium text-gray-800">Meny</p>
                <div class="flex items-center mt-1">
                  <svg
                    v-for="(star, index) in 5"
                    :key="star"
                    class="w-4 h-4"
                    fill="currentColor"
                    :class="index >= place.reviews.menu ? 'text-gray-400' : 'text-gray-800'">
                    <path d="M5.256 1.006c.295-.93 1.611-.93 1.906 0l.764 2.408a1 1 0 00.953.697H11.4c.963 0 1.37 1.228.597 1.803l-2.081 1.55a1 1 0 00-.356 1.104l.785 2.475c.293.926-.772 1.685-1.55 1.105l-1.989-1.48a1 1 0 00-1.194 0l-1.989 1.48c-.778.58-1.843-.179-1.55-1.105l.785-2.475a1 1 0 00-.356-1.105L.421 5.913c-.773-.574-.366-1.802.597-1.802h2.521a1 1 0 00.953-.697l.764-2.408z"/>
                  </svg>
                </div>
              </div>
              <div class="flex items-center justify-between px-5 py-5 border-b border-gray-300">
                <p class="text-sm font-medium text-gray-800">Service</p>
                <div class="flex items-center mt-1">
                  <svg
                    v-for="(star, index) in 5"
                    :key="star"
                    class="w-4 h-4"
                    fill="currentColor"
                    :class="index >= place.reviews.service ? 'text-gray-400' : 'text-gray-800'">
                    <path d="M5.256 1.006c.295-.93 1.611-.93 1.906 0l.764 2.408a1 1 0 00.953.697H11.4c.963 0 1.37 1.228.597 1.803l-2.081 1.55a1 1 0 00-.356 1.104l.785 2.475c.293.926-.772 1.685-1.55 1.105l-1.989-1.48a1 1 0 00-1.194 0l-1.989 1.48c-.778.58-1.843-.179-1.55-1.105l.785-2.475a1 1 0 00-.356-1.105L.421 5.913c-.773-.574-.366-1.802.597-1.802h2.521a1 1 0 00.953-.697l.764-2.408z"/>
                  </svg>
                </div>
              </div>
              <div class="flex items-center justify-between px-5 py-5 border-b border-gray-300">
                <p class="text-sm font-medium text-gray-800">Verdi for pengene</p>
                <div class="flex items-center mt-1">
                  <svg
                    v-for="(star, index) in 5"
                    :key="star"
                    class="w-4 h-4"
                    fill="currentColor"
                    :class="index >= place.reviews.value ? 'text-gray-400' : 'text-gray-800'">
                    <path d="M5.256 1.006c.295-.93 1.611-.93 1.906 0l.764 2.408a1 1 0 00.953.697H11.4c.963 0 1.37 1.228.597 1.803l-2.081 1.55a1 1 0 00-.356 1.104l.785 2.475c.293.926-.772 1.685-1.55 1.105l-1.989-1.48a1 1 0 00-1.194 0l-1.989 1.48c-.778.58-1.843-.179-1.55-1.105l.785-2.475a1 1 0 00-.356-1.105L.421 5.913c-.773-.574-.366-1.802.597-1.802h2.521a1 1 0 00.953-.697l.764-2.408z"/>
                  </svg>
                </div>
              </div>
              <div class="flex items-center justify-between px-5 py-5">
                <p class="text-sm font-bold text-gray-800">Totalt ({{(place.reviews.environment + place.reviews.menu + place.reviews.service + place.reviews.value)}} av 20)</p>
                <div class="flex items-center mt-1">
                  <svg
                    v-for="(star, index) in 5"
                    :key="star"
                    class="w-4 h-4"
                    fill="currentColor"
                    :class="
                      index >=
                      (place.reviews.environment +
                        place.reviews.menu +
                        place.reviews.service +
                        place.reviews.value) /
                        5
                        ? 'text-gray-400'
                        : 'text-gray-800'
                    ">
                    <path d="M5.256 1.006c.295-.93 1.611-.93 1.906 0l.764 2.408a1 1 0 00.953.697H11.4c.963 0 1.37 1.228.597 1.803l-2.081 1.55a1 1 0 00-.356 1.104l.785 2.475c.293.926-.772 1.685-1.55 1.105l-1.989-1.48a1 1 0 00-1.194 0l-1.989 1.48c-.778.58-1.843-.179-1.55-1.105l.785-2.475a1 1 0 00-.356-1.105L.421 5.913c-.773-.574-.366-1.802.597-1.802h2.521a1 1 0 00.953-.697l.764-2.408z"/>
                  </svg>
                </div>
              </div>
            </div>
            <!-- review detail end -->
            <!-- reviews -->
            <div class="mt-5 bg-white rounded shadow">
              <div class="px-5 py-5 border-b border-gray-300">
                <div class="flex">
                  <img class="inline-block w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-800">Ola Nordman</p>
                    <p class="mt-1 mb-1 text-sm text-gray-600">Utrolig god mat! Utmerket vegansk alternativ. Det vennlige personalet og en rolig og imøtekommende atmosfære.</p>
                    <span class="text-xs text-gray-600">4 dager siden &#8226;</span> <a href="" class="text-xs text-gray-600">Svar</a>
                  </div>
                </div>
              </div>
              <div class="px-5 py-5 border-b border-gray-300">
                <div class="flex">
                  <img class="inline-block w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-800">Ola Nordman</p>
                    <p class="mt-1 mb-1 text-sm text-gray-600">Utrolig god mat! Utmerket vegansk alternativ. Det vennlige personalet og en rolig og imøtekommende atmosfære.</p>
                    <span class="text-xs text-gray-600">4 dager siden &#8226;</span> <a href="" class="text-xs text-gray-600">Svar</a>
                  </div>
                </div>
              </div>
              <div class="px-5 py-5 m-auto">
                <button class="w-full py-3 text-sm text-center text-gray-800 bg-gray-200 rounded hover:text-gray-900 hover:bg-gray-300">
                  Skriv en anmeldelse
                </button>
              </div>
            </div>
            <!-- reviews end -->
          </div>  
          <!-- content end -->
      </div>
      <div v-else>
          <p>Error</p>
      </div>
  </div>
</template>

<script>
export default {
    computed: {
        place() {
            return this.$store.getters.getPlace(parseInt(this.$route.params.id))
        }
    }
}
</script>