<template>
  <main>
    <h1>Desert Bus Charity Drive</h1>

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

    <section class="explain-about">
      <img
        class="desert-bus"
        src="../assets/DesertBusYourDriverIs.png"
      >
      <div class="explain-div">
        <p>
          The Desert Bus Charity Drive is a charity fundraising event benefitting the
          <a
            href="https://nami.org/"
            target="_blank"
          >National Alliance on Mental Illness
            <i class="fas fa-external-link-alt fa-xs" /></a>
          presented by
          <a
            href="http://tas.bot"
            alt="TASBot the Perfectionist"
            title="TASBot"
            target="_blank"
          >
            Team TASBot<i class="fas fa-external-link-alt fa-xs" /></a>.
        </p>
        <p>
          DwangoAC, TASBot and TheAxeMan will livestream their drive from Petaluma, CA to Salt
          Lake City, UT where they will appear at the
          <a
            href="https://www.rpglimitbreak.com"
            target="_blank"
          >
            <img
              src="../assets/rpglb-logo_1200x424.png"
              height="20"
            >
            RPG Limit Break <i class="fas fa-external-link-alt fa-xs" /></a>
          video game marathon.
        </p>
        <p>
          Over the 14 hour trip viewers will be able to donate to control some systems of DwangoAC's
          Tesla Model X. Donate to adjust the thermostat and tune in on
          <a href="https://www.twitch.tv/dwangoac"><i class="fab fa-twitch" /> Twitch</a>
          to watch DwangoAC and TheAxeMan sweat or freeze.
        </p>
        <img
          class="tesla-pic"
          src="../assets/tesla-model-x.png"
          height="100"
        >
      </div>
    </section>

    <countdown />

    <p>Benefitting</p>
    <a
      href="https://nami.org/"
      target="_blank"
    ><img
      src="../assets/nami_long_white.png"
      height="200"
    ></a>
    <p>presented by</p>
    <a
      href="http://tas.bot"
      alt="TASBot the Perfectionist"
      title="TASBot"
      target="_blank"
    ><img
      src="../assets/tasbot.png"
      height="200"
    ></a>
    <p>In association with</p>
    <a
      href="https://www.rpglimitbreak.com"
      target="_blank"
    ><img
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
.explain-about {
  display: flex;

  a:link {
    color: #ddd;
  }
  a:visited {
    color: #ddd;
  }
  a:hover {
    color: #eee;
  }
  img.desert-bus {
    flex: 0 0.5 auto;
    width: 480px;
    height: 330px;
  }
  .explain-div {
    margin-left: 20px;
  }
  img.tesla-pic {
    margin-left: 20px;
  }
}
h1 {
  text-align: center;
}
@media only screen and (min-width: 800px) {
  main {
    margin: 0 auto ;
    max-width: 770px;
  }
}
@media only screen and (min-width: 1200px) {
  main {
    margin: 0 auto;
    max-width: 1170px;
  }
}
</style>
