<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import HttpHelloWorld from "./components/HttpHelloWorld.vue";
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";
//core
import "primevue/resources/primevue.min.css";
</script>

<template>
  <HelloWorld msg="Vite + Vue + Tailwind + PrimeVue + Pinia" />
  <HttpHelloWorld />
</template>

<style scoped>
body {
  font-family: var(--font-family);
}
</style>
