<template>
  <wrapper-component>
    <post-component :post="post"></post-component>
  </wrapper-component>
</template>

<script lang="ts">
import wrapperComponent from '~/components/wrapper/wrapper-component.vue'
import PostComponent from '~/components/post/post-component.vue'
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  components: { wrapperComponent, PostComponent },
  computed: {
    ...mapState(['post'])
  },
  methods : {
    ...mapActions({
      POST: 'post/POST'
    })
  },
  async fetch({ store, params } ){
    store.dispatch('post/POST', {
      postId : params.post
    })
  },
  created() {
      if (this.post.data === null && this.post.error === ""){
        this.POST({
        postId : this.$route.params.post
      })
    }
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

</style>
