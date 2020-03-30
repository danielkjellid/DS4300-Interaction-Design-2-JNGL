<template>
  <footer class="sticky bottom-0 z-40 bg-white border-t border-gray-300 shadow nav">
    <nav class="flex items-center justify-between px-5 pt-4 pb-6">
      <!-- the app routes controlled by vue-router -->
      <router-link
        to="/"
        class="block text-sm font-medium text-gray-600 hover:text-gray-800"
        active-class="text-gray-800"
        exact
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 m-auto mb-1 text-gray-400"
          :class="{ 'text-gray-600': parentIsActive('/') }"
        >
          <path
            d="M5.64 16.36a9 9 0 1112.72 0l-5.65 5.66a1 1 0 01-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 10-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
          />
        </svg>
        <a>Utforsk</a>
      </router-link>
      <router-link
        to="/list"
        class="block text-sm font-medium text-gray-600 hover:text-gray-800"
        active-class="text-gray-800"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 m-auto mb-1 text-gray-400 hover:text-gray-600"
          :class="{ 'text-gray-600': parentIsActive('/list') }"
        >
          <path
            d="M5 3h4a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2zm0 2v4h4V5H5zm10-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V5c0-1.1.9-2 2-2zm0 2v4h4V5h-4zM5 13h4a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4c0-1.1.9-2 2-2zm0 2v4h4v-4H5zm10-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4c0-1.1.9-2 2-2zm0 2v4h4v-4h-4z"
          />
        </svg>
        <a>Liste</a>
      </router-link>
      <router-link
        to="/position"
        class="block text-sm font-medium text-gray-600 hover:text-gray-800"
        active-class="text-gray-800"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 m-auto mb-1 text-gray-400 hover:text-gray-600"
          :class="{ 'text-gray-600': parentIsActive('/position') }"
        >
          <path
            d="M14 5.62l-4 2v10.76l4-2V5.62zm2 0v10.76l4 2V7.62l-4-2zm-8 2l-4-2v10.76l4 2V7.62zm7 10.5L9.45 20.9a1 1 0 01-.9 0l-6-3A1 1 0 012 17V4a1 1 0 011.45-.9L9 5.89l5.55-2.77a1 1 0 01.9 0l6 3A1 1 0 0122 7v13a1 1 0 01-1.45.89L15 18.12z"
          />
        </svg>
        <a>Posisjon</a>
      </router-link>
      <router-link
        to="/favorites"
        class="block text-sm font-medium text-gray-600 hover:text-gray-800"
        active-class="text-gray-800"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 m-auto mb-1 text-gray-400 hover:text-gray-600"
          :class="{ 'text-gray-600': parentIsActive('/favorites') }"
        >
          <path
            d="M12.76 3.76a6 6 0 018.48 8.48l-8.53 8.54a1 1 0 01-1.42 0l-8.53-8.54a6 6 0 018.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 10-5.66-5.66l-1.46 1.47a1 1 0 01-1.42 0L9.83 5.17a4 4 0 10-5.66 5.66L12 18.66l7.83-7.83z"
          />
        </svg>
        <a>Favoritter</a>
      </router-link>
      <router-link
        to="/profile"
        class="block text-sm font-medium text-gray-600 hover:text-gray-800"
        active-class="text-gray-800"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6 m-auto mb-1 text-gray-400 hover:text-gray-600"
          :class="{ 'text-gray-600': parentIsActive('/profile') }"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <a>Profil</a>
      </router-link>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  methods: {
      // method to check if parent in router link is active to apply class to icon
      parentIsActive(input) {
        const paths = Array.isArray(input) ? input : [input];

        return paths.some(path => {
          return this.$route.path.indexOf(path) === 0 // current path will start with this path string
        });
      }
  }
};
</script>
