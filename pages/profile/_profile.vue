<template>
  <wrapper-component>
    <profile-component :profile="profile"></profile-component>
  </wrapper-component>
</template>

<script lang="ts">
import wrapperComponent from '~/components/wrapper/wrapper-component.vue'
import ProfileComponent from '~/components/profile/profile-component.vue'
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  components: { wrapperComponent, ProfileComponent },
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
      profileId : params.profile
    })
  },
  mounted() {
      if (this.profile.data === null && this.profile.error === ""){
        this.PROFILE({
        profileId : this.$route.params.profile
      })
    }
  }
})
</script>

<style scoped>

</style>
