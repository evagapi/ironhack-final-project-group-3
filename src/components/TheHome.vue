<template>
  <div>
    <MainNavbar></MainNavbar>
  </div>

  <div>
    <LandingHero> </LandingHero>
    <MainFeatures></MainFeatures>
    <ScreenshotDescription></ScreenshotDescription>
    <ActionCall></ActionCall>
    <AboutUs></AboutUs>
  </div>

  <div>
    <LoginRegister></LoginRegister>
  </div>

  <div>
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";
import MainNavbar from "./MainNavbar.vue";
import LandingHero from "./LandingHero.vue";
import MainFeatures from "./MainFeatures.vue";
import ScreenshotDescription from "./ScreenshotDescription.vue";
import ActionCall from "./ActionCall.vue";
import AboutUs from "./AboutUs.vue";
import LoginRegister from "./LoginRegister.vue";

export default {
  components: {
    TodoList,
    MainNavbar,
    LandingHero,
    MainFeatures,
    ScreenshotDescription,
    ActionCall,
    AboutUs,
    LoginRegister,
  },
};
</script>
