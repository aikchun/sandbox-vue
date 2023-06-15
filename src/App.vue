<script>
import BaseCounter from './components/BaseCounter.vue'
import CharacterCard from './components/CharacterCard.vue'

export default {
  components: {
    BaseCounter,
    CharacterCard
  },
  data() {
    return {
      count: 10,
      characters: [
        {
          name: 'Chandler Bing',
          hobbies: ['Watch TV', 'Feed the ducks'],
          isFavorite: false
        },
        {
          name: 'Joey Tribbiani',
          hobbies: ['Watch TV', 'Feed the ducks'],
          isFavorite: false
        }
      ],
      favoriteCharacters: []
    }
  },
  methods: {
    favoriteCharacter(payload) {
      this.favoriteCharacters.push(payload)
    }
  }
}
</script>

<template>
  <h1>Count: {{ count }}</h1>

  <strong>Friends</strong>
  <ul>
    <li v-for="character in characters" :key="`${character.name}`">
      <CharacterCard :character="character" @favorite-character="favoriteCharacter" />
    </li>
  </ul>
  <h2>Favorites</h2>
  <ul>
    <li v-for="character in favoriteCharacters" :key="character.name">
      {{ character.name }}
    </li>
  </ul>

  <BaseCounter />
</template>
