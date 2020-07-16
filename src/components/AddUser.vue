<template>
  <div class="bg-info">
    <b-form class="mx-auto w-75 p-3 mb-1" inline>
      <b-form-input
        class="w-50 p-3 mb-1"
        id="first-name"
        type="text"
        placeholder="Enter First Name"
      />
      <b-form-input
        class="w-50 p-3 mb-1"
        id="last-name"
        type="text"
        placeholder="Enter Last Name"
      />
      <b-form-input
        class="w-50 p-3 mb-1"
        id="social-security-number"
        type="text"
        placeholder="Enter Social Security Number"
      />
      <b-form-input
        class="w-50 p-3 mb-1"
        id="birth-date"
        type="date"
        placeholder="Enter Birth Date"
      />
      <drop-down :options="professions" />
      <drop-down />
    </b-form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import DropDown from './DropDown';

export default {
  name: 'AddUser',
  components: {
    DropDown,
  },
  computed: {
    ...mapState({
      professions: state => state.professionModule.professions,
    }),
  },
}
</script>

<style scoped>
</style>