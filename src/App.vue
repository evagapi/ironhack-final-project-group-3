<template>
  <n-message-provider>
    <TheHome />
  </n-message-provider>
</template>

<script>
import { NMessageProvider } from "naive-ui";
import TheHome from "./components/TheHome.vue";
export default {
  components: { TheHome, NMessageProvider },
};
</script>
