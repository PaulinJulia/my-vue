<script setup lang="ts"></script>

<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <RouterLink to="/">Gå till Start</RouterLink>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  margin: 5rem;
  color: var(--text-color-mint);
}
</style>
