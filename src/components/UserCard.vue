<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
<template>
  <div class="user-card">Name: {{ name }}</div>
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
