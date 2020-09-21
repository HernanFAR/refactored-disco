<template>
  <div class="container">
    <div class="row bg-light">
      <div class="col-12 col-md-2 align-self-center">
        <AsideBar moduleName="Amigos" :links="routes" />
      </div>
      <div class="col-12 col-md-10"></div>
    </div>
  </div>
</template>

<script>
import AsideBar from "@/components/Prueba1/Asidebar.vue";
import { mapState } from "vuex";

export default {
  components: {
    AsideBar
  },
  computed: {
    ...mapState("friend", ["routes"])
  }
};
</script>
