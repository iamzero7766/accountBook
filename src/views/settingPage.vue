<template>
  <div class="setting-page-style">
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="returnAdd">
        <mu-icon value="navigate_before"></mu-icon>
      </mu-button>
      类别设置
    </mu-appbar>
    <div class="toggle-box">
      <div class="toggle-style">
        <div @click="changeActive(1)"
             :class="[activeIndex == 1 ? 'toggle-checked' : 'toggle-noChecked', 'toggle-left', 'border-left']">支出</div>
        <div @click="changeActive(2)"
             :class="[activeIndex == 2 ? 'toggle-checked' : 'toggle-noChecked', 'toggle-left', 'border-right']">收入</div>
      </div>
    </div>
    <div class="child-box">
      <cost-setting v-if="activeIndex === 1"></cost-setting>
      <income-setting v-if="activeIndex === 2"></income-setting>
    </div>
  </div>
</template>

<script>

import CostSetting from "../components/settingPage/CostSetting";
import IncomeSetting from "../components/settingPage/IncomeSetting";
import bus from "@/utils/bus.js";
export default {
  name: "settingPage",
  components: { IncomeSetting, CostSetting },
  data() {
    return {
      active1: 0,
      activeIndex: 1,
    };
  },
  methods: {
    changeActive(index) {
      this.activeIndex = index;
    },

    returnAdd() {
      this.$router.push({
        path: "/"
      });
      bus.$emit("router-add", 3);
    }
  }
};
</script>

<style lang="scss">
.setting-page-style {
  width: 100%;
  height: 100%;
  .mu-appbar-title {
    text-align: center;
    margin-right: 56px;
    padding: 0;
  }
  .toggle-box {
    width: 100%;
    margin: 0 auto;
    height: 30px;
    background-color: #FFDA44;
    .toggle-style {
      width: 200px;
      margin: 0 auto;
      height: 100%;
    }
    .toggle-left {
      width: 100px;
      height: 20px;
      box-sizing: border-box;
      border: 1px solid #888;
      float: left;
      text-align: center;
      line-height: 20px;
    }
    .border-left {
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }
    .border-right {
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
    }
    .toggle-checked {
      color: #FFDA44;
      background-color: #888;
    }
    .toggle-noChecked {
      color: #888;
      background-color: #FFDA44;
    }
  }
  .child-box {
    width: 100%;
    height: calc(100% - 86px);
  }
}
</style>
