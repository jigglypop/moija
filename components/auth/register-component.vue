<template>
  <form @submit.prevent="onRegister">
    <label><input v-model="username" placeholder="아이디"/></label>
    <label><input v-model="email" placeholder="이메일"/></label>
    <label><input v-model="password" placeholder="비밀번호" type="password"/></label>
    <h5 class="error">{{ register.error }}</h5>
    <button type="submit" class="wave-button"><h4>회원가입</h4></button>
    <h5>이미 아이디가 있으신가요? <span class="move" @click="openLogin">로그인</span></h5>
  </form>
</template>

<script lang="ts">
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name:'register-component',
  data(){
    return {
      username: '',
      email:'',
      password:'',
    }
  },
  computed:{
    ...mapState(['register', 'check'])
  },
  methods:{
    ...mapActions({
      REGISTER: 'register/REGISTER',
      CHECK: 'check/CHECK'
    }),
    ...mapMutations({
      OPENREGISTER: 'modal/REGISTER',
      OPENLOGIN: 'modal/LOGIN',
      CLOSE: 'modal/CLOSE'
    }),
    openRegister(){
      this.OPENREGISTER()
    },
    openLogin(){
      this.OPENLOGIN()
    },
    async onRegister(){
      await this.REGISTER({
        username: this.$data.username,
        email: this.$data.email,
        password: this.$data.password
      })
      if (this.register.data){
        await this.CHECK()
      }
      if (this.check.data){
        await this.CLOSE()
      }
    }
  }
}
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
  .wave-button {
    border: none;
    padding: 12px 30px;
    margin: 10px;
    background-color: #ffe259;
    color: black;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
  }
  .wave-button:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    top: -5px;
    left: -5px;
    border-top: 2px solid #ffe259;
    border-left: 2px solid #ffe259;
    transition: all 0.25s;
  }

  .wave-button:hover:before,
  .wave-button:hover:after {
    height: 100%;
    width: 100%;
  }

  .wave-button:after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    bottom: -5px;
    right: -5px;
    border-bottom: 2px solid #ffe259;
    border-right: 2px solid #ffe259;
    transition: all 0.25s;
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
