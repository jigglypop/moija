<template>
  <button class="wave-button" :style="styles" >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name:"wave-button",
  props: {
    text: String,
    styles: Object,
  },
  mounted(){
    console.log(this.styles)
  }
})
</script>

<style scoped>
  .wave-button {
    border: none;
    padding: 12px 30px;
    margin: 10px;
    color: black;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    background: #ffe259;
    cursor: pointer;
    position: relative;
  }
  .wave-button:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    top: -5px;
    left: -5px;
    border-top: 2px solid #ffe259;
    border-left: 2px solid #ffe259;
    transition: all 0.25s;
  }

  .wave-button:hover:before,
  .wave-button:hover:after {
    height: 100%;
    width: 100%;
  }

  .wave-button:after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    bottom: -5px;
    right: -5px;
    border-bottom: 2px solid #ffe259;
    border-right: 2px solid #ffe259;
    transition: all 0.25s;
  }
</style>
