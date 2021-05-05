<template>
  <div>
    <main-component :maincategory="maincategory"></main-component>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import MainComponent from '../components/main/main-component.vue'
import { mapActions, mapState, mapMutations } from 'vuex'

export default Vue.extend({
  components:{
    MainComponent
  },
  head: {
    script: [
      { src: 'https://developers.kakao.com/sdk/js/kakao.min.js' }
    ]
  },
  async fetch({ store } ){
    store.dispatch('maincategory/MAINCATEGORY')
  },
  computed: {
    ...mapState(['maincategory'])
  },
  methods: {
    ...mapMutations({
      SETMAINCATEGORY: 'maincategory/SETMAINCATEGORY'
    }),
    ...mapActions({
      MAINCATEGORY: 'maincategory/MAINCATEGORY'
    }),
  },
})
</script>

<style scoped>
* {
  box-sizing: border-box;
}
</style>
