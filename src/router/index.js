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
    path: "/register",
    name: "register",
    component: () => import("../components/SingUp.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/LoginPage.vue"),
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("../components/AuthPage.vue"),
  },
  {
    path: "/app",
    name: "app",
    component: () => import("../AppPage.vue"),
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
