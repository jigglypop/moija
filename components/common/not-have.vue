<template>
  <div class="nothave-outer">
      <pulse-blob-big :onClick="onClick">
        <h1>MOIJA</h1>
        <h4>NOT FOUND</h4>
      </pulse-blob-big>
    <div>
      <h1 class="nothave-text">결과가 없습니다</h1>
    </div>
  </div>

</template>

<script lang="ts">
import PulseBlobBig from './pulse-blob-big.vue'
export default {
  components: { PulseBlobBig },
  name:'not-have'
}
</script>

<style scoped>
  h1, h4{
    color: black;
    font-weight: 800;
  }
  .nothave-outer{
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .nothave-text{
    font-size: 20px;
    color: #ffe259;
    font-weight: 800;
  }
  .nothave {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
</style>
