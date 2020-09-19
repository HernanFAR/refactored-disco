<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <Inicio />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Inicio from "@/components/Inicio.vue";

export default {
  name: "Home",
  components: {
    Inicio
  }
};
</script>
