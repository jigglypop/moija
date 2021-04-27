<template>
  <wrapper-component>
    <maincategory-component></maincategory-component>
  </wrapper-component>
</template>

<script lang="ts">
import MaincategoryComponent from '~/components/maincategory/maincategory-component.vue'
import wrapperComponent from '~/components/wrapper/wrapper-component.vue'
import Vue from 'vue'

export default Vue.extend({
  components: { wrapperComponent, MaincategoryComponent },
})
</script>

<style scoped>

</style>
