<template>
  <wrapper-component>
    <kakao-component></kakao-component>
  </wrapper-component>
</template>

<script>
import Vue from 'vue'
import kakaoComponent from '~/components/kakao/kakao-component.vue'
import { kakaoApi } from '../../api/kakao'

export default Vue.extend({
  components: { kakaoComponent },
    head: {
      script: [
        { src: 'https://developers.kakao.com/sdk/js/kakao.min.js' }
      ]
    },
    async mounted(){
      window.Kakao.init(process.env.NUXT_ENV_KAKAO_REST_API_KEY)
      const code = this.$route.query.code
      if (code){
        const ACCESS_TOKEN = await kakaoApi(code)
        if (ACCESS_TOKEN){
          let data = '';
          await window.Kakao.Auth.setAccessToken(ACCESS_TOKEN);
          await window.Kakao.API.request({
              url: "/v2/user/me",
              success: function (response) {
                  data = response;
                  console.log(response)
              },
              fail: function (error) {
                  console.log(error);
              },
          });
          console.log('카카오 계정 정보', data);
        }
      }
    },
    methods:{
      kakaoLogin(){
        window.Kakao.Auth.login({
          redirectUri: 'http://localhost:8000/kakao',
        })
      }
    }

})
</script>
<style scoped>
#kakao-login{
  margin-top: 500px;
}
</style>
