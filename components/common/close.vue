<template>
  <i class="close far fa-times-circle fa-2x" @click="onClick"></i>
</template>

<script lang='ts'>
export default {
  name:"close-component",
  props:{
    onClick: Function
  }
}
</script>

<style scoped>

</style>
