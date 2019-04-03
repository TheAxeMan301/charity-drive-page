<template>
  <main>
    <h1>Desert Charity Drive</h1>

    <section
      class="stream"
      v-if="phase === 'live'"
    >
      <iframe
        src="https://player.twitch.tv/?channel=dwangoac"
        frameborder="0"
        allowfullscreen="true"
        scrolling="no"
        height="100%"
        width="100%"
      />
    </section>
    <countdown />

    <p>Benefitting</p>
    <a href="https://nami.org/" target="_blank"><img
        src="../assets/nami_long_white.png"
        height="200"
    ></a>
    <p>presented by</p>
    <a href="http://tas.bot" alt="TASBot the Perfectionist" title="TASBot" target="_blank"><img
      src="../assets/tasbot.png"
      height="200"
    ></a>
    <p>In association with</p>
    <a href="https://www.rpglimitbreak.com" target="_blank"><img
      src="../assets/rpglb-logo_1200x424.png"
      height="200"
    ></a>
  </main>
</template>

<script>
import Countdown from '../components/countdown'
export default {
  name: 'Home',
  components: {
    Countdown
  },
  data () {
    return {
      phase: 'hype'
    }
  }
}
</script>

<style scoped lang="scss">
main {
  margin: 0 auto;
  width: 100%;
}
.stream {
  width: 100%;
  margin: 0 auto;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
  }
}
h1 {
  text-align: center;
}
@media only screen and (min-width: 800px) {
  main {
    margin: 0 auto;
    max-width: 1280px;
  }
}
</style>
