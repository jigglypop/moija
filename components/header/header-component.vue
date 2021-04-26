<template>
    <nav class="nav">
        <div class="container">
            <div class="headerdiv">
                <nuxt-link to="/">
                  <div class="headerleft">
                    <div class="headerleftitem">
                      <img :src="require('~/assets/logo.png')" class="logoimage">
                    </div>
                    <div class="headerleftitem">
                      <h1 class="logotext">
                        <h2 class="logoundertext">MOIJA</h2>
                        세상의 모든 모임
                      </h1>
                    </div>
                  </div>
                </nuxt-link>
            </div>
            <div>
                <div class="headerdiv">
                    <nuxt-link to="/about"><h1 class="righttext">회원가입</h1></nuxt-link>
                </div>
                <div class="headerdiv">
                    <nuxt-link to="/"><h1 class="righttext">로그인</h1></nuxt-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
  name:'header-component',
  mounted(){
    const nav = document.querySelector(".container");
    const fixNav = () => {
      // scrollHeight : 스크롤바 높이를 뺀 내용 전체의 높이
      // clientHeight : 스크롤바 높이를 뺀 가시적인 높이
      // offsetHeight : 스크롤바 높이를 포함한 가시적인 높이
      if (window.scrollY > nav.offsetHeight + 300) {
        nav.classList.add("colors");
      } else {
        nav.classList.remove("colors");
      }
    };
    window.addEventListener("scroll", fixNav);
  }
}
</script>


<style scoped>
  .headerdiv {
    font-size: 15px;
    display: inline-block;
  }
  .headerleft{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  /* 외부 컨테이너 */
  .container {
    padding: 5%;
    transition: padding 0.3s ease-in-out;
  }
  /* .container .headerdiv{
    padding: 30px;
  }
  .container.colors .headerdiv{
    padding: 0;
  } */
  .container.colors {
    padding: 0;
    background-color: black;
  }

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: all 0.3s ease-in-out;
    z-index: 1;
  }
  .logoimage{
    width: 30px;
  }
  .nav .logotext {
    font-size: 10px;
    font-weight: 800;
    text-shadow: 2px 2px 2px black;
  }
  .logoundertext{
    margin: 0;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease-in-out;
  }
  .nav h1 {
    color: #fff;
    text-decoration: none;
    font-size: 12px;
    margin: 10px;
    padding: 10px;
    font-weight: 800;
    transition: all .3s ease-in-out;
    cursor: pointer;
  }
  .nav h1:hover {
    color: #ffe259;
    border-bottom: 2px solid#ffe259;
  }
</style>
