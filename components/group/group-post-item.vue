<template>
	<div class="content-wrapper">
    <div v-if="posts" class="content-wrapper">
      <div v-if="posts.length !== 0" class="content-wrapper">
        <div class="content" v-for="item in posts" :key="item.id">
          <div>
            <h6>{{ item.title }}</h6>
          </div>
          <div>
            <h6>
              {{ new Date(item.createdAt).getFullYear() + '년 '
              + new Date(item.createdAt).getMonth() + '월 '
              + new Date(item.createdAt).getDate() + '일 '
              + new Date(item.createdAt).getHours() + '시 '
              + new Date(item.createdAt).getMinutes() + '분 '
              }}
            </h6>
          </div>
        </div>
      </div>
      <div v-else>
        <h6>포스트가 없습니다.</h6>
      </div>
    </div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'group-post-item',
  props :{
    posts: Object,
  },
  computed:{
  },
  mounted(){
  }
})
</script>

<style scoped>
  .content-wrapper{
    width: 100%;
  }
  .content{
    padding: 20px 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 2px solid white;
  }

  @media only screen and (max-width: 1200px) {

  }
  @media only screen and (max-width: 600px) {

  }
</style>
