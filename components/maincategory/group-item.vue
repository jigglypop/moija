<template>
	<div class="card">
		<div class="imgbox">
			<img :src="imageurl">
		</div>
		<div class="content">
			<h3>{{ group.name }}</h3>
			<p>{{ group.info }}</p>
			<nuxt-link :to="`/group/${group.id}`"><h4>모임 둘러보기</h4></nuxt-link>
		</div>
	</div>
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
  computed:{
  },
  mounted(){
    this.imageurl = this.group.imageurl ? this.group.imageurl : require(`~/assets/maincategory/${this.maincategoryimg}`)
  }
})
</script>

<style scoped>
  .card {
    position: relative;
    width: 300px;
    height: 400px;
    background-color: black;
    margin: 10px;
  }

  .content {
    position: absolute;
    bottom: 0px;
    width: 80%;
    height: 80px;
    background-color: white;
    color: black;
    left: 10%;
    text-align: center;
    transition: 0.5s;
    overflow: hidden;
  }

  h3 {
    font-size: 20px;
    font-weight: 800;
    text-transform: uppercase;
    margin: 25px;
  }

  p {
    width: 80%;
    margin: 10px auto;
    font-size: 12px;
    font-weight: 800;
    transition: 0.5s;
    opacity: 0;
  }

  a {
    text-decoration: none;
    background-color: black;
    color: white;
    padding: 10px 15px;
    display: inline-block;
    margin-top: 10px;
    transition: 0.5s;
    opacity: 0;
  }

  .card:hover {
    box-shadow: 0px 20px 20px rgba(255,255,255,0.5);
  }

  .card:hover .content {
    height: 100%;
    width: 100%;
    left: 0%;
  }

  .card:hover p,
  .card:hover a {
    opacity: 1;
    transition-delay: 0.5s;
  }

  .imgbox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s;
    opacity: 0.5;
  }

  .card:hover img {
    opacity: 0;
  }

  @media only screen and (max-width: 1200px) {

  }
  @media only screen and (max-width: 600px) {

  }
</style>
