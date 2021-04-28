<template>
  <button class="glass-button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name:"wave-button",
  props: {
    text: String,
  }
})
</script>

<style scoped>
  .glass-button {
    text-decoration: none;
    width: 70%;
    font-size: 20px;
    font-weight: 800;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    background-color: #ffe259;
    color: black;
  }

  .glass-button:hover {
    background-color: #f3f9a7;
  }

  .glass-button:before {
    content: "";
    background-color: white;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    position: absolute;
    transform: translateX(-100%) rotate(45deg);
    transition: all 0.3s;
  }

  .glass-button:hover:before {
    transform: translateX(100%) rotate(45deg);
  }
</style>
