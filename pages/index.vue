<template>
  <div>
    <main-component :maincategory="maincategory"></main-component>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import MainComponent from '../components/main/main-component.vue'
import { mapActions, mapState } from 'vuex'

export default Vue.extend({
  components:{
    MainComponent
  },
  created(){
    this.MAINCATEGORY()
  },
  computed: {
    ...mapState(['maincategory'])
  },
  methods: {
    ...mapActions({
      MAINCATEGORY: 'maincategory/MAINCATEGORY'
    }),
  }
})
</script>

<style scoped>
* {
  box-sizing: border-box;
}
</style>
