<template>
  <div class="border-outer">
    <div class="glass-border">
    </div>
    <div class="glass-border-inner">
      <slot></slot>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name:"glass-border",
  props: {
    text: String,
  }
})
</script>

<style scoped>
  .border-outer{
    position: relative;
    overflow: hidden;
    width: 180px;
    height: 180px;
  }
  .glass-border {
    text-decoration: none;
    width: 180px;
    height: 180px;
    font-size: 20px;
    font-weight: 800;
    transition: all 0.3s;
    position: relative;
    border: 2px solid #ffe259;
    color: black;
  }

  .glass-border:hover {
    border: 2px solid #f3f9a7;
  }

  .glass-border:before {
    content: "";
    background-color: white;
    top: 0;
    left: 0;
    width: 10%;
    height: 300px;
    position: absolute;
    transition: all 0.3s;
    animation: glass 1s ease-in Infinite reverse;
    z-index: 1;
  }
  .glass-border-inner {
    position: absolute;
    top: 4px;
    left: 4px;
    background-color: black;
    width: 172px;
    height: 172px;
    z-index: 2;
  }

  @keyframes glass {
    from {
      transform: translateX(1600%) rotate(45deg);
    }
    to {
      transform: translateX(-1600%) rotate(45deg);
    }
  }
</style>
