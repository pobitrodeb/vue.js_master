<template>
      <h1>Vue.js Master Course </h1>

      <h2> {{ title }}</h2>

      <input type="text" ref="input">

</template>

<script setup>
import {ref, onMounted,} from 'vue';
let title =  ref('');
const input = ref(null)
  //Mounted 
  onMounted(() => {
    input.value.focus();
    console.log(input.value);
  })

</script>
