<template>
  <div class="comment-user-outer">
    <nuxt-link :to="`/profile/${profile.id}`" class="comment-user-outer">
      <border-avatar
        :styles="{ transform: 'scale(1.2)' }"
        :permission="profile.permission"
        :image="profile.imageurl">
      </border-avatar>
      <h5 class="nickname">{{ profile.nickname }}</h5>
      <div v-if="post.data">
        <div v-if="post.data.user">
          <div v-if="post.data.user.profileId === profile.id">
            <h6 class="isowner">작성자</h6>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getDateToString } from '../common/getDateToString'
import { mapState, mapMutations } from 'vuex'
import userComponent from '../user/user-component.vue'
import BorderAvatar from '../common/border-avatar.vue'

export default Vue.extend({
  components: { userComponent, BorderAvatar },
  props:{
    profile: Object
  },
  name: 'comment-user-component',
  data() {
    return {
      getDateToString: getDateToString
    }
  },
  computed:{
    ...mapState(['post', 'check', 'comment']),
  },
  methods: {
    ...mapMutations({
    }),
  },
})
</script>

<style scoped>
  .comment-user-outer {
    position: relative;
    width: 100%;
    height: 100%;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .nickname{
    margin: 10px;
  }
  .isowner{
    color: #f80759;
    margin: 3px;
    padding: 3px;
    border: 2px solid #f80759;
  }
</style>
