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
            On May 4th, make dwangoAC melt or TheAxeMan freeze using
            <a
              class="icon-link"
              href="https://crowdcontrol.live/"
              target="_blank"
            >
              <img
                src="../assets/crowd-control-logo-wrench-small.png"
                height="20"
              >
              Crowd Control
              <i class="fas fa-external-link-alt fa-xs" />
            </a>
            to hack the comfort features of a Tesla Model X during a 14+ hour desert
            livestream from Petaluma, CA to Salt Lake City, UT in a (literal) charity drive
            benefiting NAMI
            (<a
              href="https://nami.org/"
              target="_blank"
            >National Alliance on Mental Illness
              <i class="fas fa-external-link-alt fa-xs" /></a>).
          </p>
          <p>
            Presented by
            <a
              href="http://tas.bot/"
              target="_blank"
            >
              Team TASBot <i class="fas fa-external-link-alt fa-xs" /></a>,
            this inaugural event on the way to
            <a
              href="https://www.rpglimitbreak.com"
              target="_blank"
            >
              <img
                src="../assets/rpglb-logo-carousel.png"
                height="20"
              >
              RPG Limit Break <i class="fas fa-external-link-alt fa-xs" /></a>
            will allow you to:
            <ul>
              <li>
                Increase or decrease the car's internal temperature to
                potentially uncomfortable (but not dangerous) levels
              </li>
              <li>
                Increase or decrease the volume of the music playing in the
                car
              </li>
              <li>
                Skip the current song
              </li>
              <li>
                Honk the horn while stopped (for a rather hefty donation)
              </li>
              <li>
                While stopped, set our maximum speed for the next driving
                segment (between -4 and +4 mph of the max limit on the route)
              </li>
              <li>
                Donate to an incentive to enable Emissions Testing Mode (
                make the car emit human, uh, "emissions" noises on turn signals)
              </li>
              <li>
                Donate to an incentive to make the car dance to music at
                the next stop
              </li>
            </ul>
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
            :interval="carouselInterval"
            controls
            @sliding-end="onCarouselSlideEnd"
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
                @click="openLinkNewTab('https://crowdcontrol.live/')"
                src="../assets/crowd-control-logo-carousel.png"
                alt="Crowd Control"
                height="200"
              >
            </b-carousel-slide>
            <b-carousel-slide>
              <img
                slot="img"
                class="d-block img-fluid carousel-image-link"
                @click="openLinkNewTab('https://www.rpglimitbreak.com')"
                src="../assets/rpglb-logo-carousel.png"
                alt="RPG Limit Break"
                height="200"
              >
            </b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
    </b-container>
    <Sponsors />
    <About />
  </main>
</template>

<script>
import Countdown from '../components/countdown'
import Sponsors from '../components/sponsors'
import About from '../views/About'
export default {
  name: 'Home',
  components: {
    Countdown, About, Sponsors
  },
  data () {
    return {
      phase: 'hype',
      carouselInterval: 10000
    }
  },
  methods: {
    openLinkNewTab (url) {
      let win = window.open(url, '_blank')
      win.focus()
    },
    onCarouselSlideEnd (slideNumber) {
      if (slideNumber === 0) {
        this.carouselInterval = 0
      }
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
