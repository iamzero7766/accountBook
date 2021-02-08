<template>
  <div id="app">
    <router-view class="router-view-box"/>
  </div>
</template>


<style lang="scss">
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  .router-view-box {
    width: 100%;
    height: 100%;
  }
}
</style>
<script>
// import BottomTabs from "./components/BottomTabs";
export default {
  // components: { BottomTabs}
};
</script>
