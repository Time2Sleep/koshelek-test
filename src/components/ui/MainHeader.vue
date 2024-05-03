<script setup lang="ts">
import MainLogo from "@/components/ui/MainLogo.vue";
import MainNav from "@/components/ui/MainNav.vue";
import {ref} from "vue";

const isNavShown = ref<boolean>(false);
</script>

<template>
  <header class="header">
    <MainLogo class="header__logo"/>

    <div class="header__nav" :class="{'visible': isNavShown}" @click="isNavShown = false">
      <MainNav/>
    </div>


    <div class="header__burger" :class="{'active': isNavShown}" @click="isNavShown = !isNavShown"></div>
  </header>

  <div class="header-spacing"></div>
</template>

<style scoped lang="scss">
.header-spacing{
  height: 100px;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  background: white;
  border-bottom: thin solid var(--color-border);

  &__logo {
    margin-right: auto;
  }

  &__burger {
    width: 50px;
    height: 50px;
    display: none;
    padding: 15px 10px;

    &:before, &:after{
      content: '';
      display: block;
      height: 3px;
      border-radius: 2px;
      background: black;
      width: 100%;
      transition: transform 0.3s ease-in-out;
    }

    &.active{
      &:before {
        transform: translateY(5px) rotate(135deg);
      }
      &:after {
        transform: translateY(-5px) rotate(-135deg);
      }
    }

    @media (max-width: $bp-mobile) {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }

  &__nav {
    @media (max-width: $bp-mobile) {
      position: absolute;
      top: 100%;
      left: 0;
      z-index: -1;
      width: 100%;
      transition: max-height .3s ease-in-out;
      max-height: 0;
      border-bottom: thin solid var(--color-border);
      overflow: hidden;
      box-sizing: border-box;

      &.visible{
        max-height: 200px;
      }
    }
  }
}
</style>