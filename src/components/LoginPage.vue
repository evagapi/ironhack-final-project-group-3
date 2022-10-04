<!-- eslint-disable max-lines -->
<template>
  <div v-if="!visible">
    <section
      class="bg-gray-50 dark:bg-gray-900 flex min-h-full min-w-full items-center justify-center flex-row h-full"
    >
      <div
        class="flex items-center justify-center px-2 py-2 mx-auto md:h-screen lg:py-0 flex-row"
      >
        <div
          class="flex w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700 flex-row flex-wrap"
        >
          <div
            class="flex p-6 space-y-4 md:space-y-6 sm:p-8 flex-auto flex-wrap pr-45 justify-center justify-items-center content-center"
          >
            <div class="w-full max-w-md space-y-8">
              <div>
                <img
                  class="mx-auto h-12 w-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Drake_Bulldogs_%22D%22_logo.svg/1113px-Drake_Bulldogs_%22D%22_logo.svg.png"
                  alt="Your Company"
                />
                <h2
                  class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-200"
                >
                  Sign in to your account
                </h2>
              </div>
              <form class="mt-8 space-y-6" @submit.prevent="handleSignin">
                <div class="-space-y-px rounded-md shadow-sm">
                  <div>
                    <label for="email-address" class="sr-only"
                      >Email address</label
                    >
                    <input
                      id="email-address"
                      v-model="email"
                      type="email"
                      autocomplete="email"
                      required=""
                      class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-rose-500 focus:outline-none focus:ring-rose-500 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label for="password" class="sr-only">Password</label>
                    <input
                      id="password"
                      v-model="password"
                      type="password"
                      autocomplete="current-password"
                      required=""
                      class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-rose-500 focus:outline-none focus:ring-rose-500 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-rose-400 focus:ring-rose-500"
                    />
                    <label
                      for="remember-me"
                      class="ml-2 block text-sm text-gray-200"
                      >Remember me</label
                    >
                  </div>

                  <div class="text-sm">
                    <a
                      href="#"
                      class="font-medium text-rose-300 hover:text-rose-400"
                      >Forgot your password?</a
                    >
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    class="group relative flex w-full justify-center rounded-md border border-transparent bg-rose-500 py-2 px-4 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                  >
                    <span
                      class="absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                    </span>
                    Sign in
                  </button>

                  <div class="relative flex my-5 items-center">
                    <div class="flex-grow border-t border-gray-400"></div>
                    <span class="flex-shrink mx-4 text-gray-400">Or</span>
                    <div class="flex-grow border-t border-gray-400"></div>
                  </div>

                  <button
                    type="button"
                    class="group relative flex w-full justify-center rounded-md border border-transparent bg-violet-500 py-2 px-4 text-sm font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 mt-5"
                    @click="visible = !visible"
                  >
                    <span
                      class="absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                    </span>
                    Not Registered Yet?
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div
    v-if="visible"
    class="bg-gray-50 dark:bg-gray-900 flex min-h-full min-w-full items-center justify-center flex-row h-full"
  >
    <RegisterPage></RegisterPage>
  </div>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase";
import RegisterPage from "./RegisterPage.vue";

export default {
  components: {
    RegisterPage,
  },

  setup() {
    const email = ref("");
    const password = ref("");

    const handleSignin = async () => {
      try {
        // Use the Supabase provided method to handle the signin
        const { error } = await supabase.auth.signIn({
          email: email.value,
          password: password.value,
        });
        if (error) throw error;
      } catch (error) {
        alert(error.error_description || error.message);
      }
    };

    return {
      email,
      password,
      handleSignin,
    };
  },

  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style scoped>
template {
  background-color: #111827;
}
</style>
