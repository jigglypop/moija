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
  // created(){
  //   if (this.maincategory.data === null && this.maincategory.error === ""){
  //     this.MAINCATEGORY()
  //   }
  // },
})
</script>

<style scoped>
* {
  box-sizing: border-box;
}
</style>
