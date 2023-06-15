<script>
export default {
  data() {
    return {
      count: 10
    }
  },
  computed: {
    title() {
      return this.count > 10 ? 'big' : 'small'
    }
  },
  methods: {
    onIncrementClick() {
      this.count += 1
    }
  }
}
</script>
<template>
  <h1>
    {{ title }}
  </h1>
  <div>
    {{ count }}
    <div>
      <button type="button" v-on:click="onIncrementClick">increment</button>
    </div>
  </div>
</template>
