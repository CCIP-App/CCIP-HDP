import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Landing",
    meta: {
      type: "Landing"
    },
    component: () =>
      import(/* webpackChunkName: "declaration" */ "@/views/Landing.vue")
  },
  {
    path: "/fill",
    name: "Fill",
    meta: {
      type: "Step",
      index: 0,
      label: { zh: "填寫個人資料", en: "Fill Information" }
    },
    component: () => import(/* webpackChunkName: "fill" */ "@/views/Fill.vue")
  },
  {
    path: "/declaration",
    name: "Declaration",
    meta: {
      type: "Step",
      index: 1,
      label: { zh: "健康聲明", en: "Health Declaration" }
    },
    component: () =>
      import(/* webpackChunkName: "declaration" */ "@/views/Declaration.vue")
  },
  {
    path: "/status",
    name: "Status",
    meta: {
      type: "Step",
      index: 2,
      label: { zh: "完成", en: "Finish" }
    },
    component: () =>
      import(/* webpackChunkName: "status" */ "@/views/Status.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
