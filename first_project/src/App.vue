<template>
  <h4> Course Name: {{ courseName }}</h4>
  <p> Mentor: {{ mentor }}</p>
  
  <button @click="count++"> +</button>
    {{ count }}
  <button @click="count--"> - </button>
</template>




// Easy Way Compotion API 
<script setup>
  let count = 0; 
  let courseName = "Vue.js Master Class"; 
  let mentor = "Ibrahim"
</script>