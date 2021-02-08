<template>
  <div class="add-menu-page">
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" to="settingPage">
        <mu-icon value="navigate_before"></mu-icon>
      </mu-button>
      添加类别
      <mu-button flat slot="right" @click="addMenuList">完成</mu-button>
    </mu-appbar>
    <div class="input-box">
      <div class="input-back">
        <img :src="chooseIndex" class="image-input-box">
      </div>
      <el-input placeholder="请输入类别名称（不超过4个字）" class="input-style" v-model="menuName"></el-input>
    </div>
    <div class="content-box">
      <div v-for="item in typeList" :key="item.id" class="content-item-box">
        <div class="title-box">{{ item.name}}</div>
        <div class="image-box">
          <div class="income-box" v-for="content in item.icon" :key="content">
            <div class="income-back"
                 @click="changeItem(content, item.id)"
                 :style="{backgroundColor: chooseIndex === content ? '#FFDA44' : '#f5f5f5'}">
              <img :src="content" class="image-content-box">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import typeList from "@/localdata/typeList.js";
export default {
  name: "addMenuPage",
  data() {
    return {
      typeList: typeList,
      chooseIndex: "iconFun/yule_1.png",
      menuName: "",
      type: this.$route.query.type
    };
  },
  methods: {
    changeItem(item, id) {
      this.chooseIndex = item;
      console.log(this.chooseIndex);
      console.log(id);
    },

    addMenuList() {
      if(this.menuName === "") {
        return false;
      } else {
        var menuList = this.$store.state.menuList;
        var hasContent = menuList.find(x => x.name == this.menuName);
        if(hasContent) {
          this.$toast.info("该类别已存在");
          return false;
        } else {
          var data = {
            name: this.menuName,
            id: this.type,
            path: this.chooseIndex
          };
          menuList.push(data);
          this.updateMenu(menuList);
          console.log(this.type);
        }
      }
    },



    updateMenu(menu) {
      var url = window.requestIp + "/menu/update";
      this.$axios.post(url, {
        menu: JSON.stringify(menu),
        user_id: 1
      }).then(res => {
        console.log(res);

        this.$store.commit("setMenuList", menu);
        this.$router.push({
          path: "settingPage"
        });
      })
    },
  }
};
</script>

<style lang="scss">
.add-menu-page {
  width: 100%;
  height: 100%;
  .mu-appbar-title {
    text-align: center;
    padding: 0;
  }
  .input-box {
    width: 100%;
    height: 45px;
    background-color: #fff;
    .input-back {
      margin-top: 2px;
      margin-left: 10px;
      width: 40px;
      height: 40px;
      border-radius: 20px;
      background-color: #FFDA44;
      float: left;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .image-input-box {
      width: 60%;
      height: 60%;
    }
    .input-style {
      width: calc(100% - 70px);
      float: right;
      margin-top: 2px;
      margin-right: 10px;
      .el-input__inner {
        border: 0;
      }
    }
  }
  .content-box {
    width: 100%;
    height: calc(100% - 100px);
    box-sizing: border-box;
    overflow-y: auto;
    padding: 5px 15px;
    .content-item-box {
      overflow: hidden;
    }
    .title-box {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      color: #666;
      text-align: center;
    }
    .image-box {
      width: 100%;
      margin-bottom: 10px;
    }
    .income-box {
      width: 20%;
      height: 50px;
      float: left;
      margin-bottom: 15px;
    }
    .image-content-box {
      width: 60%;
      height: 60%;
    }
    .income-back {
      margin: 0 auto;
      width: 40px;
      height: 40px;
      border-radius: 20px;
      background-color: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
  }
}
</style>
