<template>
  <MainNavbar />
  <n-message-provider>
    <router-view />
  </n-message-provider>
  <MainFooter />
</template>

<script setup>
import MainNavbar from "./components/MainNavbar.vue";
import { NMessageProvider } from "naive-ui";
import MainFooter from "./components/MainFooter.vue";
</script>
