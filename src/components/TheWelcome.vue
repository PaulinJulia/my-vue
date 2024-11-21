<script setup lang="ts">
import HelloWorld from "./HelloWorld.vue";
</script>

<template>
  <header class="background-container">
    <!-- <img
      alt="Bay leaf"
      class="logo"
      src="@/assets/bayleaf.png"
      width="125"
      height="125"
    /> -->

    <div class="wrapper">
      <HelloWorld />
    </div>
  </header>
  <section class="first-section">
    <p class="text">
      Hos oss får du tillgång till ett stort utbud av aktier, kunskap och
      inspiration. Bygg din egen portfölj och sprid risken genom att investera i
      olika bolag och branscher, över tid.
    </p>
  </section>
  <button>Start</button>
</template>

<style scoped>
.background-container {
  /* background: linear-gradient(135deg, #141720, #1C363B, #295E5F, #58D0BC); */
  /* background: radial-gradient(ellipse at top, #141720, transparent),
      radial-gradient(ellipse at bottom, #58d0bc, transparent); */
  background: radial-gradient(
    circle at 100%,
    #58d0bc,
    #295e5f 50%,
    #141720 75%,
    #1c363b 75%
  );
  padding: 2rem;
}

/* .logo {
  display: block;
  margin: 2rem auto 2rem;
} */
</style>
