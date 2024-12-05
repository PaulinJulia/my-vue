<script setup lang="ts">
import { inject } from "vue";

const about = inject("about", "Default value");
</script>

<template>
  <div class="card-container">
    <p>{{ about }}</p>
    <p>Kontakt</p>
    <p>Kundservice</p>
    <p>Nyheter</p>
    <p>Press</p>
    <p>Villkor och Policy</p>
  </div>
</template>

<style scoped>
.card-container {
  text-align: center;
  padding: 2rem;
  background-color: var(--color-black);
}
</style>
