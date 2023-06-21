<script setup>
import { useUserList } from '../composables/useUserList.js'
import UserCard from './UserCard.vue'
const userStore = useUserList()

async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  return data
}

userStore.userList = await fetchUsers()
</script>
<template>
  <h1>Users</h1>
  <div class="gutters">
    <UserCard v-for="user in userStore.userList" :key="`user-${user.id}`" :name="user.name" />
    <UserCard :name="`Chun`" />
  </div>
</template>
<style>
.gutters {
  padding: 0px 2rem;
}
</style>
