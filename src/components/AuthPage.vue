<template>
  <div>
    <button
      class="group relative flex w-full justify-center border border-transparent bg-rose-500 py-2 px-4 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
      @click="isSignUp = !isSignUp"
    >
      {{
        isSignUp
          ? "Already have an account? Sign In"
          : "Don't have an account yet? Sign Up"
      }}
    </button>

    <RegisterPage v-if="isSignUp" />
    <LoginPage v-else />
  </div>
</template>

<script>
import { ref } from "vue";
import RegisterPage from "./RegisterPage.vue";
import LoginPage from "./LoginPage.vue";
export default {
  components: { RegisterPage, LoginPage },
  setup() {
    const isSignUp = ref(true);

    return {
      isSignUp,
    };
  },
};
</script>

<style scoped></style>
