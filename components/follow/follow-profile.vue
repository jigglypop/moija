<template>
  <div class="follow-outer" v-if="follow.data" :style="styles">
    <div @click="toggleFollow">
      <glass-button :styles="{
        background: follow.data.isin ? '#00d2ff' : '#8E2DE2'}">
        팔로우 {{follow.data.isin ? '취소' : '' }}</glass-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations, mapActions } from 'vuex'
import FollowIcon from '../common/follow-icon.vue'
import GlassButton from '../common/glass-button.vue'

export default Vue.extend({
  components: { FollowIcon, GlassButton  },
  name: 'follow-profile',
  props: {
    styles: Object,
  },
  computed:{
    ...mapState(['follow', 'check', 'togglefollow', 'profile']),
  },
  methods: {
    ...mapMutations({
    }),
    ...mapActions({
      TOGGLEFOLLOW: 'togglefollow/TOGGLEFOLLOW',
      GETFOLLOW: 'follow/FOLLOW',
      CHECK: 'check/CHECK',
      GETPROFILE:'profile/PROFILE'
    }),
    async toggleFollow(){
      await this.TOGGLEFOLLOW({
        followerId: this.check.data.id,
        followingId: this.profile.data.id
      })
      if (this.togglefollow.data){
        await this.GETFOLLOW({
          followerId: this.check.data.id,
          followingId: this.profile.data.id
        })
        await this.GETPROFILE({
          profileId: this.profile.data.id
        })
      }
    }
  },
  async mounted(){
    await this.CHECK()
    if (this.check.data && this.profile.data.id){
      await this.GETFOLLOW({
        followerId: this.check.data.id,
        followingId: this.profile.data.id
      })
    }
  },
})
</script>

<style scoped>
  .follow-outer{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .follow-length{
    color: #00d2ff;
    transition: all .3s ease-out;
  }
</style>
