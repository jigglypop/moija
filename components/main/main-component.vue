<template>
  <div class="mainouter">
    <div class="three-toggle"  @click="onToggleThree">
      <h3>{{isThree ? '2D' : '3D'}}</h3>
    </div>
    <div class="main-top">
      <no-ssr>
        <rion :maincategory="maincategory" class="rion-wrapper" v-if="isThree"></rion>
      </no-ssr>
      <main-top-component :maincategory="maincategory" class="category-wrapper" v-if="!isThree"></main-top-component>
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
import Vue from 'vue'
import PulseBlob from '../common/pulse-blob.vue'

export default Vue.extend({
  name: 'MainComponent',
  components:{
    MainMidComponent,
    MainBottomComponent,
    Rion,
    MainTopComponent,
    PulseBlob,
  },
  props :{
    maincategory : Object,
  },
  data(){
    return {
      isThree: true
    }
  },
  methods: {
    onResize() {
      if (window){
        if (window.matchMedia("screen and (min-width: 1200px)").matches && localStorage.getItem('isThree') === 'true'){
          this.isThree = true
        } else{
          this.isThree = false
        }
      }
    },
    onToggleThree(){
      if (window){
        if (window.matchMedia("screen and (min-width: 1200px)").matches){
          if (this.isThree){
            localStorage.setItem('isThree', 'false')
            this.isThree = false
          } else {
            localStorage.setItem('isThree', 'true')
            this.isThree = true
          }
        } else{
          this.isThree = false
        }
      }
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.onResize();
    })
    window.addEventListener('resize', this.onResize)
    if (!localStorage.getItem('isThree')){
      localStorage.setItem('isThree', 'true')
    } else{
      if (localStorage.getItem('isThree') === 'true'){
        this.isThree = true
      } else{
        this.isThree = false
      }
    }
  },

})
</script>

<style scoped>
  .mainouter{
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    row-gap: 100px;
    justify-content: center;
    align-content: center;
  }

  .three-toggle{
    position: fixed;
    bottom: 10px;
    right: 100px;
    margin: 10px;
    padding: 10px;
    z-index: 10;
    cursor: pointer;
    font-size: 12px;
    color: black;
    width: 50px;
    height: 50px;
    background: #ffe259;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
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


  .main-mid {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    text-align: center;
    grid-row: 2/3;
    width: 90vw;
    height: 100vh;
    border-style: solid;
    border-image: linear-gradient(45deg, #ffe259, #ffa751);
    border-image-slice: 1;
    border-image-width: 2px;
  }
  .main-bottom {
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;
    grid-row: 3/4;
    width: 90vw;
    height: 100vh;
    border-style: solid;
    border-image: linear-gradient(45deg, #ffe259, #ffa751);
    border-image-slice: 1;
    border-image-width: 2px;
  }

  @media only screen and (max-width: 1200px) {
    .three-toggle{
      display: none;
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
    .main-mid{
      height: 140vh;
    }
    .main-bottom{
      height: 140vh;
    }
  }
  @media only screen and (max-width: 700px) {
    .main-top{
      height: 140vh;
    }
    .main-mid{
      height: 140vh;
    }
    .main-bottom{
      height: 140vh;
    }
  }
  @media only screen and (max-width: 400px) {
    .main-top{
      height: 120vh;
    }
    .main-mid{
      height: 120vh;
    }
    .main-bottom{
      height: 120vh;
    }
  }
</style>
