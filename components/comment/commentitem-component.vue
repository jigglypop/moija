<template>
  <div class="commentitem-outer">
    <div class="comment-item-div">
      <div class="comment-name-div">
        <div v-if="comment.user">
          <commentuser-component :profile="comment.user.profile"></commentuser-component>
        </div>
      </div>
      <div class="comment-item-upper-div">
        <div class="time-div">
          {{ getDateToString(comment.createdAt )}}
        </div>
        <div v-if="comment.user">
          <div v-if="comment.user.profile && check.data">
            <removecomment-component v-if="comment.user.profile.id === check.data.id" :commentId="comment.id"></removecomment-component>
          </div>
        </div>
      </div>
      <div class="comment-item-content-div">
        <h4>{{ comment.content }}</h4>
      </div>
      <div class="comment-item-lower-div">
        <div class="open-text-div" v-if="comment.recomments" @click="setOpen">
          <h4>대댓글: {{ comment.recomments.length }}개</h4>
        </div>
        <div class="open-text-div" @click="setOpen">
          <h4>열기</h4>
        </div>
      </div>
    </div>
    <writerecomment-component v-if="comment.id.toString() === openId"></writerecomment-component>
    <div v-if="comment.id.toString() === openId" >
      <recommentitem-component
        v-for="comment in comment.recomments"
        :key="comment.id"
        :comment="comment"></recommentitem-component>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getDateToString } from '../common/getDateToString'
import { mapState, mapMutations } from 'vuex'
import userComponent from '../user/user-component.vue'
import WaveButton from '../common/wave-button.vue'
import GlassButton from '../common/glass-button.vue'
import CommentuserComponent from './commentuser-component.vue'
import RemovecommentComponent from './removecomment-component.vue'
import WriterecommentComponent from './writerecomment-component.vue'
import RecommentitemComponent from './recommentitem-component.vue'

export default Vue.extend({
  components: { userComponent, WaveButton, GlassButton, CommentuserComponent, RemovecommentComponent, WriterecommentComponent, RecommentitemComponent },
  name: 'commentitem-component',
  props:{
    comment: Object,
    openId: String
  },
  data() {
    return {
      getDateToString: getDateToString
    }
  },
  computed:{
    ...mapState(['profile', 'post', 'check']),
  },
  methods:{
    ...mapMutations({
      SETOPEN: 'comment/OPENID'
    }),
    setOpen(){
      this.SETOPEN({
        openId: this.comment.id.toString()
      })
    }
  }
})
</script>

<style scoped>
  .commentitem-outer{
    background : rgba(0,0,0,0.05);
    padding: 2%;
  }

  .comment-item-div{
    display: grid;
    grid-template-columns: 150px 1fr 1fr;
    grid-template-rows:  50px 1fr 50px;
    margin: 1%;
  }
  .comment-name-div{
    background : rgba(0,0,0,0.05);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    border-right: 2px solid #d4d4d4;
    grid-column:1/2;
    grid-row:1/4;
  }
  .comment-name-div h4{
    margin: 1rem;
    font-size: 13px;
    font-weight: 800;
    color: black;
  }
  .comment-item-upper-div{
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    padding:10px;
    grid-column:2/4;
    grid-row:1/2;
    padding: 10px;
  }
  .time-div{
    display: flex;
    font-size: 10px;
    font-weight: 800;
    color: gray;
  }
  .comment-item-content-div{
    grid-column:2/4;
    grid-row:2/3;
    padding: 10px;
    font-size: 16px;
    font-weight: 800;
    color: black;
  }
  .comment-item-lower-div{
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    grid-column:2/4;
    grid-row:3/4;
    padding: 10px;
  }
  .open-text-div{
    cursor: pointer;
    font-size: 12px;
    font-weight: 800;
    color: #FF416C;
  }
  @media only screen and (max-width: 1200px) {

  }
  @media only screen and (max-width: 900px) {

  }
  @media only screen and (max-width: 700px) {
  .comment-item-div{
    grid-template-columns: 100px 1fr 1fr;
  }
  .comment-item-content-div{
    font-size: 12px;
  }
  }
  @media only screen and (max-width: 400px) {
    .comment-item-div{
      grid-template-columns: 100px 1fr 1fr;
    }
  }
</style>
