<template>
  <main>

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

    <div class="logo-container">
      <img class="magwestgo-logo" src="../assets/magwesticon2.jpg" />
    </div>
    <b-jumbotron
      text-variant="light"
      lead="Sept 14, 2019"
      lead-tag="h3"
    >
      <template v-slot:header>
      </template>
      <hr class="jumbo-hr" />
      <b-container
        fluid
        class="countdown-container"
      >
        <countdown />
      </b-container>
    </b-jumbotron>

    <b-container>
    <b-row class="justify-content-md-center">
      <b-col md="4">
      <b-card
        class="benefiting-card"
        text-variant="white"
      >
        <b-card-title class="text-center">
          Benefiting Child's Play
        </b-card-title>
        Child's Play is dedicated to improving the lives of children in
        hospitals and domestic abuse shelters around the world through
        the kindness and generosity of the video game community and the
        power of play.
      </b-card>
      <div class="logo-container">
        <img class="childsplay-controller" src="../assets/logo-childs-play.png" />
      </div>
      </b-col>
      <b-col md="4">
      <b-card
        class="schedule-card"
        text-variant="white"
      >
        <b-card-title class="text-center">
          Schedule
        </b-card-title>
        <schedule />
      </b-card>
      </b-col>
    </b-row>
    </b-container>

  </main>
</template>

<script>
import Countdown from '../components/countdown'
import Schedule from '../components/schedule'

export default {
  name: 'Home',
  components: {
    Countdown, Schedule
  },
  props: {
    phase: {
      type: String,
      default: 'hype'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    openLinkNewTab (url) {
      let win = window.open(url, '_blank')
      win.focus()
    },
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
.logo-container {
  display: flex;
  flex-direction: row;
  justify-content: center;

  img.magwestgo-logo {
    flex: 0 1 auto;
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
.jumbotron {
  background-color: #58afda;

  h1 {
    text-align: center;
    font-size: 4em;
  }
  .lead {
    text-align: center;
    font-size: 3em;
  }
  hr {
    border: 1px solid #ddd;
  }
}
.card.benefiting-card {
  background-color: #9ebb6a;
  border-radius: 1.5rem;
}
.card.schedule-card {
  background-color: #35bcd7;
  border-radius: 1.5rem;
}
img.childsplay-controller {
  width: 100px;
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
