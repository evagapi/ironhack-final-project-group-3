<template>
  <MainNavbar />
  <n-loading-bar-provider>
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-loading-bar-provider>
  <MainFooter />
</template>

<script setup>
import { NMessageProvider, NLoadingBarProvider } from "naive-ui";

import MainNavbar from "./components/MainNavbar.vue";
import MainFooter from "./components/MainFooter.vue";
</script>
