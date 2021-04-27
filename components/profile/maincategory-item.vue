<template>
  <div class="maincategoryitemouter">
    <div class="top">
      <div v-if="location.data" class="top-left">
        <div class="main-item">
          <div class="item-name">
            <h4 >{{ location.data.maincategory.name }} / {{ location.data.location.name }}</h4>
          </div>
          <div>
            <img :src="require(`~/assets/maincategory/${location.data.maincategory.image}`)" class="background"/>
          </div>
        </div>
      </div>
    </div>
    <div class="under">
      <h1>언더</h1>
    </div>
    <div class="mid">
      <h1>내용</h1>
    </div>
  </div>
</template>

<script lang="ts">
import MapSvg from '../common/map-svg.vue'
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  name: 'maincategory-item',
  components: { MapSvg },
  props:{
    locationname: String
  },
  data() {
    return {
      maincateogoryId : ''
    }
  },
  computed:{
    ...mapState(['check', 'location'])
  },
  methods:{
    ...mapActions({
      LOCATION: 'location/LOCATION'
    })
  },
  async mounted() {
    const { maincategory } = await this.$route.params
    if (maincategory && this.locationname){
      console.log(this.locationname)
      this.LOCATION({
        maincategoryId: maincategory,
        locationname: this.locationname
      })
    }
  }
})
</script>

<style scoped>
  .maincategoryitemouter{
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 200px 200px 1fr;
  }
  .top {
    grid-row: 1/2;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .top-left{
    grid-column: 1/3;
  }
  .under{
    grid-row: 2/3;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .mid{
    grid-row: 3/4;
  }

  .main-item{
    position: relative;
    height: 200px;
    overflow: hidden;
    margin: 10px;
  }

  img {
    transition: all .3s ease-in-out;
    opacity: 0.3;
    width: 100%;
  }

  .item-name {
    position: absolute;
    font-size: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media only screen and (max-width: 1200px) {

  }
  @media only screen and (max-width: 600px) {

  }
</style>
