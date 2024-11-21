<script setup lang="ts">
// defineProps<{
//   msg: string;
// }>();
</script>

<template>
  <div class="greetings">
    <h1 class="text-color">Aktieinspiration</h1>
    <h3>
      Upptäck din nästa investering. Inspireras, hitta nya och spännande aktier.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  color: var(--text-white-soft);
}

h3 {
  font-size: 1.2rem;
  color: var(--text-white-soft);
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
