<template>
  <div class="home">
    <router-view class="home-router"></router-view>
    <bottom-tabs></bottom-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import BottomTabs from "../components/BottomTabs";

export default {
  name: "Home",
  components: {
    BottomTabs
  },
  created() {
  },
  methods: {
  }
};
</script>
<style>
.home-router {
  width: 100%;
  height: calc(100% - 57px);
}
</style>
