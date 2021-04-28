<template>
  <div class="border-div blob white">
    <div className="box">
      <img
        v-if="permissions === 4"
        :src="imageurl"
        :style="{
          width: width? width: '40px',
          height: height? height: '40px',
          border: border? border + 'solid transparent' :  '3px solid transparent'}"
        class="admin"/>
      <img
        v-if="permissions === 3"
        :src="imageurl"
        :style="{
          width: width? width: '40px',
          height: height? height: '40px',
          border: border? border + 'solid transparent' :  '3px solid transparent'}"
        class="teacher"/>
      <img
        v-if="permissions === 2"
        :src="imageurl"
        :style="{
          width: width? width: '40px',
          height: height? height: '40px',
          border: border? border + 'solid transparent' :  '3px solid transparent'}"
        class="manager"/>
      <img
        v-if="permissions === 1"
        :src="imageurl"
        :style="{
          width: width? width: '40px',
          height: height? height: '40px',
          border: border? border + 'solid transparent' :  '3px solid transparent'}"
        class="normal"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name:'border-avatar',
  props: {
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
  .border-div{
    cursor: pointer;
    transition: .5s;
  }

  .border-div:hover {
    transform: scale(1.1);
  }
  .box {
    display: inline-block;
    justify-content: center;
    align-items: center;
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
  .blob {
    background: black;
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    width: 200px;
    height: 200px;
    transform: scale(1);
    animation: pulse-black 2s infinite;
    cursor: pointer;
  }
  .blob.white {
    background: #ffe259;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
    animation: pulse-white 2s infinite;
  }

  @keyframes pulse-white {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }
</style>
