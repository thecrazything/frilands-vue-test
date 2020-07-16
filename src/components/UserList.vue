<template>
  <b-table
    ref="selectableTable"
    selectable
    :select-mode="'multi'"
    :items="users"
    @row-selected="onRowSelected"
    responsive="sm"
  >
    <template v-slot:cell(selected)="{ rowSelected }">
      <template v-if="rowSelected">
        <span aria-hidden="true">&check;</span>
      </template>
      <template v-else>
        <span aria-hidden="true">&nbsp;</span>
      </template>
    </template>
  </b-table>
</template>

<script>
// import User from './User';
import { mapState } from 'vuex'

export default {
  name: 'UserList',
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
  methods: {
    onRowSelected() {

    }
  }
}
</script>