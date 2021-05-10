<template>
  <div class="mainouter">
    <div class="main-top">
      <no-ssr>
        <rion :maincategory="maincategory" class="rion-wrapper"></rion>
      </no-ssr>
      <main-top-component :maincategory="maincategory" class="category-wrapper"></main-top-component>
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
import Rion from '../common/rion.vue'
import MainBottomComponent from './main-bottom-component.vue'
import MainMidComponent from './main-mid-component.vue'
import MainTopComponent from './main-top-component.vue'


export default {
  name: 'MainComponent',
  components:{
    MainMidComponent,
    MainBottomComponent,
    Rion,
    MainTopComponent,
  },
  props :{
    maincategory : Object,
  },
}
</script>

<style scoped>
  .mainouter{
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    row-gap: 100px;
    justify-content: center;
    align-content: center;
  }

  .main-top{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 90vw;
    height: 100vh;
    position: relative;
    grid-row:1/2;
    margin-top: 5%;
    border-style: solid;
    border-image: linear-gradient(45deg, #ffe259, #ffa751);
    border-image-slice: 1;
    border-image-width: 2px;
  }
  .category-wrapper{
    display: none;
  }

  .main-mid {
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;
    grid-row: 2/3;

    border-style: solid;
    border-image: linear-gradient(45deg, #ffe259, #ffa751);
    border-image-slice: 1;
    border-image-width: 2px;
  }
  .main-bottom {
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;
    grid-row: 3/4;

    border-style: solid;
    border-image: linear-gradient(45deg, #ffe259, #ffa751);
    border-image-slice: 1;
    border-image-width: 2px;
  }

  @media only screen and (max-width: 1200px) {
    .rion-wrapper{
      display: none;
    }
    .category-wrapper{
      display:grid;
    }
    .main-top{
      display: flex;
      height: 120vh;
    }
  }
  @media only screen and (max-width: 900px) {
    .main-top{
      height: 140vh;
    }
  }
  @media only screen and (max-width: 700px) {
    .main-top{
      height: 180vh;
    }
  }
</style>
