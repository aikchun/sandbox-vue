import HomePage from './views/HomePage.vue'
export const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/users',
    component: () => import('./views/UsersPage.vue')
  },
  {
    path: '/login',
    component: () => import('./views/LoginPage.vue')
  },
  {
    path: '/pokedex',
    component: () => import('./views/PokeDex.vue')
  }
]
