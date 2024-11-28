<script setup lang="ts">
import "../components/CardItem.vue";
import CardItem from "../components/CardItem.vue";

const cards = [
  { id: 1, name: "Vad är en aktie?", image: "gold.jpg" },
  { id: 2, name: "Hur värderar man en aktie?", image: "charts.jpg" },
  { id: 3, name: "Vilka risker finns det med aktier?", image: "piles.jpg" },
  { id: 4, name: "Hur många aktier skall man äga?", image: "buysell.jpg" },
];
</script>

<template>
  <section class="second-section">
    <CardItem :cards="cards" />
  </section>
</template>

<style scoped></style>
