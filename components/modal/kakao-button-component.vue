<template>
  <button @click="kakaoLogin" class="kakao-button">
    <h6 class="buttontext">카카오 아이디로 회원가입 / 로그인</h6>
  </button>
</template>

<script>
import Vue from 'vue'
import { SERVER_URL } from '~/api/constants'

export default Vue.extend({
  name:"kakao-button-component",
  head: {
    script: [
      { src: 'https://developers.kakao.com/sdk/js/kakao.min.js' }
    ]
  },
  methods:{
    async kakaoLogin(){
      await window.Kakao.Auth.login({
        redirectUri: SERVER_URL + '/kakao',
      })
    }
  }
})
</script>

<style scoped>
  .kakao-button {
    text-decoration: none;
    width: 100%;
    margin: 10px;
    padding: 5px;
    font-size: 20px;
    font-weight: 800;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    color: black;
    background-image: linear-gradient(45deg, #ffe259, #f3f9a7);
    border-radius: 5px;
  }
  .kakaotalk{
    color: #603813;
  }
  .buttontext{
    padding: 10px;
  }
  .kakao-button:hover {
    background-color: #f3f9a7;
  }
  .kakao-button:before {
    content: "";
    background-color: white;
    top: 0;
    left: 0;
    width: 200%;
    height: 50px;
    position: absolute;
    transform: translateX(-100%) rotate(45deg);
    transition: all 0.3s;
  }
  .kakao-button:hover:before {
    transform: translateX(100%) rotate(45deg);
  }
</style>
