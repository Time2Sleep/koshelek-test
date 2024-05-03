<script setup lang="ts">

import {onBeforeUnmount, onMounted} from "vue";
import CSelect from "@/components/ui/CSelect.vue";
import {useDataStore} from "@/store/dataStore";
import {storeToRefs} from "pinia";
import StockBook from "@/components/StockBook.vue";

const selectItems = [100, 500, 1000];

const dataStore = useDataStore();
const { limit,currentSymbol } = storeToRefs(dataStore);
const { fetchStockBook, stopListen } = dataStore;

onMounted(() => {
  fetchStockBook();
});

onBeforeUnmount(() => {
  stopListen();
});
</script>

<template>
  <div  class="order-book">
    <div class="order-book__header">
      <div>{{currentSymbol}}</div>

      <c-select
          v-model="limit"
          label="Limit"
          :items="selectItems"
      />
    </div>


    <StockBook/>
  </div>
</template>

<style lang="scss" scoped>
.order-book{
  margin: 0 auto;
  width: 800px;
  @media (max-width: $bp-mobile) {
    width: 100%;
  }

  &__header{
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media (max-width: $bp-mobile) {
      flex-direction: column;
    }
  }
}
</style>