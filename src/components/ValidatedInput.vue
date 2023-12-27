<template>
<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        :for="'grid-' + label"
        v-text="label"
    />
    <input
        :class="{error: hasError}"
        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        :id="'grid-' + label"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
    >
</div>
</template>
  
  <script>
  export default {
    name: 'ValidatedInput',
    props: {
      label: {
        type: String,
        default: 'Label',
      },
      value: {
        type: String
      },
      placeholder: {
        type: String,
        default: "Placeholder"
      },
      type: {
        type: String,
        default: "text"
      },
      errors: {
        type: Array
      }
    },
    computed: {
      hasError: function() {
        return this.errors && this.errors.find(x => x === this.label)
      }
    }
  }
  </script>

<style scoped>
input.error {
  border: 1px solid red;
}
</style>