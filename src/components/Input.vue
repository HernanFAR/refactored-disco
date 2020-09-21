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
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        :placeholder="placeholder"
      />
    </div>
    <small v-if="helpText !== undefined" class="form-text text-muted">{{
      helpText
    }}</small>
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
    }
  }
};
</script>
