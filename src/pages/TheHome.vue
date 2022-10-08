<template>
  <div><LandingHero></LandingHero></div>
  <div><LandingFeatures></LandingFeatures></div>
  <div><LandingScreenshot></LandingScreenshot></div>
  <div><AboutUs></AboutUs></div>
</template>

<script setup>
import { onMounted } from "vue";

import LandingHero from "../components/LandingHero.vue";
import LandingFeatures from "../components/LandingFeatures.vue";
import LandingScreenshot from "../components/LandingScreenshot.vue";
import AboutUs from "../components/AboutUs.vue";

import { useUserStore } from "../stores/UserStore";
import router from "../router";

const { auth } = useUserStore();

onMounted(() => {
  if (auth.user) {
    router.push({ name: "dashboard" });
  }
});
</script>
