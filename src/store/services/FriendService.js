import Route from "@/store/models/Route.js";

let friendRoutes = [
  new Route("/prueba1/friend", "fa fa-book fa-fw", "Dashboard"),
  new Route("/prueba1/friend/listar", "fa fa-list-ul fa-fw", "Listar"),
  new Route("/prueba1/friend/agregar", "fa fa-user-plus fa-fw", "Crear")
];

export default {
  namespaced: true,
  state: {
    routes: friendRoutes,
    friend: []
  },
  mutations: {},
  actions: {},
  modules: {}
};
