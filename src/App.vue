<template>
  <n-config-provider preflight-style-disabled>
    <MainNavbar />
    <n-loading-bar-provider>
      <n-message-provider>
        <router-view />
      </n-message-provider>
    </n-loading-bar-provider>
    <MainFooter />
  </n-config-provider>
</template>

<script setup>
import {
  NMessageProvider,
  NLoadingBarProvider,
  NConfigProvider,
} from "naive-ui";

import MainNavbar from "./components/MainNavbar.vue";
import MainFooter from "./components/MainFooter.vue";
</script>
