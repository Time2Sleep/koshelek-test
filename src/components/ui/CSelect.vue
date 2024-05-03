<script setup lang="ts">
import {computed, defineEmits, defineProps} from "vue";

interface Props {
  label?: string,
  modelValue: any,
  items: any[]
}

interface Emits {
  (e: 'update:modelValue', value: any): void
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const model = computed({
  get: () => props.modelValue,
  set: (newValue: any) => {
    emits('update:modelValue', newValue);
  }
});
</script>

<template>
  <v-select
      class="c-select"
      v-model="model"
      :label="props.label"
      :items="props.items"
  />
</template>

<style scoped lang="scss">
.c-select {
  width: 100%;
  max-width: 400px;

  @media (max-width: $bp-mobile) {
    max-width: 100%;
  }

}
</style>