<template>
  <section class="pb-20 relative block bg-slate-100">
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
          class="text-slate-100 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <section class="pb-1 bg-slate-100 -mt-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div
                class="px-4 py-5 flex-auto transition delay-150 duration-300 ease-in-out hover:shadow-2xl"
              >
                <div
                  class="text-xl text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-amber-500"
                >
                  📅
                </div>
                <h6 class="text-xl font-semibold">Track your tasks</h6>
                <p class="mt-2 mb-4 text-gray-600">
                  Add new tasks, edit existing, and mark them when complete
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-4/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div
                class="px-4 py-5 flex-auto transition delay-150 duration-300 ease-in-out hover:shadow-2xl"
              >
                <div
                  class="text-xl text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                >
                  🫰
                </div>
                <h6 class="text-xl font-semibold">Drag and drop</h6>
                <p class="mt-2 mb-4 text-gray-600">
                  Drag your tasks easly around the board, tracking has never
                  been this easy
                </p>
              </div>
            </div>
          </div>
          <div class="pt-6 w-full md:w-4/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div
                class="px-4 py-5 flex-auto transition delay-150 duration-300 ease-in-out hover:shadow-2xl"
              >
                <div
                  class="text-xl text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                >
                  🏷️
                </div>
                <h6 class="text-xl font-semibold">Store and save</h6>
                <p class="mt-2 mb-4 text-gray-600">
                  Register and login using your email and save your tasks
                  forever
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway);

* {
  font-family: "Raleway";
}
</style>
