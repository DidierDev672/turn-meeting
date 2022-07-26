<script setup>
import Header from "./container/Header.vue"
</script>

<template>
<Header />
<router-view></router-view>
</template>

<style>
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #212529;
}
</style>
