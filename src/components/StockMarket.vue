<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import axios from "axios";
const fmpApiKey = import.meta.env.VITE_APP_FMP_KEY as string;

const exchange = ["STO"];

interface StockData {
  avgVolume: number;
  change: number;
  changesPercentage: number;
  dayHigh: number;
  dayLow: number;
  earningsAnnouncement: string | null;
  eps: number | null;
  exchange: string;
  marketCap: number;
  name: string;
  open: number;
  pe: number | null;
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
const visibleItems = ref(20);

const handleClickedItem = (name: string) => {
  console.log("klickad", name);
};

const loadMoreItems = () => {
  visibleItems.value += 10;
};

const handleScroll = () => {
  const bottomOfWindow =
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
  if (bottomOfWindow) {
    loadMoreItems();
  }
};

onMounted(async () => {
  try {
    const fmpApiUrl = `https://financialmodelingprep.com/api/v3/symbol/${exchange}?&apikey=${fmpApiKey}`;

    if (!fmpApiUrl) {
      console.error("FMP API error");
    }
    const response = await axios.get(fmpApiUrl);
    // console.log(response.data);

    response.data.forEach((item: StockData) => {
      data.value.push({
        avgVolume: item.avgVolume,
        change: item.change,
        changesPercentage: item.change,
        dayHigh: item.dayHigh,
        dayLow: item.dayLow,
        earningsAnnouncement: item.earningsAnnouncement,
        eps: item.eps,
        exchange: item.exchange,
        marketCap: item.marketCap,
        name: item.name,
        open: item.open,
        pe: item.pe,
        previousClose: item.previousClose,
        price: item.price,
        priceAvg50: item.priceAvg50,
        priceAvg200: item.priceAvg200,
        sharesOutstanding: item.sharesOutstanding,
        symbol: item.symbol,
        timestamp: item.timestamp,
        volume: item.volume,
        yearHigh: item.yearHigh,
        yearLow: item.yearLow,
      });
    });
    window.addEventListener("scroll", handleScroll);
    // console.log(data);
  } catch (error) {
    console.error("Error fetching stock data:", error);
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div>
    <div class="title-wrapper">
      <p>Pris/Vinstkrona</p>
      <p>Pris</p>
      <p>Årshögst</p>
      <p>Årslägst</p>
    </div>
    <div v-if="data.length">
      <ul
        v-for="(item, index) in data.slice(0, visibleItems)"
        :key="index"
        class="stock-item"
        @click="handleClickedItem(item.name)"
      >
        <li>{{ item.name }}</li>
        <li>{{ item.pe }}</li>
        <li>{{ item.price }}</li>
        <li>{{ item.yearHigh }}</li>
        <li>{{ item.yearLow }}</li>
      </ul>
    </div>
    <p v-else>Loading...</p>
  </div>
</template>

<style scoped>
.title-wrapper {
  display: flex;
  padding: 0 2rem;
}
.title-wrapper > p {
  padding: 0 1rem;
}
.stock-item {
  border-bottom: 2px solid blue;
  list-style: none;
  display: flex;
  padding: 1rem;
}
.stock-item > li {
  padding: 0 1rem;
}
</style>
