<template>
  <div class="form-group">
    <!-- Genero -->
    <label for="genero">{{ text }}: </label>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text"><i :class="icon"></i></span>
      </div>
      <select
        class="form-control form-control-sm"
        :class="setClasses(value)"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
        <option :value="0" selected disable>Seleccione</option>
        <option
          v-for="(item, index) in selections"
          :key="index"
          :value="item.id"
          >{{ item.descripcion }}</option
        >
      </select>
    </div>
    <small
      v-for="(item, index) in errorTexts"
      :key="index"
      class="form-text text-danger"
    >
      <p v-if="validations.$anyError && !validations[item.val]">
        {{ item.descripcion }}
      </p>
    </small>
    <small
      v-if="helpText !== undefined && !validations.$anyError"
      class="form-text text-muted"
      >{{ helpText }}</small
    >
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    value: {
      required: true
    },
    selections: {
      type: Array,
      required: true
    },
    helpText: {
      type: String,
      required: false
    },
    validations: {
      type: Object,
      required: true
    },
    errorTexts: {
      type: Array,
      required: true
    }
  },
  methods: {
    setClasses(value) {
      return {
        "is-invalid": this.validations.$anyError,
        "is-valid": !this.validations.$anyError && !!value
      };
    }
  }
};
</script>
