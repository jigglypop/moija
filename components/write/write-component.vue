<template>
  <div class="writeouter">
    <div v-if="check.data" class="writeinner">
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
        <h1 class="email">글쓰기</h1>
      </div>

      <div class="mid">
        <form @submit.prevent="onWrite">
          <div class="logobox">
            <h1 class="label">제목 입력</h1>
          </div>
          <label><input v-model="title" placeholder="제목"/></label>
          <div class="logobox">
            <h1 class="label">내용 입력</h1>
          </div>
          <TuiEditor
            mode="markdown"
            height="500px"
            v-model="content"
          />
          <!-- <label><textarea  placeholder="내용"  rows="10"/></label> -->
          <h5 class="error">{{ write.error }}</h5>

          <wave-button type="submit"><h4>글쓰기</h4></wave-button>
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
  name: 'write-component',
  components: { LoadingComponent, WaveButton },
  props:{
    profile: Object,
    post: Object
  },
  data() {
    return {
      title: '',
      content: '',
      categoryId: '',
    }
  },
  computed:{
    ...mapState(['check', 'write'])
  },
  methods:{
    ...mapActions({
      WRITE: 'write/WRITE',
    }),
    async onWrite(){
      await this.WRITE({
        categoryId: this.categoryId,
        title: this.title,
        content: this.content,
      })
      if (this.write.data){
        await this.$router.push(`/post/${this.write.data.id}`)
      }
    }
  },
  mounted() {
    this.categoryId = this.$route.params.category
    if (this.post){
      this.title = this.post.data.title
      this.content = this.post.data.content
    }
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
    margin: 10px;
    color: white
  }
  .labelimage{
    width: 20px;
  }
  .writeouter{
    width: 100%;
    height: 100%;
    margin: 10%;
    background-color: black;

  }
  .writeinner{
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
    display: flex;
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
    align-items: flex-start;
  }
  .mid {
    grid-row: 2/3;
    padding: 0 3% 3% 3%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input, textarea, select {
    font-weight: 800;
    font-size: 1rem;
    outline: none;
    padding: 1rem;
    margin: 0.5rem;
    width: 45vw;
    box-sizing: border-box;
    border: none;
    border-image-slice: 1;
    background: white;
    color: black;
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
