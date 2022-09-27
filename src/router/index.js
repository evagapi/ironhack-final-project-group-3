import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/TheHome.vue"),
    meta: {
      title: "Doitfy",
      metaTags: [
        {
          name: "Doitfy",
          content: "Do more in less time.",
        },
      ],
    },
  },

  {
    path: "/login",
    name: "login",

    component: () => import("../components/LoginRegister.vue"),
    meta: {
      title: "Login - Doitfy",
      metaTags: [
        {
          name: "Login",
          content: "Login - Doitfy.",
        },
      ],
    },
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
