<script setup lang="ts">
//Not complete
const handleStart = () => {
  console.log("hej från startknappen");
};
</script>

<template>
  <section class="first-section">
    <p class="text">
      Hos oss får du tillgång till ett stort utbud av aktier, kunskap och
      inspiration. Bygg din egen portfölj och sprid risken genom att investera i
      olika bolag och branscher, över tid.
    </p>
    <button @click="handleStart" class="start-button">Logga in</button>
  </section>
</template>

<style scoped>
.first-section {
  padding: 5rem;
}

.text {
  color: var(--color-black);
  margin-bottom: 2rem;
}

.start-button {
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: block; /* Gör knappen blocknivå */
  margin: 0 auto;
}
</style>
