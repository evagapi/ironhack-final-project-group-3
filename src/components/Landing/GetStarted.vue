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
      <router-link to="/register">
        <button
          class="mt-5 content-center justify-center text-white bg-gradient-to-br from-rose-800 to-rose-400 hover:bg-gradient-to-bl focus:ring-8 focus:outline-none focus:ring-rose-200 dark:focus:ring-rose-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Get Started
        </button>
      </router-link>
    </div>
  </div>
</template>
