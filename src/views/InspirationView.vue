<script setup lang="ts">
import CardItem from "../components/CardItem.vue";
import ThirdSection from "../components/ThirdSection.vue";

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
    image: "light.jpg",
  },
];
</script>

<template>
  <main class="container">
    <ThirdSection />
    <CardItem :cards="cards" />
    <ThirdSection />
  </main>
</template>

<style>
.container {
  margin: 0;
  color: var(--color-black);
}
</style>
