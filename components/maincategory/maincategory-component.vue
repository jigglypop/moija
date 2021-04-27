<template>
  <div class="maincategoryouter">
    <div v-if="check && check.data">
      <maincategory-item :locationname="check.data.location"></maincategory-item>
    </div>
    <div v-else>
      <h1>잠시만 기다려주세요</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import MaincategoryItem from './maincategory-item.vue'

export default Vue.extend({
  name: 'maincategory-component',
  components: { MaincategoryItem },
  data() {
    return {
      maincateogoryId : ''
    }
  },
  computed:{
    ...mapState(['check'])
  },
})
</script>

<style scoped>
  .maincategoryouter{
    width: 100%;
    height: 100%;
    margin: 10%;
    background-color: black;
  }
  @media only screen and (max-width: 1200px) {

  }
  @media only screen and (max-width: 600px) {

  }
</style>
