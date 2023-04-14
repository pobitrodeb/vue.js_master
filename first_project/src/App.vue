<template>
  <h4> Course Name: {{ courseName }}</h4>
  <p> Mentor: {{ mentor }}</p>
  
  <button @click="count++"> +</button>
    {{ count }}
  <button @click="count--"> - </button>
</template>



// Easy Way Compotion API 
<script setup>
import { ref } from 'vue';
  let count = ref(0); 
  let courseName = ref("Vue.js Master Class"); 
  let mentor = ref("Ibrahim")
</script>