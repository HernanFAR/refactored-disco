<template>
  <div class="container">
    <div class="row bg-light">
      <div class="col-12 col-md-2">
        <AsideBar moduleName="Amigos" :links="routes" />
      </div>
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
  },
  mounted() {
    console.log(this.$route);
  }
};
</script>
