<template>
  <div class="groupouter">
    <div v-if="group">
      <div class="groupitemouter">
        <div class="top">
          <div v-if="group.data" class="top-left">
            <div class="main-item">
              <img :src="group.data.imageurl" class="background"/>
            </div>
          </div>
        </div>
        <div class="mid" v-if="group.data">
          <div class="mid-left">
            <h1 class="grouptitle">{{ group.data.name }} <i class="fas fa-lock fa-sm"></i></h1>
            <div @click="onJoin" v-if="check.data && !group.isJoin">
              <wave-button ><h4>가입하기</h4></wave-button>
            </div>
            <h3 v-if="group.isJoin" class="isgroupjoin">그룹 회원</h3>
          </div>
          <div class="mid-right" >
            <!-- <div class="border-avatar" v-if="group.profiles">
              <div v-for="profile in group.profiles" :key="profile.id" class="borderset">
                <border-avatar :permission="profile.permission" :image="profile.imageurl"></border-avatar>
              </div>
              <div v-if="group.isSlice">
                <i class="fas fa-plus fa-x"></i>
              </div>
            </div> -->
            <h3 class="textunder">{{ group.data.profiles.length}}명의 회원이 가입했습니다</h3>
          </div>
        </div>
        <div class="category">
          <div class="info">
            <div class="info-content">
              <h5>{{ group.data.info }}</h5>
            </div>
          </div>
          <div class="join">
            <div class="info-content">
              <nuxt-link :to="`/profile/${profile.id}`" v-for="profile in group.data.profiles" :key="profile.id" class="joinset">
                <border-avatar :permission="profile.permission" :image="profile.imageurl"></border-avatar>
                <h6>{{ profile.nickname }}</h6>
              </nuxt-link>
            </div>
          </div>
          <div class="large-list">
            <group-list-item :categories="group.data.categories"></group-list-item>
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
import BorderAvatar from '../common/border-avatar.vue'
import GlassButton from '../common/glass-button.vue'
import LoadingComponent from '../common/loading-component.vue'
import WaveButton from '../common/wave-button.vue'
import GroupListItem from './group-list-item.vue'
import GroupPostItem from './group-post-item.vue'

export default Vue.extend({
  name: 'group-component',
  components: { LoadingComponent, BorderAvatar, WaveButton, GroupPostItem, GlassButton, GroupListItem },
  data() {
    return {
      joinedprofiles: null,
    }
  },
  computed:{
    ...mapState(['check', 'group']),
  },
  methods: {
    ...mapMutations({
      JOIN: 'modal/JOIN',
      ISJOIN: 'group/ISJOIN',
      SLICE: 'group/SLICE'
    }),
    ...mapActions({
      CHECK: 'check/CHECK',
      GROUP: 'group/GROUP'
    }),
    async onJoin(){
      await this.JOIN()
    },
  },
  async mounted(){
    await this.CHECK()
    if (this.check.data){
      await this.ISJOIN({
        profileId: this.check.data.id
      })
    } else{
      await this.CHECK()
    }
  },
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
    grid-template-rows: 400px 200px 1fr;
  }
  .isgroupjoin{
    font-size: 14px;
    padding: 10px;
    border-radius: 10px;
    color : #ED213A;
    border:2px solid #ED213A;
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
    grid-template-rows: 1fr 4fr;
    grid-template-columns: 1fr 1fr;
  }
  .info {
    grid-row: 1/2;
    grid-column: 1/2;
    display: grid;
  }

  .join {
    grid-row: 1/2;
    grid-column: 2/3;
    display: grid;
  }
  .joinset{
    padding: 10px;
    border-radius: 10px;
    max-height: 80px;
    border:2px solid #ED213A;
    margin: 2px;
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
  .large-list{
    grid-column: 1/3;
    grid-row: 2/3;
    border-style: solid;
    border-image: linear-gradient(45deg,#8E2DE2,#4A00E0);
    border-image-slice: 1;
    border-image-width: 2px;
    margin: 20px;
    padding: 10px;
  }
  .label{
    grid-row: 1/2;
    font-size: 20px;
    color: #8e56ff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin:0 20px;
  }
  .content{
    line-height:150%;
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
  .info-content{
    line-height:150%;
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
    margin: 10px;
  }
  .grouptitle{
    font-size: 30px;
    font-weight: 800;
    margin: 10px;
  }
  .not-have{
    grid-column: 1/5;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .main-item{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .background {
    position: relative;
    margin: 10px;
    width: 100%;
    height: 400px;
    object-fit: contain;
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
  @media only screen and (max-width: 1200px) {
    .category{
      grid-template-rows: 3fr 6fr 4fr;
      grid-template-columns: 1fr;
    }
    .info{
      grid-row: 1/2;
      grid-column: 1/2;
    }
    .category-inner {
      grid-row: 2/3;
      grid-column: 1/2;
    }
    .large-list{
      grid-row: 3/4;
      grid-column: 1/2;
    }
  }
  @media only screen and (max-width: 600px) {
    .category{
      grid-template-rows: 3fr 6fr 4fr;
      grid-template-columns: 1fr;
    }
    .info{
      grid-row: 1/2;
      grid-column: 1/2;
    }
    .category-inner {
      grid-row: 2/3;
      grid-column: 1/2;
    }
    .large-list{
      grid-row: 3/4;
      grid-column: 1/2;
    }
  }
</style>
