<template>
  <div id="app">
    <app-header />
    <router-view class="main-view" />
    <app-footer class="footer" />
  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
body {
  font: 16px "PT Sans", Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  color: #ddd;
  background: #303030;
  background-image: url('./assets/bg.png');
  background-repeat: repeat;
  min-height: 100%;
}
#app {
  min-height: 100%;
}
</style>
