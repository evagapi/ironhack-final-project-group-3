<template>
  <div class="container mx-auto px-4 py-24 bg-white">
    <div class="flex flex-wrap justify-center text-center mb-14">
      <h2 class="text-4xl font-semibold">Meet the team</h2>
    </div>
    <div class="flex flex-wrap justify-center">
      <div
        v-for="item in team"
        :key="item.id"
        class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
      >
        <img
          :alt="item.name"
          :src="item.picture"
          class="shadow-lg rounded-full max-w-full mx-auto hover:scale-110"
          style="max-width: 120px"
        />
        <div class="pt-6 text-center">
          <h5 class="text-xl font-bold">{{ item.name }}</h5>
          <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
            {{ item.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const team = [
  {
    name: "Alejo Cereto",
    title: "Does stuff!",
    picture: "/images/avatar-alejo.png",
  },
  {
    name: "Eva Garcia Pinos",
    title: "JavaScript Rockstar 🦄",
    picture: "/images/avatar-eva.png",
  },
  {
    name: "Hyunji Yang",
    title: "Does stuff",
    picture: "/images/avatar-hyunji.png",
  },
];
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway);
* {
  font-family: "Raleway";
}
</style>
