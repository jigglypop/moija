<template>
  <div class="leftbar">
      <div class="top">
        <div v-if="check.data" class="top-inner">
          <nuxt-link class="top-top" :to="`/profile/${check.data.id}`">
            <border-avatar
              :styles="{ transform: 'scale(1.8)' }"
              :permission="check.data.permission"
              :image="check.data.imageurl">
            </border-avatar>
          </nuxt-link>
          <div class="top-bottom">
            <h5>{{ check.data.nickname }}</h5>
            <h6>{{ check.data.email }}</h6>
            <h4 @click="onLogout" class="righttext">로그아웃</h4>
          </div>

        </div>
        <div v-else class="top-inner">
          <div class="top-top">
          </div>
          <div class="top-bottom">
            <h3>MOIJA</h3>
            <h4>세상의 모든 모임</h4>
            <div class="header-right">
            <div class="headerdiv">
              <a @click="openRegister"><h4 class="righttext">회원가입</h4></a>
            </div>
            <div class="headerdiv">
              <a @click="openLogin"><h4 class="righttext">로그인</h4></a>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div class="mid" >
        <div v-if="maincategory.data">
          <div v-for="item in maincategory.data" :key="item.id">
            <nuxt-link :to="`/maincategory/${item.id}`">
              <div class="main-item">
                <div class="item-name" >
                  <h4 class="item-text">{{ item.name }}</h4>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div v-else></div>
      </div>
      <div class="bottom">
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import BorderAvatar from '../common/border-avatar.vue'
import { mapState, mapMutations, mapActions } from 'vuex'
import { createToast } from '../common/createToast'

export default Vue.extend({
  components: { BorderAvatar },
  name:"inner-component",
  props:{
    onClick: Function
  },
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
  },
})
</script>

<style scoped>
  .headerdiv {
    font-size: 15px;
    display: inline-block;
    vertical-align: middle;
  }
  .headerdiv.button{
    position: absolute;
    z-index: 10;
  }
  .leftbar{
    position: fixed;
    top:0;
    left:0;
    width: 200px;
    height: 100vh;
    background: linear-gradient(20deg, rgba(172, 0, 255, 0.8) 46%, rgba(0, 207, 255, 0.8) 100%);
    transition: all 0.5s ease-in-out;
    transform: translateX(-200px);
    z-index: 3;
    display: grid;
    grid-template-rows: 200px 1fr 1fr;
  }
  .righttext{
    font-size:12px;
    color : #ffe259;
    padding: 2px;
    margin: 0;
    cursor: pointer;
  }
  .top{
    grid-row: 1/2;
  }
  .top-inner{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 2fr;
  }
  .top-top{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    grid-row:1/2;
  }
  .top-bottom{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-row:2/3;
    line-height: 200%;
  }
  .mid{
    grid-row: 2/3;
    position: relative;
  }
  .main-item{
    position: relative;
    height: 30px;
    overflow: hidden;
    margin: 0 20px;
    transition: all .1s ease-in-out;
    background-color: black;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .background {
    width: 100%;
  }
  .main-item:hover{
    border-style: solid;
    border-image: linear-gradient(45deg, #ffe259, #ffa751);
    border-image-slice: 1;
    border-image-width: 2px;
    box-shadow: 0 0 10px #ffe259;
  }
  .item-name {
    position: absolute;
    color: white;
    font-size: 12px;
    font-weight: 800;
    text-shadow: 2px 2px 2px black;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .bottom{
    grid-row: 3/4;
  }
  @media only screen and (max-width: 1200px) {
    .leftbar{
      width: 150px;
    }
    .item-name {
      width: 100%;
      font-size: 10px;
    }
    .main-item{
      margin: 0 10px;
    }
  }

</style>
