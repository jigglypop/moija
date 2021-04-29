<template>
  <div class="writegroupouter">
    <div v-if="check.data" class="writegroupinner">
      <div class="top">
        <div class="logotitle">
          <div class="logobox">
            <img :src="require('~/assets/logo.png')" class="logoimage">
          </div>
          <div class="logobox">
            <h1 class="nickname">MOIJA</h1>
          </div>
        </div>
        <h1 class="top-text">세상의 모든 모임</h1>
        <h1 class="email">{{ locationname }} 그룹 생성하기</h1>
      </div>

      <div class="mid">
        <form @submit.prevent="onWriteGroup">
          <div class="textbox">
            <div class="logobox">
              <h1 class="label">그룹 이름 입력</h1>
            </div>
          </div>
          <label><input v-model="name" placeholder="그룹 이름"/></label>
          <div class="textbox">
            <div class="logobox">
              <h1 class="label">그룹 배경 사진 URL</h1>
            </div>
          </div>
          <label><input v-model="imageurl" placeholder="그룹 배경 사진 URL"/></label>
          <div class="textbox">
            <div class="logobox">
              <h1 class="label">그룹 소개</h1>
            </div>
          </div>
          <label><textarea v-model="info" placeholder="그룹 소개"  rows="10"/></label>
          <h5 class="error">{{ writegroup.error }}</h5>
          <wave-button type="submit"><h4>그룹 생성하기</h4></wave-button>
        </form>
      </div>
    </div>
    <div v-else>
      <loading-component></loading-component>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import LoadingComponent from '../common/loading-component.vue'
import WaveButton from '../common/wave-button.vue'

export default Vue.extend({
  name: 'writegroup-component',
  components: { LoadingComponent, WaveButton },
  props:{
    profile: Object
  },
  data() {
    return {
      name: '',
      imageurl: '',
      info: '',
      locationId: '',
      locationname: ''
    }
  },
  computed:{
    ...mapState(['check', 'writegroup'])
  },
  methods:{
    ...mapActions({
      WRITEGROUP: 'writegroup/WRITEGROUP',
    }),
    async onWriteGroup(){
      await this.WRITEGROUP({
        locationId: this.locationId,
        name: this.name,
        imageurl: this.imageurl,
        info: this.info
      })
      if (this.writegroup.data){
        await this.$router.push(`/group/${this.writegroup.data.id}`)
      }
    }
  },
  mounted() {
    this.locationId = this.$route.params.group
    this.locationname = this.$route.query.locationname.toString()
  }
})
</script>

<style scoped>
  .error{
    color: #FF416C;
    margin: 5px;
  }
  .textbox {
    display: flex;
    width: 90%;
    justify-content: flex-start;
    align-items: center;
    margin: 4px;
  }
  .label {
    font-size: 14px;
    font-weight: 800;
    margin: 2px;
    color: grey
  }
  .labelimage{
    width: 20px;
  }
  .writegroupouter{
    width: 100%;
    height: 100%;
    margin: 10%;
    background-color: black;

  }
  .writegroupinner{
    position: relative;
    display: grid;
    grid-template-rows: 150px 1fr;
  }
  img {
    width: 40px;
  }
  .top {
    position: relative;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logotitle{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .logobox{
    display: inline-block;
  }
  .nickname {
    font-size: 30px;
    font-weight: 800;
    color: #ffe259;
  }
  .email {
    font-size: 20px;
    font-weight: 800;
  }
  .top-text {
    font-size: 14px;
    font-weight: 800;
    margin: 10px;
    color: grey;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .mid {
    grid-row: 2/3;
    padding: 0 3% 3% 3%;
  }
  input, textarea, select {
    font-weight: 800;
    font-size: 1rem;
    outline: none;
    padding: 1rem;
    margin: 0.5rem;
    width: 70vw;
    box-sizing: border-box;
    border: none;
    border-image-slice: 1;
    background: rgba(255,255,255,0.1);
    color: white;
  }
  select {
    -webkit-appearance: button;
    appearance: button;
    outline: none;
  }
  option {
    font-size: 1rem;
    font-weight: 800;
    height: 20px;
    color: black;
    background: black;
    color: white;
    border:0px;
    outline:0px;
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
