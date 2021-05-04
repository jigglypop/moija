<template>
  <wrapper-component>
    <updateprofile-component :profile="profile"></updateprofile-component>
  </wrapper-component>
</template>

<script lang="ts">
import wrapperComponent from '~/components/wrapper/wrapper-component.vue'
import UpdateprofileComponent from '~/components/updateprofile/updateprofile-component.vue'
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  components: { wrapperComponent, UpdateprofileComponent },
  computed: {
    ...mapState(['profile'])
  },
  methods : {
    ...mapActions({
      PROFILE: 'profile/PROFILE'
    })
  },
  async fetch({ store, params } ){
    store.dispatch('profile/PROFILE', {
      profileId : params.updateprofile
    })
  },
  created() {
    if (this.profile.data === null && this.profile.error === ""){
      this.PROFILE({
        profileId : this.$route.params.updateprofile
      })
    }
  },
  head() {
    return {
      title: this.profile ? this.profile.data? "모이자 | 프로필 업데이트 | " + this.profile.data.nickname : "모이자 | 프로필 업데이트" : "모이자 | 프로필 업데이트",
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
