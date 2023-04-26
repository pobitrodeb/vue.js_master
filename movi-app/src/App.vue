<template>
  <header class="bg-primary text-center p-2">
    <router-link :to="{ name: 'home' }">
      <h1 class="text-white">Movie App </h1>
    </router-link>

    <main>
      <router-view></router-view>
    </main>
  </header>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>

</style>