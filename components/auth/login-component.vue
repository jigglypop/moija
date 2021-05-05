<template>
  <form @submit.prevent="onLogin">
    <h5>처음 방문하였나요? <span class="move" @click="openRegister">회원가입</span></h5>
    <label><input v-model="username" placeholder="아이디"/></label>
    <label><input v-model="password" placeholder="비밀번호" type="password"/></label>
    <kakao-button-component></kakao-button-component>
    <h5 class="error">{{ login.error }}</h5>

    <wave-button type="submit"><h4>로그인</h4></wave-button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions, mapMutations } from 'vuex'
import waveButton from '../common/wave-button.vue'
import KakaoButtonComponent from '../modal/kakao-button-component.vue'

export default Vue.extend({
  components: { waveButton, KakaoButtonComponent },
  name:'login-component',
  data(){
    return {
      username: '',
      password:'',
    }
  },
  computed:{
    ...mapState(['login', 'check'])
  },
  methods:{
    ...mapActions({
      LOGIN: 'login/LOGIN',
      CHECK: 'check/CHECK'
    }),
    ...mapMutations({
      OPENREGISTER: 'modal/REGISTER',
      CLOSE: 'modal/CLOSE'
    }),
    openRegister(){
      this.OPENREGISTER()
    },
    async onLogin(){
      await this.LOGIN({
        username: this.$data.username,
        password: this.$data.password
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
  }
})
</script>

<style scoped>
  form {
    padding: 2% 30% 0 30%;
    width: 100%;
  }
  .error{
    color: #FF416C;
    margin: 5px;
  }
  .move{
    color: #ffe259;
    cursor: pointer;
  }
  input{
    font-weight: 800;
    font-size: 1rem;
    outline: none;
    padding: 1rem;
    margin: 0.5rem;
    width: 100%;
    box-sizing: border-box;
    border-style: solid;
    border-radius: 5px;
    border-image-slice: 1;
    background: none;
    border-color: white;
    color: white;
    caret-color: white;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
	  transition: background-color 5000s ease-in-out 0s;
	  -webkit-transition: background-color 9999s ease-out;
    -webkit-box-shadow: 0 0 0px 1000px #141414 inset !important;
    -webkit-text-fill-color: #fff !important;
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
