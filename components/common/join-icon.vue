<template>
  <i class="fas fa-user-friends fa-sm join" :style="styles"></i>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'join-icon',
  props:{
    styles: Object
  }
})
</script>

<style scoped>
  .join{
    transform: scale(0.8);
    color: #00d2ff;
    border: 2px solid #00d2ff;
    background: #141414;
    border-radius: 50%;
    padding: 10px;
    transition: all 0.3s ease-out;
    box-shadow: 0 0 10px #00d2ff;
  }
  .join:hover{
    cursor: pointer;
    box-shadow: 0 0 20px #00d2ff;
  }
</style>
