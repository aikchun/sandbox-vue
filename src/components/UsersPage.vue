<script>
import UserCard from './UserCard.vue'
export default {
  components: {
    UserCard
  },
  data: () => ({
    users: []
  }),
  methods: {
    fetchUsers: async function () {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        this.users = await response.json()
      } catch (e) {
        console.error(e)
      }
    }
  },
  created() {
    this.fetchUsers()
  }
}
</script>
<template>
  <h1>Users</h1>
  <div class="gutters">
    <UserCard v-for="user in users" :key="`user-${user.id}`" :name="user.name" />
  </div>
</template>
<style>
.gutters {
  padding: 0px 2rem;
}
</style>
