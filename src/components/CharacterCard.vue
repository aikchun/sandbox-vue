<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  emits: ['favorite-character']
}
</script>
<template>
  <div>
    <div>{{ character }}</div>
    <button type="button" @click="$emit('favorite-character', this.character)">&#11088;</button>
  </div>
</template>
