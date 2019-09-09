import VueRouter from 'vue-router'
import Home from './views/MagwestHome'
import About from './views/About'

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/about',
    name: 'about',
    component: About
  }]
})
