<template>
   
    <h1 class="mt-5 text-danger" >{{ title }}</h1>

    <slot/>
    
    <div class="counter">
      <button id="counter" @click="increement"> + </button>
    <p class="m-2">
        {{ count }}
      </p>
    <button id="counter" @click="decreement"> - </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
let count = ref(0);
const props = defineProps(['title'])
let increement = () => {
  count.value ++;
}

let decreement = () => {
count.value --;
}

</script>

<style>

.counter {
display:flex;
justify-content: center;
}
</style>
