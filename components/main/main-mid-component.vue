<template>
  <div class="main-mid-outer">
    <div class="left">
      <h1 class="titletext">LOCATION</h1>
      <h2 class="subtitletext">언제 어디서나 만날 수 있는 내 모임</h2>
      <h4 class="undertext">어느 지역에서도 나와 맞는 모임을 만나실 수 있습니다.</h4>
    </div>
    <div class="mid">
      <map-svg></map-svg>
    </div>
    <div class="right">
      <div v-for="item in imageurl" :key="item" :class="`location-text-item ${item}`">
        <h5 >{{item}}</h5>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MapSvg from '../common/map-svg.vue'
export default {
  name: 'main-mid-outer',
  components:{
    MapSvg
  },
  data() {
    return {
      imageurl: {
        "Seoul" : "서울",
        "Busan" : "부산",
        "Daegu" : "대구",
        "Incheon": "인천",
        "Gwangju": "광주",
        "Daejeon": "대전",
        "Ulsan" : "울산",
        "Gyeonggi" : "경기",
        "Gangwon" : "강원",
        "North Chungcheong" : "충북",
        "South Chungcheong" : "충남",
        "North Jeolla" : "전북",
        "South Jeolla": "전남",
        "North Gyeongsang": "경북",
        "South Gyeongsang" : "경남",
        "Jeju": "제주",
        "Sejong" : "세종",
      }
    }
  },

}
</script>

<style scoped>
  .main-mid-outer{
    display: grid;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 8%;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .left{
    grid-column: 1/2;
    display: grid;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  .titletext{
    font-size: 70px;
    padding: 0;
  }
  .subtitletext{
    font-size: 20px;
  }
  .undertext{
    font-size: 11px;
  }

  .mid {
    grid-column: 2/3;
    display: grid;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  .right {
    grid-column: 3/4;
    display: grid;
    justify-content: center;
    text-align: center;
    align-items: center;

    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .location-text-item{
    color: gray;
    margin: 4px;
    padding: 4px;
    border: 2px solid gray;
    transition: all 0.2s ease-in;
  }
  .location-text-item.light{
    color: #ED213A;
    border: 2px solid #ED213A;
    box-shadow: 0 0 20px #ED213A;
  }
  @media only screen and (max-width: 1200px) {
  .main {
    }
  }
  @media only screen and (max-width: 600px) {
  .main {
    }
  }
</style>
