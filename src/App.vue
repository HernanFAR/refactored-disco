<template>
  <div id="app" class="container-fluid">
    <div class="row bg-primary sticky-top">
      <div class="col-12">
        <Navbar />
      </div>
    </div>
    <div class="row bg-breadcrumb">
      <div class="col-12">
        <Breadcrumb />
      </div>
    </div>
    <div class="row bg-light">
      <div class="col-12">
        <router-view />
      </div>
    </div>
    <div class="row bg-footer">
      <div class="col-12">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Nav.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Footer from "@/components/Footer.vue";
import { mapActions } from "vuex";

export default {
  components: {
    Navbar,
    Breadcrumb,
    Footer
  },
  methods: {
    ...mapActions("storage", ["initStorage"])
  },
  mounted() {
    this.initStorage();
  }
};
</script>

<style lang="scss">
.bg-breadcrumb {
  background-color: #e9ecef;
}
.bg-footer {
  background-color: #2196f3 !important;
}
</style>
