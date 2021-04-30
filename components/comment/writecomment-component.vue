<template>
  <div class="writecomment-outer">
    <form @submit.prevent="onWriteComment" class="writecomment-div">
      <textarea type="text" v-model="content" />
      <wave-button type="submit"><h4>댓글 쓰기</h4></wave-button>
      <h4 v-if="comment.error !== null">{{ comment.error }}</h4>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getDateToString } from '../common/getDateToString'
import { mapState, mapMutations, mapActions } from 'vuex'
import userComponent from '../user/user-component.vue'
import WaveButton from '../common/wave-button.vue'
import GlassButton from '../common/glass-button.vue'

export default Vue.extend({
  components: { userComponent, WaveButton, GlassButton },
  name: 'writecomment-component',
  data() {
    return {
      getDateToString: getDateToString,
      content: '',
      commentId: '',
    }
  },
  computed:{
    ...mapState(['profile', 'post', 'check', 'comment', 'writecomment']),
  },
  methods: {
    ...mapMutations({
      SETCOMMENT: 'comment/SETCOMMENT'
    }),
    ...mapActions({
      WRITECOMMENT: 'writecomment/WRITECOMMENT'
    }),
    async onWriteComment(){
      await this.WRITECOMMENT({
        postId: this.$route.params.post,
        content: this.content
      })
      if (this.writecomment.data){
        await this.SETCOMMENT({
          comments: this.writecomment.data.comments
        })
      }
    }
  },
})
</script>

<style scoped>
  .writecomment-outer {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .writecomment-div {
    background: rgba(0, 0, 0, 0.05);
    padding: 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .writecomment-div h1 {
    font-size: 13px;
    font-weight: 800;
    color: black;
  }

  input {
    font-size: 1rem;
    outline: none;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    height: 20vh;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 3px solid gray;
    background-color: white;
  }

  h4 {
    font-size: 13px;
    font-weight: 800;
    color: black;
  }

  textarea {
    font-family: "NanumBarunGothicSubset" !important;
    font-size: 0.8rem;
    outline: none;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    height: 20vh;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background-color: white;
    border: none;
  }
</style>
