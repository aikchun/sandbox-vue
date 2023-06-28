<script setup>
import { defineProps, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useCountStore } from '../composables/countStore.js'
import { useCountStore as useNewCountStore } from '@/stores/CountStore.js'
defineProps({
  name: {
    type: String,
    required: true
  }
})
const color = 'blue'

const { localCount, incrementLocalCount } = useCountStore()
const router = useRouter()

const newCountStore = useNewCountStore()

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
    <div>New Count: {{ newCountStore.count }}</div>
    <div>New Double Count: {{ newCountStore.doubleCount }}</div>
    <button type="button" :class="$style.button" @click="incrementLocalCount">fav</button>
    <button type="button" :class="$style.button" @click="newCountStore.increment">
      New incrementCount
    </button>
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
