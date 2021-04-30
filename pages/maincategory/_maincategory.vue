<template>
  <wrapper-component>
    <maincategory-component></maincategory-component>
  </wrapper-component>
</template>

<script lang="ts">
import MaincategoryComponent from '~/components/maincategory/maincategory-component.vue'
import wrapperComponent from '~/components/wrapper/wrapper-component.vue'
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  components: { wrapperComponent, MaincategoryComponent },
  methods : {
    ...mapMutations({
      CLEARLOCATION: 'location/CLEAR',
    })
  },
  destroyed(){
    this.CLEARLOCATION()
  },
  head() {
    return {
      title: "모이자 | 메인카테고리 ",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description'
        }
      ]
    }
  }
})
</script>

<style scoped>

</style>
