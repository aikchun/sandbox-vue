<script>
export default {
  data: () => ({
    pokedex: [1, 2, 3]
  }),
  methods: {
    async fetchPokemon() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        this.pokedex = await response.json()
      } catch (e) {
        console.log(e)
      }
    }
  },
  created() {
    this.fetchPokemon()
  }
}
</script>
<template>
  <h1>Brand new app</h1>
  <pre>{{ pokedex }}</pre>
  <button type="button" @click="fetchPokemon">Fetch Pokemon</button>
</template>
<style></style>
