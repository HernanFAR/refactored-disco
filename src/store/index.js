import Vue from "vue";
import Vuex from "vuex";
import FriendService from "@/store/services/FriendService.js";
import GenderService from "@/store/services/GeneroService.js";
import StorageService from "@/store/services/StorageService.js";

Vue.use(Vuex);

const services = {
  friend: FriendService,
  gender: GenderService,
  storage: StorageService
};

export default new Vuex.Store({
  modules: services
});
