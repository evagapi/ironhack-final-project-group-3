import { createRouter, createWebHistory } from "vue-router";
import { supabase } from "../supabase";

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
    component: () => import("../pages/SignUp.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/SignIn.vue"),
  },
  {
    path: "/auth/forgot-password",
    name: "forgot-password",
    component: () => import("../pages/PasswordRecovery.vue"),
  },
  {
    path: "/auth/change-password",
    name: "change-password",
    component: () => import("../pages/ChangePassword.vue"),
  },
  {
    path: "/404",
    alias: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("../pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

router.beforeEach(async (to) => {
  const user = supabase.auth.user();
  if (!user && to.name === "dashboard") {
    return { name: "login" };
  }
  if (
    (user && to.name === "register") ||
    (user && to.name === "login") ||
    (user && to.name === "change-password") ||
    (user && to.name === "forgot-password")
  ) {
    return { name: "dashboard" };
  }
});

export default router;
