<template>
  <b-form-select
    class="mx-auto w-50 p-3 mb-1"
    :options="options"
  />
</template>

<script>
export default {
  name: 'DropDown',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    selectOptions() {
      return this.options;
    }
  }
}
</script>