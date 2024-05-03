<script setup lang="ts">
import {defineProps} from "vue";

interface Props {
  color: 'green' | 'red',
  items: string[][]
}

const props = defineProps<Props>();
</script>

<template>

  <tr class="stock-book-list__row" v-for="[price, quantity] in props.items" :key="price">
    <td class="stock-book-list__price stock-book-list__cell" :class="props.color">{{ Number(price) }}</td>

    <td class=" stock-book-list__cell">{{ quantity }}</td>

    <td class="stock-book-list__sum stock-book-list__cell">{{ (+price * +quantity).toFixed(5) }}</td>
  </tr>

</template>

<style scoped lang="scss">
.stock-book-list {
  &__row{
    font-size: 12px;
  }
  &__cell {
    text-align: center;
  }
  &__price{
    text-align: left;
    &.red{
      color: rgb(246, 70, 93);
    }
    &.green{
      color: rgb(14, 203, 129);
    }
  }
  &__sum{
    @media (max-width: $bp-mobile) {
      display: none;
    }
  }
}
</style>