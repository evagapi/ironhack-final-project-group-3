import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/TheHome.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../components/TodoList.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/LoginRegister.vue"),
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
