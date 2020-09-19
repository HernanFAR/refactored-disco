import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    // Inicio
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      id: "Home",
      ubication: ["Home"]
    }
  },
  {
    // Dashboard amigos
    path: "/prueba1/Friend",
    name: "Prueba 1: 22-09-2020",
    meta: {
      id: "Prueba1",
      ubication: ["Dashboard"]
    },
    component: () => import("../views/Prueba1/Dashboard.vue")
  },
  {
    // Dashboard amigos
    path: "/prueba1/Friend",
    name: "Prueba 1: 22-09-2020",
    meta: {
      id: "Prueba1",
      ubication: ["Dashboard"]
    },
    component: () => import("../views/Prueba1/Dashboard.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
