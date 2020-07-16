<template>
  <div>
    <add-user />
    <buttons />
    <user-list />
  </div>
</template>

<script>
import AddUser from './components/AddUser.vue'
import Buttons from './components/Buttons.vue'
import UserList from './components/UserList.vue'

export default {
  name: 'App',
  components: {
    AddUser,
    Buttons,
    UserList,
  },
}
</script>
