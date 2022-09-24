<template>
  <div
    class="relative pt-16 pb-32 flex content-center items-center justify-center"
    style="min-height: 75vh"
  >
    <div
      class="absolute top-0 w-full h-full bg-center bg-cover"
      style="
        background-image: url('https://i.pinimg.com/originals/5e/ee/c1/5eeec15ea8beb9bb0ad2c1246f517c8f.gif');
      "
    >
      <span
        id="blackOverlay"
        class="w-full h-full absolute opacity-75 bg-black"
      ></span>
    </div>
    <div class="mt-8 container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div class="justify-items-center content-center p-10">
            <h1
              class="text-white font-semibold font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600"
            >
              Doitify
            </h1>
            <h2 class="text-white font-semibold text-4xl">
              Beat your busy life
            </h2>

            <p class="mt-4 text-lg text-gray-300">
              Discover tools to plan your day and focus on the right tasks at
              the right time
            </p>
            <p class="mt-4 text-lg text-gray-300">
              Achieve your goals, track your progress, get things done
            </p>
          </div>
        </div>

        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div class="container mx-auto flex flex-col items-center">
            <form
              class="my-12 shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg"
            >
              <h2
                class="font-medium leading-tight text-2xl mt-0 mb-2 text-grey-600 mt-2 mb-4 p-3"
              >
                Start doing more now
              </h2>

              <!-- Section 2  <button
                  type="button"
                  class="w-full content-center justify-center text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                >
                  <svg
                    class="mr-2 -ml-1 w-4 h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                    ></path>
                  </svg>
                  Continue with Facebook
                </button>
  
                <button
                  type="button"
                  class="w-full content-center justify-center text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2"
                >
                  <svg
                    class="mr-2 -ml-1 w-4 h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
                    ></path>
                  </svg>
                  Continue with Twitter
                </button>
  
                <button
                  type="button"
                  class="w-full content-center justify-center text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                >
                  <svg
                    class="mr-2 -ml-1 w-4 h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                  Continue with Google
                </button>
  -->
              <button
                type="button"
                class="w-full content-center justify-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                ✉️ Continue with Email login
              </button>

              <a class="text-blue-400 text-center my-2">Forgot Pasword?</a>
              <hr />
              <button
                class="w-full mt-5 content-center justify-center text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Create New Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div
      class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
      style="height: 70px; transform: translateZ(0px)"
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
        <polygon
          class="text-gray-300 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
  </div>
  <section class="pb-20 relative block bg-blue-100">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px; transform: translateZ(0px)"
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
        <polygon
          class="text-blue-100 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>

    <!-- Section 2 -->

    <section class="pb-20 bg-blue-100 -mt-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                >
                  📅
                  <i class="fas fa-award"></i>
                </div>
                <h6 class="text-xl font-semibold">Track your tasks</h6>
                <p class="mt-2 mb-4 text-gray-600">
                  Responsive app so cool yum I love it
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-4/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                >
                  🫰
                  <i class="fas fa-retweet"></i>
                </div>
                <h6 class="text-xl font-semibold">Drag and drop</h6>
                <p class="mt-2 mb-4 text-gray-600">
                  Drag and drop feature so cool you can drag and drop.
                </p>
              </div>
            </div>
          </div>
          <div class="pt-6 w-full md:w-4/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
                >
                  🏷️
                  <i class="fas fa-fingerprint"></i>
                </div>
                <h6 class="text-xl font-semibold">Filters and tags</h6>
                <p class="mt-2 mb-4 text-gray-600">
                  I hope we can have filters and tags soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Carousel Section -->

    <section class="pb-20 bg-blue-100 -mt-24 pt-10">
      <n-carousel
        :slides-per-view="3"
        :space-between="20"
        :loop="false"
        draggable
      >
        <img
          class="carousel-img"
          src="https://i.pinimg.com/originals/43/e6/dc/43e6dc00e1c74610627683db109ebbcb.gif"
        />
        <img
          class="carousel-img"
          src="https://i.pinimg.com/originals/06/5e/2c/065e2c34e99b072752477a6b58415b60.gif"
        />
        <img
          class="carousel-img"
          src="https://i.pinimg.com/originals/da/59/5f/da595f9463a8732c6afe522e6bb76746.gif"
        />

        <img
          class="carousel-img"
          src="https://i.pinimg.com/originals/43/e6/dc/43e6dc00e1c74610627683db109ebbcb.gif"
        />

        <img
          class="carousel-img"
          src="https://i.pinimg.com/originals/06/5e/2c/065e2c34e99b072752477a6b58415b60.gif"
        />
      </n-carousel>
    </section>

    <!-- Section 3 -->

    <div class="container mx-auto px-2 lg:pt-08 lg:pb-05">
      <div class="flex flex-wrap text-center justify-center">
        <div class="w-full lg:w-6/12 px-4">
          <h2 class="text-4xl font-semibold text-black">
            Doitfy will change your life
          </h2>
          <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
            It changed my life bla bla Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Non quam odit qui veritatis fuga facilis eos.
            Eveniet, harum suscipit? Ullam facere optio fugit quaerat doloribus
            numquam dolore, incidunt odit suscipit.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section About us -->
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
import { NCarousel } from "naive-ui";
export let isLightMode;

export default {
  name: "MainNavbar",

  export: { isLightMode },

  components: {
    NCarousel,
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway);

* {
  font-family: "Raleway";
}

.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
.svg-icon {
  width: 1em;
  height: 1em;
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
  fill: #4691f6;
}

.svg-icon circle {
  stroke: #4691f6;
  stroke-width: 1;
}
</style>
