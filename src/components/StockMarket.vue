<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
const fmpApiKey = import.meta.env.VITE_APP_FMP_KEY as string;

const { selectedMarket } = defineProps<{
  selectedMarket: string;
}>();

const router = useRouter();

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
const searchWord = ref("");
const data = ref<StockData[]>([]);
const visibleItems = ref(20);

const searched = computed(() => {
  if (!searchWord.value) {
    return data.value;
  } else {
    return data.value.filter((stock) => {
      return (
        stock.name &&
        stock.name.toLowerCase().includes(searchWord.value.toLowerCase())
      );
    });
  }
});

const handleClickedItem = (symbol: string, exchange: string) => {
  router.push({ name: "stockinfo", params: { symbol, exchange } });
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

const fetchStockData = async () => {
  if (!selectedMarket) return;
  try {
    const fmpApiUrl = `https://financialmodelingprep.com/api/v3/symbol/${selectedMarket}?&apikey=${fmpApiKey}`;

    if (!fmpApiUrl) {
      console.error("FMP API error");
    }
    const response = await axios.get(fmpApiUrl);
    //  console.log(response.data);

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
    //  console.log(data);
  } catch (error) {
    console.error("Error fetching stock data:", error);
  }
};
fetchStockData();

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

watch(
  () => selectedMarket,
  async (newMarket, oldMarket) => {
    if (newMarket && newMarket !== oldMarket) {
      // console.log(`Market changed from ${oldMarket} to ${newMarket}`);
      data.value = []; // Rensa tidigare data
      await fetchStockData();
    }
  }
);
</script>

<template>
  <div class="search-wrapper">
    <input
      v-model="searchWord"
      type="text"
      placeholder="Namn"
      class="search-input"
    />
    <select class="list">
      <option>Lista</option>
      <option>OMXS30</option>
    </select>
  </div>
  <div class="container">
    <div class="title-wrapper">
      <p class="title-market" v-if="selectedMarket === 'JPX'">Japan(JPX)</p>
      <p class="title-market" v-else-if="selectedMarket === 'NASDAQ'">
        USA(NASDAQ)
      </p>
      <p class="title-market" v-else-if="selectedMarket === 'XETRA'">
        Tyskland(XETRA)
      </p>
      <p class="title-market" v-else>Sverige</p>
      <p class="title">Pris/Vinstkrona</p>
      <p class="title">Pris</p>
      <p class="title">Årshögst</p>
      <p class="title">Årslägst</p>
    </div>
    <div v-if="searched.length">
      <ul
        v-for="(item, index) in searched.slice(0, visibleItems)"
        :key="index"
        class="stock-wrapper"
        @click="handleClickedItem(item.symbol, item.exchange)"
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
.search-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-input {
  padding: 0.5rem;
  font-size: 0.8rem;
  margin: 1rem;
  letter-spacing: 1px;
  width: 150px;
}
.search-input:active,
.search-input:focus {
  outline: none;
}
.list,
.list > option {
  padding: 0.5rem;
  font-size: 0.8rem;
  width: 150px;
}
.list:active,
.list:focus {
  outline: none;
}
.container {
  margin: 0 2rem 5rem 2rem;
}
.title-wrapper {
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
}
.title-market {
  width: 200px;
}
.title-wrapper > p {
  padding: 0 1rem;
}
.stock-wrapper {
  border-bottom: 1px solid var(--color-grey);
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-background-grey);
}
.item-name {
  text-transform: uppercase;
  font-weight: bold;
  width: 200px;
  /* flex: 1; */
}
.stock-wrapper > li {
  padding: 0.5rem;
  text-align: right;
  margin-left: 1rem;
}
</style>
