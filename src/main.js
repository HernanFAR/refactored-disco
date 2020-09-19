import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import Vuelidate from "vuelidate";

import axios from "axios";
import VueAxios from "vue-axios";

import VueSweetalert2 from "vue-sweetalert2";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
