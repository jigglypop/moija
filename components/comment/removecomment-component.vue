<template>
  <div class="removecomment-outer">
    <i class="close far fa-times-circle fa-2x" @click="onDeleteComment"></i>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations, mapActions } from 'vuex'

export default Vue.extend({
  name: 'removecomment-component',
  props:{
    commentId: Number
  },
  computed:{
    ...mapState(['check', 'deletecomment']),
  },
  methods: {
    ...mapMutations({
      SETCOMMENT: 'comment/SETCOMMENT'
    }),
    ...mapActions({
      DELETECOMMENT: 'deletecomment/DELETECOMMENT'
    }),
    async onDeleteComment(){
      await this.DELETECOMMENT({
        postId: this.$route.params.post,
        commentId: this.commentId
      })
      if (this.deletecomment.data){
        await this.SETCOMMENT({
          comments: this.deletecomment.data.comments
        })
      }
    }
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
  .close {
    transition: all .3s ease-in-out;
  }
  .close:hover{
    transform: rotate(360deg);
    cursor: pointer;
  }
</style>
