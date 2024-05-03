<script setup lang="ts">

import {onMounted} from "vue";
import CSelect from "@/components/ui/CSelect.vue";
import {useDataStore} from "@/store/dataStore";
import {storeToRefs} from "pinia";
import {useHistoryStore} from "@/store/historyStore";

const selectItems = ['BTCUSDT', 'BNBBTC', 'ETHBTC'];

const settingsStore = useDataStore();
const historyStore = useHistoryStore();

const { currentSymbol } = storeToRefs(settingsStore);
const { fetchStockBook } = settingsStore;

const { history } = storeToRefs(historyStore);
const { saveHistory } = historyStore;
</script>

<template>
  <div>
    <c-select
      v-model="currentSymbol"
      label="Select"
      :items="selectItems"
      @update:modelValue="saveHistory"
    />

    <div>
      <v-table>
        <thead>
          <tr>
            <th>Время</th>
            <th>Валюта</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="{time, currency} in history" :key="time.getTime()">
          <td>{{ time.toLocaleDateString() }} {{time.toLocaleTimeString()}}</td>
          <td>{{currency}}</td>
        </tr>
          <template v-if="!history.length">
            <tr>
              <td colspan="2">Нет данных</td>
            </tr>
          </template>
        </tbody>
      </v-table>
    </div>

  </div>
</template>