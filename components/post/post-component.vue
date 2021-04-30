<template>
    <div class="post-outer">
        <div class="post-inner" v-if="post.data">
          <div class="header-div">
            <div class="header-div-top">
              <div>
                <h4 class="created">{{ getDateToString(post.data.createdAt) }}</h4>
              </div>
              <div >
                <div v-if="post.data.user">
                  <div v-if="post.data.user.profile && check.data">
                    <div v-if="post.data.user.profile.id === check.data.id" class="user-button">
                      <nuxt-link :to="`/update/${post.data.id}`">
                        <glass-button
                          :styles="{
                            backgroundImage: 'linear-gradient(45deg, #0cebeb, #20e3b2, #29ffc6)',
                          }"
                          class="glass-button">
                          <h6>업데이트</h6>
                        </glass-button>
                      </nuxt-link>
                      <div @click="onDelete">
                        <glass-button
                          :styles="{
                            backgroundImage: 'linear-gradient(45deg, #000000, #434343)',
                            color: 'white'
                          }"
                          class="glass-button">
                          <h6>삭제</h6>
                        </glass-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="header-div-bottom">
              <h1>{{ post.data.title }}</h1>
            </div>
          </div>
          <div class="inner-div">
            <TuiEditorViewer
              :value="post.data.content"
            />
          </div>
          <div class="under-div">
            <div>
              <h4 class="created">{{ getDateToString(post.data.createdAt) }}</h4>
            </div>
            <div v-if="post.data.user">
              <div v-if="post.data.user.profile">
                <user-component :profile="post.data.user.profile"></user-component>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getDateToString } from '../common/getDateToString'
import { mapState, mapMutations } from 'vuex'
import userComponent from '../user/user-component.vue'
import WaveButton from '../common/wave-button.vue'
import GlassButton from '../common/glass-button.vue'

export default Vue.extend({
  components: { userComponent, WaveButton, GlassButton },
  name: 'post-component',
  data() {
    return {
      getDateToString: getDateToString
    }
  },
  computed:{
    ...mapState(['profile', 'post', 'check']),
  },
  methods: {
    ...mapMutations({
      OPENDELETE: 'modal/DELETE',
    }),
    onDelete(){
      this.OPENDELETE()
    },
  },
})
</script>

<style scoped>
  .post-outer {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 5%;
  }
  .post-inner {
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 200px 1fr 50px;
  }
  .created{
    font-size: 12px;
    margin: 5px;
  }
  .header-div {
    grid-row: 1/2;
    display: grid;
    background-color: rgba(0, 0, 0, 0.1);
    grid-template-rows: 50px 1fr;
  }
  .header-div-top{
    grid-row: 1/2;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: black;
  }
  .header-div-bottom{
    grid-row: 2/3;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: black;
  }
  .glass-button{
    margin: 5px;
  }
  .user-button{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .inner-div {
    grid-row: 2/3;
    display: flex;
    padding: 5%;
    width: 100%;
    min-height: 60vh;
    color: black;
  }
  .current-user button {
    transition: all 0.2s ease-in-out;
    transition: 0.5s;
    border: 2px solid #40e0d0;
    background-color: transparent;
    padding: 0;
    width: 80px;
    cursor: pointer;
  }
  .current-user h4 {
    margin: 8px;
    font-size: 15px;
    color: #40e0d0;
  }
  .current-user:hover {
    background: #40e0d0;
    transform: scale(1.1);
  }
  .current-user:hover h4 {
    color: black;
  }
  .under-div {
    grid-row: 3/4;
    display: flex;
    color: black;

    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 5%;
  }
</style>
