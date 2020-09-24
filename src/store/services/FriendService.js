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
    friend: {},
    added: 0,
    deleted: 0
  },
  mutations: {
    setFriends(state, payload) {
      state.friends = payload;
      localStorage.setItem("friends", JSON.stringify(payload));
    },
    setFriend(state, payload) {
      state.friend = payload;
    },
    setAdded(state, payload) {
      state.added = payload;
    },
    setDeleted(state, payload) {
      state.deleted = payload;
    },
    incrementAdded(state) {
      state.added = state.added + 1;

      localStorage.setItem("added", JSON.stringify(state.added));
    },
    incrementDeleted(state) {
      state.deleted = state.deleted + 1;

      localStorage.setItem("deleted", JSON.stringify(state.deleted));
    }
  },
  actions: {
    getFriends({ commit }) {
      let friendsLocal = JSON.parse(localStorage.getItem("friends"));

      commit("setFriends", friendsLocal);
    },
    getFriend({ commit }, id) {
      let friend = JSON.parse(localStorage.getItem("friends"));

      friend.filter(f => f.id === id);

      commit("setFriend", friend[0]);
    },
    getAdded({ commit }) {
      let added = JSON.parse(localStorage.getItem("added"));

      commit("setAdded", added);
    },
    getDeleted({ commit }) {
      let deleted = JSON.parse(localStorage.getItem("deleted"));

      commit("setDeleted", deleted);
    },
    addFriend({ commit }, friend) {
      let friends = JSON.parse(localStorage.getItem("friends"));

      let max = 0;

      friends.forEach(f => {
        if (f.id > max) max = f.id;
      });

      friend.id = max + 1;

      friends.push(friend);

      commit("incrementAdded");
      commit("setFriends", friends);
    },
    editFriend({ commit }, friend) {
      let friends = JSON.parse(localStorage.getItem("friends"));

      let i = 0;

      for (i = 0; i < friends.length; i++) {
        if (friends[i].id === friend.id) break;

        i++;
      }

      friends[i] = friend;

      commit("setFriends", friends);
    },
    // eslint-disable-next-line
    deleteFriend ({ commit }, id) {
      let friends = JSON.parse(localStorage.getItem("friends"));

      let friendWasntDeleted = friends.filter(f => f.id != id);

      commit("incrementDeleted");
      commit("setFriends", friendWasntDeleted);
    }
  },
  getters: {
    // eslint-disable-next-line
    getFriendsDTO(state, getters, rootState) {
      let friendsDTO = [];

      state.friends.forEach(f => {
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
    },
    getFriendDTO: (state, getters, rootState) => id => {
      let friendsLocal = JSON.parse(localStorage.getItem("friends"));

      let friend = friendsLocal.filter(f => f.id == id)[0];

      let idFriend = friend.id;
      let nombreCompleto = friend.nombre + " " + friend.apellido;
      let nacimiento = new Date(friend.fechaNacimiento);
      let fechaNacimiento =
        nacimiento.getDate() +
        "/" +
        (nacimiento.getMonth() + 1) +
        "/" +
        nacimiento.getFullYear();
      let rut = friend.rut;
      let email = friend.email;
      let idGenero = friend.idGenero;
      let genero = rootState.gender.generos.filter(
        g => g.idGenero === friend.idGenero
      )[0].descripcion;

      let friendDTO = new FriendDTO(
        idFriend,
        nombreCompleto,
        fechaNacimiento,
        rut,
        email,
        idGenero,
        genero
      );

      return friendDTO;
    }
  }
};
