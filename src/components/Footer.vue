<template>
  <footer class="pt-4">
    <div class="container text-center text-white text-md-left">
      <div class="row">
        <div class="col-md-4 mt-md-0 mt-3">
          <p class="h6">Materia:</p>
          <p>Desarrollo web y mobile.</p>
        </div>
        <hr class="clearfix w-100 d-md-none pb-3" />
        <FooterArticle
          title="Frameworks y librerias de JS usadas: "
          :elements="jsElements"
        />
        <FooterArticle
          title="Frameworks y librerias de HTML y CSS usadas: "
          :elements="htmlElements"
        />
      </div>
    </div>
    <div class="text-center text-white py-3 bg-primary">
      <p class="my-0"><em>Al ver esto, Jesus quedó</em></p>
    </div>
  </footer>
</template>

<script>
import FooterArticle from "@/components/FooterArticle.vue";

export default {
  name: "Breadcrumb",
  components: {
    FooterArticle
  },
  data() {
    return {
      jsElements: ["Vue", "Vue Route", "Vuex", "Vuelidate"],
      htmlElements: ["Bootstrap", "Font Awesome"]
    };
  }
};
</script>

<style lang="scss" scoped>
.footer-copyright {
  overflow: hidden;
  color: rgba(255, 255, 255, 0.6);
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
