<template>
  <div class="pb-16 bg-blueGray-200 relative pt-5">
    <div class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20">
      <svg class="absolute bottom-0 overflow-hidden" viewBox="0 0 2560 100">
        <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
    <div
      class="flex flex-wrap container mx-auto justify-center shadow-xl rounded-lg py-16 px-12 relative z-5 flex-col items-center"
    >
      <h3 class="font-semibold text-3xl">Start using Doitfy now!</h3>
      <p
        class="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4 text-center"
      >
        Cause if you do, you will do more in less. Hit the button below to
        navigate to get the Free version for your our app. Start using all our
        features!
      </p>
      <router-link to="/login">
        <button
          class="mt-5 content-center justify-center text-white bg-gradient-to-br from-rose-800 to-rose-400 hover:bg-gradient-to-bl focus:ring-8 focus:outline-none focus:ring-rose-200 dark:focus:ring-rose-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Get Started
        </button>
      </router-link>
    </div>
  </div>

  <div class="container mx-auto px-4 pt-10 pb-10 bg-white">
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

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Eva Garcia",
          title: "Does stuff",
          picture:
            "https://scr.wfcdn.de/21565/Imgur-Memes-des-Jahrzehnts-1579171161-0-11.jpg",
        },
        {
          name: "Hyunji Yang",
          title: "Does stuff",
          picture:
            "https://scr.wfcdn.de/21565/Imgur-Memes-des-Jahrzehnts-1579171161-0-11.jpg",
        },
        {
          name: "Alejo Cereto",
          title: "Does stuff!",
          picture:
            "https://i.pinimg.com/originals/af/55/09/af550933086c43868d53f01b745605dd.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway);
* {
  font-family: "Raleway";
}
</style>
