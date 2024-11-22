<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
const finnhubApiKey = import.meta.env.VITE_APP_FINNHUB_KEY as string;
const fmpApiKey = import.meta.env.VITE_APP_FMP_KEY as string;

const stockSymbols = ["AAPL"];
const fromDate = 2023-10-10;
const toDate = 2023-10-10;

interface StockData {
  symbol: string;
  currentPrice: number;
  high: number;
  low: number;
  open: number;
  previousClose: number;
}
const data = ref<StockData[]>([]);

// `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${finnhubApiKey}`;
// `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?from=${fromDate}to=${toDate}&apikey=${fmpApiKey}`;

onMounted(async () => {
  try {
    for (const symbol of stockSymbols) {
      const finnhubUrl = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?from=${fromDate}&to=${toDate}&apikey=${fmpApiKey}`;

      if (!finnhubApiKey) {
        console.error(
          "Finnhub API key is not set in the environment variables"
        );
      }
      const response = await axios.get(finnhubUrl);
      console.log(response);

      data.value.push({
        symbol,
        currentPrice: response.data.c,
        high: response.data.h,
        low: response.data.l,
        open: response.data.o,
        previousClose: response.data.pc,
      });
    }
  } catch (error) {
    console.error("Error fetching stock data:", error);
  }
});

</script>

<template>
  <div>
    <h1>Fetched Stock Data</h1>
    <ul v-if="data.length">
      <li v-for="(item, index) in data" :key="index">
        <strong>{{ item.symbol }}</strong>
        <ul>
          <li>Current Price: {{ item.currentPrice }}</li>
          <li>High: {{ item.high }}</li>
          <li>Low: {{ item.low }}</li>
          <li>Open: {{ item.open }}</li>
          <li>Previous Close: {{ item.previousClose }}</li>
        </ul>
      </li>
    </ul>
    <p v-else>Loading...</p>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
