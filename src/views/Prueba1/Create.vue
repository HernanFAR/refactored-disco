<template>
  <div class="container">
    <div class="row bg-light">
      <div class="col-12 col-md-2 align-self-center">
        <AsideBar moduleName="Amigos" :links="routes" />
      </div>
      <div class="col-12 col-md-10">
        <form class="my-3 row">
          <div class="col-12 pb-4">
            <p class="text-center h5">Formulario de agregado de amigos :D</p>
          </div>
          <div class="col-12 col-md-6 px-8">
            <Input
              text="Nombre"
              icon="fas fa-address-book"
              v-model="friend.nombre"
              type="text"
              placeholder="Nombre de tu amigo"
              helpText="Introduce aca el nombre de tu amigo :)"
            />

            <Input
              text="Apellido"
              icon="far fa-address-book"
              v-model="friend.apellido"
              type="text"
              placeholder="Apellido de tu amigo"
              helpText="Introduce aca el apellido de tu amigo :)"
            />

            <div class="form-group">
              <!-- Fecha de nacimiento -->
              <label for="fechaNacimiento">Fecha de nacimiento: </label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><i class="fas fa-birthday-cake"></i
                  ></span>
                </div>
                <DatePicker
                  class="form-control form-control-sm"
                  id="fechaNacimiento"
                  v-model="date"
                  :config="options"
                />
              </div>
              <small id="fechaNacimientoHelp" class="form-text text-muted"
                >Fecha de nacimiento del compa</small
              >
            </div>
          </div>

          <div class="col-12 col-md-6 px-8">
            <Input
              text="Rut"
              icon="fas fa-id-card"
              v-model="friend.rut"
              type="text"
              placeholder="Rut de tu compa"
              helpText="Pon aca el rut de tu compa :)"
            />

            <Input
              text="Email"
              icon="fas fa-envelope"
              v-model="friend.email"
              type="email"
              placeholder="Email del compañero"
              helpText="Correo electronico del compañero"
            />

            <div class="form-group">
              <!-- Genero -->
              <label id="generoLabel" for="genero">Genero: </label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><i :class="iconGender"></i
                  ></span>
                </div>
                <select
                  class="form-control form-control-sm"
                  v-model="friend.idGenero"
                  id="genero"
                  aria-describedby="generoLabel"
                >
                  <option :value="0" selected disable>Seleccione</option>
                  <option
                    v-for="(item, index) in generos"
                    :key="index"
                    :value="item.idGenero"
                    >{{ item.descripcion }}</option
                  >
                </select>
              </div>
              <small id="generoHelp" class="form-text text-muted"
                >Genero del compa</small
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// Import this component
import DatePicker from "vue-bootstrap-datetimepicker";
import Friend from "@/store/models/Friend.js";
import Input from "@/components/Input.vue";

import AsideBar from "@/components/Prueba1/Asidebar.vue";

import "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";

import { mapActions, mapState } from "vuex";

export default {
  components: {
    AsideBar,
    DatePicker,
    Input
  },
  data() {
    return {
      date: new Date(),
      friend: new Friend(),
      options: {
        format: "YYYY/MM/DD",
        useCurrent: false,
        maxDate: new Date()
      }
    };
  },
  computed: {
    ...mapState("friend", ["routes", "friends"]),
    ...mapState("gender", ["generos"]),
    iconGender() {
      return {
        "fas fa-genderless":
          this.friend.idGenero === 3 || this.friend.idGenero === 0,
        "fas fa-mars": this.friend.idGenero === 1,
        "fas fa-venus": this.friend.idGenero === 2
      };
    }
  },
  methods: {
    ...mapActions("friend", ["getFriends"]),
    ...mapActions("gender", ["getGenders"])
  },
  watch: {
    date(_new) {
      let friendBirthDay = new Date(_new);

      this.friend.fechaNacimiento = friendBirthDay;
    }
  },
  mounted() {
    this.getFriends();
    this.getGenders();
  }
};
</script>

<style lang="scss" scoped>
.px-8 {
  padding-left: 4rem;
  padding-right: 4rem;
}
</style>
