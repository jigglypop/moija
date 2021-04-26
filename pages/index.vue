<template>
  <div>
    <main-component></main-component>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import MainComponent from '../components/main/main-component.vue'

export default Vue.extend({
  components:{
    MainComponent
  },
  data() {
    return {
      result: '',
    }
  },
  fetch(){
    console.log('fetch')
  },
  methods: {
    sayHi(someone: string) {
      this.result = 'hello ' + someone;
    }
  },
  created() {
    this.sayHi("10");
  },
})
</script>

<style scoped>
* {
  box-sizing: border-box;
}
</style>
