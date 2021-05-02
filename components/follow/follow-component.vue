<template>
  <div class="follow-outer" v-if="follow.data">
    <div @click="toggleFollow">
      <follow-icon :styles="{
        transform: 'scale(1)',
        color: follow.data.isin ? '#40e0d0' : 'white'}" ></follow-icon>
    </div>
    <div>
      <h6 class="follow-text" :style="{ color: follow.data.isin ? '#40e0d0' : 'white' }">팔로우 {{follow.data.isin ? '취소' : '' }}</h6>
    </div>
    <div>
      <h6 class="follow-length" :style="{ color: follow.data.isin ? '#40e0d0' : 'white' }">
        팔로워 : {{follow.data.followerslength}} / 팔로잉 : {{follow.data.followingslength}}
      </h6>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations, mapActions } from 'vuex'
import FollowIcon from '../common/follow-icon.vue'

export default Vue.extend({
  components: { FollowIcon  },
  name: 'follow-component',
  computed:{
    ...mapState(['follow', 'check', 'togglefollow', 'post']),
  },
  methods: {
    ...mapMutations({
    }),
    ...mapActions({
      TOGGLEFOLLOW: 'togglefollow/TOGGLEFOLLOW',
      GETFOLLOW: 'follow/FOLLOW'
    }),
    async toggleFollow(){
      await this.TOGGLEFOLLOW({
        followerId: this.check.data.id,
        followingId: this.post.data.user.profile.id
      })
      if (this.togglefollow.data){
        await this.GETFOLLOW({
          followerId: this.check.data.id,
          followingId: this.post.data.user.profile.id
        })
      }
    }
  },
})
</script>

<style scoped>
  .follow-outer{
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .follow-text{
    padding: 10px;
    color: #40e0d0;
    transition: all .3s ease-out;
    border : 2px solid #40e0d0;
    padding: 5px;
  }
  .follow-length{
    margin: 2px;
    color: #40e0d0;
    transition: all .3s ease-out;
  }
</style>
