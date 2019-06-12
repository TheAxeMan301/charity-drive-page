<template>
  <div id="app">
    <app-header :phase="phase" />
    <router-view
      :phase="phase"
      class="main-view"
    />
  </div>
</template>

<script>
import Header from './components/header'

const timerTarget = new Date('4 May 2019 8:00:00 PDT')

export default {
  name: 'App',
  components: {
    appHeader: Header
  },
  data () {
    return {
      phase: 'no-event'
    }
  },
  created () {
    if (this.phase === 'hype') {
      this.checkTimer()
      this.timeUpdateInterval = setInterval(() => {
        this.checkTimer()
      }, 1000)
    }
  },
  methods: {
    checkTimer () {
      if (timerTarget.getTime() < new Date().getTime()) {
        this.phase = 'live'
        clearInterval(this.timeUpdateInterval)
      }
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
.driving-tesla {
  display: block;
  height: 100px;
  width: 200px;
  position: absolute;
  z-index: 1;
  background: url('./assets/tesla-cutout-side.png') no-repeat;
  background-size: 100%;
  transition-property: transform;
  transition-duration: 4s;
  transition-timing-function: ease-in;
}
</style>
