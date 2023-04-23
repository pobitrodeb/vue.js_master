<template>
        <h2> This is {{ route.params.id }} page </h2>
</template>

<script setup>
import { useRouter } from "vue-router";
const route = useRouter();

</script>
<style lang="scss" scoped>

</style>