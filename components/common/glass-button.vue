<template>
  <button class="glass-button" :style="styles">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name:"glass-button",
  props: {
    styles: Object,
  }
})
</script>

<style scoped>
  .glass-button {
    text-decoration: none;
    min-width: 80px;
    min-height: 30px;
    font-size: 20px;
    font-weight: 800;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    font-size: 14px;
    font-weight: 800;
    color: black;
    background-color: #ffe259;
    box-shadow: 2px 2px 10px black;
    padding: 0 20px;
  }

  .glass-button:hover {
    box-shadow: 2px 2px 20px black
  }

  .glass-button:before {
    content: "";
    background-color: white;
    top: 0;
    left: 0;
    width: 200%;
    height: 30px;
    position: absolute;
    transform: translateX(-100%) rotate(45deg);
    transition: all 0.3s;
  }

  .glass-button:hover:before {
    transform: translateX(100%) rotate(45deg);
  }
</style>
