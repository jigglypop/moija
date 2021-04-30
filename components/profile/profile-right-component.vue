<template>
  <div class="profile-right-component-wrapper">
    <div class="top-left">

    </div>
    <div class="top-right">

    </div>
    <div class="mid-left">

    </div>
    <div class="mid-right">

    </div>
    <div class="bottom-left">

    </div>

    <div class="bottom-right">

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import GlassButton from '../common/glass-button.vue'
import LoadingComponent from '../common/loading-component.vue'
import ProfileAvatar from '../common/profile-avatar.vue'
import WaveButton from '../common/wave-button.vue'

export default Vue.extend({
  name: 'profile-right-component',
  components: { ProfileAvatar, LoadingComponent, WaveButton, GlassButton },
})
</script>

<style scoped>
  .profile-right-component-wrapper{
    position: relative;
    background-color: black;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
  .top-left{
    grid-row: 1/2;
    grid-column: 1/2;
    min-height: 200px;
    border-style: solid;
    border-image: linear-gradient(45deg,#8E2DE2,#4A00E0);
    border-image-slice: 1;
    border-image-width: 2px;
    margin: 20px;
    padding: 10px;
  }
  .top-right{
    grid-row: 1/2;
    grid-column: 2/3;
    min-height: 200px;

    border-style: solid;
    border-image: linear-gradient(45deg,#8E2DE2,#4A00E0);
    border-image-slice: 1;
    border-image-width: 2px;
    margin: 20px;
    padding: 10px;
  }
  .mid-left{
    grid-row: 2/3;
    grid-column: 1/2;

    border-style: solid;
    border-image: linear-gradient(45deg,#8E2DE2,#4A00E0);
    border-image-slice: 1;
    border-image-width: 2px;
    margin: 20px;
    padding: 10px;
  }
  .mid-right{
    grid-row: 2/3;
    grid-column: 2/3;
    border-style: solid;
    border-image: linear-gradient(45deg,#8E2DE2,#4A00E0);
    border-image-slice: 1;
    border-image-width: 2px;
    margin: 20px;
    padding: 10px;
  }
  .bottom-left{
    grid-row: 3/4;
    grid-column: 1/2;
    border-style: solid;
    border-image: linear-gradient(45deg,#8E2DE2,#4A00E0);
    border-image-slice: 1;
    border-image-width: 2px;
    margin: 20px;
    padding: 10px;
  }
  .bottom-right{
    grid-row: 3/4;
    grid-column: 2/3;

    border-style: solid;
    border-image: linear-gradient(45deg,#8E2DE2,#4A00E0);
    border-image-slice: 1;
    border-image-width: 2px;
    margin: 20px;
    padding: 10px;
  }
  @media only screen and (max-width: 1200px) {

  }
  @media only screen and (max-width: 600px) {

  }
</style>
