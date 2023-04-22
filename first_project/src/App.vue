<template>
   
      <h1>{{ title }}</h1>
      <div class="counter">
        <button id="counter" @click="increement"> + </button>
      <p class="m-2">
          {{ count }}
        </p>
      <button id="counter" @click="decreement"> - </button>
      </div>

      <Counter/>
</template>

<script setup>
import { ref } from 'vue';
import Counter from './components/Counter.vue';

let title = ref('Vue.js Master Course By Ibrahim')
let count = ref(0);
let increement = () => {
    count.value ++;
}

let decreement = () => {
  count.value --;
}

</script>

<style>
.counter {
  display:flex;
  justify-content: center;
}
</style>
