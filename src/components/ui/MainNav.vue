<script setup lang="ts">

</script>

<template>
  <nav class="nav">
    <router-link to="/settings" class="nav__link">Настройки</router-link>

    <router-link to="/order-book" class="nav__link">Order Book</router-link>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  display: flex;
  align-items: center;
  background: white;

  &__link {
    width: 100%;
    min-width: fit-content;
    & + & {
      margin-left: 30px;
      @media (max-width: $bp-mobile) {
        margin-left: 0;
      }
    }
    @media (max-width: $bp-mobile) {
      padding: 15px;
    }
  }

  @media (max-width: $bp-mobile) {
    padding: 20px;
    width: 100%;
    flex-direction: column;
  }
}
</style>