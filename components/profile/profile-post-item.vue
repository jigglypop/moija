<template>
  <div class="item-bottom" v-if="posts">
    <nuxt-link :to="`/post/${post.id}`" v-for="post in posts" :key="post.id" class="innerpost">
      <div class="list-post-item-wrapper">
        <div class="top">
          <h6 class="titles">{{ post.title }}</h6>
          <div>
            <h6 v-if="post.createdAt" class="createdAt">{{ getDateToString(post.createdAt) }}</h6>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getDateToString } from '../common/getDateToString'

export default Vue.extend({
  name: 'profile-post-item',
  data() {
    return {
      getDateToString: getDateToString
    }
  },
  props:{
    posts: Array,
  },
})
</script>

<style scoped>
  .item-bottom{
    grid-row: 2/3;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:  flex-start;
    text-align: center;
  }

  .borderset{
    position: relative;
  }
  .border-avatar{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .innerpost {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
  .list-post-item-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid white;
    padding: 4px;
  }
  .top {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  .titles {
    font-size: 20px;
    font-weight: 800;
  }
  .createdAt{
    color: grey;
    font-size: 10px;
    font-weight: 800;
  }

</style>
