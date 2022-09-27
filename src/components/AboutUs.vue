<template>
  <section class="pt-20 pb-18 bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center text-center mb-14">
        <div class="w-full lg:w-6/12 px-4">
          <h2 class="text-4xl font-semibold">The 3 of us</h2>
          <p class="text-lg leading-relaxed m-4 text-gray-600">This is us</p>
        </div>
      </div>
      <div class="flex flex-wrap justify-center">
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div class="px-6">
            <img
              alt="..."
              src="https://scr.wfcdn.de/21565/Imgur-Memes-des-Jahrzehnts-1579171161-0-11.jpg"
              class="shadow-lg rounded-full max-w-full mx-auto"
              style="max-width: 120px"
            />
            <div class="pt-6 text-center">
              <h5 class="text-xl font-bold">Eva Garcia</h5>
              <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Does stuff
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div class="px-6">
            <img
              alt="..."
              src="https://scr.wfcdn.de/21565/Imgur-Memes-des-Jahrzehnts-1579171161-0-11.jpg"
              class="shadow-lg rounded-full max-w-full mx-auto"
              style="max-width: 120px"
            />
            <div class="pt-6 text-center">
              <h5 class="text-xl font-bold">Hyunji Yang</h5>
              <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Does stuff
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div class="px-6">
            <img
              alt="..."
              src="https://i.pinimg.com/originals/af/55/09/af550933086c43868d53f01b745605dd.jpg"
              class="shadow-lg rounded-full max-w-full mx-auto"
              style="max-width: 120px"
            />
            <div class="pt-6 text-center">
              <h5 class="text-xl font-bold">Alejo Cereto</h5>
              <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                Does stuff
              </p>
            </div>
          </div>
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
