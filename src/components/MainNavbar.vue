<template>
  <nav>
    <section :class="{ 'dark-mode': isLightMode }" class="top-nav">
      <div id="main-logo">
        <img
          id="logoD"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Drake_Bulldogs_%22D%22_logo.svg/1113px-Drake_Bulldogs_%22D%22_logo.svg.png"
          alt="logo"
          width="25"
          height="25"
        />
        <div id="logo">Doitfy</div>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <ul class="menu">
        <li>
          <n-space>
            <n-switch v-model:value="isLightMode" size="large">
              <template #icon> 🌓 </template>
            </n-switch>
          </n-space>
        </li>
        <li>
          <n-button
            class="justify-center text-white bg-gradient-to-br from-indigo-800 to-indigo-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-indigo-200 dark:focus:ring-indigo-800"
          >
            <router-link to="/"> Home </router-link></n-button
          >
        </li>
        <li>
          <n-button
            type="button"
            class="content-center justify-center text-white bg-gradient-to-br from-rose-800 to-rose-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-rose-200 dark:focus:ring-rose-800 font-medium rounded-lg"
            @click="signOutAction"
          >
            Log out</n-button
          >
        </li>
      </ul>
    </section>
  </nav>
</template>

<script>
import { NButton, NSwitch, NSpace } from "naive-ui";
export let isLightMode;
import { store } from "../stores/UserStore.js";

export default {
  name: "MainNavbar",

  export: { isLightMode },

  components: {
    NButton,
    NSwitch,
    NSpace,
  },
  setup() {
    const signOut = () => {
      // dispatch the sign out action to log user out
      store.dispatch("signOutAction");
    };

    return {
      signOut,
    };
  },
  data() {
    return {
      active: "",
      isLightMode: false,

      methods: {
        lightMode() {
          this.isLightMode = true;
        },
      },
    };
  },

  async created() {
    this.signOut();
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway);

h2 {
  vertical-align: center;
  text-align: center;
}
npm html,
body {
  margin: 0;
  height: 100%;
}

* {
  font-family: "Raleway";
  box-sizing: border-box;
}
#main-logo {
  display: flex;
  flex-direction: row;
}
#logo {
  font-size: large;
  padding-left: 15px;
}

#logoD {
  display: flex;
}
a {
  color: white;
}

.menu li {
  display: flex;
  align-items: center;
}

a:hover {
  color: #495aee;
  font-weight: bold;
  transition: all 0.5s;
}

a:active {
  color: #4954ee;
}

nav {
  display: unset;
}
.top-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #1f2937;
  color: #fff;
  height: 55px;
  padding: 2em;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 1px 1px 1px 1px #ddd;
  position: fixed;
}

.dark-mode {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to left, black, #06293a);
  color: #fff;
  height: 55px;
  padding: 2em;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 1px 1px 1px 1px #ddd;
  position: fixed;
}

.menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu > li {
  margin: 0 1rem;
  overflow: hidden;
}

.menu-button-container {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: #fff;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}

.menu-button::before {
  content: "";
  margin-top: -8px;
}

.menu-button::after {
  content: "";
  margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}

@media (max-width: 700px) {
  .menu-button-container {
    display: flex;
  }
  .menu {
    position: absolute;
    top: 0;
    margin-top: 50px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  #menu-toggle ~ .menu li {
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  #menu-toggle:checked ~ .menu li {
    border: 1px solid #072ac857;
    height: 4.5em;
    padding: 0.5em;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    align-items: center;
  }
  .menu > li {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.5em 0;
    width: 100%;
    background: linear-gradient(to left, #a6e1fc, white);
    z-index: 9;
    backdrop-filter: blur(1px);
    color: black;
  }

  .dark-mode .menu > li {
    background: linear-gradient(to left, black, #08415b);
  }

  .dark-mode #menu-toggle:checked ~ .menu li {
    border: 1px solid #101a49b4;
    height: 4.5em;
    padding: 0.5em;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    align-items: center;
  }

  .menu > li:not(:last-child) {
    border-bottom: 1px solid #444;
  }
}
</style>
