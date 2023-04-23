<template>
  <div>
    <h2>This is Service Page</h2>

    <button @click="goHomePage">Back To Home</button>

    <div class="">
      <ul>
       
          <li v-for="service in services" :key="service.id">
            <router-link :to="{name: 'single-service', params:{ id: service.id} }">
                {{ service.title }}
            </router-link>
          </li>
       
      </ul>
    </div>
  </div>
</template>


<script setup>
import { useRouter, ref } from "vue-router";

const router = useRouter();

let services = ref([
  { id: 1, title: "web design" },
  { id: 2, title: "web development" },
  { id: 3, title: "wordpress theme customization" },
  { id: 4, title: "web applications" },
]);

const goHomePage = () => {
  router.push({ name: "home" });
};
</script>