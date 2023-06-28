<script setup>
import { useUsersStore } from '@/stores/UsersStore.js'
import UserCard from '../components/UserCard.vue'

const usersStore = useUsersStore()

usersStore.fetchUsers()
</script>
<template>
  <h1>Users</h1>
  <div class="gutters">
    <UserCard v-for="user in usersStore.users" :key="`user-${user.id}`" :name="user.name" />
    <UserCard :name="`Chun`" />
  </div>
</template>
<style>
.gutters {
  padding: 0px 2rem;
}
</style>
