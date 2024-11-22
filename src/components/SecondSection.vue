<script setup lang="ts">
import "../components/CardItem.vue";
import CardItem from "../components/CardItem.vue";

const cards = [
  { id: 1, name: "Vad är en aktie?" },
  { id: 2, name: "Hur värderar man en aktie?" },
  { id: 3, name: "Vilka risker finns det med aktier?" },
  { id: 4, name: "Hur många aktier skall man äga?" },
];
</script>

<template>
  <section class="second-section">
    <CardItem :cards="cards" />
  </section>
</template>

<style scoped></style>
