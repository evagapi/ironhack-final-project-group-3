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
    component: () => import("../pages/SingUp.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/SignIn.vue"),
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
});

export default router;
