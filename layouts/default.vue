<template>
  <div>
    <header-component></header-component>
    <modal-component></modal-component>
    <Nuxt />
    <div class="toasts"></div>
  </div>
</template>
<script>
import Vue from 'vue'
import HeaderComponent from '../components/header/header-component.vue'
import ModalComponent from '../components/modal/modal-component.vue'
import { mapState, mapActions, mapMutations } from 'vuex'

export default Vue.extend({
  components: {
    HeaderComponent,
    ModalComponent
  },
  head: {
    script: [
      { src: 'https://developers.kakao.com/sdk/js/kakao.min.js' }
    ]
  },
  computed:{
    ...mapState(['check', 'maincategory'])
  },
  methods : {
    ...mapMutations({
      MAINCATEGORY: 'maincategory/MAINCATEGORY',
      SETMAINCATEGORY: 'maincategory/SETMAINCATEGORY'
    }),
    ...mapActions({
      PROFILE: 'profile/PROFILE',
      CHECK: 'check/CHECK',
      MAINCATEGORY: 'maincategory/MAINCATEGORY'
    })
  },
  async fetch({ store, params } ){
    store.dispatch('profile/PROFILE', {
      profileId : params.profile
    })
  },
  created(){
    this.CHECK()
  },
  async mounted(){
    if (this.maincategory.data === null && this.maincategory.error === ''){
      await this.MAINCATEGORY()
    }
    if (!window.Kakao.Auth){
      await window.Kakao.init(process.env.NUXT_ENV_KAKAO_REST_API_KEY)
    }
  }
})
</script>

<style>
  .toasts {
    position: fixed;
    bottom: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 20;
    color: black;
  }
  .toast {
    display:flex;
    justify-content: center;
    align-items: center;
    min-width: 400px;
    background-color: rgba(0, 0, 0, 0.8);
    border: 2px solid #ED213A;
    color: white;
    font-size: 13px;
    font-weight: 800;
    border-radius: 5px;
    padding: 20px;
    margin: 0.5rem;
  }
  .strong {
    color : #ED213A;
    font-size: 13px;
    font-weight: 800;
    margin: 2px;
  }
</style>

