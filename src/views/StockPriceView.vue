<script setup lang="ts">
import Market from "../components/Market.vue";
</script>

<template>
  <main class="container">
    <h1>Aktiekurser</h1>
    <Market />
  </main>
</template>

<style>
.container {
  margin: 0;
  /* height: 100vh; */
  color: var(--color-black);
}
</style>
