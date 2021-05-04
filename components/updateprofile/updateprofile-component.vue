<template>
  <div class="updateprofileouter">
    <div v-if="profile.data" class="updateprofileinner">
      <div class="top">
        <div class="logotitle">
          <div class="logobox">
            <img :src="require('~/assets/logo.png')" class="logoimage">
          </div>
          <div class="logobox">
            <h1 class="nickname">MOIJA</h1>
          </div>
        </div>
        <h1 class="top-text">세상의 모든 모임</h1>
        <h1 class="email">프로필 변경하기</h1>
      </div>

      <div class="mid" v-if="profile.data">
        <form @submit.prevent="onUpdateProfile">
          <div class="textbox">
            <div class="logobox">
              <h1 class="label">닉네임 입력</h1>
            </div>
          </div>
          <label><input v-model="nickname" placeholder="닉네임"/></label>
          <div class="textbox">
            <div class="logobox">
              <h1 class="label">거주 지역</h1>
            </div>
          </div>
          <select v-model="location" class="selectbox">
            <option v-for="item in location_list" :value="item" :key="item.id">{{ item }}</option>
          </select>
          <div class="textbox">
            <div class="logobox">
              <h1 class="label">프로필 사진 URL</h1>
            </div>
          </div>
          <label><input v-model="imageurl" placeholder="프로필 사진 url"/></label>
          <div class="textbox">
            <div class="logobox">
              <h1 class="label">프로필 자기 소개</h1>
            </div>
          </div>
          <label><textarea v-model="info" placeholder="자기소개"  rows="10"/></label>
          <h5 class="error">{{ updateprofile.error }}</h5>
          <wave-button type="submit"><h4>프로필 변경하기</h4></wave-button>
        </form>
      </div>
    </div>
    <div v-else>
      <loading-component></loading-component>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import LoadingComponent from '../common/loading-component.vue'
import WaveButton from '../common/wave-button.vue'

export const location_list = ["서울", "부산", "대구", "인천", "광주", "대전", "울산", "경기", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주", "세종",]

export default Vue.extend({
  name: 'updateprofile-component',
  components: { LoadingComponent, WaveButton },
  props:{
    profile: Object
  },
  data() {
    return {
      nickname: '',
      location: '서울',
      imageurl: '',
      info: '',
      location_list: location_list
    }
  },
  computed:{
    ...mapState(['check', 'updateprofile'])
  },
  methods:{
    ...mapActions({
      UPDATEPROFILE: 'updateprofile/UPDATEPROFILE',
      CHECK: 'check/CHECK'
    }),
    async onUpdateProfile(){
      await this.UPDATEPROFILE({
        profileId: this.$route.params.updateprofile,
        nickname: this.nickname,
        location: this.location,
        imageurl: this.imageurl,
        info: this.info
      })
      console.log(this.check.data)
      if (this.updateprofile.data){
        console.log(this.check.data)
        console.log(this.updateprofile.data)
        await this.CHECK()
        await this.$router.push(`/profile/${this.updateprofile.data.id}`)
      }
    }
  },
  mounted() {
    if (this.profile.data){
      this.nickname = this.profile.data.nickname ? this.profile.data.nickname : ''
      this.location = this.profile.data.location ? this.profile.data.location : ''
      this.imageurl = this.profile.data.imageurl ? this.profile.data.imageurl : ''
      this.info = this.profile.data.info ? this.profile.data.info : ''
    }
  }
})
</script>

<style scoped>
  .error{
    color: #FF416C;
    margin: 5px;
  }
  .textbox {
    display: flex;
    width: 90%;
    justify-content: flex-start;
    align-items: center;
    margin: 4px;
  }
  .label {
    font-size: 14px;
    font-weight: 800;
    margin: 2px;
    color: grey
  }
  .labelimage{
    width: 20px;
  }
  .updateprofileouter{
    width: 100%;
    height: 100%;
    margin: 10%;
    background-color: black;

  }
  .updateprofileinner{
    position: relative;
    display: grid;
    grid-template-rows: 150px 1fr;
  }
  img {
    width: 40px;
  }
  .top {
    position: relative;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logotitle{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .logobox{
    display: inline-block;
  }
  .nickname {
    font-size: 30px;
    font-weight: 800;
    color: #ffe259;
  }
  .email {
    font-size: 20px;
    font-weight: 800;
  }
  .top-text {
    font-size: 14px;
    font-weight: 800;
    margin: 10px;
    color: grey;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .mid {
    grid-row: 2/3;
    padding: 0 3% 3% 3%;
  }
  input, textarea, select {
    font-weight: 800;
    font-size: 1rem;
    outline: none;
    padding: 1rem;
    margin: 0.5rem;
    width: 70vw;
    box-sizing: border-box;
    border: none;
    border-image-slice: 1;
    background: rgba(255,255,255,0.1);
    color: white;
  }
  select {
    -webkit-appearance: button;
    appearance: button;
    outline: none;
  }
  option {
    font-size: 1rem;
    font-weight: 800;
    height: 20px;
    color: black;
    background: black;
    color: white;
    border:0px;
    outline:0px;
  }


  @media only screen and (max-width: 1200px) {
    form {
      padding: 2% 10% 0 10%;
    }
  }
  @media only screen and (max-width: 600px) {
    form {
      padding: 2% 2% 0 2%;
    }
  }
</style>
