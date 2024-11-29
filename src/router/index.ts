import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
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

export default router;
