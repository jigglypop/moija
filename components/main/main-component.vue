<template>
  <div class="mainwrapper">
    <div class="main">
      <div class="main-item">
        <h1>hello</h1>
      </div>
            <div class="main-item">
        <h1>hello</h1>
      </div>
            <div class="main-item">
        <h1>hello</h1>
      </div>
                  <div class="main-item">
        <h1>hello</h1>
      </div>
                        <div class="main-item">
        <h1>hello</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainComponent',
  data(){
    return {
      images: [

      ]
    }
  }
}
</script>

<style scoped>
  .mainwrapper{
    height: 400vh;
  }
  .main {
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-content: center;
    text-align: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .main-item{
    /* grid-template-columns: ; */
    /* grid-row:1/2;
    grid-column: 1/2; */
    background: red;
    width: 100%;
    height: 100%;
  }
</style>
