<template>
  <div>
    <MainNavbar></MainNavbar>
  </div>
  <LandingPage></LandingPage>
  <div>
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";
import MainNavbar from "./MainNavbar.vue";
import LandingPage from "./LandingPage.vue";
export default { components: { TodoList, MainNavbar, LandingPage } };
</script>
