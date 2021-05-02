<template>
	<div class="group-list-item-wrapper" >
    <div class="top" v-if="categories">
      <div v-for="category in categories" :key="category.id" :class="`top-item ${category.id}`" @click="selectTags">
        {{category.name}}
      </div>
    </div>
    <div class="mid" v-if="list.data">
      <div class="mid-top" v-if="group.isJoin">
        <nuxt-link :to="`/write/${categoryId}`">
          <glass-button :styles="{ backgroundImage: 'linear-gradient(45deg, #8e2de2, #4a00e0)', color: 'white' }">
            <h6>글쓰기</h6>
          </glass-button>
        </nuxt-link>

      </div>
      <div class="mid-content" v-if="list.data.rows.length">
        <group-list-post-item v-for="post in list.data.rows" :post="post" :key="post.id"></group-list-post-item>
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
      <div class="mid-content-not" v-else>
        <h2>포스트가 없습니다.</h2>
      </div>

    </div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations, mapActions } from 'vuex'
import GlassButton from '../common/glass-button.vue'
import GroupListPostItem from './group-list-post-item.vue'

export default Vue.extend({
  components: { GroupListPostItem, GlassButton },
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
    ...mapState(['list', 'group']),
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
    if (this.group.data){
      if (this.group.data.categories[0])
      this.categoryId = this.group.data.categories[0].id
    }
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
    display: grid;
    grid-template-rows: 50px 1fr;
  }
  .mid-top{
    grid-row: 1/2;
    padding-right: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
  }
  .mid-content{
    grid-row: 2/3;
    position: relative;
    width: 100%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    text-align: center;
  }
  .mid-content-not{
    grid-row: 2/3;
    position: relative;
    width: 100%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  @media only screen and (max-width: 1200px) {

  }
  @media only screen and (max-width: 600px) {

  }
</style>
