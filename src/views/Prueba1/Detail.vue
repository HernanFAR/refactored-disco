<template>
  <div class="container">
    <div class="row bg-light">
      <div class="col-12 col-md-2">
        <AsideBar moduleName="Amigos" :links="routes" />
      </div>
      <div class="col-12 col-md-10">
        <div class="row my-3">
          <div class="col-12 py-2">
            <p class="text-center h5">{{ $route.name }}</p>
          </div>
          <div class="col-12 col-md-6">
            <dl class="row px-0 px-md-5">
              <dt class="col-12 col-md-5">
                Nombre completo:
              </dt>
              <dd class="col-12 col-md-7">
                {{ friendDTO.nombreCompleto }}
              </dd>
              <dt class="col-12 col-md-5">
                Fecha nacimiento:
              </dt>
              <dd class="col-12 col-md-7">
                {{ friendDTO.fechaNacimiento }}
              </dd>
              <dt class="col-12 col-md-5">
                Rut:
              </dt>
              <dd class="col-12 col-md-7">
                {{ friendDTO.rut }}
              </dd>
            </dl>
          </div>
          <div class="col-12 col-md-6">
            <dl class="row px-0 px-md-5">
              <dt class="col-12 col-md-5">
                Email:
              </dt>
              <dd class="col-12 col-md-7">
                {{ friendDTO.email }}
              </dd>
              <dt class="col-12 col-md-5">
                Genero:
              </dt>
              <dd class="col-12 col-md-7">
                {{ friendDTO.genero }}
              </dd>
            </dl>
          </div>
          <div class="col-12 text-center pt-4">
            <div class="btn-group" role="group">
              <button class="btn btn-warning">
                Editar usuario
              </button>
              <button class="btn btn-danger" @click="dalete(friendDTO.id)">
                Borrar usuario
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AsideBar from "@/components/Prueba1/Asidebar.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {
    AsideBar
  },
  data() {
    return {
      friendDTO: {}
    };
  },
  computed: {
    ...mapState("friend", ["routes"]),
    ...mapGetters("friend", ["getFriendDTO"])
  },
  methods: {
    ...mapActions("gender", ["getGenders"]),
    ...mapActions("friend", ["getFriends", "deleteFriend"]),
    dalete(id) {
      this.$swal({
        title: "¿Quieres eliminar a este amigo?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        denyButtonText: `No eliminar`,
        icon: "warning"
      }).then(result => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.$swal("Amigo eliminado", "Exito", "success");
          this.deleteFriend(id);
          this.getFriends();
          this.$router.push({ path: "/prueba1/friend/listar" });
        }
      });
    }
  },
  beforeMount() {
    this.getFriends();
    this.getGenders();
  },
  mounted() {
    this.friendDTO = this.getFriendDTO(this.$route.params.id);
  }
};
</script>
