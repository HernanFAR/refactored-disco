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
    friends: [],
    friend: {}
  },
  mutations: {
    setFriends(state, payload) {
      state.friends = payload;
    },
    setFriend(state, payload) {
      state.friend = payload;
    }
  },
  actions: {
    getFriends({ commit }) {
      let friendsLocal = JSON.parse(localStorage.getItem("friends"));

      commit("setFriends", friendsLocal);
    },
    getFriend({ commit }, rut) {
      let friend = JSON.parse(localStorage.getItem("friends"));

      friend.filter(f => f.rut === rut);

      commit("setFriend", friend[0]);
    },
    // eslint-disable-next-line
    addFriend ({ }, friend) {
      let friends = JSON.parse(localStorage.getItem("friends"));

      friends.push(friend);

      localStorage.setItem("friends", JSON.stringify(friends));
    }
  },
  modules: {}
};
