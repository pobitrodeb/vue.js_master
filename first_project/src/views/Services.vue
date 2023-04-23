<template>
    <div>
        <h2> This is Service Page </h2>

        <button @click="goHomePage"> Back To Home </button>

    </div>
</template>


<script setup>
import { useRouter } from 'vue-router';

const router = useRouter(); 
const goHomePage = () => {
    router.push({name: 'home'}); 
}
</script>