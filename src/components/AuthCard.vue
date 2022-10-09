<template>
  <div class="my-12 shadow-lg w-80 p-4 flex flex-col bg-slate-100 rounded-lg">
    <div v-if="auth.user">
      <h2 class="font-medium leading-tight text-2xl text-grey-600 mt-2 p-2">
        Keep up the good work!
      </h2>
      <router-link :to="{ name: 'dashboard' }">
        <n-button
          class="flex w-full rounded-md text-sm font-medium mt-1"
          type="info"
          strong
          secondary
        >
          My dashboard
        </n-button>
      </router-link>
    </div>

    <div v-else>
      <h2
        class="font-medium leading-tight text-2xl text-grey-600 mt-2 mb-4 p-3"
      >
        Start doing more now
      </h2>
      <router-link to="/login">
        <button
          type="button"
          class="w-full content-center justify-center text-white bg-gradient-to-br from-indigo-800 to-indigo-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-indigo-200 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          ✉️ Continue with Email login
        </button>
      </router-link>

      <router-link to="/register">
        <button
          class="w-full mt-5 content-center justify-center text-white bg-gradient-to-br from-rose-800 to-rose-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-rose-200 dark:focus:ring-rose-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Create new account
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/UserStore";
import { NButton } from "naive-ui";

const { auth } = useUserStore();
</script>
