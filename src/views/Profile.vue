<template>
  <div>
      <h1>Profile</h1>
      <swipe class="my-swipe" :noDragWhenSingle="false" :speed="1000">
        <swipe-item class="swippy"></swipe-item>
      </swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
  components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem
  }
}
</script>

<style scoped>
  .swippy {
    width: 50px;
    height: 20px;
    padding: 30px;
    margin-top: 40px;
    background-color: black;
  }
  .my-swipe{
    margin: 0 auto;
    text-align: center;
  }
</style>