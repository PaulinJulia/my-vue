<script setup lang="ts">
import CardItem from "../components/CardItem.vue";
import ThirdSection from "../components/ThirdSection.vue";
import StockHistorical from "../components/StockHistorical.vue";

const cards = [
  {
    id: 1,
    name: "Top 10 företag med Bitcoin-innehav",
    image: "plant.jpg",
  },
  { id: 2, name: "Svenska utdelningstoppen", image: "pig.jpg" },
  { id: 3, name: "Kryptoaktier", image: "gold.jpg" },
  {
    id: 4,
    name: "Expertens råd till den riskvillige, här är ett par lockande aktier",
    image: "gold.jpg",
  },
];
</script>

<template>
  <main class="container">
    <ThirdSection />
    <StockHistorical />
    <CardItem :cards="cards" />
    <ThirdSection />
  </main>
</template>

<style>
.container {
  margin: 0;
  /* height: 100vh; */
  color: var(--color-black);
}
</style>
