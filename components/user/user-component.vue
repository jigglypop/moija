<template>
    <div class="user-container">
      <div class="user-div">
        <nuxt-link :to="`/profile/${profile.id}`">
          <border-avatar :permission="profile.permission" :image="profile.imageurl">
          </border-avatar>
        </nuxt-link>
      </div>
      <div class="user-div">
        <nuxt-link :to="`/profile/${profile.id}`"><h1 class="righttext">{{ profile.nickname }}</h1></nuxt-link>
      </div>
    </div>
</template>

<script>
import BorderAvatar from '../common/border-avatar.vue'
import pulseBlob from '../common/pulse-blob.vue'
import Vue from 'vue'

export default Vue.extend({
  name:'user-component',
  props:{
    profile: Object
  },
  components: {
    pulseBlob,
    BorderAvatar,
  },
})
</script>


<style scoped>
  .righttext {
    text-decoration: none;
    font-size: 12px;
    padding: 10px;
    font-weight: 800;
    transition: all .3s ease-in-out;
    cursor: pointer;
  }
  .user-div {
    font-size: 15px;
    display: inline-block;
    vertical-align: middle;
  }
  .user-container {
    position: relative;
  }
</style>
