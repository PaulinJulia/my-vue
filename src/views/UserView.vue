<script setup lang="ts">
import { inject } from "vue";

const userEmail = inject("userEmail", "Användarnamn");
</script>

<template>
  <h1 class="title">Välkommen {{ userEmail }}</h1>
</template>

<style scoped>
.title {
  color: var(--text-color-mint);
}
</style>
