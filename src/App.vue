<template>
  <div id="app">
    <app-header :phase="phase" />
    <router-view class="main-view" />
  </div>
</template>

<script>
import Header from './components/header'

export default {
  name: 'App',
  components: {
    appHeader: Header
  },
  data () {
    return {
      phase: 'hype'
    }
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
a:link {
  color: #ddd;
}
a:visited {
  color: #ddd;
}
a:hover {
  color: #fafafa;
}
</style>
