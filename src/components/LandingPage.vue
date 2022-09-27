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
              class="text-white font-semibold font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600 pb-5"
            >
              Doitfy
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

  <!-- Component 2 Main features -->

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

    <!-- Component 3 Screenshot and description -->

    <div class="container mx-auto px-4 pb-20 pt-18">
      <div class="items-center flex flex-wrap">
        <div class="w-full md:w-5/12 ml-auto px-12 md:px-4">
          <div class="md:pr-12">
            <h3 class="text-3xl font-semibold">
              Discover all that Doitfy has to offer
            </h3>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              maiores eveniet hic nihil, debitis autem repudiandae atque
              reprehenderit odio. Dolores ut saepe repudiandae iure doloribus
              beatae sunt rerum laudantium totam!
            </p>
            <ul class="list-none mt-6">
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span
                      class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3"
                    >
                      <i class="fas fa-fingerprint"></i>
                    </span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">
                      Built by Todo People for you people like you
                    </h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span
                      class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3"
                    >
                      <i class="fab fa-html5"></i>
                    </span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">
                      I don´t know what else to write
                    </h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span
                      class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3"
                    >
                      <i class="far fa-paper-plane"></i>
                    </span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">I like writting stuff</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
          <img
            alt="..."
            class="max-w-full rounded-lg shadow-xl"
            style="
              transform: scale(1) perspective(1040px) rotateY(-11deg)
                rotateX(2deg) rotate(2deg);
            "
            src="https://i.pinimg.com/originals/5e/ee/c1/5eeec15ea8beb9bb0ad2c1246f517c8f.gif"
          />
        </div>
      </div>
    </div>

    <!-- Component 4 Call to action -->

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

  <section class="pb-16 bg-blueGray-200 relative pt-32">
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
              href="https://i.pinimg.com/originals/5e/ee/c1/5eeec15ea8beb9bb0ad2c1246f517c8f.gif"
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

  <!-- Component 5 About us -->

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
