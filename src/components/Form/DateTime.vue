<template>
  <div class="form-group">
    <label>{{ text }}: </label>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text"><i :class="icon"></i></span>
      </div>
      <DatePicker
        class="form-control form-control-sm"
        :class="setClasses(value)"
        v-model="value"
        :config="options"
      />
    </div>
    <small
      v-for="(item, index) in errorTexts"
      :key="index"
      class="form-text text-danger"
    >
      <p v-if="hasErrors && !validations[item.val]">{{ item.descripcion }}</p>
    </small>
    <small
      v-if="helpText !== undefined && !hasErrors"
      class="form-text text-muted"
      >{{ helpText }}</small
    >
  </div>
</template>

<script>
import DatePicker from "vue-bootstrap-datetimepicker";

export default {
  components: {
    DatePicker
  },
  data() {
    return {
      value: undefined
    };
  },
  props: {
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    options: {
      type: Object,
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
  computed: {
    hasErrors() {
      return this.validations.$invalid || this.validations.$anyError;
    }
  },
  methods: {
    setClasses(value) {
      return {
        "is-invalid": this.validations.$anyError || this.validations.$invalid,
        "is-valid":
          !(this.validations.$anyError || this.validations.$invalid) && !!value
      };
    }
  },
  watch: {
    value(_new) {
      let formattedDate = undefined;

      if (_new) formattedDate = new Date(_new);

      this.$emit("dateTime", formattedDate);
    }
  }
};
</script>
