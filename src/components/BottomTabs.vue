<template>
  <div class="bottom-tabs-component">
    <mu-container style="width:100%;">
      <mu-bottom-nav :value.sync="selected" shift @change="changeTab">
        <mu-bottom-nav-item
                v-for="item in menuList"
                :value="item.id"
                :title="item.name"
                :icon="item.icon"
                :key="item.id">
        </mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>

<script>
import menuList from "@/localdata/tabMenu.js";
import bus from "@/utils/bus.js";
export default {
  name: "BottomTabs",
  components: {
    // CircleMenu
  },
  data() {
    return {
      menuList: menuList,
      selected: this.$store.state.tabIndex
    };
  },
  methods: {
    changeTab(value) {
      console.log(value);
      this.$store.commit('setTabIndex', value);
      var hasContent = this.menuList.find(x => x.id == value);
      if(hasContent) {
        this.$router.push({
          path: hasContent.path
        })
      }
    }
  },
  created() {
    // this.changeTab(this.selected);
  },
  mounted() {
    bus.$on("router-add", args => {
      this.changeTab(args);
    })
  }
};
</script>

<style lang="scss">
.bottom-tabs-component {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #ddd;
  .container {
    padding: 0;
  }
  .mu-bottom-nav-shift {
    color: black;
    background-color: #f3f3f3;
  }
  .mu-bottom-item-active.is-shift {
    color: #6495ED;
  }
}
</style>
