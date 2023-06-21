<script setup>
import UserCard from './UserCard.vue'
import { reactive } from 'vue'
const state = reactive({
  userList: []
})

async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  return data
}

state.userList = await fetchUsers()
</script>
<template>
  <h1>Users</h1>
  <div class="gutters">
    <UserCard v-for="user in state.userList" :key="`user-${user.id}`" :name="user.name" />
  </div>
</template>
<style>
.gutters {
  padding: 0px 2rem;
}
</style>
