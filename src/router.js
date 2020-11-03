import VueRouter from "vue-router";
import Home from "./views/TasgivingHome";

export default new VueRouter({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
});
