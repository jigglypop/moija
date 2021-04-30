<template>
  <button class="blob white" >
    <slot>
    </slot>
  </button>
</template>

<script>
export default {
  name: "pulse-blob-big",
};
</script>

<style scoped>
.blob {
  background: black;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  margin: 20px;
  width: 200px;
  height: 200px;
  transform: scale(1);
  background: #ffe259;
  position: relative;
}



</style>
