<script setup>
import { defineProps, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useCountStore } from '../composables/countStore.js'
defineProps({
  name: {
    type: String,
    required: true
  }
})
const color = 'blue'

const { localCount, incrementLocalCount } = useCountStore()
const router = useRouter()

watch(localCount, (val) => {
  if (val > 1200) {
    router.push('/')
  }
})
</script>
<template>
  <div :class="$style.card">
    Name: {{ name }}
    <div>{{ localCount }}</div>
    <button type="button" :class="$style.button" @click="incrementLocalCount">fav</button>
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
