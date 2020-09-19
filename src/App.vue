<template>
  <div id="app">
    <div class="row bg-dark shadow-sm sticky-top">
      <div class="col-12">
        <Navbar />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Nav.vue";

export default {
  components: {
    Navbar
  },
  mounted() {}
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
