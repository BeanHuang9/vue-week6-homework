import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/", //前台
    component: () => import("../views/FrontView.vue"),
    //巢狀路由
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "products", //產品列表
        component: () => import("../views/ProductsView.vue"),
      },
      {
        path: "product/:id", //單一品項
        component: () => import("../views/ProductView.vue"),
      },
      {
        path: "cart", //購物車列表
        component: () => import("../views/CartView.vue"),
      },
    ],
  },
  {
    path: "/admin", //後台
    component: () => import("../views/DashboardView.vue"),
    children: [
      {
        path: "products", //後台產品列表
        component: () => import("../views/AdminProducts.vue"),
      },
      {
        path: "coupon", //後台優惠券
        component: () => import("../views/AdminCoupon.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
