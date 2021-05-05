<template>
    <div id="kakao-login">
        <button @click="kakaoLogin">
          카카오로그인 페이지
        </button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    head: {
      script: [
        { src: 'https://developers.kakao.com/sdk/js/kakao.min.js' }
      ]
    },
    mounted(){
      window.Kakao.init('0fbd236036dd72a9bebf984217d29e62')
    },
    methods: {
      async kakaoLogin() {
        const REDIRECT_URI = 'http://localhost:8000/kakao/login'
        if (window.Kakao.Auth){
          await window.Kakao.Auth.authorize({
            redirectUri: `${REDIRECT_URI}`,
          })
        }
      },
    }
}
</script>
<style scoped>
#kakao-login{
  margin-top: 500px;
}
</style>
