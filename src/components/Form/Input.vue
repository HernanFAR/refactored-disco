<template>
  <div class="form-group">
    <label>{{ text }}: </label>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text"><i :class="icon"></i></span>
      </div>
      <input
        :type="type"
        class="form-control form-control-sm"
        :class="hasErrors(value)"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        :placeholder="placeholder"
      />
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
    type: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
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
    hasErrors(value) {
      return {
        "is-invalid": this.validations.$anyError,
        "is-valid": !this.validations.$anyError && !!value
      };
    }
  }
};
</script>

<style lang="scss">
.is-invalid {
  border-color: red;
}
.is-valid {
  border-color: green;
}
</style>
