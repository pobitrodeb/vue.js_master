<template>
  <input type="text" v-model="course.name">
  <h4> Course Name: {{ course.name }}</h4>
  <p> Mentor: {{ course.mentor }}</p>
  <p> Platform: {{ course.platform }}</p>
  
  <button @click="count++"> +</button>
    {{ count }}
  <button @click="count--"> - </button>

   <!-- Two Way Data Binding  -->
  <p>Give your number </p>
  <input type="number" v-model="count">

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