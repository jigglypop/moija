<template>
  <nuxt-link :to="`/group/${group.id}`">
    <div class="card">
        <div class="imgbox">
          <img :src="imageurl" class="img">
        </div>
        <div class="content">
          <div class="content-top">
            <h3>{{ group.name }}</h3>
          </div>
          <div class="content-bottom">
            <h5>{{ group.info }}</h5>
          </div>
        </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'group-item',
  props :{
    group: Object,
    maincategoryimg : String
  },
  data() {
    return {
      imageurl: ""
    }
  },
  mounted(){
    this.imageurl = this.group.imageurl ? this.group.imageurl : require(`~/assets/maincategory/${this.maincategoryimg}`)
  },

})
</script>

<style scoped>
  .card {
    position: relative;
    width: 100%;
    height: 300px;
    background-color: black;
    margin: 10px;
    display: grid;
    grid-template-columns: 300px 1fr;

    background-color: rgba(0,0, 0, 0.4);
    border-style: solid;
    border-image: linear-gradient(45deg,#8E2DE2,#4A00E0);
    border-image-slice: 1;
    border-image-width: 2px;
  }

  .imgbox {
    grid-column: 1/2;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  .content {
    position: relative;
    width: 100%;
    grid-column: 2/3;
    display: grid;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    grid-template-rows: 1fr 1fr;
    padding: 10%;
  }
  .createdAt{
    font-size: 10px;
  }
  .content-top {
    grid-row: 1/2;
    font-size: 25px;
    color: #4A00E0;
    display: grid;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  .content-bottom{
    grid-row: 2/3;
    display: grid;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
  }

  @media only screen and (max-width: 1200px) {
    .img {
      width: 150px;
      height: 150px;
      object-fit: cover;
    }
  }
  @media only screen and (max-width: 600px) {
    .img {
      display: none;
    }
    .content {
      grid-column: 1/3;
    }
  }
</style>
