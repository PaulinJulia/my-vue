<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import axios from "axios";
const fmpApiKey = import.meta.env.VITE_APP_FMP_KEY as string;

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

const exchange = ["STO"];
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
  <div class="container">
    <div class="title-wrapper">
      <p class="title">Pris/Vinstkrona</p>
      <p class="title">Pris</p>
      <p class="title">Årshögst</p>
      <p class="title">Årslägst</p>
    </div>
    <div v-if="data.length">
      <ul
        v-for="(item, index) in data.slice(0, visibleItems)"
        :key="index"
        class="stock-wrapper"
        @click="handleClickedItem(item.name)"
      >
        <li class="item-name">{{ item.name }}</li>
        <li class="item">{{ item.pe }}</li>
        <li class="item">{{ item.price }}</li>
        <li class="item">{{ item.yearHigh }}</li>
        <li class="item">{{ item.yearLow }}</li>
      </ul>
    </div>
    <p v-else>Loading...</p>
  </div>
</template>

<style scoped>
.container {
  margin: 0 2rem 5rem 2rem;
}
.title-wrapper {
  display: flex;
  padding: 0 2rem;
  justify-content: end;
}
.title-wrapper > p {
  padding: 0 1rem;
}
.stock-wrapper {
  border: 1px solid var(--color-grey);
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-name {
  text-transform: uppercase;
  font-weight: bold;
  /* flex: 1; */
}
.stock-wrapper > li {
  padding: 0.5rem;
  text-align: right;
  margin-left: 1rem;
}
</style>
