<script setup lang="ts">
import { ref, onUnmounted, computed, watch, onMounted } from "vue";
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

let isScrolling = false;
const handleScroll = (event: Event) => {
  if (isScrolling) return;

  isScrolling = true;
  setTimeout(() => {
    const container = event.target as HTMLElement;
    const bottomOfContainer =
      container.scrollTop + container.clientHeight >=
      container.scrollHeight - 100;

    if (bottomOfContainer) {
      loadMoreItems();
    }

    isScrolling = false;
  }, 200);
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

    if (!Array.isArray(response.data)) {
      console.error("Invalid data format from API");
      return;
    }

    response.data.forEach((item: StockData) => {
      data.value.push(item);
    });
  } catch (error) {
    console.error("Error fetching stock data:", error);
  }
};
onMounted(() => {
  fetchStockData();
});

watch(
  () => selectedMarket,
  async (newMarket, oldMarket) => {
    if (newMarket && newMarket !== oldMarket) {
      // console.log(`Market changed from ${oldMarket} to ${newMarket}`);
      data.value = [];
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
  </div>
  <div>
    <div class="title-wrapper">
      <p class="title-market" v-if="selectedMarket === 'JPX'">Japan(JPX)</p>
      <p class="title-market" v-else-if="selectedMarket === 'NASDAQ'">
        USA(NASDAQ)
      </p>
      <p class="title-market" v-else-if="selectedMarket === 'XETRA'">
        Tyskland(XETRA)
      </p>
      <p class="title-market" v-else>Sverige(OMX)</p>
      <p class="title">Pris/Vinstkrona</p>
      <p class="title">Pris</p>
      <p class="title">Årshögst</p>
      <p class="title">Årslägst</p>
    </div>
    <div v-if="searched.length" class="scroll-container" @scroll="handleScroll">
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
.scroll-container {
  margin: 0 2rem 5rem 2rem;
  height: 900px;
  overflow-y: auto;
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
.item-name:hover {
  cursor: pointer;
  color: var(--text-color-mint);
}
.stock-wrapper > li {
  padding: 0.5rem;
  text-align: right;
  margin-left: 1rem;
}
</style>
