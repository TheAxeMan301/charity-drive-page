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
        To define TASBot is a complicated task. What started off as a modified R.O.B. unit outfitted with Legos and a circuit board has evolved into an ever-expanding community. With various interests ranging from Tool-Assisted runs and Software Development, to supporting each other during troubling times and crisis, the TASBot community has become a living enigma.
      </p>
      <p class="explain-text">
        At its core, TASBot was founded under the idea of creating hardware to exactly mimic the behavior of videogame controllers, and allow playback of pre-recorded inputs on physical hardware for a live audience - usually with game-breaking glitches or other super-human abilities - with incredible results. This method of playing inputs, called Tool-Assisted Speedruns (TAS for short), is called "Console Verification."
      </p>
      <p class="explain-text">
        TASBot and its community also make appearances in other ways outside of the gaming and TAS community, often in interesting ways. Previously, they have been seen  working with WarpWorld to connect their software CrowdControl to a Tesla, enabling viewers of their Twitch stream to control various aspects of the vehicle - including GPS coordinates, radio volume, climate controls, and more - during their drive to RPG Limit Break 2019. They have also been seen working alongside other charities, such as the Bot Bash Charity Brawl, sponsoring Team Offbeat Robotics and their bot Skorpios.
      </p>
      <p class="explain-text">
        As TASBot continues to evolve, so does its community. A growing collaboration is underway to bring forth a new look for their mascot. With several of their members coming together to work on entirely customer PCBs, design work, and even personality quirks for TASBot, the future for the community anything but uncertain - It's Strong. It's Bright. It's Tool-Assisted.
      </p>
      <p class="explain-text">
        The original R.O.B.-based model of TASBot was born on 2013-12-2, and is currently hosted by his creator and keeper, dwangoAC. You can also find him here:
        <ul>
          <li>Twitter: <a href="https://twitter.com/MrTASBot">@MrTASBot</a></li>
          <li>Twitch: <a href="https://www.twitch.tv/dwangoac">@dwangoAC</a></li>
          <li>Freenode IRC: #tasbot</li>
        </ul>
      </p>
      <p class="explain-text">
        You can also join the Discord community by going to <a href="https://discord.tas.bot">https://discord.tas.bot</a>
      </p>
      <p class="explain-text">
        Previous appearances:
        <ul>
          <li>AGDQ 2014, 2015, 2016, 2017, 2018, 2019, 2020</li>
          <li>SGDQ 2015, 2016, 2018, 2019</li>
          <li>GDQx 2018</li>
          <li>Magwest Go 2019</li>
          <li>Desert Tesla Charity Drive 2019</li>
          <li>MAGFest 2019, 2020</li>
          <li>Thotcon 2017</li>
          <li>TWiT's The New Screen Savers, episode 60</li>
          <li>DEF CON 24</li>
          <li>GeekPwn 2016</li>
          <li>RPG Limit Break 2019</li>
        </ul>
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
