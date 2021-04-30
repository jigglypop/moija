<template>
  <span>
    <div class="maincategoryitemouter" v-if="location.data">
      <div class="top" >
        <div v-if="location.data" class="top-left">
          <div class="main-item">
            <div class="item-name" >
              <h4 >{{ location.data.maincategory.name }}({{ location.data.location.name }})</h4>
            </div>
            <div>
              <img :src="require(`~/assets/maincategory/${location.data.maincategory.image}`)" class="background"/>
            </div>
          </div>
        </div>
      </div>
      <div class="under">
        <div class="under-left">

        </div>
        <div class="under-right" v-if="location.data && check.data">
          <nuxt-link :to="`/writegroup/${location.data.location.id}/?locationname=${location.data.maincategory.name}(${location.data.location.name})`">
            <wave-button class="under-button">
              <h5>내 지역 그룹 만들기</h5>
            </wave-button>
          </nuxt-link>
        </div>
      </div>
      <div class="mid" v-if="location.data && location.data.location.groups.length >= 0">
        <group-item
          v-for="item in location.data.location.groups"
          :key="item.id"
          :group="item"
          :maincategoryimg="location.data.maincategory.image">
        </group-item>
        <not-have class="not-have" v-if="location.data.location.groups.length === 0"></not-have>
      </div>
    </div>
  </span>

</template>

<script lang="ts">
import MapSvg from '../common/map-svg.vue'
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import GroupItem from './group-item.vue'
import NotHave from '../common/not-have.vue'
import WaveButton from '../common/wave-button.vue'

export default Vue.extend({
  name: 'maincategory-item',
  components: { MapSvg, GroupItem, NotHave, WaveButton  },
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
    if (this.check.data){
      this.LOCATION({
        maincategoryId: maincategory,
        locationname: this.check.data.location
      })
    } else{
      this.LOCATION({
        maincategoryId: maincategory,
        locationname: "서울"
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
    grid-template-rows: 200px 100px 1fr;
  }
  .top {
    grid-row: 1/2;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .top-left{
    grid-column: 1/3;
  }
  .under {
    grid-row: 2/3;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-template-columns: 2fr 1fr;
  }
  .under-left {
    grid-column: 1/2;
  }
  .under-right {
    grid-column: 2/3;
  }
  .mid{
    grid-row: 3/4;
    display: grid;
    padding: 3%;
  }
  .not-have{
    grid-column: 1/5;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
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
