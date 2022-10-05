<template>
  <MainNavbar />
  <n-loading-bar-provider>
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-loading-bar-provider>
</template>

<script setup>
import MainNavbar from "./components/MainNavbar.vue";
import { NMessageProvider, NLoadingBarProvider } from "naive-ui";
</script>
