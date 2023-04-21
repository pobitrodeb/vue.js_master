<template>
      <h1>Vue.js Master Course </h1>

      <h2> {{ title }}</h2>

</template>

<script setup>
import {ref, onBeforeMount,} from 'vue';
let title =  ref('This is title for testing onBeforeMount');


  //  Life Cycle Hooks 
  onBeforeMount(() => {
    title.value = "Vue.js Master Course By Ibrahim";
    console.log('Before Mount');
  })
</script>

<style lang="scss" scoped>

</style>