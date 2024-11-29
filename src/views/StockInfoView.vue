<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
const fmpApiKey = import.meta.env.VITE_APP_FMP_KEY as string;

const { symbol, exchange } = defineProps<{
  symbol: string;
  exchange: string;
}>();

interface CompanyData {
  symbol: string;
  name: string;
  currency: string;
  stockExchange: string;
  exchangeShortName: string;
}

const companyInfo = ref<CompanyData[]>([]);

onMounted(async () => {
  try {
    const response = await axios(
      `https://financialmodelingprep.com/api/v3/search-ticker?query=${symbol}&limit=10&exchange=${exchange}&apikey=${fmpApiKey}`
    );
    if (!response)
      throw new Error("No data found for the specified stock symbol.");
    companyInfo.value = response.data;
  } catch (error) {
    console.error("Error fetching company info:", error);
  }
});
</script>

<template>
  <div v-if="companyInfo.length" class="companies">
    <div v-for="company in companyInfo" :key="company.symbol" class="company">
      <h1>Välkommen till {{ company.name }}</h1>
      <p class="text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
        deleniti accusamus animi itaque, eaque, mollitia earum nihil quae
        repellat reprehenderit illum laboriosam consequatur, perspiciatis maxime
        expedita odit suscipit cum minus.
      </p>
      <p>Symbol: {{ company.symbol }}</p>
      <p>Valuta: {{ company.currency }}</p>
      <p>Börs: {{ company.stockExchange }}</p>
      <p>Börsförkortning: {{ company.exchangeShortName }}</p>
    </div>
  </div>
  <div v-else>
    <p>Laddar...</p>
  </div>
</template>

<style scoped>
.companies {
  color: var(--color-black);
  text-align: center;
  margin: 2rem;
  min-height: 100vh;
}
.text {
  margin: 2rem;
  padding: 2rem;
}
</style>
