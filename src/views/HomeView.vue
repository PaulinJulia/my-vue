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
    <FirstSection />
    <SecondSection />
    <ThirdSection />
  </main>
</template>

<style scoped>
.background-container {
  /* background: linear-gradient(135deg, #141720, #1c363b, #2bb673, #0be85d); */
  background: linear-gradient(135deg, #141720, #1c363b, #8b92ae);
  /* background: radial-gradient(ellipse at top, #141720, transparent),
      radial-gradient(ellipse at bottom, #0be85d, transparent); */
  /* background: radial-gradient(
    circle at 100%,
    #58d0bc,
    #295e5f 50%,
    #141720 75%,
    #1c363b 75%
  ); */
  padding: 2rem 10rem 2rem 10rem;
}
.container {
  margin: 0;
  /* padding: 0 8rem 0 8rem; */
  height: 100vh;
}
</style>
