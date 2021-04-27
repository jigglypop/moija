<template>
  <div class="profileouter">
    <div v-if="check && check.data && profile.data" class="profileinner">
      <div class="top">
        <div class="top-left">
          <profile-avatar :width="'200px'" :height="'200px'" :permission="profile.data.permission"></profile-avatar>
          <h1 class="nickname">{{profile.data.nickname}}</h1>
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
      <h1>잠시만 기다려주세요</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import ProfileAvatar from '../common/profile-avatar.vue'
import MaincategoryItem from './maincategory-item.vue'

export default Vue.extend({
  name: 'maincategory-component',
  components: { MaincategoryItem, ProfileAvatar },
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
  created() {
    console.log(this.profile)
  }
})
</script>

<style scoped>
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
