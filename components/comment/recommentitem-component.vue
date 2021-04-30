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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getDateToString } from '../common/getDateToString'
import { mapState } from 'vuex'
import userComponent from '../user/user-component.vue'
import WaveButton from '../common/wave-button.vue'
import GlassButton from '../common/glass-button.vue'
import CommentuserComponent from './commentuser-component.vue'
import RemovecommentComponent from './removecomment-component.vue'
import WriterecommentComponent from './writerecomment-component.vue'

export default Vue.extend({
  components: { userComponent, WaveButton, GlassButton, CommentuserComponent, RemovecommentComponent, WriterecommentComponent },
  name: 'recommentitem-component',
  props:{
    comment: Object,
  },
  data() {
    return {
      getDateToString: getDateToString
    }
  },
  computed:{
    ...mapState(['profile', 'post', 'check']),
  },
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
    grid-column:2/3;
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
</style>
