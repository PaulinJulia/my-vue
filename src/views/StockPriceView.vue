<script setup lang="ts">
import StockMarket from "../components/StockMarket.vue";
</script>

<template>
  <main class="container">
    <h1>Hej från Aktiekurser!</h1>
    <StockMarket />
  </main>
</template>

<style>
.container {
  margin: 0;
  height: 100vh;
  color: var(--color-black);
}
</style>