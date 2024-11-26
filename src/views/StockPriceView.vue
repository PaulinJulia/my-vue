<script setup lang="ts">
import StockMarket from "../components/StockMarket.vue";
import SearchStock from "../components/SearchStock.vue";
</script>

<template>
  <main class="container">
    <h1>Aktiekurser</h1>
    <SearchStock />
    <StockMarket />
  </main>
</template>

<style>
.container {
  margin: 0;
  /* height: 100vh; */
  color: var(--color-black);
}
</style>
