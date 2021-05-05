<template>
  <div class="leftbar">
      <div class="top">
        <div v-if="check.data" class="top-inner">
          <div class="top-top">
            <border-avatar
              :styles="{ transform: 'scale(1.8)' }"
              :permission="check.data.permission"
              :image="check.data.imageurl">
            </border-avatar>
          </div>
          <div class="top-bottom">
            <h5>{{ check.data.nickname }}</h5>
            <h6>{{ check.data.email }}</h6>
          </div>
        </div>
        <div v-else class="top-inner">
          <div class="top-top">
          </div>
          <div class="top-bottom">
            <h3>MOIJA</h3>
            <h4>세상의 모든 모임</h4>
          </div>
        </div>
      </div>
      <div class="mid" >
        <div v-if="maincategory.data">
          <div v-for="item in maincategory.data" :key="item.id">
            <nuxt-link :to="`/maincategory/${item.id}`">
              <div class="main-item">
                <div class="item-name" >
                  <h4 class="item-text">{{ item.name }}</h4>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div v-else></div>
      </div>
      <div class="bottom">
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapState } from 'vuex'
import BorderAvatar from '../common/border-avatar.vue'

export default Vue.extend({
  components: { BorderAvatar },
  name:"inner-component",
  props:{
    onClick: Function
  },
  computed:{
    ...mapState(['check', 'maincategory'])
  }
})
</script>

<style scoped>
  .leftbar{
    position: fixed;
    top:0;
    left:0;
    width: 200px;
    height: 100vh;
    background: linear-gradient(20deg, rgba(172, 0, 255, 0.8) 46%, rgba(0, 207, 255, 0.8) 100%);
    transition: all 0.5s ease-in-out;
    transform: translateX(-200px);
    z-index: 3;
    display: grid;
    grid-template-rows: 200px 1fr 1fr;
  }
  .top{
    grid-row: 1/2;
  }
  .top-inner{
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: 1fr 1fr;
  }
  .top-top{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    grid-row:1/2;
  }
  .top-bottom{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-row:2/3;
    line-height: 200%;
  }
  .mid{
    grid-row: 2/3;
    position: relative;
  }
  .main-item{
    position: relative;
    height: 30px;
    overflow: hidden;
    margin: 0 20px;
    transition: all .1s ease-in-out;
    background-color: black;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .background {
    width: 100%;
  }
  .main-item:hover{
    border-style: solid;
    border-image: linear-gradient(45deg, #ffe259, #ffa751);
    border-image-slice: 1;
    border-image-width: 2px;
    box-shadow: 0 0 10px #ffe259;
  }
  .item-name {
    position: absolute;
    color: white;
    font-size: 12px;
    font-weight: 800;
    text-shadow: 2px 2px 2px black;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .bottom{
    grid-row: 3/4;
  }
  @media only screen and (max-width: 1200px) {
    .leftbar{
      width: 150px;
    }
    .item-name {
      width: 100%;
      font-size: 10px;
    }
    .main-item{
      margin: 0 10px;
    }
  }
  @media only screen and (max-width: 600px) {
    .leftbar{
      width: 100px;
    }
    .item-name {
      width: 100%;
      font-size: 9px;
    }
    .top {
      display: none;
    }
    .main-item{
      margin: 0;

    }
  }
</style>
