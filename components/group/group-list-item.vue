<template>
	<div class="group-list-item-wrapper" >
    <div class="top" v-if="categories">
      <div v-for="category in categories" :key="category.id" :class="`top-item ${category.id}`" @click="selectTags">
        {{category.name}}
      </div>
    </div>
    <div class="mid" v-if="list.data">
      <div class="mid-content" v-if="list.data.rows.length">
        <group-list-post-item v-for="post in list.data.rows" :post="post" :key="post.id"></group-list-post-item>
      </div>
      <div class="mid-content" v-else>
        <h6>포스트가 없습니다.</h6>
      </div>
      <v-pagination
          v-model="page"
          :length="list.data.totalpage"
          color="#8e56ff"
          background="transparent"
          dark
          circle
          class="pagination"
          @input="getPage">
      </v-pagination>
    </div>

    <div class="bottom">

    </div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations, mapActions } from 'vuex'
import GroupListPostItem from './group-list-post-item.vue'

export default Vue.extend({
  components: { GroupListPostItem },
  name: 'group-list-item',
  props:{
    categories: {
      type: Array,
    }
  },
  data () {
    return {
      categoryId: '',
      page: 1,
    }
  },
  computed:{
    ...mapState(['list']),
  },
  methods: {
    ...mapMutations({
      CLEARLIST: 'list/CLEAR',
    }),
    ...mapActions({
      LIST: 'list/LIST',
    }),
    getPage (page: any) {
      this.LIST({
        categoryId: this.categoryId,
        page: page - 1
      })
    },
    async selectTags(event: any) {
      if (event) {
        const tags = document.querySelectorAll('.top-item')
        for (let i = 0; i < tags.length; i++) {
          if (event.target.className === tags[i].className){
            await tags[i].classList.add("selected");
          }else{
            await tags[i].classList.remove("selected");
          }
        }
        this.categoryId = await event.target.className.split(" ")[1]
        await this.LIST({
          categoryId: this.categoryId,
          page: 0
        })
      }
    }
  },
  mounted(){
    const tags = document.querySelectorAll('.top-item')
    tags[0]?.classList.add('selected')

    if (this.categories){
      const first : any = this.categories[0]
      this.categoryId = first.id
      this.LIST({
        categoryId: this.categoryId,
        page: 0
      })
    }
  }
})
</script>

<style scoped>
  @font-face {
    font-family: "NanumBarunGothic";
    src: url("../../assets/NanumBarunGothicSubset.woff2");
  }
  .group-list-item-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 50px 1fr;
    margin: 1px;
    transition: all .3s ease-in-out;
  }
  .pagination{
    font-family: "NanumBarunGothic", sans-serif !important;
    font-weight: 800;
    transform: scale(0.8);
  }
  .top {
    grid-row: 1/2;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .top-item{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 2px solid #8e56ff;
    cursor: pointer;
    color: #8e56ff;
    font-size: 14px;
    font-weight: 800;
  }
  .top-item.selected{
    border-bottom: none;
    background-color: rgba(255, 252, 252, 0.02)
  }
  .top-item-text{
    color: #8e56ff;
  }
  .mid {
    position: relative;
    width: 100%;
    grid-row: 2/3;
    border-left: 2px solid #8e56ff;
    border-right: 2px solid #8e56ff;
    background: rgba(255, 252, 252, 0.02);
  }
  .mid-content{
    position: relative;
    width: 100%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .bottom{
    grid-row: 3/4;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    border-bottom: 2px solid #8e56ff;
    border-left: 2px solid #8e56ff;
    border-right: 2px solid #8e56ff;
    background: rgba(255, 252, 252, 0.02);
  }


  @media only screen and (max-width: 1200px) {

  }
  @media only screen and (max-width: 600px) {

  }
</style>
