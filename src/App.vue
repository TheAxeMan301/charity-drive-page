<template>
  <div id="app">
    <app-header />
    <router-view />
    <app-footer />
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
</style>
