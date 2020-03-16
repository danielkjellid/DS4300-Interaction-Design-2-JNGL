<template>
  <div id="app">
    <div class="mobile">
      <div class="mobile-skin">
        <div class="skin-overlay"></div>
        <div class="mobile-viewport">
          <!-- content -->
        </div>
      </div>
    </div>
  </div>
</template>

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
    z-index: 20;
  }

  .mobile-viewport {
    overflow: hidden;
    display: block;
    position: absolute;
    width: 375px;
    height: 812px;
    z-index: 10;
    vertical-align: top;
    left: 22px;
    top: 20px;
  }
</style>
