<template>
  <header class="bg-gray-800 shadow-md header">
    <div class="flex items-center justify-center px-5 py-6">
      <router-link class="flex items-center block text-sm font-medium text-white" to="/position">
        <a class="flex">
          Velg posisjon
          <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 ml-2 text-gray-400">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </a>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
    name: 'TheHeader',
    
}
</script>