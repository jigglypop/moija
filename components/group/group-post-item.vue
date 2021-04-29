<template>
	<div class="content-wrapper">
    <div v-if="posts" class="content-wrapper">
      <div v-if="posts.length !== 0" class="content-wrapper">
        <nuxt-link :to="`/post/${item.id}`" class="content" v-for="item in posts" :key="item.id">
          <group-innerpost-item :post="item"></group-innerpost-item>
        </nuxt-link>
      </div>
      <div v-else>
        <h6>포스트가 없습니다.</h6>
      </div>
    </div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import groupInnerpostItem from './group-innerpost-item.vue'

export default Vue.extend({
  components: { groupInnerpostItem },
  name: 'group-post-item',
  props :{
    posts: Array,
  },
})
</script>

<style scoped>
  .content-wrapper{
    width: 100%;
  }
  .content{
    width: 100%;
  }
  @media only screen and (max-width: 1200px) {

  }
  @media only screen and (max-width: 600px) {

  }
</style>
