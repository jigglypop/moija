<template>
  <wrapper-component>
    <writegroup-component></writegroup-component>
  </wrapper-component>
</template>

<script lang="ts">
import wrapperComponent from '~/components/wrapper/wrapper-component.vue'
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import WritegroupComponent from '~/components/writegroup/writegroup-component.vue'

export default Vue.extend({
  components: { wrapperComponent, WritegroupComponent },
  computed: {
    ...mapState(['profile'])
  },
  methods : {
    ...mapActions({
      PROFILE: 'profile/PROFILE'
    })
  },
  head() {
    return {
      title: "모이자 | 그룹 생성하기 ",
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
