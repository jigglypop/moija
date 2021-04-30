<template>
	<div class="innerpost" v-if="post">
    <div>
      <h6>{{ post.title }}</h6>
    </div>
    <div>
      <h6 v-if="post.createdAt">{{ createdat }}</h6>
    </div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getDateToString } from '../common/getDateToString'

export default Vue.extend({
  name: 'group-inner-item',
  props :{
    post: Object,
  },
  computed:{
    createdat(){
      if (this.post){
        return getDateToString(this.post.createdAt)
      }
    }
  },
})
</script>

<style scoped>
  .innerpost {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 2px solid white;
  }


  @media only screen and (max-width: 1200px) {

  }
  @media only screen and (max-width: 600px) {

  }
</style>
