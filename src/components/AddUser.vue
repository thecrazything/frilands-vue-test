<template>
  <form class="md:w-8/12 mx-auto my-10">
    <div class="flex flex-wrap -mx-3 mb-6">
      <ValidatedInput label="First Name" v-model="user.firstName" placeholder="Enter First Name" :errors="errors"></ValidatedInput>
      <ValidatedInput label="Last Name" v-model="user.lastName" placeholder="Enter Last Name" :errors="errors"></ValidatedInput>
      <ValidatedInput label="Date of Birth" v-model="user.birthDate" placeholder="" type="date" :errors="errors"></ValidatedInput>
      <ValidatedInput label="Favorite Quote" v-model="user.quote" placeholder="Enter Quote" :errors="errors"></ValidatedInput>
      <drop-down
        label="Profession"
        :options="professions"
        v-model="user.profession_id"
      />
      <drop-down
        label="Country"
        :options="countries"
        v-model="user.country_id"
      />
    </div>
    <button-component
      :on-click="addUser"
      :button-text="'Save User'"
    />
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import DropDown from './DropDown';
import ButtonComponent from './Button';
import { emptyUser } from '../utils/utils'
import ValidatedInput from './ValidatedInput.vue';

export default {
  name: 'AddUser',
  data() {
    return {
      user: emptyUser(),
      errors: []
    };
  },
  components: {
    DropDown,
    ButtonComponent,
    ValidatedInput
},
  computed: {
    ...mapState({
      professions: state => state.professionModule.professions,
      countries: state => state.countryModule.countries
    }),
  },
  methods: {
    ...mapActions([
      'addNewUser',
    ]),
    validate() {
      this.errors = []
      if (!this.user.firstName || this.user.firstName.trim() === "") {
        this.errors.push("First Name")
      }
      if (!this.user.lastName || this.user.lastName.trim() === "") {
        this.errors.push("Last Name")
      }
      if (!this.user.birthDate || this.user.birthDate.trim() === "") {
        this.errors.push("Date of Birth")
      }
      if (!this.user.quote || this.user.quote.trim() === "") {
        this.errors.push("Favorite Quote")
      }
      return this.errors.length === 0
    },
    addUser() {
      if (this.validate()) {
        this.addNewUser(this.user);
        this.user = emptyUser()
      }
    }
  },
}
</script>

<style scoped>
</style>