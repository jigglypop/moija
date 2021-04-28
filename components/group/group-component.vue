<template>
  <div class="groupouter">
    <div v-if="group">
      <div class="groupitemouter">
        <div class="top">
          <div v-if="group.data" class="top-left">
            <div class="main-item">
              <div>
                <img :src="group.data.imageurl" class="background"/>
              </div>
            </div>
          </div>
        </div>
        <div class="mid" v-if="group.data">
          <div class="mid-left">
            <h1 class="grouptitle">{{ group.data.name }}</h1>
            <h3 class="textunder">비공개 그룹</h3>
            <button class="wave-button" @click="onJoin" v-if="!group.isJoin"><h4 >가입하기</h4></button>
            <h3 v-if="group.isJoin">그룹 회원</h3>
          </div>
          <div class="mid-right" >
            <div class="border-avatar" v-if="group.profiles">
              <div v-for="profile in group.profiles" :key="profile.id" class="borderset">
                <border-avatar :permission="profile.permission" :image="profile.imageurl"></border-avatar>
              </div>
              <div v-if="group.isSlice">
                <i class="fas fa-plus fa-x"></i>
              </div>
            </div>
            <h3 class="textunder">{{ group.data.profiles.length}}명의 회원이 가입했습니다</h3>
          </div>
        </div>
        <div class="category">
          <div class="info">
            <div class="label">
              <h6>모임 설명</h6>
            </div>
            <div class="content">
              <h5>{{ group.data.info }}</h5>
            </div>
          </div>
          <div class="category-inner">
            <div v-for="category in group.data.categories" :key="category.id" class="category-item">
              <div class="label">
                <div>
                  <h6>{{ category.name }}</h6>
                </div>
                <button class="small-button">
                  <nuxt-link :to="`/write/${category.id}`"  v-if="group.isJoin">
                    <h6 class="smaal-button-text">글쓰기</h6>
                  </nuxt-link>
                </button>
              </div>
              <div class="content">
                <group-post-item :posts="category.posts"></group-post-item>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <loading-component></loading-component>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations, mapActions } from 'vuex'
import _group from '~/pages/writegroup/_group.vue'
import BorderAvatar from '../common/border-avatar.vue'
import GlassBorder from '../common/glass-border.vue'
import LoadingComponent from '../common/loading-component.vue'
import WaveButton from '../common/wave-button.vue'
import GroupPostItem from './group-post-item.vue'

export default Vue.extend({
  name: 'group-component',
  components: { LoadingComponent, GlassBorder, BorderAvatar, WaveButton, _group, GroupPostItem },
  data() {
    return {
      joinedprofiles: null
    }
  },
  computed:{
    ...mapState(['check', 'group'])
  },
  methods: {
    ...mapMutations({
      JOIN: 'modal/JOIN',
      ISJOIN: 'group/ISJOIN'
    }),
    ...mapActions({
      CHECK: 'check/CHECK'
    }),
    onJoin(){
      this.JOIN()
    }
  },
  async mounted(){
    if (this.check.data){
      await this.ISJOIN({
        profileId: this.check.data.id
      })
    } else{
      await this.CHECK()
      await this.ISJOIN({
        profileId: this.check.data.id
      })
    }
    console.log(this.group.data)
  }

})
</script>

<style scoped>
  hr {
    height: 2px;
    background-color: rgba(255, 255, 0, 0.3);
    margin: 10px;
    border: none;
  }
  .groupouter{
    width: 100%;
    height: 100%;
    margin: 10%;
    background-color: rgba(0,0, 0, 0.4);
    box-shadow: 10px 10px 10px black;
  }
  .groupitemouter{
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 200px 200px 1fr;
  }
  .top {
    grid-row: 1/2;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .top-left{
    grid-column: 1/3;
  }
  .mid{
    grid-row: 2/3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 2px solid #4A00E0;
    margin: 10px;
  }
  .mid-left{
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .mid-right{
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .category{
    grid-row: 3/4;
    display: grid;
    grid-template-rows: 3fr 6fr;
    grid-template-columns: 1fr 1fr;
  }
  .info {
    grid-row: 1/2;
    grid-column: 1/2;

    display: grid;
    grid-template-rows: 100px 1fr;
  }
  .category-inner{
    grid-row: 2/3;
    grid-column: 1/2;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
  }
  .category-item{
    display: grid;
    grid-template-rows: 30px 1fr;
  }
  .label{
    grid-row: 1/2;
    font-size: 20px;
    color: #8e56ff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-left: 20px;
  }
  .content{
    grid-row: 2/3;
    display: flex;
    justify-content: center;
    text-align: center;
    min-height: 300px;
    margin: 20px;
    padding: 10px;
    background-color: rgba(0,0, 0, 0.4);
    border-style: solid;
    border-image: linear-gradient(45deg,#8E2DE2,#4A00E0);
    border-image-slice: 1;
    border-image-width: 2px;
  }
  .borderset{
    position: relative;
    margin-left: -15px;
  }
  .border-avatar{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .textunder{
    color: grey;
    font-size: 12px;
    font-weight: 800;
  }
  .grouptitle{
    font-size: 30px;
    font-weight: 800;
  }

  .not-have{
    grid-column: 1/5;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .main-item{
    position: relative;
    height: 200px;
    overflow: hidden;
    margin: 10px;
  }

  img {
    transition: all .3s ease-in-out;
    width: 100%;
  }


  .item-name {
    position: absolute;
    font-size: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }



  .wave-button {
    border: none;
    padding: 12px 30px;
    margin: 10px;
    background: linear-gradient(45deg, #ffb347, #ffcc33);

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

  .small-button {
    text-decoration: none;
    width: 100px;
    height: 30px;
    margin: 10px;
    font-size: 20px;
    font-weight: 800;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    color: white;
    background-image: linear-gradient(45deg,#8E2DE2,#4A00E0);
  }

  .small-button:hover {
    background-color: #f3f9a7;
  }

  .small-button:before {
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
  .small-button:hover:before {
    transform: translateX(100%) rotate(45deg);
  }
  .smaal-button-text{
    font-size: 10px;
    font-weight: 800;
  }
  @media only screen and (max-width: 1200px) {

  }
  @media only screen and (max-width: 600px) {

  }
</style>
