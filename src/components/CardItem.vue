<script setup lang="ts">
interface Card {
  id: number;
  name: string;
  image: string;
}

defineProps<{
  cards: Card[];
}>();

const getImageUrl = (imageName: string) => {
  return new URL(`../assets/${imageName}`, import.meta.url).href;
};
</script>

<template>
  <div class="card-container">
    <div v-for="card in cards" :key="card.id" class="card-item">
      <img class="image" :src="getImageUrl(card.image)" :alt="card.image" />
      <p>{{ card.name }}</p>
      <img />
    </div>
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
.card-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.card-item {
  margin: 1rem;
  width: 15rem;
  height: 16rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 2px 2px 10px rgb(67, 66, 66);
  background-color: var(--color-background-grey);
  color: var(--color-black);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
</style>
