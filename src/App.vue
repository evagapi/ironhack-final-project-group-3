<template>
  <MainNavbar />
  <n-message-provider>
    <router-view />
  </n-message-provider>
</template>

<script setup>
import MainNavbar from "./components/MainNavbar.vue";
import { NMessageProvider } from "naive-ui";
</script>
