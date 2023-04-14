<template>
  <h4> Course Name: {{ course.name }}</h4>
  <p> Mentor: {{ course.mentor }}</p>
  <p> Platform: {{ course.platform }}</p>
  
  <button @click="count++"> +</button>
    {{ count }}
  <button @click="count--"> - </button>
</template>





// [ when your data non Primitive Type [object] you use reactive]

<script setup>
import {ref, reactive} from 'vue'; 
let count = ref(0); 
let course = reactive({
      name: "Vue.js Master Class", 
      mentor: "Musha Ibrahim", 
      platform : "instructory", 
    })
</script>