<template>
  <div class="wrapper-outer">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'wrapper-component'
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .wrapper-outer{
    display: flex;
    /* align-items: center; */
    position: relative;
    justify-content: center;
    margin-top: 50px;
    width:100vw;
  }
</style>
