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
    <p v-for="card in cards" :key="card.id" class="card-item">
      <!-- <img :src="`/assets/${card.image}`" :alt="card.image" class="image" /> -->
           <img class="image" :src="getImageUrl(card.image)" :alt="card.image" />
      <p>{{ card.name }}</p>
      <img>
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

.card-item {
  margin: 1rem;
  width: 15rem;
  height: 16rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 2px 2px 10px rgb(67, 66, 66);
  background-color: var(--color-background-grey);
  color: var(--color-black);
}

.image {
  width: 100%; 
  height: 150px; 
  object-fit: cover; 
}
</style>
