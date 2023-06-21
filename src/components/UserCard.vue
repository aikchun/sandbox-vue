<script setup>
import { defineProps } from 'vue'
import { newCount } from '../composables/countStore.js'
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="user-card">
    Name: {{ name }}
    <div>{{ newCount }}</div>
  </div>
</template>
<style>
.user-card {
  border: 1px solid aquamarine;
  padding: 1rem;
}
.user-card + .user-card {
  margin-top: 1rem;
}
</style>
