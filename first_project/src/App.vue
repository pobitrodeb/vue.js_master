<template>
      <h1>Vue.js Master Course </h1>

      <h2> {{ title }}</h2>

</template>

<script setup>
import {ref, onBeforeMount, onMounted,} from 'vue';
let title =  ref('This is title for testing onBeforeMount');


  //  Life Cycle Hooks 
  onBeforeMount(() => {
    title.value = "This is on before mount";
    console.log('Before Mount');
  })

  //Mounted 
  onMounted(() => {
    title.value = "this is on mounted";
    console.log('mounted');
  })


</script>

<style lang="scss" scoped>

</style>