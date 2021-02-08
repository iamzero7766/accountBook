<template>
  <div class="pay-component-box">
    <div :class="[showInfo ? 'height-watch' : 'height-full', 'list-box']">
      <div class="income-box" v-for="(item, index) in incomeList" :key="index">
        <div class="income-back"
             :style="{backgroundColor: chooseIndex===index+1 ? '#FFDA44' : '#f5f5f5'}"
             @click="chooseItem(item, index)" >
          <img :src="item.path" class="image-box">
        </div>
        <div class="title-box">{{ item.name }}</div>
      </div>
      <div class="income-box">
        <div class="income-back" @click="setting">
          <img src="setting.png" class="image-box">
        </div>
        <div class="title-box">设置</div>
      </div>
    </div>
    <transition name="el-zoom-in-bottom">
      <div class="input-box" v-show="showInfo">
        <mt-field label="金额" placeholder="请输入数字" type="number" v-model="info.value"></mt-field>
        <mt-field label="备注" placeholder="备注输入中..." v-model="info.message"></mt-field>
        <div class="date-box">
          <div class="text-style">日期</div>
          <div class="date-style">
            <mu-date-input v-model="info.datetime" container="bottomSheet" label-float></mu-date-input>
          </div>
        </div>
        <div class="button-box">
          <mu-button round color="info" style="margin-right: 10px" @click="cancelChoose">取消</mu-button>
          <mu-button round color="success">添加</mu-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// import incomeList from "@/localdata/incomeList.js";
export default {
  name: "PayComponent",
  data() {
    return {
      incomeList: [],
      chooseIndex: 0,
      showInfo: false,
      info: {
        value: 0.00,
        message: "",
        datetime: "",
      }
    };
  },
  created() {
    this.getMenu();
  },
  methods: {


    chooseItem(item, index) {
      console.log(item);
      console.log(index);
      this.chooseIndex = index + 1;
      this.showInfo = true;
    },

    cancelChoose() {
      this.showInfo = false;
      this.chooseIndex = 0;
    },

    setting() {
      this.$router.push({
        path: "settingPage"
      })
    },


    getMenu() {
      var url = window.requestIp + "/menu/query";
      this.$axios.post(url, {
        id: 1
      }).then(res => {
        console.log(res);
        var menu = res.data.info[0].menu;
        this.incomeList = JSON.parse(menu);
        console.log(this.incomeList);
        this.$store.commit("setMenuList", this.incomeList);
      })
    },



  }
};
</script>

<style lang="scss">
.pay-component-box {
  width: 100%;
  height: 100%;
  position: relative;
  .height-full {
    height: 100%;
  }
  .height-watch {
    height: calc(100% - 202px);
  }
  .list-box {
    width: 100%;
    box-sizing: border-box;
    padding: 15px;
    overflow-y: auto;
  }
  .input-box {
    width: 100%;
    height: 200px;
    border-top: 1px solid #ddd;
    box-shadow: -2px 0 5px #ddd;
    .close-box {

    }
  }
  .date-box {
    height: 48px;
    line-height: 48px;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .text-style {
    float: left;
    font-size: 16px;
  }
  .date-style {
    float: right;
    .mu-input {
      margin: 0;
      padding: 0;
      min-height: 32px;
    }
  }
  .button-box {
    width: 100%;
    height: 40px;
    text-align: center;
  }
  .income-box {
    width: 25%;
    height: 80px;
    float: left;
    margin-bottom: 15px;
  }
  .income-back {
    margin: 0 auto;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .title-box {
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: center;
  }
  .image-box {
    width: 60%;
    height: 60%;
  }
}
</style>
