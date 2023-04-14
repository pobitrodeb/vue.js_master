// Methods -function way  
<template>
  <div>
    <h2> Course Name:  {{ course.name }}</h2>
    <button @click="increment(2)"> + </button>
    {{ count }}
    <button @click="decrement(1)"> - </button>
  </div>
</template>


<script setup>
  import {ref, reactive} from 'vue'; 
  let count = ref(0); 
  let course = reactive({
    name: "Vue.js Master Class"
  })

  function increment(item)
  {
    count.value += item
  }

  function decrement(item)
  {
    count.value -= item
  }

</script>
// Methods -function way   