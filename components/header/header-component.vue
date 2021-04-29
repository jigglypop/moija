<template>
  <div>
    <nav class="nav">
      <div class="header-container">
        <div class="headerdiv">
          <div class="headerleft">
            <div class="headerleftitem hamberger">
              <pulse-blob :onClick="onClick"><i class="fas fa-bars hamberger"></i></pulse-blob>
            </div>
              <div class="headerleftitem">
                <nuxt-link to="/">
                  <img :src="require('~/assets/logo.png')" class="logoimage">
                </nuxt-link>
              </div>
              <div class="headerleftitem">
                <nuxt-link to="/">
                  <h1 class="logotext">
                    <h2 class="logoundertext">MOIJA</h2>
                    세상의 모든 모임
                  </h1>
                </nuxt-link>
              </div>
          </div>
        </div>
        <div v-if="check.data" class="header-right">
          <div class="headerdiv">
            <user-component :profile="check.data"></user-component>
          </div>
          <div class="headerdiv">
            <a @click="onLogout"><i class="logout fas fa-sign-out-alt fa-2x"></i></a>
          </div>
        </div>
        <div v-else class="header-right">
          <div class="headerdiv">
            <a @click="openRegister"><h1 class="righttext">회원가입</h1></a>
          </div>
          <div class="headerdiv">
            <a @click="openLogin"><h1 class="righttext">로그인</h1></a>
          </div>
        </div>
      </div>
    </nav>
    <inner-component></inner-component>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import BorderAvatar from '../common/border-avatar.vue'
import { createToast } from '../common/createToast'
import pulseBlob from '../common/pulse-blob.vue'
import UserComponent from '../user/user-component.vue'
import InnerComponent from './inner-component.vue'

export default {
  components: {
    pulseBlob,
    BorderAvatar,
    UserComponent,
    InnerComponent
  },
  name:'header-component',
  computed:{
    ...mapState(['check', 'maincategory'])
  },
  methods: {
    ...mapMutations({
      REGISTER: 'modal/REGISTER',
      LOGIN: 'modal/LOGIN',
    }),
    ...mapActions({
      CHECK: 'check/CHECK',
    }),
    openRegister(){
      this.REGISTER()
    },
    openLogin(){
      this.LOGIN()
    },
    async onLogout(){
      await localStorage.clear()
      await this.CHECK()
      await this.$router.push('/')
      await createToast('로그아웃')
    },
    onClick(){
      const leftbar = document.querySelector('.leftbar')
      const nav = document.querySelector('.nav')
      leftbar.classList.toggle('push')
      nav.classList.toggle('push')
    }
  },
  mounted(){
    const nav = document.querySelector(".nav");
    const fixNav = () => {
      if (window.scrollY > 50) {
        nav.classList.add("colors");
      } else {
        nav.classList.remove("colors");
      }
    };
    window.addEventListener("scroll", fixNav);
  }
}
</script>


<style scoped>
  .headerleftitem.hamberger{
    color: black;
  }

  .leftbar.push{
    transform: translateX(0);
  }
  .left-button{
    top: 50px;
    grid-row: 1/2;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .left-inner{
    grid-row: 2/3;
  }
  .headerdiv {
    font-size: 15px;
    display: inline-block;
    vertical-align: middle;
  }
  .headerdiv.button{
    position: absolute;
    z-index: 10;
  }
  .headerleft{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .header-right{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
  }
  .header-container {
    position: relative;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease-in-out;
    transition: padding 0.3s ease-in-out;
  }
  .nav {
    padding: 5%;
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: all 0.5s ease-in-out;
    z-index: 4;
  }
  .nav.push{
    left: 200px;
  }
  .nav.colors {
    padding: 0;
    background-color: black;
    z-index: 3;
  }
  .logoimage{
    width: 30px;
  }
  .nav .logotext {
    font-size: 10px;
    font-weight: 800;
  }
  .logoundertext{
    margin: 0;
  }
  .logout{
    transition: all 0.3s ease-in-out;
  }
  .logout:hover{
    color:#ffe259;
    cursor: pointer;
  }
  .nav h1 {
    color: #fff;
    text-decoration: none;
    font-size: 12px;
    padding: 10px;
    font-weight: 800;
    transition: all .3s ease-in-out;
    cursor: pointer;
  }
  .nav h1:hover {
    color: #ffe259;
    border-bottom: 2px solid#ffe259;
  }
  @media only screen and (max-width: 1200px) {
    .nav.push{
      left: 150px;
    }
    .logotext{
      display: none;
    }
    .logoimage{
      width: 35px;
    }
  }
  @media only screen and (max-width: 600px) {
    .nav.push{
      left: 100px;
    }
    .logotext{
      display: none;
    }
    .logoimage{
      width: 40px;
    }
  }
</style>
