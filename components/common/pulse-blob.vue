<template>
  <button class="blob white" @click="onClick">
    <slot>
    </slot>
  </button>
</template>

<script>
export default {
  name: "pulse-blob",
  props: {
    onClick: Function,
  },
};
</script>

<style scoped>
.blob {
  background: black;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  margin: 20px;
  width: 40px;
  height: 40px;
  transform: scale(1);
  animation: pulse-black 2s infinite;
  cursor: pointer;
  position: relative;
}
.blob.white {
  background: #ffe259;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
  animation: pulse-white 2s infinite;
  position: relative;
}

@keyframes pulse-white {
  0% {
    transform: scale(0.8);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }

  100% {
    transform: scale(0.8);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}
</style>
