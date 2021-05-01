<template>
  <wrapper-component>
    <profile-component :profile="profile"></profile-component>
  </wrapper-component>
</template>

<script lang="ts">
import wrapperComponent from '~/components/wrapper/wrapper-component.vue'
import ProfileComponent from '~/components/profile/profile-component.vue'
import Vue from 'vue'
import { mapState, mapActions, mapMutations } from 'vuex'

export default Vue.extend({
  components: { wrapperComponent, ProfileComponent },
  computed: {
    ...mapState(['profile'])
  },
  methods : {
    ...mapActions({
      PROFILE: 'profile/PROFILE'
    }),
    ...mapMutations({
      CLEARPROFILE: 'profile/CLEAR'
    })
  },
  async fetch({ store, params } ){
    store.dispatch('profile/PROFILE', {
      profileId : params.profile
    })
  },
  created() {
      if (this.profile.data === null && this.profile.error === ""){
        this.PROFILE({
        profileId : this.$route.params.profile
      })
    }
  },
  destroyed(){
    this.CLEARPROFILE()
  },
  head() {
    return {
      title: this.profile ? this.profile.data? "모이자 | 프로필 | " + this.profile.data.nickname : "모이자 | 프로필" : "모이자 | 프로필",
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
