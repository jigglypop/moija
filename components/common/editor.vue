<template>
  <div class="editor-wrapper">
    <no-ssr placeholder="loading...">
    </no-ssr>
  </div>
</template>

<script>
export default {
  // components: { VueEditor },
  name: "editor",
};
</script>

<style>
.editor-wrapper {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
