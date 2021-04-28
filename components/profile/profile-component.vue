<template>
  <div class="profileouter">
    <div v-if="profile.data" class="profileinner">
      <div class="top">
        <div class="top-left">
          <profile-avatar
          :width="'200px'"
          :height="'200px'"
          :permission="profile.data.permission"
          :image="profile.data.imageurl !== null && profile.data.imageurl !== '' ? profile.data.imageurl : null">
          </profile-avatar>
          <h1 class="nickname">{{profile.data.nickname}} </h1>
          <glass-button
            class="glassbutton"
            v-if="check.data && check.data.username === profile.data.username">
            <nuxt-link :to="`/updateprofile/${profile.data.id}`"><h4>프로필 변경하기</h4></nuxt-link>
          </glass-button>
          <h1 class="email">{{profile.data.email}}</h1>
          <h1 class="top-text">{{new Date(profile.data.createdAt)}}</h1>
        </div>
        <div class="top-right">

        </div>
      </div>

      <div class="mid">

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
import GlassButton from '../common/glass-button.vue'
import LoadingComponent from '../common/loading-component.vue'
import ProfileAvatar from '../common/profile-avatar.vue'
import WaveButton from '../common/wave-button.vue'

export default Vue.extend({
  name: 'profile-component',
  components: { ProfileAvatar, LoadingComponent, WaveButton, GlassButton },
  props:{
    profile: Object
  },
  data() {
    return {
      maincateogoryId : ''
    }
  },
  computed:{
    ...mapState(['check'])
  },
  methods:{
    onClick(){
      console.log('클릭')
    }
  },
  created() {

  }
})
</script>

<style scoped>
  .glassbutton{
    transform: scale(0.6);
  }
  .profileouter{
    width: 100%;
    height: 100%;
    margin: 10%;
    background-color: black;

  }
  .profileinner{
    position: relative;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .top {
    position: relative;
    grid-row: 1/4;
    grid-column: 1/2;
    display: grid;
    margin: 10%;
  }
  .top-left {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-row:1/2;
    grid-column: 1/2;
    line-height: 4rem;
  }
  .top-right{
  }
  .nickname {
    font-size: 40px;
    font-weight: 800;
    color: #ffe259;
  }
  .email {
    font-size: 25px;
    font-weight: 800;
  }
  .top-text {
    font-size: 12px;
    font-weight: 800;
    color: grey;
  }

  .top-right{

  }
  @media only screen and (max-width: 1200px) {

  }
  @media only screen and (max-width: 600px) {

  }
</style>
