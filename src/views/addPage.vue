<template>
  <div class="add-page-style">
    <mu-tabs
            :value.sync="active1"
            inverse
            color="#fff"
            text-color="#fff"
            indicator-color="#FF8C00"
            center>
      <mu-tab value="1">支出</mu-tab>
      <mu-tab value="2">收入</mu-tab>
    </mu-tabs>
    <pay-component v-if="active1 === '1'" class="component-box"></pay-component>
  </div>
</template>

<script>
import PayComponent from "../components/addPart/PayComponent";
export default {
  name: "addPage",
  components: { PayComponent },
  data() {
    return {
      active1: "1"
    };
  },
  created() {},
  methods: {
    changeValue(value) {
      console.log(value);
    },


  }
};
</script>

<style lang="scss">
.add-page-style {
  width: 100%;
  height: 100%;
  .mu-tabs-inverse {
    background-color: #FFDA44;
    color: #fff;
  }
  .component-box {
    width: 100%;
    height: calc(100% - 105px);
  }

}
</style>
