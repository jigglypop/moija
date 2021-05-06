<template>
  <div class="small-border-div" >
    <div class="box" :style="styles">
      <img
        v-if="permissions === 4"
        :src="imageurl"
        :style="{
          width: width? width: '30px',
          height: height? height: '30px',
          border: border? border + 'solid transparent' :  '2px solid transparent'}"
        class="admin"/>
      <img
        v-if="permissions === 3"
        :src="imageurl"
        :style="{
          width: width? width: '30px',
          height: height? height: '30px',
          border: border? border + 'solid transparent' :  '2px solid transparent'}"
        class="teacher"/>
      <img
        v-if="permissions === 2"
        :src="imageurl"
        :style="{
          width: width? width: '30px',
          height: height? height: '30px',
          border: border? border + 'solid transparent' :  '2px solid transparent'}"
        class="manager"/>
      <img
        v-if="permissions === 1"
        :src="imageurl"
        :style="{
          width: width? width: '30px',
          height: height? height: '30px',
          border: border? border + 'solid transparent' :  '2px solid transparent'}"
        class="normal"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name:'small-avatar',
  props: {
    styles: Object,
    width: String,
    height: String,
    border: String,
    permission: Number,
    image: String
  },
  data() {
    return {
      borders : this.border ? this.border :'2px',
      permissions : this.permission ? this.permission : 4,
      imageurl: this.image ? this.image : require('~/assets/image/peopleicon.png')
    }
  }

})
</script>

<style scoped>
  .small-border-div{

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .small-border-div:hover {
    cursor: pointer;
  }
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 2px;
  }

  img {
    border-radius: 50%;
    object-fit: cover;
  }

  .admin {
    background: linear-gradient(45deg, #000000, #000000) padding-box,
      linear-gradient(45deg, #ff6a00, #ee0979) border-box;
  }

  .manager {
    background: linear-gradient(45deg, #000000, #000000) padding-box,
      linear-gradient(45deg, #8e2de2, #4a00e0) border-box;
  }
  .teacher {
    background: linear-gradient(45deg, #000000, #000000) padding-box,
      linear-gradient(45deg, #00b09b, #96c93d) border-box;
  }
  .normal {
    background: linear-gradient(45deg, #000000, #000000) padding-box,
      linear-gradient(45deg, #ffe259, #ffa751) border-box;
  }

</style>
