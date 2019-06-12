<template>
  <main>
    <h1>TASBot</h1>

    <b-container
      class="video"
      v-if="phase === 'live'"
    >
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://player.twitch.tv/?channel=dwangoac"
        allowfullscreen
      />
    </b-container>
    <b-container
      class="video"
      v-if="phase === 'hype'"
    >
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube-nocookie.com/embed/ek-7J0QOYfA"
        allowfullscreen
      />
    </b-container>
    <b-container
      class="video"
      v-if="phase === 'no-event'"
    >
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/CTOUOeec4Qc?rel=0"
        allowfullscreen
      />
    </b-container>

    <b-container>
      <p class="explain-text">
        TASBot is best described as a special R.O.B. robot outfitted with Legos to hold a custom circuit board that
        can exactly mimic the behavior of a video game controller. TASBot can play games on real video game
        consoles with superhuman abilities, usually leading to game breaking glitches in front of live audiences.
        TASBot has a long and storied history that starts with the initial efforts to replay Tool-Assisted
        Speedruns on physical hardware via a process now called console verification.
      </p>
      <p class="explain-text">
        TASBot was born on 2013-12-22 and is currently hosted by his creator and keeper, dwangoAC. He is on Twitter
        as <a href="https://twitter.com/MrTASBot">@MrTASBot</a>, tas.bot (which redirects to this page), and on
        Freenode IRC in #tasbot. He has made appearances at AGDQ 2014, AGDQ 2015, SGDQ 2015, AGDQ 2016, SGDQ
        2016, and AGDQ 2017 (although the earliest TAS involvement at a GDQ event was organized by DarkKobold
        during SGDQ 2011). TASBot has also participated in talks at TWiT's The New Screen Savers episode 60,
        DEF CON 24, and GeekPwn 2016.
      </p>
    </b-container>
  </main>
</template>

<script>
import tasbotCutout from '../assets/tasbot-cutout.png'
import axemanCutout from '../assets/axeman-cutout.png'
import dwangoCutout from '../assets/dwango-cutout.png'
import teslaCutoutFront from '../assets/tesla-cutout-front.png'
import teslaCutoutSide from '../assets/tesla-cutout-side.png'

export default {
  name: 'Home',
  components: {
  },
  props: {
    phase: {
      type: String,
      default: 'hype'
    }
  },
  data () {
    return {
      carouselInterval: 10000,
      cycleImages: [teslaCutoutFront, teslaCutoutSide, dwangoCutout, axemanCutout, tasbotCutout],
      cycleDex: 0
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
    },
    onTeslaClick (event) {
      this.cycleDex++
      if (this.cycleDex >= this.cycleImages.length) {
        this.cycleDex = 0
        this.driveTeslas()
      }
      event.target.src = this.cycleImages[this.cycleDex]
    },
    driveTeslas () {
      const numTeslas = Math.random() * 10 + 2
      const bWidth = document.body.clientWidth
      const bHeight = document.documentElement.clientHeight
      for (let i = 0; i < numTeslas; i++) {
        let tesla = document.createElement('div')
        const yPos = Math.random() * bHeight
        tesla.classList = 'driving-tesla'
        tesla.style.transitionDuration = Math.random() * 1 + 2 + 's'
        document.querySelector('body').prepend(tesla)
        tesla.style.transform = `translate(${bWidth - 200}px, ${yPos}px)`
      }
      setTimeout(() => {
        let teslas = document.querySelectorAll('.driving-tesla')
        for (let i = 0; i < numTeslas; i++) {
          let tesla = teslas[i]
          tesla.style.transform = `translate(-400px, ${Math.random() * bHeight}px)`
          setTimeout(function () {
            tesla.remove()
          }, 4000)
        }
      }, 10)
    }
  }
}
</script>

<style scoped lang="scss">
main {
  margin: 0 auto 30px auto;
  width: 100%;
}
.video {
  margin-bottom: 1em;
}
.explain-image {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.explain-about {
  img.desert-bus {
    max-width: 100%;
    max-height: 350px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
.explain-text {
  font-size: 1.2em;
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
  font-weight: bold;
}
a:visited {
  color: #ddd;
  font-weight: bold;
}
a:hover {
  color: #fafafa;
}
</style>
