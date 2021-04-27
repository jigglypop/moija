<template>
  <input class="trans-input"/>
</template>

<script>
export default {
  name: "trans-input",
};
</script>

<style scoped>
  .trans-input{
    font-weight: 800;
    font-size: 1rem;
    outline: none;
    padding: 1rem;
    margin: 0.5rem;
    width: 100%;
    box-sizing: border-box;
    border-style: solid;
    border-radius: 5px;
    border-image-slice: 1;
    background: none;
    border-color: white;
    color: white;
    caret-color: white;
  }
  .trans-input:-webkit-autofill,
  .trans-input:-webkit-autofill:hover,
  .trans-input:-webkit-autofill:focus,
  .trans-input:-webkit-autofill:active {
	  transition: background-color 5000s ease-in-out 0s;
	  -webkit-transition: background-color 9999s ease-out;
    -webkit-box-shadow: 0 0 0px 1000px #141414 inset !important;
    -webkit-text-fill-color: #fff !important;
  }
</style>
