<script setup lang="ts">
import CardItem from "../components/CardItem.vue";

const cards = [
  { id: 1, name: "Top 10 företag med Bitcoin-innehav" },
  { id: 2, name: "Svenska utdelningstoppen" },
  { id: 3, name: "Kryptoaktier" },
  {
    id: 4,
    name: "Expertens råd till den riskvillige, här är ett par lockande aktier",
  },
];
</script>

<template>
  <main class="container">
    <h1>Hej från inspirationssidan!</h1>
    <CardItem :cards="cards" />
  </main>
</template>

<style>
.container {
  margin: 0;
  height: 100vh;
  color: var(--color-black);
}
</style>
