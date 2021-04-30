<template>
  <div>
    <div class="modal-wrapper" v-show="modal.openname === 'login'">
      <div class="modal-outer">
        <div class="modal-upper">
          <div>
            <h6>세상의 모든 모임</h6>
          </div>
          <i class="close far fa-times-circle fa-2x" @click="close"></i>
        </div>
        <div class="modal-middle">
          <div class="logo">
            <div>
              <img :src="require('~/assets/logo.png')" class="logoimage">
            </div>
            <div>
              <h1>MOIJA</h1>
            </div>
            <div>
              <h1>로그인</h1>
            </div>
          </div>
          <login-component></login-component>
        </div>
      </div>
    </div>
    <div class="modal-wrapper" v-show="modal.openname === 'register'">
      <div class="modal-outer">
        <div class="modal-upper">
          <div>
            <h6>세상의 모든 모임</h6>
          </div>
          <i class="close far fa-times-circle fa-2x" @click="close"></i>
        </div>
        <div class="modal-middle">
          <div class="logo">
            <div>
              <img :src="require('~/assets/logo.png')" class="logoimage">
            </div>
            <div>
              <h1>MOIJA</h1>
            </div>
            <div>
              <h1>회원가입</h1>
            </div>
          </div>
          <register-component></register-component>
        </div>
      </div>
    </div>
    <div class="modal-wrapper" v-show="modal.openname === 'join'">
      <join-component ></join-component>
    </div>
    <div class="modal-wrapper" v-show="modal.openname === 'delete'">
      <delete-component ></delete-component>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState, mapMutations } from 'vuex'
import LoginComponent from '../auth/login-component.vue'
import RegisterComponent from '../auth/register-component.vue'
import DeleteComponent from './delete-component.vue'
import JoinComponent from './join-component.vue'

export default {
  name: 'modal-component',
  components:{
    LoginComponent,
    RegisterComponent,
    JoinComponent,
    DeleteComponent
  },
  computed: {
    ...mapState(['modal'])
  },
  methods: {
    ...mapMutations({
      CLOSE: 'modal/CLOSE',
    }),
    close(){
      this.CLOSE()
    }
  },
}
</script>

<style scoped>
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .modal-outer {
    background-color: rgba(0, 0, 0, 0.9);
    border-radius:10px;
    width: 60vw;
    height: 70vh;
    display: grid;
    grid-template-rows: 50px 1fr;
  }
  .logoimage{
    width: 50px;
  }
  .logo{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo div{
    margin: 4px;
  }
  .modal-upper {
    grid-row: 1/2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px;
  }
  .close {
    color: #ffe259;
    transition: all .3s ease-in-out;
  }
  .close:hover{
    transform: rotate(360deg);
    cursor: pointer;
  }
</style>
