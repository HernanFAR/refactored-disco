<template>
  <article class="col-md-4 mb-md-0 mb-3">
    <p class="h6">{{ title }}</p>
    <ul class="list-unstyled">
      <li v-for="(element, index) in elements" :key="index">
        <p>- {{ element }}</p>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: "FooterArticle",
  props: {
    title: String,
    elements: Array
  }
};
</script>
