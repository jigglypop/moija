<template>
  <div class="maincategoryouter">
    <maincategory-item></maincategory-item>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import LoadingComponent from '../common/loading-component.vue'
import MaincategoryItem from './maincategory-item.vue'

export default Vue.extend({
  name: 'maincategory-component',
  components: { MaincategoryItem, LoadingComponent },
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

</style>
