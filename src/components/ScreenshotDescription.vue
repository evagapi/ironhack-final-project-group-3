<template>
  <section class="bg-slate-100">
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

        <div class="w-full md:w-6/12 mr-auto px-10 pt-24 md:pt-0 mr-0">
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
