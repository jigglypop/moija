<template>
  <div class="jb-wrap">
    <div class="jb-image">
      <model-gltf
        :backgroundColor="bgColor"
        :backgroundAlpha="bgAlpha"
        :rotation="rotation"
        :scale="scale"
        @on-load="onLoad"
        class="gltfouter"
        src="rionenv.gltf"
      >
      </model-gltf>
    </div>
    <div class="jb-content">
      <div class="main-item" v-for="item in maincategory.data" :key="item.id">
        <nuxt-link :to="`/maincategory/${item.id}`">
          <div class="item-name">
            <h4 >{{ item.name }}</h4>
          </div>
          <div>
            <img :src="require(`~/assets/maincategory/${item.image}`)" class="background"/>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="jb-text">

      <h4 class="centertext">MOIJA</h4>
      <h3 class="centertitle">모이자</h3>
      <h3 class="centermakers">with KAKAO MAKERS</h3>
      <h5 class="centerinfo">세상의 모든 모임, 내 근처의 모임을 만나보세요</h5>
    </div>
  </div>
</template>

<script>
import { ModelGltf } from "vue-3d-model";

export default {
  name:'rion',
  props :{
    maincategory : Object,
  },
  data() {
    return {
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      scale: {x : 2, y: 2, z: 2},
      bgColor: "black",
      bgAlpha: 0.5,
    };
  },
  methods: {
    onLoad() {
      this.rotate();
    },
    rotate() {
      this.rotation.y += 0.005;
      requestAnimationFrame(this.rotate);
    },
  },
  components: {
    ModelGltf,
  },
};
</script>

<style scoped>
  .main-item{
    position: relative;
    width: 100px;
    height: 100px;
    overflow: hidden;
    transition: all .3s ease-in-out;
    margin: 10px;
    opacity: 0.3;
  }
  .main-item:hover{
    opacity: 1;
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
  .background {
    object-fit: cover;
  }
.jb-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  /* margin: 10px auto; */
}
.jb-wrap .gltfouter {
  width: 100%;
  vertical-align: middle;
}
.jb-image{
  position: relative;
  width: 100%;
  height: 100%;
}
.jb-text {
  padding: 5px 10px;
  text-align: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.jb-content{
  padding: 5px 10px;
  width: 70%;
  position: absolute;
  display: flex;
  justify-content: center;
  text-align: center;

  background-color: rgba(0, 0, 0, 0.8);
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.centertext {
  font-size: 60px;
}
.centertitle{
  margin-bottom: 10px;
}
.centermakers{
  font-size: 12px;
  color: #ffe259;
}
.centerinfo{
  margin: 10px;
}
h1, h2, h3, h4, h5, h6, p {
  color: #fafafa;
  margin: 0;
}
a:link,
a:visited,
a:hover  {
  color: #fafafa;
  text-decoration: none;
}
</style>
