<!-- eslint-disable max-lines -->
<template>
  <section
    class="bg-gray-50 dark:bg-gray-900 flex min-h-full min-w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 flex-row"
  >
    <div
      class="flex items-center justify-center px-2 py-2 mx-auto md:h-screen lg:py-0 flex-row"
    >
      <div
        class="flex w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700 flex-row flex-wrap"
      >
        <div
          class="flex p-6 space-y-4 md:space-y-6 sm:p-8 flex-auto flex-wrap justify-center justify-items-center content-center"
        >
          <form class="space-y-4 md:space-y-6" @submit.prevent="handleSignup">
            <img
              class="mx-auto h-12 w-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Drake_Bulldogs_%22D%22_logo.svg/1113px-Drake_Bulldogs_%22D%22_logo.svg.png"
              alt="Your Company"
            />
            <h1
              class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-200"
            >
              Create new account
            </h1>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                id="email"
                v-model="email"
                type="email"
                name="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@email.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                id="password"
                v-model="password"
                type="password"
                name="password"
                placeholder="Create password"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>

            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div class="ml-3 text-sm">
                <label
                  for="terms"
                  class="font-light text-gray-500 dark:text-gray-300"
                  >I accept the
                  <a
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                    >Terms and Conditions</a
                  ></label
                >
                <div>
                  <button
                    type="submit"
                    class="group relative flex w-full justify-center rounded-md border border-transparent bg-violet-500 py-2 px-4 text-sm font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 mt-5"
                  >
                    <span
                      class="absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                    </span>
                    Register
                  </button>
                  <div class="relative flex my-5 items-center">
                    <div class="flex-grow border-t border-gray-400"></div>
                    <span class="flex-shrink mx-4 text-gray-400">Or</span>
                    <div class="flex-grow border-t border-gray-400"></div>
                  </div>

                  <router-link to="/app">
                    <button
                      type="button"
                      class="group relative flex w-full justify-center rounded-md border border-transparent bg-rose-500 py-2 px-4 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                    >
                      <span
                        class="absolute inset-y-0 left-0 flex items-center pl-3"
                      >
                      </span>
                      Already a member?
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const handleSignup = async () => {
      try {
        // Use the Supabase provided method to handle the signup
        const { error } = await supabase.auth.signUp({
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
      handleSignup,
    };
  },
};
</script>
