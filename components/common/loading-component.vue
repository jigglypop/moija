<template>
  <div class="loading-outer">
    <div class="loading">
      <div></div>
    </div>
    <div>
      <h1 class="loading-text">잠시만 기다려주세요</h1>
    </div>
  </div>

</template>

<script lang="ts">
export default {
  name:'loading-component'
}
</script>

<style scoped>
  .loading-outer{
    min-width: 60vw;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .loading-text{
    font-size: 16px;
    color: #ffe259;
    font-weight: 800;
  }
  .loading {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .loading div {
    position: absolute;
    border: 4px solid #ffe259;
    opacity: 1;
    border-radius: 50%;
    animation: loading 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .loading div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes loading {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
</style>
