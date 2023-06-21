<script setup>
import { defineProps } from 'vue'
import { newCount } from '../composables/countStore.js'
defineProps({
  name: {
    type: String,
    required: true
  }
})
const color = 'blue'
</script>
<template>
  <div :class="$style.card">
    Name: {{ name }}
    <div>{{ newCount }}</div>
    <button type="button" :class="$style.button">fav</button>
  </div>
</template>
<style module>
.button {
  padding: 10px;
  border: 1px solid v-bind(color);
}
.card {
  border: 1px solid aquamarine;
  padding: 1rem;
}
.card + .card {
  margin-top: 1rem;
}
</style>
