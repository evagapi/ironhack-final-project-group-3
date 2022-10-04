<template>
  <!-- Check if user is available in the store, if not show auth compoenent -->
  <AuthPage v-if="!store.state.user" />
  <!-- If user is available, show the component -->
  <TodoList v-else msg="Logged in!" />
</template>

<script>
import AuthPage from "./components/AuthPage.vue";
import TodoList from "./components/TodoList.vue";

import { store } from "./stores/UserStore";
import { supabase } from "./supabase";

export default {
  components: {
    TodoList,
    AuthPage,
  },
  setup() {
    // we initially verify if a user is logged in with Supabase
    store.state.user = supabase.auth.user();
    // we then set up a listener to update the store when the user changes either by logging in or out
    supabase.auth.onAuthStateChange((event, session) => {
      if (event == "SIGNED_OUT") {
        store.state.user = null;
      } else {
        store.state.user = session.user;
      }
    });

    return {
      store,
    };
  },
};
</script>

<style></style>
