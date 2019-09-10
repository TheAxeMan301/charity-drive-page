import VueRouter from "vue-router";
import Home from "./views/MagwestHome";

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
