<template>
  <n-config-provider preflight-style-disabled :theme-overrides="themeOverrides">
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

const themeOverrides = {
  common: {
    primaryColor: "#434190",
    primaryColorHover: "#5a598f",
    primaryColorPressed: "#39368f",
    primaryColorSuppl: "#39368f",

    infoColor: "#be185d",
    infoColorHover: "#bf3d74",
    infoColorPressed: "#bf0854",
    infoColorSuppl: "#bf0854",

    successColor: "#434190",
    successColorHover: "#5a598f",
    successColorPressed: "#39368f",
    successColorSuppl: "#39368f",

    errorColor: "#be185d",
    errorColorHover: "#bf326d",
    errorColorPressed: "#bf0854",
    errorColorSuppl: "#bf0854",
  },
};
</script>
