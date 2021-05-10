<template>
  <div class="main-top-outer">
    <div class="main">
      <div class="main-inner">
        <div class="main-item" v-for="item in maincategory.data" :key="item.id">
          <nuxt-link :to="`/maincategory/${item.id}`">
            <div class="item-name">
              <h4>{{ item.name }}</h4>
            </div>
            <div>
              <img :src="require(`~/assets/maincategory/${item.image}`)" class="background"/>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="main-texttop">
      <h1 class="titletext">MOIJA</h1>
      <h2 class="subtitletext">모이자</h2>
      <h4 class="undertext">세상의 모든 모임, 내 근처의 모임을 만나보세요</h4>
    </div>
  </div>

</template>

<script lang="ts">
export default {
  name: 'main-top-component',
  props :{
    maincategory : Object,
  },
}
</script>

<style scoped>
  .main-top-outer{
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
  }
  .main-texttop{
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .titletext{
    font-size: 70px;
    padding: 0;
  }
  .subtitletext{
    font-size: 20px;
    padding-bottom: 10px;
  }
  .undertext{
    font-size: 11px;
  }
  .main {
    grid-column: 1/2;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  .main-inner{
    display: grid;
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
  @media only screen and (max-width: 1200px) {
    .main-inner {
      grid-template-columns: 200px 200px 200px;
      grid-template-rows: 200px 200px  200px;
    }
  }
  @media only screen and (max-width: 900px) {
    .main-top-outer{
      display: grid;
      grid-template-rows: 1fr 2fr;
    }
    .main{
      grid-row: 2/3;
      grid-column: 1/3;
    }
    .main-texttop{
      grid-row: 1/2;
      grid-column: 1/3;
    }
  }
  @media only screen and (max-width: 700px) {
    .main-top-outer{
      display: grid;
      grid-template-rows: 300px 1fr;
    }
    .titletext{
      font-size: 60px;
      padding: 0;
    }
    .subtitletext{
      font-size: 14px;
      padding-bottom: 10px;
    }
    .undertext{
      font-size: 12px;
    }
    .main-inner {
      grid-template-columns: 150px 150px;
      grid-template-rows: 150px 150px 150px 150px;
    }
    .main-item{
      width: 130px;
      height: 130px;
    }
  }

  @media only screen and (max-width: 400px) {
    .titletext{
      font-size: 50px;
      padding: 0;
    }
    .subtitletext{
      font-size: 12px;
      padding-bottom: 10px;
    }
    .undertext{
      font-size: 10px;
    }
    .main-inner {
      grid-template-columns: 110px 110px;
      grid-template-rows: 110px 110px 110px 110px;
    }
    .main-item{
      width: 100px;
      height: 100px;
    }
  }
</style>
