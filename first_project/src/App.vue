<template>
  
      <h1>{{ title }}</h1>
     <Counter v-for=" i in 3"> 
      <div class="">
        <p> counter {{ i }} </p>
      </div>
     </Counter>

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
