<script setup lang="ts">
import { ref } from "vue";
import StockMarket from "./StockMarket.vue";
const selectedMarket = ref("STO");

const handleJapanese = () => {
  selectedMarket.value = "JPX";
};
const handleUSA = () => {
  selectedMarket.value = "NASDAQ";
};
const handleGermany = () => {
  selectedMarket.value = "XETRA";
};
</script>

<template>
  <div class="market-wrapper">
    <button class="market" @click="handleJapanese">
      <img src="https://flagsapi.com/JP/flat/64.png" class="flag" />Japan
    </button>
    <button class="market" @click="handleUSA">
      <img src="https://flagsapi.com/US/flat/64.png" class="flag" />USA
    </button>
    <button class="market" @click="handleGermany">
      <img src="https://flagsapi.com/DE/flat/64.png" class="flag" />Tyskland
    </button>
  </div>
  <StockMarket :selectedMarket="selectedMarket" />
</template>

<style scoped>
.market-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
}
.market {
  width: 130px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  background-color: var(--color-background-grey);
  color: var(--color-black);
  font-size: 12px;
}
.market:hover {
  transform: scale(1.05);
}
.flag {
  border-radius: 60%;
  width: 24px;
  height: 24px;
  margin: 0.2rem;
}
</style>
