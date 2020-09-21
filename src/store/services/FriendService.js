import Route from "@/store/models/Route.js";
import FriendDTO from "@/store/models/FriendDTO.js";

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
  getters: {
    // eslint-disable-next-line
    getFriendsDTO(state, getters, rootState) {
      let friendsDTO = [];
      let friendsLocal = JSON.parse(localStorage.getItem("friends"));

      console.log(rootState);

      friendsLocal.forEach(f => {
        let id = f.id;
        let nombreCompleto = f.nombre + " " + f.apellido;
        let nacimiento = new Date(f.fechaNacimiento);
        let fechaNacimiento =
          nacimiento.getDate() +
          "/" +
          (nacimiento.getMonth() + 1) +
          "/" +
          nacimiento.getFullYear();
        let rut = f.rut;
        let email = f.email;
        let idGenero = f.idGenero;
        let genero = rootState.gender.generos.filter(
          g => g.idGenero === f.idGenero
        )[0].descripcion;

        friendsDTO.push(
          new FriendDTO(
            id,
            nombreCompleto,
            fechaNacimiento,
            rut,
            email,
            idGenero,
            genero
          )
        );
      });

      return friendsDTO;
    }
  },
  modules: {}
};
