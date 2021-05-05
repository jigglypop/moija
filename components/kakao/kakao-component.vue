<template>
  <div class="kakao-outer">
    <loading-component></loading-component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import loadingComponent from '../common/loading-component.vue'

export default Vue.extend({
  components: { loadingComponent },
  head: {
    script: [
      { src: 'https://developers.kakao.com/sdk/js/kakao.min.js' }
    ]
  },
  name: 'kakao-component',
  computed:{
  },
})
</script>

<style scoped>
  .kakao-outer{
    width: 100%;
    height: 100%;
    margin: 5%;
    background-color: black;
  }
</style>
