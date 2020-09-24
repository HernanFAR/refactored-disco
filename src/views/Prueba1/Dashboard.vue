<template>
  <div class="container">
    <div class="row bg-light">
      <div class="col-12 col-md-2">
        <AsideBar moduleName="Amigos" :links="routes" />
      </div>
      <div class="col-12 col-md-10">
        <div class="row py-5">
          <div class="d-none d-md-block col-3"></div>
          <div class="col-12 col-md-6">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="d-block w-100">
                    <div class="row">
                      <div
                        class="col-12 bg-success"
                        style="height: 150px;"
                      ></div>
                    </div>
                  </div>
                  <div class="carousel-caption d-block">
                    <h6>
                      Veamos, en total tienes: {{ friends.length }} amigos
                    </h6>
                    <p>{{ getTotalFriendsText }}</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="d-block w-100">
                    <div class="row">
                      <div
                        class="col-12 bg-warning"
                        style="height: 150px;"
                      ></div>
                    </div>
                  </div>
                  <div class="carousel-caption d-block">
                    <h6>A ver, agregaste... {{ added }} amigos</h6>
                    <p>{{ getAddedFriendsText }}</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="d-block w-100">
                    <div class="row">
                      <div
                        class="col-12 bg-danger"
                        style="height: 150px;"
                      ></div>
                    </div>
                  </div>
                  <div class="carousel-caption d-block">
                    <h6>Mhh, haz eliminado... {{ deleted }} amigos</h6>
                    <p>{{ getDeletedFriendsText }}</p>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div class="d-none d-md-block col-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AsideBar from "@/components/Prueba1/Asidebar.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    AsideBar
  },
  computed: {
    ...mapState("friend", ["routes", "friends", "deleted", "added"]),
    getTotalFriendsText() {
      return this.friends.length === 0
        ? "Eso es bueno :D"
        : "Prueba a agregar mas :)";
    },
    getAddedFriendsText() {
      return this.added > 0 ? "Magnifico uwu" : "Quiza deberias añadir mas :3";
    },
    getDeletedFriendsText() {
      return this.deleted > 0 ? "¿Porque? D:" : "Bien bien, no hay errores :)";
    }
  },
  methods: {
    ...mapActions("friend", ["getFriends", "getAdded", "getDeleted"])
  },
  mounted() {
    this.getFriends();
    this.getAdded();
    this.getDeleted();
  }
};
</script>
