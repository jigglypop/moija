<template>
  <button @click="onClick">{{ text }}</button>
</template>

<script lang="ts">
export default {
  name:"wave-button",
  props: {
    text: String,
    onClick: Function
  }
}
</script>

<style scoped>

</style>
