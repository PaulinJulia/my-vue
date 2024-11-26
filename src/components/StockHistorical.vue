<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import axios from "axios";
const fmpApiKey = import.meta.env.VITE_APP_FMP_KEY as string;

const stockSymbols = ["AAPL", "NVDA", "MSFT"];

interface StockData {
  avgVolume: number;
  change: number;
  changesPercentage: number;
  dayHigh: number;
  dayLow: number;
  earningsAnnouncement: string;
  eps: number;
  exchange: string;
  marketCap: number;
  name: string;
  open: number;
  pe: number;
  previousClose: number;
  price: number;
  priceAvg50: number;
  priceAvg200: number;
  sharesOutstanding: number;
  symbol: string;
  timestamp: number;
  volume: number;
  yearHigh: number;
  yearLow: number;
}
const data = ref<StockData[]>([]);

onBeforeMount(async () => {
  try {
    for (const symbol of stockSymbols) {
      const fmpApiUrl = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${fmpApiKey}`;

      if (!fmpApiUrl) {
        console.error("FMP API key is not set in the environment variables");
      }
      const response = await axios.get(fmpApiUrl);
      const company: StockData = response.data[0];
      // console.log(response.data[0]);

      data.value.push(company);
      // console.log(data);
    }
  } catch (error) {
    console.error("Error fetching stock data:", error);
  }
});
</script>

<template>
  <main class="container">
    <div>
      <ul class="stock-wrapper">
        <li>Vinst per aktie(EPS)</li>
        <li>Pris per vinstenhet(PE)</li>
        <li>Senast</li>
      </ul>
      <ul v-if="data.length">
        <li v-for="(item, index) in data" :key="index">
          <ul class="stock-wrapper">
            <li>{{ item.name }}</li>
            <li>{{ item.eps }}</li>
            <li>{{ item.pe }}</li>
            <li>{{ item.previousClose }}</li>
          </ul>
        </li>
      </ul>
      <p v-else>Loading...</p>
    </div>
  </main>
</template>

<style>
.container {
  margin: 0;
  /* height: 100vh; */
  color: var(--color-black);
}

.stock-wrapper {
  display: flex;
  list-style: none;
}

@media (min-width: 1024px) {
}
</style>
