<template>
  <table class="table-auto mx-auto my-10">
    <thead>
      <th
        class="px-4 py-2"
        v-text="'Namn'"
      />
      <th
        class="px-4 py-2"
        v-text="'Date of Birth'"
      />
      <th
        class="px-4 py-2"
        v-text="'Age'"
      />
      <th
        class="px-4 py-2"
        v-text="'Profession'"
      />
      <th
        class="px-4 py-2"
        v-text="'Country'"
      />
      <th
        class="px-4 py-2"
        v-text="'Favorite Quote'"
      />
      <th
        class="px-4 py-2"
        v-text="''"
      />
    </thead>
    <tbody>
      <tr>
        <td
          class="border px-4 py-2"
          v-text="users[0].firstName + ' ' + users[0].lastName"
        />
        <td
          class="border px-4 py-2"
          v-text="users[0].birthDate"
        />
        <td
          class="border px-4 py-2"
          v-text="''"
        />
        <td
          class="border px-4 py-2"
          v-text="users[0].profession_id"
        />
        <td
          class="border px-4 py-2"
          v-text="users[0].country_id"
        />
        <td
          class="border px-4 py-2"
          v-text="users[0].quote"
        />
        <td
          class="px-4 py-2"
        >
          <button-component
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            :on-click="() => removeRow(user)"
            :button-text="'Remove'"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// import User from './User';
import { mapState } from 'vuex'
import ButtonComponent from './Button.vue';

export default {
  name: 'UserList',
  components: {
    ButtonComponent,
  },
  data() {
    return {
      selected: []
    };
  },
  computed: {
    ...mapState({
        users: state => state.userModule.users,
    }),
  },
}
</script>