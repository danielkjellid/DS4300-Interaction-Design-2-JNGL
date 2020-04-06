<template>
  <div>
      <h1>Profile</h1>
      <v-touch @swiperight="doSomething" :swipe-options="{ threshold: 100 }">
        <swipe class="my-swipe" :noDragWhenSingle="false" :speed="500">
          <swipe-item class="swippy">FRA SISA</swipe-item>
        </swipe>
      </v-touch>
        <p>I can now be swiped on!</p>
      
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
  components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem
  },
  methods: {
    doSomething() {
      console.log('swopen dat bish');
      
    }
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
    justify-content: center;
    align-items: center;
  }
  .my-swipe{
    margin: 0 auto;
    text-align: center;
    display: flex;
  }
</style>