<template>
  <div>
    <MainNavbar></MainNavbar>
  </div>
  <div>
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";
import MainNavbar from "./MainNavbar.vue";
export default { components: { TodoList, MainNavbar } };
</script>
