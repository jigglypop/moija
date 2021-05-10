<template>
  <div class="post-group-item-outer">
    <nuxt-link :to="`/group/${group.id}`">
      <div class="card-item">
          <div class="item-name">
            <h4 class="item-text">{{ group.name }}</h4>
          </div>
          <div>
            <img :src="imageurl" class="background"/>
          </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import joinIcon from '../common/join-icon.vue'

export default Vue.extend({
  components: { joinIcon },
  name: 'post-group-item',
  props :{
    group: Object,
  },
  data() {
    return {
      imageurl: ""
    }
  },
  mounted(){
    this.imageurl = this.group.imageurl ? this.group.imageurl : require(`~/assets/group.png`)
  },

})
</script>

<style scoped>
  .post-group-item-outer{
    position: relative;
    display: inline-block;
  }
  .card-item{
    position: relative;
    width: 180px;
    height: 180px;
    overflow: hidden;
    transition: all .3s ease-in-out;
    margin: 10px;
  }
  .card-item:hover .background{
    opacity: 1;
  }
  .card-item:hover{
    cursor: pointer;
    transform: scale(1.1);
  }
  .item-name {
    position: absolute;
    font-size: 14px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .item-text{
    font-size: 12px;
    font-weight: 800;
    color: white;
    text-shadow: 0 0 10px black;
  }
  .background {
    opacity: 0.3;
    object-fit: cover;
    transition: all .3s ease-in-out;
  }
</style>
