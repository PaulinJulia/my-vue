import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

let isAuthenticated = false;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/user",
      name: "user",
      component: () => import("../views/UserView.vue"),
      // beforeEnter: (to, from, next) => {
      //   if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
      //   else next();
      // },
    },
    {
      path: "/inspiration",
      name: "inspiration",
      component: () => import("../views/InspirationView.vue"),
    },
    {
      path: "/stockprice",
      name: "stockprice",
      component: () => import("../views/StockPriceView.vue"),
    },
    {
      path: "/stockinfo/:symbol/:exchange",
      name: "stockinfo",
      component: () => import("../views/StockInfoView.vue"),
      props: true,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path === "/user") {
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");

    if (email === "test@test.com" && password === "test123") {
      isAuthenticated = true;
    }
  }
  next();
});

export default router;
