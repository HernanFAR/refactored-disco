<template>
  <div id="app">
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
  </div>
</template>

<script>
import Navbar from "@/components/Nav.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  components: {
    Navbar,
    Breadcrumb
  },
  mounted() {}
};
</script>

<style lang="scss">
.bg-breadcrumb {
  background-color: #e9ecef;
}
</style>
