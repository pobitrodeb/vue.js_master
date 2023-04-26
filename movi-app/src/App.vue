<template>
<header>
    <router-link :to="{name: 'home'}">
      <h1>Movies </h1>
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