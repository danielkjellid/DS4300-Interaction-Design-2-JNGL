<template>
  <div class="mt-5 bg-white rounded shadow">
    <div class="flex items-center justify-between px-5 py-5 border-b border-gray-300">
      <p class="text-sm font-medium text-gray-800">Miljø</p>
      <div class="flex items-center mt-1">
        <svg
          v-for="(star, index) in 5"
          :key="star"
          class="w-4 h-4"
          fill="currentColor"
          :class="index >= data.reviews.environment ? 'text-gray-400' : 'text-gray-800'">
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
          :class="index >= data.reviews.menu ? 'text-gray-400' : 'text-gray-800'">
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
          :class="index >= data.reviews.service ? 'text-gray-400' : 'text-gray-800'">
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
          :class="index >= data.reviews.value ? 'text-gray-400' : 'text-gray-800'">
          <path d="M5.256 1.006c.295-.93 1.611-.93 1.906 0l.764 2.408a1 1 0 00.953.697H11.4c.963 0 1.37 1.228.597 1.803l-2.081 1.55a1 1 0 00-.356 1.104l.785 2.475c.293.926-.772 1.685-1.55 1.105l-1.989-1.48a1 1 0 00-1.194 0l-1.989 1.48c-.778.58-1.843-.179-1.55-1.105l.785-2.475a1 1 0 00-.356-1.105L.421 5.913c-.773-.574-.366-1.802.597-1.802h2.521a1 1 0 00.953-.697l.764-2.408z"/>
        </svg>
      </div>
    </div>
    <div class="flex items-center justify-between px-5 py-5">
      <p class="text-sm font-bold text-gray-800">Totalt ({{(data.reviews.environment + data.reviews.menu + data.reviews.service + data.reviews.value)}} av 20)</p>
      <div class="flex items-center mt-1">
        <svg
          v-for="(star, index) in 5"
          :key="star"
          class="w-4 h-4"
          fill="currentColor"
          :class="
            index >=
            (data.reviews.environment +
              data.reviews.menu +
              data.reviews.service +
              data.reviews.value) /
              5
              ? 'text-gray-400'
              : 'text-gray-800'
          ">
          <path d="M5.256 1.006c.295-.93 1.611-.93 1.906 0l.764 2.408a1 1 0 00.953.697H11.4c.963 0 1.37 1.228.597 1.803l-2.081 1.55a1 1 0 00-.356 1.104l.785 2.475c.293.926-.772 1.685-1.55 1.105l-1.989-1.48a1 1 0 00-1.194 0l-1.989 1.48c-.778.58-1.843-.179-1.55-1.105l.785-2.475a1 1 0 00-.356-1.105L.421 5.913c-.773-.574-.366-1.802.597-1.802h2.521a1 1 0 00.953-.697l.764-2.408z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    }
  }
}
</script>