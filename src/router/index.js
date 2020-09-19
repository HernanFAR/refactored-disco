import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const HomeRoutes = [
  {
    // Inicio
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      id: "Home",
      ubication: ["Home"]
    }
  }
];

const FriendRoutes = [
  {
    // Dashboard amigos
    path: "/prueba1/friend",
    name: "Dashboard amigos",
    meta: {
      id: "Prueba1",
      ubication: ["Prueba 1", "Amigos", "Dashboard"]
    },
    component: () => import("../views/Prueba1/Dashboard.vue")
  },
  {
    // listar amigos
    path: "/prueba1/friend/listar",
    name: "Listar tus amigos",
    meta: {
      id: "Prueba1",
      ubication: ["Prueba 1", "Amigos", "Listar"]
    },
    component: () => import("../views/Prueba1/List.vue")
  },
  {
    // agregar amigo
    path: "/prueba1/friend/agregar",
    name: "Agregar un amigo",
    meta: {
      id: "Prueba1",
      ubication: ["Prueba 1", "Amigos", "Agregar"]
    },
    component: () => import("../views/Prueba1/Create.vue")
  },
  {
    // editar amigo
    path: "/prueba1/friend/:id/editar",
    name: "Editar un amigo",
    meta: {
      id: "Prueba1",
      ubication: ["Prueba 1", "Amigos", "Editar"]
    },
    component: () => import("../views/Prueba1/Edit.vue")
  },
  {
    // detalle amigo
    path: "/prueba1/friend/:id/detalle",
    name: "Detallar un amigo",
    meta: {
      id: "Prueba1",
      ubication: ["Prueba 1", "Amigos", "Detalle"]
    },
    component: () => import("../views/Prueba1/Detail.vue")
  },
  {
    // eliminar amigo
    path: "/prueba1/friend/:id/eliminar",
    name: "Eliminar un amigo",
    meta: {
      id: "Prueba1",
      ubication: ["Prueba 1", "Amigos", "Eliminar"]
    },
    component: () => import("../views/Prueba1/Delete.vue")
  }
];

const routes = HomeRoutes.concat(FriendRoutes);

console.log(routes);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
