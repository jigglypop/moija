<template>
  <div class="comment-outer">
    <div v-if="comment.comments">
      <h5 class="comment-count">{{ comment.comments.length }}개의 댓글이 달렸습니다.</h5>
    </div>
    <writecomment-component v-if="check.data"></writecomment-component>
    <div v-if="comment.comments">
      <commentitem-component
        v-for="item in comment.comments"
        :key="item.id"
        :comment="item"
        :openId="comment.openId">
      </commentitem-component>
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
import WritecommentComponent from './writecomment-component.vue'
import CommentitemComponent from './commentitem-component.vue'

export default Vue.extend({
  components: { userComponent, WaveButton, GlassButton, WritecommentComponent, CommentitemComponent },
  name: 'comment-component',
  data() {
    return {
      getDateToString: getDateToString
    }
  },
  computed:{
    ...mapState(['profile', 'post', 'check', 'comment']),
  },
  methods: {
    ...mapMutations({
      OPENDELETE: 'modal/DELETE',
    }),
    onDelete(){
      this.OPENDELETE()
    },
  },
})
</script>

<style scoped>
  .comment-outer {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 5%;
    color: black;
  }
  .comment-count{
    margin: 10px;
  }
  @media only screen and (max-width: 1200px) {

  }
  @media only screen and (max-width: 900px) {

  }
  @media only screen and (max-width: 700px) {

  }
  @media only screen and (max-width: 400px) {

  }
</style>
