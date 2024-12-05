<script setup lang="ts">
import Welcome from "../components/Welcome.vue";
import FirstSection from "../components/FirstSection.vue";
import SecondSection from "../components/SecondSection.vue";
import ThirdSection from "../components/ThirdSection.vue";
</script>

<template>
  <section class="background-container">
    <Welcome />
  </section>
  <main class="container">
    <div class="content">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  </main>
</template>

<style scoped>
.background-container {
  background: linear-gradient(135deg, #141720, #1c363b, #8b92ae);
  padding: 2rem 10rem 2rem 10rem;
}
.container {
  margin: 0 auto;
}
</style>
