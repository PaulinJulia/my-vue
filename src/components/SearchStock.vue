<script setup lang="ts">
import { ref } from "vue";
const searchWord = ref("");
</script>

<template>
  <div class="search-wrapper">
    <input
      v-model.lazy="searchWord"
      type="text"
      placeholder="Namn"
      class="search"
    />
    <select class="list">
      <option>Lista</option>
      <option>OMXS30</option>
    </select>
  </div>
  <div class="market-wrapper">
    <button class="market" @click="">
      <img src="https://flagsapi.com/SE/flat/64.png" class="flag" />Sverige
    </button>
    <button class="market">
      <img src="https://flagsapi.com/US/flat/64.png" class="flag" />USA
    </button>
    <button class="market">
      <img src="https://flagsapi.com/DE/flat/64.png" class="flag" />Tyskland
    </button>
  </div>
</template>

<style scoped>
.search-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search {
  padding: 0.5rem;
  font-size: 0.8rem;
  margin: 1rem;
  border-radius: 8px;
  letter-spacing: 1px;
}
.list,
.list > option {
  padding: 0.5rem;
  font-size: 0.8rem;
}
.market-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
}
.market {
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  background-color: var(--color-background-grey);
  color: var(--color-black);
}
.flag {
  border-radius: 60%;
  width: 32px;
  height: 32px;
  margin: 0.2rem;
}
</style>
