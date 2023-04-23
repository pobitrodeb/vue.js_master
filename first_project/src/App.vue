<template>

<!-- <div class="">
  <a href="/"> Home | </a>
  <a href="/about"> About |  </a>
  <a href="/services"> Services |  </a>
  <a href="/contact"> Contact |  </a>
</div> -->


<!-- Named routes -->
<div class="">
  <router-link :to="{name: 'home'}"> Home |</router-link>
  <router-link :to="{name: 'about'}"> About |</router-link>
  <router-link :to="{name: 'services'}"> Services | </router-link>
  <router-link :to="{name: 'contact'}"> Contact | </router-link>
</div>

<router-view/>

</template>