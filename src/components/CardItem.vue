<script setup lang="ts">
import { ref } from "vue";

const cards = ref([
  "Vad är en aktie?",
  "Hur värderar man en aktie?",
  "Vilka risker finns det med aktier?",
  "Hur många aktier skall man äga?",
]);
</script>

<template>
    <div class="card-container">
      <p v-for="(card, index) in cards" :key="index" class="cardItem">
        {{ card }}
      </p>
    </div>
</template>

<style scoped>
.card-container {
  background-color: rgb(225, 222, 222);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 5rem;
}

.cardItem {
  padding: 1rem;
  margin: 1rem;
  width: 15rem;
  height: 16rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 2px 2px 10px rgb(67, 66, 66);
  background-color: var(--color-background-grey);
  color: var(--color-black);
}
</style>
