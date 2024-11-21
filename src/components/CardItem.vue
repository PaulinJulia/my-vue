<script setup lang="ts"></script>

<template>
  <section>
    <div class="card-container">
      <p class="cardItem">Vad är en aktie?</p>
      <p class="cardItem">Hur värderar man en aktie?</p>
      <p class="cardItem">Vilka risker finns det med aktier?</p>
      <p class="cardItem">Hur många aktier skall man äga?</p>
    </div>
  </section>
</template>

<style scoped>
.card-container {
  background-color: rgb(225, 222, 222);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.cardItem {
  padding: 1rem;
  margin: 1rem;
  width: 15rem;
  height: 16rem;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgb(67, 66, 66);
  background-color: var(--color-background);
}
</style>
