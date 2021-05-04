<template>
  <wrapper-component>
    <write-component :post="post"></write-component>
  </wrapper-component>
</template>

<script lang="ts">
import wrapperComponent from "~/components/wrapper/wrapper-component.vue";
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import WriteComponent from "~/components/write/write-component.vue";

export default Vue.extend({
  components: { wrapperComponent, WriteComponent },
  computed: {
    ...mapState(["profile", "post"]),
  },
  methods: {
    ...mapActions({
      PROFILE: "profile/PROFILE",
      POST: "post/POST",
    }),
  },
  async fetch({ store, params }) {
    store.dispatch("post/POST", {
      postId: params.post,
    });
  },
  created() {
    if (this.post.data === null && this.post.error === "") {
      this.POST({
        postId: this.$route.params.post,
      });
    }
  },
  head() {
    return {
      title: "모이자 | 업데이트 ",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Home page description",
        },
      ],
    };
  },
  mounted() {},
});
</script>

<style scoped></style>
