<template>
  <wrapper-component>
    <div class="post-comment-wrapper">
      <post-component :post="post"></post-component>
      <comment-component></comment-component>
    </div>
  </wrapper-component>
</template>

<script lang="ts">
import wrapperComponent from '~/components/wrapper/wrapper-component.vue'
import PostComponent from '~/components/post/post-component.vue'
import Vue from 'vue'
import { mapState, mapActions, mapMutations } from 'vuex'
import CommentComponent from '~/components/comment/comment-component.vue'

export default Vue.extend({
  components: { wrapperComponent, PostComponent, CommentComponent },
  computed: {
    ...mapState(['post', 'comment'])
  },
  methods : {
    ...mapActions({
      POST: 'post/POST',
      COMMENT: 'comment/COMMENT',
    }),
    ...mapMutations({
      SETCOMMENT: 'comment/SETCOMMENT',
      CLEARCOMMENT: 'comment/CLEAR',
      CLEARPOST: 'post/CLEAR',
    })
  },
  async fetch({ store, params } ){
    await store.dispatch('post/POST', {
      postId : params.post
    }),
    await store.dispatch('comment/COMMENT', {
      postId : params.post
    })
  },
  created() {
    if (this.post.data === null && this.post.error === ""){
      this.POST({
        postId : this.$route.params.post
      })
    }
    if (this.comment.data === null && this.comment.error === ""){
      this.COMMENT({
        postId : this.$route.params.post
      })
    }
  },
  mounted(){
    this.SETCOMMENT({
      comments: this.comment.data.comments
    })
  },
  destroyed(){
    this.CLEARPOST()
    this.CLEARCOMMENT()
  },
  head() {
    return {
      title: this.post ? this.post.data? "모이자 | 포스트 | " + this.post.data.title : "모이자 | 포스트" : "모이자 | 포스트",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description'
        }
      ]
    }
  }
})
</script>

<style scoped>
  .post-comment-wrapper{
    width: 100%;
    height: 100%;
    margin: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;
  }
</style>
