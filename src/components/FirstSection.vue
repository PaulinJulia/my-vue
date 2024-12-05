<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const handleLogin = () => {
  router.push({ name: "login" });
};
</script>

<template>
  <section class="first-section">
    <p class="text">
      Hos oss får du tillgång till ett stort utbud av aktier, kunskap och
      inspiration. Bygg din egen portfölj och sprid risken genom att investera i
      olika bolag och branscher, över tid.
    </p>
    <button @click="handleLogin" class="login-button">Logga in</button>
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

.login-button {
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: block; 
  margin: 0 auto;
}
</style>
