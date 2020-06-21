import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Landing",
    redirect: "/declaration"
  },
  {
    path: "/declaration",
    name: "Declaration",
    component: () =>
      import(/* webpackChunkName: "declaration" */ "@/views/Declaration.vue")
  },
  {
    path: "/fill",
    name: "Fill",
    component: () =>
      import(/* webpackChunkName: "fill" */ "@/views/Fill.vue")
  },
  {
    path: "/status",
    name: "Status",
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
