<template>
	<div class="group-list-post-item-wrapper" v-if="post">
    <div class="top">
      <nuxt-link :to="`/post/${post.id}`">
        <h6 class="titles">{{ post.title }}</h6>
      </nuxt-link>
      <div>
        <h6 v-if="post.createdAt" class="createdAt">{{ getDateToString(this.post.createdAt) }}</h6>
      </div>
    </div>
    <div class="bottom">
      <div v-if="post.user" class="bottom-item">
        <div v-if="post.user.profile">
          <nuxt-link :to="`/profile/${post.user.profile.id}`">
            <small-avatar :image="post.user.profile.imageurl" :permission="post.user.profile.permission"></small-avatar>
          </nuxt-link>
        </div>
        <div v-if="post.user.profile">
          <h6 class="nickname">{{post.user.profile.nickname}}</h6>
        </div>
      </div>
      <div class="bottom-item">
        <div>
          <heart :styles="{ transform : 'scale(0.6)'}"></heart>
        </div>
        <div v-if="post.profiles" class="like">
          <h6 >{{post.profiles.length}}개</h6>
        </div>
        <div>
          <comment-icon :styles="{ transform : 'scale(0.6)'}"></comment-icon>
        </div>
        <div v-if="post.comments" class="comment">
          <h6>{{post.comments.length}}개</h6>
        </div>
      </div>
    </div>




	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import CommentIcon from '../common/comment-icon.vue'
import { getDateToString } from '../common/getDateToString'
import Heart from '../common/heart.vue'
import smallAvatar from '../common/small-avatar.vue'

export default Vue.extend({
  components: { smallAvatar, Heart, CommentIcon },
  name: 'group-list-post-item',
  props :{
    post: Object,
  },
  data() {
    return {
      getDateToString: getDateToString
    }
  },
  computed:{
  },
  mounted(){

  }
})
</script>

<style scoped>
  .group-list-post-item-wrapper {
    position: relative;
    width: 90%;
    height: 100px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    border-bottom: 2px solid white;
    padding: 4px;
  }
  .top {
    grid-row: 1/2;
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

  .bottom {
    grid-row: 2/3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  .bottom-item {
    grid-row: 2/3;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .like{
    color: #ED213A;
  }
  .comment{
    color:#00d2ff;
  }
  @media only screen and (max-width: 1200px) {

  }
  @media only screen and (max-width: 600px) {

  }
</style>
