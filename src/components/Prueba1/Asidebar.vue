<template>
  <aside class="col-12 col-md-2 p-0 bg-light flex-shrink-1">
    <nav
      class="navbar navbar-expand navbar-light flex-md-column flex-row align-items-start py-2"
    >
      <div class="collapse navbar-collapse ">
        <ul
          class="flex-md-column flex-row navbar-nav w-100 justify-content-between"
        >
          <li class="nav-item">
            <a class="nav-link pl-0 text-nowrap" href="#">
              <i class="fa fa-users fa-fw"></i>
              <span class="font-weight-bold"> {{ moduleName }}</span>
            </a>
          </li>
          <li class="nav-item" v-for="(link, index) in links" :key="index">
            <router-link
              class="nav-link"
              :class="isExactRoute(link.module, link.type)"
              :to="link.url"
            >
              <i :class="link.icon"></i>
              <span class="d-none d-md-inline"> {{ link.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "Asidebar",
  props: {
    // moduleName, es un string
    moduleName: String,
    // links es un arreglo de objetos, y estos tienen 3 atributos: La URL, el icono, el identificador y el nombre del link.
    links: Array
  },
  methods: {
    isExactRoute(module, type) {
      let routeModule = this.$route.meta.module;
      let routeType = this.$route.meta.type;

      let isMatch = routeModule === module && routeType === type;

      return {
        active: routeType === isMatch
      };
    }
  }
};
</script>
