<template>
  <div class="container">
    <div class="row bg-light">
      <div class="col-12 col-md-2">
        <AsideBar moduleName="Amigos" :links="routes" />
      </div>
      <div class="col-12 col-md-10 py-4">
        <div class="row">
          <div class="col-12 pb-3">
            <p class="text-center h5">{{ $route.name }}</p>
          </div>
          <div class="col-12">
            <table
              class="table table-responsive-md table-bordered table-hover table-striped"
            >
              <thead>
                <tr>
                  <th scope="col">Rut</th>
                  <th scope="col">Nombre completo</th>
                  <th scope="col">Fecha nacimiento</th>
                  <th scope="col">Genero</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(friend, index) in getFriendsDTO" :key="index">
                  <th scope="row">{{ friend.rut }}</th>
                  <td>{{ friend.nombreCompleto }}</td>
                  <td>{{ friend.fechaNacimiento }}</td>
                  <td>{{ friend.genero }}</td>
                  <td>
                    <router-link
                      class="text-info"
                      :to="'/prueba1/friend/' + friend.id + '/detalle'"
                      ><i class="fas fa-search"></i
                    ></router-link>
                    -
                    <router-link
                      class="text-success"
                      :to="'/prueba1/friend/' + friend.id + '/editar'"
                      ><i class="fas fa-edit"></i
                    ></router-link>
                    -
                    <a class="text-danger" @click="dalete(friend.id)"
                      ><i class="fas fa-trash"></i
                    ></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AsideBar from "@/components/Prueba1/Asidebar.vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  components: {
    AsideBar
  },
  computed: {
    ...mapState("friend", ["routes", "friends"]),
    ...mapGetters("friend", ["getFriendsDTO"])
  },
  methods: {
    ...mapActions("friend", ["getFriends", "deleteFriend", "getDeleted"]),
    ...mapActions("gender", ["getGenders"]),
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
          this.getDeleted();
          this.deleteFriend(id);
          this.getFriends();
        }
      });
    }
  },
  beforeMount() {
    this.getFriends();
    this.getGenders();
  }
};
</script>
