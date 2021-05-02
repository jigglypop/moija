<template>
  <div class="like-outer" v-if="like.data">
    <div @click="toggleLike">
      <heart :styles="{
        transform: 'scale(1)',
        color: like.data.isin ? '#ED213A' : 'white'}" ></heart>
    </div>
    <div>
      <h6 class="like-text" :style="{
        color: like.data.isin ? '#ED213A' : 'white'
      }">좋아요 {{like.data.length}}개</h6>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations, mapActions } from 'vuex'
import Heart from '../common/heart.vue'

export default Vue.extend({
  components: { Heart },
  name: 'like-component',
  computed:{
    ...mapState(['like', 'check', 'togglelike']),
  },
  methods: {
    ...mapMutations({
    }),
    ...mapActions({
      TOGGLELIKE: 'togglelike/TOGGLELIKE',
      GETLIKE: 'like/LIKE'
    }),
    async toggleLike(){
      if (this.check.data){
        await this.TOGGLELIKE({
          postId: this.$route.params.post,
          userId: this.check.data.id
        })
      }
      if (this.togglelike.data){
        await this.GETLIKE({
          postId: this.$route.params.post,
          userId: this.check.data.id
        })
      }

    }
  },
})
</script>

<style scoped>
  .like-outer{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .like-text{
    padding: 10px;
    color: #ED213A;
    transition: all .3s ease-out;
  }

</style>
