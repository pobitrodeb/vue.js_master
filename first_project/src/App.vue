<template>
  <h4> Course Name: {{ courseName }}</h4>
  <p> Mentor: {{ mentor }}</p>
  
  <button @click="count++"> +</button>
    {{ count }}
  <button @click="count--"> - </button>
</template>


<script>
export default {
  setup() {
    let count = 0; 
    let courseName = "Vue.js Master Class";
    let mentor = "Mahamudh Ibrahim";

    return {count, courseName, mentor}
  }
}
</script>