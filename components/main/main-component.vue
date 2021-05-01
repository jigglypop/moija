<template>
  <div class="mainouter">
    <div class="mainwrapper">
      <div class="main">
        <div class="main-item" v-for="item in maincategory.data" :key="item.id">
          <nuxt-link :to="`/maincategory/${item.id}`">
          <div class="item-name">
            <h4 >{{ item.name }}</h4>
          </div>
          <div>
            <img :src="require(`~/assets/maincategory/${item.image}`)" class="background"/>
          </div>
          </nuxt-link>
        </div>
      </div>
      <div class="mainunder">
        <h1 class="titletext">MOIJA</h1>
        <h2 class="subtitletext">모이자</h2>
        <h4 class="undertext">세상의 모든 모임, 내 근처의 모임을 만나보세요</h4>
      </div>
    </div>

    <div class="main-mid">
      <main-mid-component></main-mid-component>
    </div>


    <div class="main-bottom">
      <main-bottom-component></main-bottom-component>
    </div>
  </div>
</template>

<script lang="ts">
import MainBottomComponent from './main-bottom-component.vue'
import MainMidComponent from './main-mid-component.vue'
export default {
  name: 'MainComponent',
  components:{
    MainMidComponent,
    MainBottomComponent
  },
  props :{
    maincategory : Object
  },
}
</script>

<style scoped>
  .mainouter{
    /* height: 300vh; */
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
  }
  .mainwrapper{
    grid-column:1/2;
    height: 100vh;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  .mainunder{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    grid-column: 2/3;
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
  .main {
    grid-column: 1/2;
    height: 60vh;
    padding: 10vw 2vw 10vw 10vw;
    display: grid;
    justify-content: center;
    text-align: center;
    align-items: center;
    grid-template-columns: 200px 200px 200px 200px;
    grid-template-rows: 200px 200px;
  }
  .main-item{
    position: relative;
    width: 180px;
    height: 180px;
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
  .item-name {
    position: absolute;
    font-size: 14px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .background {
    object-fit: cover;
  }

  .main-mid {
    position: relative;
    grid-row: 2/3;
  }
  .main-bottom {
    position: relative;
    grid-row: 3/4;
  }
  @media only screen and (max-width: 1200px) {
  .main {
      grid-template-columns: 200px 200px 200px;
      grid-template-rows: 200px 200px  200px;
    }
  }
  @media only screen and (max-width: 600px) {
  .main {
      grid-template-columns: 200px 200px;
      grid-template-rows: 200px 200px  200px  200px;
    }
  }
</style>
