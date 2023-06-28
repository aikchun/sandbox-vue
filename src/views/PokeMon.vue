<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const {
  params: { id }
} = route
</script>
<template>
  <div>Pokemon: {{ id }}</div>
</template>
<style></style>
