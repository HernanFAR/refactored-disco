import Genero from "@/store/models/Genero.js";

let genders = [
  new Genero(1, "Masculino"),
  new Genero(2, "Femenino"),
  new Genero(3, "Otro")
];

export default {
  namespaced: true,
  state: {
    generos: genders
  },
  mutations: {},
  actions: {},
  modules: {}
};
