<template>
  <div id="app">
    <app-header />
    <router-view />
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
    return {}
  }
}
</script>

<style lang="scss">
</style>
