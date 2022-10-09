<!-- eslint-disable max-lines -->
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
              class="text-white font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-gray-50 to-gray-300 pb-5"
            >
              Doitfy
            </h1>
            <h2 class="text-white font-semibold text-4xl">
              Beat your busy life
            </h2>

            <p class="mt-4 text-xl text-gray-300">
              Discover tools to
              <span class="typed-text">{{ typeValue }}</span>
              <span class="blinking-cursor">|</span>
              <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
            </p>
          </div>
        </div>

        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div class="container mx-auto flex flex-col items-center">
            <AuthCard />
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
</template>

<script>
import AuthCard from "./AuthCard.vue";
export default {
  name: "LandingHero",
  components: { AuthCard },
  props: {},
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: [
        "plan your day",
        "focus on the right tasks",
        "achieve your goals",
        "track your progress",
        "get things done",
      ],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway);

* {
  font-family: "Raleway";
}

.blinking-cursor {
  font-size: 1.5rem;
  color: #a3bbd3;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #f3f9ff;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #cee4f7;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #d6e9ff;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #d8ecff;
  }
}
</style>
