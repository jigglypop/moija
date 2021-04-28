<template>
  <wrapper-component>
    <group-component></group-component>
  </wrapper-component>
</template>

<script lang="ts">
import wrapperComponent from '~/components/wrapper/wrapper-component.vue'
import Vue from 'vue'
import { mapState, mapActions, mapMutations } from 'vuex'
import GroupComponent from '~/components/group/group-component.vue'

export default Vue.extend({
  components: { wrapperComponent, GroupComponent },
  computed: {
    ...mapState(['group'])
  },

  methods : {
    ...mapActions({
      GROUP: 'group/GROUP',
    }),
    ...mapMutations({
      SLICE: 'group/SLICE'
    }),
  },
  async fetch({ store, params } ){
    await store.dispatch('group/GROUP', {
      groupId : params.group
    })
    await store.commit('group/SLICE')
  },
  async created() {
    if (this.group.data === null && this.group.error === ""){
      await this.GROUP({
        groupId : this.$route.params.group
      })
      await this.SLICE()
    }
  },
  head() {
    return {
      title: this.group ? this.group.data? "모이자 | 그룹 | " + this.group.data.name : "모이자 | 그룹" : "모이자 | 그룹",
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
