// Methods -function way  
<template>
  <div>
    <h2> Course Name:  {{ course.name }}</h2>
    <button @click="increment"> + </button>
    {{ count }}
    <button @click="decrement"> - </button>
  </div>
</template>



<script setup>
  import {ref, reactive} from 'vue'; 
  let count = ref(0); 
  let course = reactive({
    name: "Vue.js Master Class"
  })

  function increment()
  {
    count.value++
  }

  function decrement()
  {
    count.value--
  }

</script>