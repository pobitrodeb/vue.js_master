// Methods - es6 way
<template>
  <div>
    <h2> Course Name:  {{ course.name }}</h2>
    <p @click="changeMentor">Course Platform: {{ course.platform }}</p>
    <button @click="increment(2)"> + </button>
    {{ count }} is {{ checkOddOrEven }} 
    <button @click="decrement(1)"> - </button>
  </div>
</template>


<script setup>
  import {ref, reactive, computed} from 'vue'; 
  let count = ref(0); 
  let course = reactive({
    name: "Vue.js Master Class", 
    platform: "Instructory", 
  })
// Method 
 const increment = item => count.value += item
 const decrement = item => count.value -= item
 const changeMentor = () => course.platform = "Udemay"

 //computed 
const checkOddOrEven = computed(() => {
  return count.value % 2 === 0 ? 'even' : 'odd';
})

</script>
