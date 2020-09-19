<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <AsideBar moduleName="Amigos" :links="links" />
      </div>
    </div>
  </div>
</template>

<script>
import AsideBar from "@/components/Prueba1/Asidebar.vue";

export default {
  components: {
    AsideBar
  },
  data() {
    return {
      links: [
        {
          module: "friend",
          type: "dash",
          url: "/prueba1/friend",
          icon: "fa fa-book fa-fw",
          name: "Dashboard"
        },
        {
          module: "friend",
          type: "list",
          url: "/prueba1/friend/listar",
          icon: "fa fa-list-ul fa-fw",
          name: "Listar"
        },
        {
          module: "friend",
          type: "add",
          url: "/prueba1/friend/agregar",
          icon: "fa fa-user-plus fa-fw",
          name: "Crear"
        }
      ]
    };
  }
};
</script>
