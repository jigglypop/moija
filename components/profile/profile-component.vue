<template>
  <div class="profileouter">
    <div v-if="profile.data" class="profileinner">
      <div class="left">
        <div class="left-top">
          <div class="avatar-top">
            <profile-avatar
            :width="'200px'"
            :height="'200px'"
            :permission="profile.data.permission"
            :image="profile.data.imageurl !== null && profile.data.imageurl !== '' ? profile.data.imageurl : null">
            </profile-avatar>
            <h1 class="nickname">{{profile.data.nickname}} </h1>
          </div>
        </div>
        <div class="left-name">
          <h1 class="email">{{profile.data.email}}</h1>
          <h1 class="left-text">{{getDateToString(profile.data.createdAt)}}에 가입</h1>
          <follow-profile
            v-if="check.data && check.data.username !== profile.data.username">
          </follow-profile>
          <glass-button
            v-if="check.data && check.data.username === profile.data.username"
            :styles="{background: '#ffe259' }">
            <nuxt-link :to="`/updateprofile/${profile.data.id}`"><h3>프로필 변경하기</h3></nuxt-link>
          </glass-button>
        </div>
        <div class="left-info">
          <div class="info-wrapper" >
            <h2>{{profile.data.info !== null ? profile.data.info : '자기소개가 없습니다.'}}</h2>
          </div>
        </div>
      </div>
      <div class="right">
        <profile-right-component></profile-right-component>
      </div>
    </div>
    <div v-else>
      <loading-component></loading-component>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { getDateToString } from '../common/getDateToString'
import GlassButton from '../common/glass-button.vue'
import LoadingComponent from '../common/loading-component.vue'
import ProfileAvatar from '../common/profile-avatar.vue'
import WaveButton from '../common/wave-button.vue'
import FollowProfile from '../follow/follow-profile.vue'
import ProfileRightComponent from './profile-right-component.vue'

export default Vue.extend({
  name: 'profile-component',
  components: { ProfileAvatar, LoadingComponent, WaveButton, GlassButton, ProfileRightComponent, FollowProfile },
  props:{
    profile: Object
  },
  data() {
    return {
      maincateogoryId : '',
      getDateToString: getDateToString
    }
  },
  computed:{
    ...mapState(['check'])
  },
})
</script>

<style scoped>
  .profileouter{
    width: 100%;
    height: 100%;
    margin: 5%;
    background-color: black;

  }
  .profileinner{
    position: relative;
    display: grid;
    grid-template-rows: 1fr 1fr;

  }
  .left {
    grid-row: 1/2;
    grid-column: 1/3;
    margin: 0 10%;
    position: relative;
    display: grid;
    grid-template-rows: 3fr 2fr;
    grid-template-columns: 1fr 1fr;
    margin: 30px;
    padding: 10px;
    background: #141414;
  }

  .left-top{
    grid-row: 1/2;
    grid-column: 1/3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  .avatar-top{
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
    padding: 30px;
  }
  .left-name{
    grid-row: 2/3;
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .left-info{
    grid-row: 2/3;
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .nickname {
    font-size: 40px;
    font-weight: 800;
    color: #ffe259;
  }
  .email {
    font-size: 15px;
    margin: 10px;
    font-weight: 800;
  }
  .info-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 200px;
    width: 100%;
    border-style: solid;
    border-image: linear-gradient(45deg,#ffe259, #fff6c7);
    border-image-slice: 1;
    border-image-width: 2px;
    margin: 10px;
    padding: 10px;
    font-size: 12px;
    font-weight: 800;
  }
  .left-text {
    font-size: 12px;
    font-weight: 800;
    color: grey;
    margin: 10px;
  }

  .right{
    position: relative;
    grid-row: 2/3;
    grid-column: 1/3;
  }
  @media only screen and (max-width: 1200px) {
    .profileinner{
      grid-template-rows: 1fr 4fr;
    }
    .left{
      grid-row: 1/2;
      grid-column: 1/3;
    }
    .right{
      grid-row: 2/3;
      grid-column: 1/3;
    }
  }
</style>
