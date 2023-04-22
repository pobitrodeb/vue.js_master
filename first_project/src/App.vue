<template>
      <h1> {{ title }}</h1>
    <div class="">
      <button @click="showModal = true"> show modal  </button>
    </div>
    
  <Teleport to="body">
    
   <div class="container">
    <div v-if="showModal" class="modael">
      <p> Hello , This is from modal </p>
      <button @click="showModal = false">close</button>
    </div>
   </div>

  </Teleport>

</template>

<script  setup>
import {ref} from 'vue';
let title = ref('Vue.js Master Class')
let showModal = ref(false);
</script>

<style scoped>
    .modael{
     margin-left: 450px;
    }
</style>