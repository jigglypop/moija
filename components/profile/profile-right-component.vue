<template>
  <div class="profile-right-component-wrapper"  v-if="profile.data">
    <div class="top-left" v-if="profile.data.followers">
      <div class="item-top"  >
        <h4>팔로워: {{ profile.data.followers.length }}명</h4>
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
        <h4>팔로잉: {{ profile.data.followings.length }}명</h4>
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
        <h4>가입한 그룹: {{ profile.data.groups.length }}개</h4>
      </div>
      <div class="item-bottom">
        <nuxt-link :to="`/group/${group.id}`" v-for="group in profile.data.groups" :key="group.id" class="innerpost">
          <h5>{{ group.name }}</h5>
        </nuxt-link>
      </div>
    </div>
    <div class="mid-right" v-if="profile.data.posts" >
      <div class="item-top">
        <h4>좋아요: {{ profile.data.posts.length }}개</h4>
      </div>
      <div class="item-bottom">
        <nuxt-link :to="`/post/${post.id}`" v-for="post in profile.data.posts" :key="post.id" class="innerpost">
          <h5>{{ post.title }}</h5>
        </nuxt-link>
      </div>
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

export default Vue.extend({
  name: 'profile-right-component',
  components: { ProfileAvatar, LoadingComponent, WaveButton, GlassButton, BorderAvatar },
  computed:{
    ...mapState(['profile'])
  },
  mounted(){
    console.log(this.profile)
  }
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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:  flex-start;
    text-align: center;
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
    justify-content: space-between;
    width: 100%;
    padding: 10px 0;
    border-bottom: 2px solid white;
  }

  @media only screen and (max-width: 1200px) {

  }
  @media only screen and (max-width: 600px) {

  }
</style>
