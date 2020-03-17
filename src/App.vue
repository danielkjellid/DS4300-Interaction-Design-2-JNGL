<template>
  <div id="app">
    <div class="mobile">
      <div class="mobile-skin">
        <div class="skin-overlay"></div>
        <div class="mobile-viewport">
          <div class="bg-gray-100 canvas">
            <header class="bg-gray-800 shadow-md header">
              <div class="flex items-center justify-center px-5 py-6">
                <a href="#" class="flex items-center block text-sm font-medium text-white">
                  Velg posisjon
                  <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 ml-2 text-gray-400">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </a>
              </div>
            </header>
            <div class="content">
              <router-view></router-view>
            </div>
            <nav class="sticky bottom-0 z-40 bg-white border-t border-gray-300 shadow nav">
              <div class="flex items-center justify-between px-5 pt-4 pb-6">
                <router-link to="/" class="block text-sm font-medium text-gray-600 hover:text-gray-800" active-class="text-gray-800" exact>
                  <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto mb-1">
                    <path d="M5.64 16.36a9 9 0 1112.72 0l-5.65 5.66a1 1 0 01-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 10-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                  <a>Utforsk</a>
                </router-link>
                <a href="" class="block text-sm font-medium text-gray-800">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto mb-1 text-gray-500">
                    <path d="M5.64 16.36a9 9 0 1112.72 0l-5.65 5.66a1 1 0 01-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 10-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                  Uforsk
                </a>
                <a href="" class="block text-sm font-medium text-gray-600 hover:text-gray-800">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto mb-1 text-gray-400">
                    <path d="M5 3h4a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2zm0 2v4h4V5H5zm10-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V5c0-1.1.9-2 2-2zm0 2v4h4V5h-4zM5 13h4a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4c0-1.1.9-2 2-2zm0 2v4h4v-4H5zm10-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4c0-1.1.9-2 2-2zm0 2v4h4v-4h-4z"/>
                  </svg>
                  Liste
                </a>
                <a href="" class="block text-sm font-medium text-gray-600 hover:text-gray-800">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto mb-1 text-gray-400">
                    <path d="M14 5.62l-4 2v10.76l4-2V5.62zm2 0v10.76l4 2V7.62l-4-2zm-8 2l-4-2v10.76l4 2V7.62zm7 10.5L9.45 20.9a1 1 0 01-.9 0l-6-3A1 1 0 012 17V4a1 1 0 011.45-.9L9 5.89l5.55-2.77a1 1 0 01.9 0l6 3A1 1 0 0122 7v13a1 1 0 01-1.45.89L15 18.12z"/>
                  </svg>
                  Posisjon
                </a>
                <a href="" class="block text-sm font-medium text-gray-600 hover:text-gray-800">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto mb-1 text-gray-400">
                    <path d="M12.76 3.76a6 6 0 018.48 8.48l-8.53 8.54a1 1 0 01-1.42 0l-8.53-8.54a6 6 0 018.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 10-5.66-5.66l-1.46 1.47a1 1 0 01-1.42 0L9.83 5.17a4 4 0 10-5.66 5.66L12 18.66l7.83-7.83z"/>
                  </svg>
                  Favoritter
                </a>
                <a href="" class="block text-sm font-medium text-gray-600 hover:text-gray-800">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 m-auto mb-1 text-gray-400">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Profil
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  body {
    background-color: rgb(22, 26, 36);
    margin: 0px auto;
  }

  .mobile {
    outline: none;
    position: relative;
    min-width: 100vw;
  }

  .mobile-skin {
    position: relative;
    background-size: 100% !important;
    background-position: 50% !important;
    margin: 0 auto;
    width: 420px;
    height: 855px;
    margin-top: 100px;
    margin-bottom: 100px;
  }

  .skin-overlay {
    background: url('./assets/images/iphone-screen.png');
    background-size: 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    
  }

  .mobile-viewport {
    overflow: hidden;
    display: block;
    position: absolute;
    width: 375px;
    height: 812px;
    z-index: 10;
    left: 22px;
    top: 20px;
  }

  .canvas {
    height: 100%;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
  }

  .content {
    height: 100%;
    overflow-y: auto;
  }

  .nav {
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }

  .header {
    border-top-left-radius: 38px;
    border-top-right-radius: 38px;
  }
</style>
