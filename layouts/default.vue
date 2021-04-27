<template>
  <div>
    <header-component></header-component>
    <modal-component></modal-component>
    <Nuxt />
  </div>
</template>
<script>
import Vue from 'vue'
import HeaderComponent from '../components/header/header-component.vue'
import ModalComponent from '../components/modal/modal-component.vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  components: {
    HeaderComponent,
    ModalComponent
  },
  computed:{
    ...mapState(['check'])
  },
  mounted(){
    console.log('호출')
    this.CHECK()
  },
  methods:{
    ...mapActions({
      CHECK: 'check/CHECK'
    })
  }
})
</script>

