<template>
  <div class="container">
    <div class="row bg-light">
      <div class="col-12 col-md-2">
        <AsideBar moduleName="Amigos" :links="routes" />
      </div>
      <div class="col-12 col-md-10">
        <form class="my-3 row" @submit="checkForm">
          <div class="col-12 py-2">
            <p class="text-center h5">{{ $route.name }}</p>
          </div>
          <div class="col-12 col-md-6 px-0 px-md-5">
            <Input
              text="Nombre"
              icon="fas fa-address-book"
              v-model="$v.friendToEdit.nombre.$model"
              type="text"
              placeholder="Nombre de tu amigo"
              helpText="Introduce aca el nombre de tu amigo :)"
              :validations="$v.friendToEdit.nombre"
              :errorTexts="friendVals.nombre"
            />

            <Input
              text="Apellido"
              icon="far fa-address-book"
              v-model="$v.friendToEdit.apellido.$model"
              type="text"
              placeholder="Apellido de tu amigo"
              helpText="Introduce aca el apellido de tu amigo :)"
              :validations="$v.friendToEdit.apellido"
              :errorTexts="friendVals.apellido"
            />

            <DateTime
              ref="datetimer"
              text="Fecha de nacimiento"
              icon="fas fa-birthday-cake"
              @dateTime="setDate($event)"
              :options="options"
              helpText="Fecha de nacimiento del compa"
              :validations="$v.friendToEdit.fechaNacimiento"
              :errorTexts="friendVals.fechaNacimiento"
            />
          </div>
          <div class="col-12 col-md-6 px-0 px-md-5">
            <Input
              text="Rut"
              icon="fas fa-id-card"
              v-model="$v.friendToEdit.rut.$model"
              type="text"
              placeholder="Rut de tu compa"
              helpText="Pon aca el rut de tu compa. Formato: 12345678-9 :)"
              :validations="$v.friendToEdit.rut"
              :errorTexts="friendVals.rut"
            />

            <Input
              text="Email"
              icon="fas fa-envelope"
              v-model="$v.friendToEdit.email.$model"
              type="email"
              placeholder="Email del compañero"
              helpText="Correo electronico del compañero"
              :validations="$v.friendToEdit.email"
              :errorTexts="friendVals.email"
            />

            <Selecter
              text="Genero"
              :icon="iconGender"
              :selected="friendToEdit.idGenero"
              v-model.number="$v.friendToEdit.idGenero.$model"
              :selections="genders"
              helpText="Genero del compa"
              :validations="$v.friendToEdit.idGenero"
              :errorTexts="friendVals.idGenero"
            />
          </div>

          <div class="col-12 text-center pt-4">
            <div class="btn-group" role="group">
              <a @click="backToOriginal()" class="btn btn-warning"
                >Volver al original</a
              >
              <button class="btn btn-success" type="submit">
                Editar usuario
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// Clases
import Friend from "@/store/models/Friend.js";

// Componentes
import Input from "@/components/Form/Input.vue";
import Selecter from "@/components/Form/Selecter.vue";
import DateTime from "@/components/Form/DateTime.vue";
import AsideBar from "@/components/Prueba1/Asidebar.vue";

// Estilos
import "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";

// Funciones
import { mapActions, mapState } from "vuex";

// Validaciones
import { required, email } from "vuelidate/lib/validators";

