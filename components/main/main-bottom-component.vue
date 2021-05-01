<template>
  <div class="main-bottom-outer">
    <div class="left">
      <div class="main">
        <div class="main-item" v-for="item in imageurls" :key="item">
          <img :src="require(`~/assets/meet/${item}.png`)" class="background"/>
        </div>
      </div>

    </div>
    <div class="right">
      <h1 class="titletext">MEET</h1>
      <h2 class="subtitletext">근처의 친구들을 만나보세요</h2>
      <h4 class="undertext">세상의 모든 모임, 내 근처의 모임을 만나보세요</h4>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'main-bottom-component',
  data(){
    return {
      imageurls : [1,2,3,4]
    }
  },
  components:{
  },
}
</script>

<style scoped>
  .main-bottom-outer{
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 3%;
    grid-template-columns: 2fr 1fr;
  }
  .main {
    width: 100%;
    display: grid;
    justify-content: center;
    text-align: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .left{
    position: relative;
    grid-column: 1/2;
    display: grid;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  .titletext{
    font-size: 70px;
    padding: 0;
  }
  .subtitletext{
    font-size: 20px;
  }
  .undertext{
    font-size: 11px;
  }

  .right {
    grid-column: 2/3;
    display: grid;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  .location-text-item{
    color: gray;
    margin: 4px;
    padding: 4px;
    border: 2px solid gray;
    transition: all 0.2s ease-in;
  }
  .location-text-item.light{
    color: #ED213A;
    border: 2px solid #ED213A;
    box-shadow: 0 0 20px #ED213A;
  }
  .main-item{
    overflow: hidden;
    transition: all .3s ease-in-out;
    margin: 10px;
    opacity: 0.3;
  }
  .main-item:hover{
    opacity: 1;
    cursor: pointer;
    transform: scale(1.1);
  }
  .background {
    width: 300px;
    height: 200px;
    object-fit: cover;
  }
  @media only screen and (max-width: 1200px) {
  .main {
    }
  }
  @media only screen and (max-width: 600px) {
  .main {
    }
  }
</style>
