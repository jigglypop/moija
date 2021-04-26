<template>
  <div>
    <header-component></header-component>
    <Nuxt />
  </div>
</template>
<script>
import Vue from 'vue'
import HeaderComponent from '../components/header/header-component.vue'

export default Vue.extend({
  components: {
    HeaderComponent
  }
})
</script>


<style>

</style>
