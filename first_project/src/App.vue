<template>
      <h1>Vue.js Master Course </h1>

      <h2> {{ title }}</h2>

    <button id="coutner" @click="increement">{{ counter }}</button>

</template>

<script setup>
import {ref, nextTick} from 'vue';
let title =  ref('');
let counter = ref(0);

const increement = async () => {
  counter.value++;

  //DOM Update 
  console.log(document.getElementById('counter').textContent);

  await nextTick();
  console.log(document.getElementById('counter').textContent);

}

</script>
