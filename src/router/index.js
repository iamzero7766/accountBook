import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/Home.vue"
import addPage from "../views/addPage.vue";
import bookPage from "../views/bookPage.vue";
import chartPage from "../views/chartPage.vue";
import groupPage from "../views/groupPage.vue";
import personPage from "../views/personPage.vue";
import settingPage from "../views/settingPage.vue";
import addMenuPage from "../views/addMenuPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
    redirect:'/bookPage',
    children: [
      {
        path: "bookPage",
        name: "bookPage",
        component: bookPage
      },
      {
        path: "addPage",
        name: "addPage",
        component: addPage
      },
      {
        path: "personPage",
        name: "personPage",
        component: personPage
      },
      {
        path: "chartPage",
        name: "chartPage",
        component: chartPage
      },
      {
        path: "groupPage",
        name: "groupPage",
        component: groupPage
      },
    ]
  },
  {
    path: "/settingPage",
    name: "settingPage",
    component: settingPage
  },
  {
    path: "/addMenuPage",
    name: "addMenuPage",
    component: addMenuPage
  }
];

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
});

export default router;
