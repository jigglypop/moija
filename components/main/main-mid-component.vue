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
        <h6 >{{item}}</h6>
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
    position: relative;
    grid-row:2/3;
    width: 90vw;
    height: 100vh;
    display: grid;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 5%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 400px 200px;
  }

  .left{
    grid-row: 1/3;
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
    padding-bottom: 10px;
  }
  .undertext{
    font-size: 11px;
  }

  .mid {
    grid-column: 2/3;
    grid-row: 1/2;
    display: grid;
    justify-content: center;
    text-align: center;
    align-items: flex-start;
  }
  .right {
    grid-column: 2/3;
    grid-row: 2/3;

    display: grid;
    justify-content: flex-start;
    text-align: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  }
  .right-inner{
    top: -100px;
  }
  .location-text-item{
    color: gray;
    margin: 4px;
    padding: 4px;
    border: 2px solid gray;
    transition: all 0.2s ease-in;
  }
  .location-text-item:hover{
    color: #ED213A;
    border: 2px solid #ED213A;
    box-shadow: 0 0 20px #ED213A;
  }
  .location-text-item.light{
    color: #ED213A;
    border: 2px solid #ED213A;
    box-shadow: 0 0 20px #ED213A;
  }
  @media only screen and (max-width: 1200px) {
    .main-mid-outer{
      height: 120vh;
    }
  }
  @media only screen and (max-width: 900px) {
    .main-inner {
      grid-template-columns: 200px 200px;
      grid-template-rows: 200px 200px  200px  200px;
    }
      .left{
      grid-row: 1/2;
      grid-column: 1/3;
    }
    .mid{
      grid-row: 2/3;
      grid-column: 1/3;
    }
    .right{
      grid-row: 3/4;
      grid-column: 1/3;
    }

  }
  @media only screen and (max-width: 700px) {
    .mainwrapper{
      height: 180vh;
      margin: 20%;
    }

    .titletext{
      font-size: 60px;
      padding: 0;
    }
    .subtitletext{
      font-size: 14px;
      padding-bottom: 10px;
    }
    .undertext{
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 400px) {
      .main-mid-outer{
      grid-template-rows: 1fr 1fr 100px;
      grid-template-columns: 1fr;
    }
    .main-mid-outer{
      grid-template-rows: 380px 200px;
    }
    .titletext{
      font-size: 50px;
      padding: 0;
    }
    .subtitletext{
      font-size: 12px;
      padding-bottom: 10px;
    }
    .undertext{
      font-size: 10px;
    }
  }
</style>
