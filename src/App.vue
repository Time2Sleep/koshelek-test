<script setup lang="ts">
import MainHeader from "@/components/ui/MainHeader.vue";
</script>

<template>
  <MainHeader/>
  <div class="main-layout">
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.main-layout {
  width: 100%;
  height: 100%;
}
</style>