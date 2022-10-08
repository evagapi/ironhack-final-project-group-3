<template>
  <div
    class="main-full-height items-center flex justify-center flex-col-reverse lg:flex-row"
  >
    <div class="relative">
      <div class="absolute p-6">
        <h1 class="my-2 text-gray-800 font-bold text-5xl">Not Found</h1>
        <p class="my-2 text-gray-800 text-xl">
          Oops! We couldn't find that page.
        </p>
        <router-link to="/">
          <n-button type="info" class="text-black">Take me home</n-button>
        </router-link>
      </div>
      <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
    </div>
    <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
  </div>
</template>

<script setup>
import { NButton } from "naive-ui";
</script>
