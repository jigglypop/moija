<template>
  <wrapper-component>
    <kakao-component></kakao-component>
  </wrapper-component>
</template>

<script>
import Vue from 'vue'
import kakaoComponent from '~/components/kakao/kakao-component.vue'
import { kakaoApi } from '../../api/kakao'
import { mapState, mapActions, mapMutations } from 'vuex'
import { SERVER_URL } from '~/api/constants'

export default Vue.extend({
  components: { kakaoComponent },
  head: {
    script: [
      { src: 'https://developers.kakao.com/sdk/js/kakao.min.js' }
    ]
  },
  data(){
    return {
      username: '',
      password:'',
      imageurl: '',
    }
  },
  computed:{
    ...mapState(['register', 'login', 'check'])
  },
  methods:{
    ...mapActions({
      REGISTER: 'register/REGISTER',
      LOGIN: 'login/LOGIN',
      CHECK: 'check/CHECK'
    }),
    ...mapMutations({
      OPENLOGIN: 'modal/LOGIN',
      CLOSE: 'modal/CLOSE',
      CLEARREGISTER: 'register/CLEAR'
    }),
    async onRegister(){
      await this.REGISTER({
        username: this.$data.username,
        email: 'kakao',
        password: this.$data.password,
        imageurl: this.$data.imageurl
      })
      if (this.register.data){
        await this.CHECK()
        if (this.check.data){
          await this.CLOSE()
          await this.$router.push('/')
          const leftbar = document.querySelector('.leftbar')
          const nav = document.querySelector('.nav')
          leftbar?.classList.add('push')
          nav?.classList.add('push')
        }
      } else if (this.register.error){
        await this.LOGIN({
          username: this.$data.username,
          password: this.$data.password.toString()
        })
        if (this.login.data){
          await this.CHECK()
        }
        if (this.check.data){
          await this.CLOSE()
          await this.$router.push('/')
          const leftbar = document.querySelector('.leftbar')
          const nav = document.querySelector('.nav')
          leftbar?.classList.add('push')
          nav?.classList.add('push')
        }
      }
    },
    kakaoLogin(){
      window.Kakao.Auth.login({
        redirectUri: SERVER_URL + '/kakao',
      })
    }
  },
  async mounted(){
    const code = this.$route.query.code
    if (code){
      const ACCESS_TOKEN = await kakaoApi(code)
      if (ACCESS_TOKEN){
        let data = '';
        let that = this
        if (!window.Kakao.Auth){
          await window.Kakao.init(process.env.NUXT_ENV_KAKAO_REST_API_KEY)
        }
        await window.Kakao.Auth.setAccessToken(ACCESS_TOKEN);
        await window.Kakao.API.request({
          url: "/v2/user/me",
          success: function(res){
            that.$data.username = res.properties.nickname
            that.$data.password = res.id
            that.$data.imageurl = res.properties.profile_image

            that.onRegister()
          }
        });
      }
    }
  },
})
</script>
<style scoped>
#kakao-login{
  margin-top: 500px;
}
</style>
