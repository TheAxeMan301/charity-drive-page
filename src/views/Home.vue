<template>
  <main>
    <h1>Desert Tesla Charity Drive - May 4th, 2019</h1>

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
            On May 4th, make dwangoAC and TheAxeMan melt or freeze as you control
            the temperature and other features of a Tesla Model X during a 14+ hour
            livestream from Petaluma, CA to Salt Lake City, UT in a (literal) charity
            drive benefiting the
            <a
              href="https://nami.org/"
              target="_blank"
            >National Alliance on Mental Illness
              <i class="fas fa-external-link-alt fa-xs" /></a>
            (NAMI).
          </p>
          <p>
            Presented by
            <a
              href="http://tas.bot/"
              target="_blank"
            >
              Team TASBot <i class="fas fa-external-link-alt fa-xs" /></a>,
            this inaugural event aims to deliver the vehicle and all passengers safely to
            <a
              href="https://www.rpglimitbreak.com"
              target="_blank"
            >
              <img
                src="../assets/rpglb-logo-carousel.png"
                height="20"
              >
              RPG Limit Break <i class="fas fa-external-link-alt fa-xs" /></a>
            with no concern for human trappings like comfort. You'll
            be able to watch the entire event along with great music and several other surprises
            here at this site (TAS.Bot) as an embedded stream to
            <a href="https://www.Twitch.tv/dwangoAC"><i class="fab fa-twitch" />Twitch.tv/dwangoAC</a>.
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
