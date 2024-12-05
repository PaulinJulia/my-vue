<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <h1 class="title">Välkommen!</h1>
    <p class="content">Din personliga sida</p>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
.title {
  color: var(--text-color-mint);
}
.content {
  height: 100vh;
  color: var(--text-color-mint);
}
</style>
