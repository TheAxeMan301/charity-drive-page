<template>
  <main>
    <h1>Desert Tesla Charity Drive</h1>

    <b-container
      fluid
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
    </b-container>

    <b-container>
      <b-row class="explain-about">
        <b-col md="5">
          <img
            class="desert-bus"
            src="../assets/tesla-model-x.png"
          >
        </b-col>
        <b-col
          md="7"
          class="explain-text"
        >
          <p>
            The Desert Tesla Charity Drive is a charity fundraising event benefiting the
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
              Team TASBot <i class="fas fa-external-link-alt fa-xs" /></a>.
          </p>
          <p>
            DwangoAC, TASBot and TheAxeMan will livestream their drive from Petaluma, CA to Salt
            Lake City, UT where they will appear at the
            <a
              href="https://www.rpglimitbreak.com"
              target="_blank"
            >
              <img
                src="../assets/rpglb-logo-carousel.png"
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
        </b-col>
      </b-row>
    </b-container>

    <b-container
      fluid
      class="countdown-container"
    >
      <countdown />
    </b-container>

    <b-container>
      <b-row>
        <b-col
          cols="8"
          offset="2"
        >
          <b-carousel
            class="the-carousel"
            :interval="10000"
            controls
          >
            <b-carousel-slide>
              <img
                slot="img"
                class="d-block img-fluid carousel-image-link"
                @click="openLinkNewTab('https://nami.org/')"
                src="../assets/nami-logo-carousel.png"
                alt="Benefiting NAMI"
                height="200"
              >
            </b-carousel-slide>
            <b-carousel-slide>
              <img
                slot="img"
                class="d-block img-fluid"
                src="../assets/tasbot-logo-carousel.png"
                alt="Presented by Team TASBot"
              >
            </b-carousel-slide>
            <b-carousel-slide>
              <img
                slot="img"
                class="d-block img-fluid carousel-image-link"
                @click="openLinkNewTab('https://www.rpglimitbreak.com')"
                src="../assets/rpglb-logo-carousel.png"
                alt="Presented by Team TASBot"
                height="200"
              >
            </b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
    </b-container>
    <About />
  </main>
</template>

<script>
import Countdown from '../components/countdown'
import About from '../views/About'
export default {
  name: 'Home',
  components: {
    Countdown, About
  },
  data () {
    return {
      phase: 'hype'
    }
  },
  methods: {
    openLinkNewTab (url) {
      let win = window.open(url, '_blank')
      win.focus()
    }
  }
}
</script>

<style scoped lang="scss">
main {
  margin: 0 auto 30px auto;
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
  img.desert-bus {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
}
.countdown-container {
  margin-bottom: 40px;
}
.the-carousel {
  margin-bottom: 20px;
}
.carousel-image-link {
  cursor: pointer;
}
h1 {
  text-align: center;
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
