<template>
  <div>
    <h4>{{ item.id }}</h4>
    <h4>{{ item.name }}</h4>
    <h4>{{ item.image }}</h4>
  </div>
</template>

<script lang="ts">
export default {
  name:'main-item',
  props: {
    item : Object
  },
}
</script>

<style scoped>


</style>
