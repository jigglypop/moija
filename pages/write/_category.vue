<template>
  <wrapper-component>
    <write-component></write-component>
  </wrapper-component>
</template>

<script lang="ts">
import wrapperComponent from '~/components/wrapper/wrapper-component.vue'
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import WriteComponent from '~/components/write/write-component.vue'

export default Vue.extend({
  components: { wrapperComponent, WriteComponent,  },
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
      title: "모이자 | 글쓰기 ",
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
