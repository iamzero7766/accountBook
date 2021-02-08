<template>
  <div class="cost-setting-component">
    <draggable v-model="incomeList"
               class="draggable-box"
               touchStartThreshold="40"
               handle=".search"
               chosenClass="chosen-style"
               @end="endDrag">
      <van-swipe-cell v-for="item in incomeList" :key="item.name">
        <van-cell value="" center>
          <template #title>
            <span class="custom-title">{{ item.name }}</span>
          </template>
          <i class="el-icon-s-operation search"></i>
        </van-cell>
        <template #right>
          <van-button square type="danger" text="删除" @click="deleteMenu(item.name)"/>
        </template>
      </van-swipe-cell>
    </draggable>
    <mu-flex justify-content="center" align-items="center" class="bottom-box">
      <mu-button full-width color="#F0E68C" text-color="#000" @click="addMenu">添加其他类别</mu-button>
    </mu-flex>
  </div>
</template>

<script>
// import incomeList from "@/localdata/incomeList.js";
import draggable from 'vuedraggable'
export default {
  name: "CostSetting",
  data() {
    return {
      incomeList: this.$store.state.menuList
    };
  },
  components: { draggable },
  created() {
  },
  methods: {

    endDrag() {
      // this.updateMenu(this.incomeList);
    },

    deleteMenu(name) {
      var index = this.incomeList.findIndex(x => x.name===name);
      if(index) {
        this.incomeList.splice(index, 1);
        this.updateMenu(this.incomeList);
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
      })
    },


    addMenu() {
      this.$router.push({
        path: "addMenuPage",
        query: {
          type: 1,
        }
      });
    },


  }

};
</script>

<style lang="scss">
.cost-setting-component {
  width: 100%;
  height: 100%;
  position: relative;
  .draggable-box {
    width: 100%;
    height: calc(100% - 40px);
    overflow-y: auto;
  }
  .draggable-item {
    width: 100%;
    height: 40px;
    border: 1px solid #ddd;
  }
  .bottom-box {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
  }
  .chosen-style {
    box-shadow: 0 0 5px #ddd;
  }
}
</style>
