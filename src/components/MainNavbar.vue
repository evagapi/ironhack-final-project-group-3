<template>
  <nav class="top-nav">
    <router-link to="/" class="main-logo">
      <img
        id="logoD"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Drake_Bulldogs_%22D%22_logo.svg/1113px-Drake_Bulldogs_%22D%22_logo.svg.png"
        alt="logo"
        width="25"
        height="25"
      />
      <div id="logo">Doitfy</div>
    </router-link>

    <ul class="menu">
      <li>
        <n-button v-if="auth.user" type="error" strong @click="logOut">
          Log out</n-button
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { NButton } from "naive-ui";
import router from "../router";

import { useUserStore } from "../stores/UserStore";

const { auth, signOut } = useUserStore();

const logOut = async () => {
  await signOut();
  router.push({ name: "home" });
};
</script>

<style scoped>
.main-logo {
  display: flex;
  flex-direction: row;
}

#logo {
  font-size: large;
  padding-left: 15px;
}

nav {
  display: unset;
}
.top-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to left, black, #06293a);
  color: #fff;
  height: 55px;
  padding: 1em;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 1px 1px 1px 1px #ddd;
}
</style>
