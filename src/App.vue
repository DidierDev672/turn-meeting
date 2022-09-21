<script setup>
import Header from "./container/Header.vue"
</script>

<template>
<Header />
<router-view></router-view>
</template>

<script>
import User from "./global/index";
import { auth } from "./api/firebase";
import { onAuthStateChanged } from "firebase/auth";
export default {
  name: "app",

  created(){
    onAuthStateChanged(auth,(user) => {
      User.userUid = user.uid;
    });
  }
}
</script>

<style>
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #212529;
}
</style>
