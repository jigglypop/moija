<template>
  <div class="join-wrapper">
    <div class="join-content">
      <div>
        <h4 class="join-title">글 삭제</h4>
      </div>
      <div>
        <h5>글을 삭제하시겠습니까?</h5>
      </div>
    </div>
    <div class="join-buttons">
      <button @click="close" class="glass-button cancel"><h6 class="buttontext">취소</h6></button>
      <button @click="onDelete" class="glass-button join"><h6 class="buttontext">삭제</h6></button>
    </div>
  </div>
</template>

<script lang='ts'>
import WaveButton from '../common/wave-button.vue'
import { mapState, mapMutations, mapActions } from 'vuex'
import GlassButton from '../common/glass-button.vue'
import Vue from 'vue'

export default Vue.extend({
  components: { WaveButton, GlassButton },
  name:"delete-component",
  props:{
    onClick: Function
  },
    computed:{
    ...mapState(['login', 'check', 'post', 'delete'])
  },
  methods:{
    ...mapMutations({
      CLOSE: 'modal/CLOSE',
    }),
    ...mapActions({
      CHECK: 'check/CHECK',
      GROUP: 'group/GROUP',
      DELETE: 'delete/DELETE'
    }),
    async onDelete(){
      await this.DELETE({
        postId: this.post.data.id
      })
      if (this.delete.data){
        await this.close()
        await this.$router.push('/')
      }
    },
    close(){
      this.CLOSE()
    }
  }
})
</script>

<style scoped>
  .join-wrapper {
    background-color: black;
    width: 400px;
    height: 300px;
    display: grid;
    grid-template-rows: 1fr 1fr;
  }
  .join-content{
    grid-row:1/2;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
  }
  .join-title{
    font-size: 20px;
    margin: 30px;
    color: #78ffd6;
  }
  .join-buttons {
    grid-row:2/3;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .buttontext{
    font-size: 11px;
    margin: 3px;
    font-weight: 800;
  }
  .glass-button {
    text-decoration: none;
    width: 20%;
    height: 30px;
    margin: 10px;
    font-size: 20px;
    font-weight: 800;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    color: black;
  }
  .glass-button.cancel{
    background-image: linear-gradient(45deg, #232526, #414345);
  }
  .glass-button.join{
    background-image: linear-gradient(45deg, #a8ff78, #78ffd6);

  }
  .glass-button:hover {
    background-color: #f3f9a7;
  }

  .glass-button:before {
    content: "";
    background-color: white;
    top: 0;
    left: 0;
    width: 200%;
    height: 50px;
    position: absolute;
    transform: translateX(-100%) rotate(45deg);
    transition: all 0.3s;
  }

  .glass-button:hover:before {
    transform: translateX(100%) rotate(45deg);
  }
</style>
