<template>
  <div class="profile-right-component-wrapper"  v-if="profile.data">
    <div class="top-left" v-if="profile.data.followers">
      <div class="item-top"  >
        <h4 class="title-text">팔로워: {{ profile.data.followers.length }}명</h4>
      </div>
      <div class="item-bottom">
        <div class="border-avatar">
          <nuxt-link :to="`/profile/${profile.id}`" v-for="profile in profile.data.followers" :key="profile.id" class="borderset">
            <border-avatar :permission="profile.permission" :image="profile.imageurl"></border-avatar>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="top-right" v-if="profile.data.followings">
      <div class="item-top">
        <h4 class="title-text">팔로잉: {{ profile.data.followings.length }}명</h4>
      </div>
      <div class="item-bottom">
        <div class="border-avatar">
          <nuxt-link :to="`/profile/${profile.id}`" v-for="profile in profile.data.followings" :key="profile.id" class="borderset">
            <border-avatar :permission="profile.permission" :image="profile.imageurl"></border-avatar>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="mid-left" v-if="profile.data.groups">
      <div class="item-top">
        <h4 class="title-text">가입한 그룹: {{ profile.data.groups.length }}개</h4>
      </div>
      <div class="item-bottom">
          <profile-group-item :group="group" v-for="group in profile.data.groups" :key="group.id"></profile-group-item>
      </div>
    </div>
    <div class="mid-right" v-if="profile.data.posts" >
      <div class="item-top">
        <h4 class="title-text">좋아요: {{ profile.data.posts.length }}개</h4>
      </div>
      <profile-post-item :posts="profile.data.posts"></profile-post-item>
    </div>
    <div class="bottom-left">

    </div>

    <div class="bottom-right">

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import BorderAvatar from '../common/border-avatar.vue'
import GlassButton from '../common/glass-button.vue'
import LoadingComponent from '../common/loading-component.vue'
import ProfileAvatar from '../common/profile-avatar.vue'
import WaveButton from '../common/wave-button.vue'
import ProfileGroupItem from './profile-group-item.vue'
import ProfilePostItem from './profile-post-item.vue'

export default Vue.extend({
  name: 'profile-right-component',
  components: { ProfileAvatar, LoadingComponent, WaveButton, GlassButton, BorderAvatar, ProfilePostItem, ProfileGroupItem },
  computed:{
    ...mapState(['profile'])
  },
})
</script>

<style scoped>
  .profile-right-component-wrapper{
    position: relative;
    background-color: black;
    display: grid;
    grid-template-rows: 1fr 2fr;
    grid-template-columns: 1fr 1fr;
  }
  .item-top{
    grid-row: 1/2;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .item-bottom{
    grid-row: 2/3;
    margin: 20px;
  }
  .top-left{
    grid-row: 1/2;
    grid-column: 1/2;
    min-height: 200px;
    border-style: solid;
    border-image: linear-gradient(45deg,#8E2DE2,#4A00E0);
    border-image-slice: 1;
    border-image-width: 2px;
    margin: 20px;
    padding: 10px;

    display: grid;
    grid-template-rows: 50px 1fr;
  }

  .top-right{
    grid-row: 1/2;
    grid-column: 2/3;
    min-height: 200px;

    border-style: solid;
    border-image: linear-gradient(45deg,#8E2DE2,#4A00E0);
    border-image-slice: 1;
    border-image-width: 2px;
    margin: 20px;
    padding: 10px;

    display: grid;
    grid-template-rows: 50px 1fr;
  }
  .mid-left{
    grid-row: 2/4;
    grid-column: 1/2;

    border-style: solid;
    border-image: linear-gradient(45deg,#8E2DE2,#4A00E0);
    border-image-slice: 1;
    border-image-width: 2px;
    margin: 20px;
    padding: 10px;
  }
  .mid-right{
    grid-row: 2/4;
    grid-column: 2/3;
    border-style: solid;
    border-image: linear-gradient(45deg,#8E2DE2,#4A00E0);
    border-image-slice: 1;
    border-image-width: 2px;
    margin: 20px;
    padding: 10px;
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
    width: 100%;
    /* border-bottom: 2px solid white; */
  }

  .title-text{
    font-size: 20px;
    font-weight: 800;
    color: #00d2ff;;
    text-shadow: 0 0 10px #00d2ff;;
  }

  @media only screen and (max-width: 1200px) {
    .profile-right-component-wrapper{
      grid-template-rows: 1fr 1fr 2fr 2fr;
    }
    .top-left{
      grid-row: 1/2;
      grid-column: 1/3;
    }
    .top-right{
      grid-row: 2/3;
      grid-column: 1/3;
    }
    .mid-left{
      grid-row: 3/4;
      grid-column: 1/3;
    }
    .mid-right{
      grid-row: 4/5;
      grid-column: 1/3;
    }
  }
</style>
