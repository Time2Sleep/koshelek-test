<script setup lang="ts">
import StockBookList from "@/components/StockBookList.vue";
import {useDataStore} from "@/store/dataStore";
import {storeToRefs} from "pinia";

const settingsStore = useDataStore();
const { limitedBids, limitedAsks, actualPrice, oldPrice } = storeToRefs(settingsStore);
</script>

<template>
  <v-card class="stock-book">
    <v-table :fixed-header="true" height="75vh">
      <thead>
        <tr class="stock-book__header">
          <th class="stock-book__th">Цена</th>
          <th class="stock-book__th">Количество</th>
          <th class="stock-book__th mobile-hidden">Всего</th>
        </tr>
      </thead>

      <tbody class="stock-book-list">
        <StockBookList :items="limitedBids" color="red"/>

        <tr>
          <td colspan="3">
            <div class="stock-book__price" :class="oldPrice > actualPrice ? 'red' : 'green'">
              {{ actualPrice }}

              <template v-if="oldPrice > actualPrice"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.03 13.92H11.03V5L13.04 4.97V13.92H17.03L12.03 18.92Z" /></svg></template>
              <template v-else><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.03 9.97H11.03V18.89L13.04 18.92V9.97H17.03L12.03 4.97Z" /></svg></template>
            </div>
          </td>
        </tr>


        <StockBookList :items="limitedAsks" color="green"/>
      </tbody>
    </v-table>
  </v-card>
</template>

<style scoped lang="scss">
.stock-book {
  width: 100%;
  overflow: auto;

  &__th {
    text-align: center !important;
  }

  &__price{
    text-align: left;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    &.red{
      color: var(--color-red);
      & svg {
        fill: var(--color-red);
      }
    }
    &.green{
      color: var(--color-green);
      & svg {
        fill: var(--color-green);
      }
    }
    & svg {
      width: 20px;
    }
  }
}
</style>