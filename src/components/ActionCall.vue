<template>
  <section class="pb-16 bg-blueGray-200 relative pt-5">
    <div
      class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
      style="transform: translateZ(0)"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>

    <div class="container mx-auto">
      <div
        class="flex flex-wrap justify-center shadow-xl rounded-lg py-16 px-12 relative z-5"
      >
        <div class="w-full text-center lg:w-8/12">
          <p class="text-4xl text-center"></p>
          <h3 class="font-semibold text-3xl">Start using Doitfy now!</h3>
          <p class="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
            Cause if you do, you will do more in less. Hit the buttons below to
            navigate to get the Free version for your our app. Start using all
            our features!
          </p>
          <div class="sm:block flex flex-col mt-10">
            <a
              href="./"
              target="_blank"
              class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-emerald-500 active:bg-emerald-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
            >
              Get started
            </a>
          </div>
          <div class="text-center mt-16"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {} from "naive-ui";
export let isLightMode;

export default {
  name: "MainNavbar",

  export: { isLightMode },

  components: {},
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway);

* {
  font-family: "Raleway";
}
</style>
