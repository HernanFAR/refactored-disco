<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb my-0">
        <li
          class="breadcrumb-item"
          v-for="(ubicationData, index) in $route.meta.ubication"
          :key="index"
        >
          {{ ubicationData }}
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb"
};
</script>
