<template>
  <nav class="navbar navbar-dark navbar-expand-lg container">
    <a class="navbar-brand" href="#">¡Pruebas :D!</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :class="isModuleRoute('home')" to="/"
            >Inicio</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :class="isModuleRoute('friend')"
            to="/prueba1/friend"
            >Prueba 1</router-link
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            @click="showMessage('No implementado aun :c')"
            href="#"
            >Prueba 2</a
          >
          <!--<router-link class="nav-link" to="/Prueba2">Prueba 2</router-link>-->
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            @click="showMessage('No implementado aun :c')"
            href="#"
            >Prueba 3</a
          >
          <!--<router-link class="nav-link" to="/Prueba3">Prueba 3</router-link>-->
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    showMessage(text) {
      this.$swal({
        title: "Lo sentimos",
        text: text,
        icon: "info",
        timer: 3500,
        timerProgressBar: true,
        confirmButtonText: "Ok :c",
        showClass: {
          popup: "animate__animated animate__fadeInDown"
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp"
        }
      });
    },
    isModuleRoute(module) {
      let routeModule = this.$route.meta.module;

      return {
        active: routeModule == module
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>
