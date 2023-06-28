import { defineStore } from 'pinia'

export const useUsersStore = defineStore('UsersStore', {
  state: () => ({
    users: []
  }),
  getters: {},
  actions: {
    async fetchUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      this.users = data
    }
  }
})
