import Vue from "vue";
import Vuex from "vuex";
import FriendService from "@/store/Services/FriendService.js";
import GenderService from "@/store/Services/GeneroService.js";

Vue.use(Vuex);

const services = {
  friend: FriendService,
  gender: GenderService
};

export default new Vuex.Store({
  modules: services
});