export default {
  components: {
    AsideBar,
    Input,
    Selecter,
    DateTime
  },
  data() {
    return {
      date: new Date(),
      friendToEdit: new Friend(),
      options: {
        format: "YYYY/MM/DD",
        useCurrent: false,
        maxDate: new Date(),
        minDate: new Date("1970/01/30")
      },
      friendVals: {
        nombre: [
          {
            val: "required",
            descripcion: "El nombre es requerido"
          }
        ],
        apellido: [
          {
            val: "required",
            descripcion: "El apellido es requerido"
          }
        ],
        fechaNacimiento: [
          {
            val: "required",
            descripcion: "La fecha de nacimiento es requerida"
          }
        ],
        rut: [
          {
            val: "required",
            descripcion: "El rut es requerido"
          },
          {
            val: "validRut",
            descripcion:
              "El rut no es valido o no tiene el formato correcto (12345678-9)"
          }
        ],
        email: [
          {
            val: "required",
            descripcion: "El email es requerido"
          },
          {
            val: "email",
            descripcion: "El email debe ser valido"
          }
        ],
        idGenero: [
          {
            val: "required",
            descripcion: "El genero es requerido"
          },
          {
            val: "validNumber",
            descripcion: "Introduce un valor valido"
          }
        ]
      }
    };
  },
  validations: {
    friendToEdit: {
      nombre: {
        required
      },
      apellido: {
        required
      },
      fechaNacimiento: {
        required
      },
      rut: {
        required,
        validRut(value) {
          if (!value) return true;

          let rutSplitted = value.split("-");

          if (rutSplitted.length < 2) return false;

          let number = rutSplitted[0];
          let digit = rutSplitted[1];

          let sum = 0;
          let multiply = 2;

          for (let i = 1; i <= number.length; i++) {
            let index = multiply * value.charAt(number.length - i);

            sum = sum + index;

            if (multiply < 7) multiply = multiply + 1;
            else multiply = 2;
          }

          let awaitedDigit = 11 - (sum % 11);

          digit = digit == "K" ? 10 : digit;
          digit = digit == 0 ? 11 : digit;

          if (awaitedDigit != digit) return false;

          return true;
        }
      },
      email: {
        required,
        email
      },
      idGenero: {
        required,
        validNumber(value) {
          return value > 0;
        }
      }
    }
  },
  computed: {
    ...mapState("friend", ["routes", "friend", "friends"]),
    ...mapState("gender", ["generos"]),
    iconGender() {
      let icon = "";

      if (this.friend.idGenero === 3 || this.friend.idGenero === 0)
        icon = "fas fa-genderless";
      else if (this.friend.idGenero === 1) icon = "fas fa-mars";
      else if (this.friend.idGenero === 2) icon = "fas fa-venus";

      return icon;
    },
    genders() {
      let genders = [];

      this.generos.forEach(g =>
        genders.push({
          id: parseInt(g.idGenero),
          descripcion: g.descripcion
        })
      );

      return genders;
    },
    hasErrors() {
      return this.$v.$error || this.$v.$anyError || this.$v.$invalid;
    }
  },
  methods: {
    ...mapActions("friend", ["getFriend", "editFriend", "getFriends"]),
    ...mapActions("gender", ["getGenders"]),
    checkForm(e) {
      let added = false;

      this.$swal({
        title: "editando amigo...",
        icon: "info",
        showClass: {
          popup: "animate__animated animate__fadeInDown"
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp"
        }
      });

      if (!this.hasErrors) {
        added = true;

        this.editFriend(this.friendToEdit);
      }

      if (added)
        this.$swal({
          title: "Amigo editando :)",
          icon: "info",
          showClass: {
            popup: "animate__animated animate__fadeInDown"
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp"
          }
        });
      else
        this.$swal({
          title: "El amigo no fue edito, amigo...",
          text: "El modelo no es valido",
          icon: "info",
          showClass: {
            popup: "animate__animated animate__fadeInDown"
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp"
          }
        });

      e.preventDefault();
    },
    backToOriginal() {
      console.log("back");
      this.friendToEdit.id = this.friend.id;
      this.friendToEdit.nombre = this.friend.nombre;
      this.friendToEdit.apellido = this.friend.apellido;
      this.friendToEdit.fechaNacimiento = new Date(this.friend.fechaNacimiento);
      this.friendToEdit.rut = this.friend.rut;
      this.friendToEdit.email = this.friend.email;
      this.friendToEdit.idGenero = this.friend.idGenero;

      this.$refs["datetimer"].value = new Date(this.friend.fechaNacimiento);
    },
    setDate(newDate) {
      this.date = newDate;
    }
  },
  watch: {
    date(_new) {
      this.friendToEdit.fechaNacimiento = _new;
    }
  },
  mounted() {
    this.getFriend(this.$route);

    this.friendToEdit.id = this.friend.id;
    this.friendToEdit.nombre = this.friend.nombre;
    this.friendToEdit.apellido = this.friend.apellido;
    this.friendToEdit.fechaNacimiento = new Date(this.friend.fechaNacimiento);
    this.friendToEdit.rut = this.friend.rut;
    this.friendToEdit.email = this.friend.email;
    this.friendToEdit.idGenero = this.friend.idGenero;

    this.$refs["datetimer"].value = new Date(this.friend.fechaNacimiento);

    this.getFriends();
    this.getGenders();
  }
};
</script>
