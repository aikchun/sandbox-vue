<script>
export default {
  data: () => ({
    currentPage: 'Users'
  }),
  computed: {
    renderPage() {
      return this.currentPage + 'Page'
    }
  },
  methods: {
    showHomePage() {
      this.currentPage = 'Home'
    },
    showLoginPage() {
      this.currentPage = 'Login'
    },
    showUsersPage() {
      this.currentPage = 'Users'
    }
  }
}
</script>

<template>
  <header class="header">
    <span class="logo"> <img src="@/assets/vue-heart.png" width="30" />C'est La Vue </span>
    <nav class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/users">Users</RouterLink>
      <RouterLink to="/pokedex">PokeDex</RouterLink>
    </nav>
  </header>
  <Suspense>
    <RouterView />
    <!-- <component :is="renderPage" /> -->
    <template #fallback> Loading... </template>
  </Suspense>
  <!-- <HomePage v-if="currentPage === 'Home'" /> -->
  <!-- <LoginPage v-else /> -->
</template>

<style>
* {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
}

span.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
}

span.logo img {
  margin-right: 8px;
}

.nav {
  display: flex;
  align-items: center;
}

.nav a {
  padding: 0.5rem;
  font-size: 0.9rem;
}

.nav a:last-child {
  padding-right: 0;
}
</style>
