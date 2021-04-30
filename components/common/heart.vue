<template>
  <i class="fas fa-heart heart fa-1x" :style="styles"></i>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'heart',
  props:{
    styles: Object
  }
})
</script>

<style scoped>
  .heart{
    color: #ED213A;
    border: 2px solid #ED213A;
    background: #141414;
    border-radius: 50%;
    padding: 10px;
    transition: all 0.3s ease-out;
    box-shadow: 0 0 10px #ED213A;
  }
  .heart:hover{
    cursor: pointer;
    box-shadow: 0 0 20px #ED213A;
  }
</style>
