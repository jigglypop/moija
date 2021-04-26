<template>
  <div class="mainwrapper">
    <div class="main">
      <div class="main-item" v-for="item in maincategory.data" :key="item.id">
        <main-item :item="item"></main-item>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MainItem from './main-item.vue'

export default {
  name: 'MainComponent',
  components:{
    MainItem
  },
  props :{
    maincategory : Object
  },
}
</script>

<style scoped>
  .mainwrapper{
    height: 400vh;
  }
  .main {
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-content: center;
    text-align: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .main-item{
    width: 100%;
    height: 100%;
  }
</style>
