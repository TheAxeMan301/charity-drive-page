<template>
  <main>
    <b-container v-if="phase === 'hype'" fluid class="countdown">
      <Countdown />
    </b-container>
    <b-container v-if="phase === 'live'" class="video">
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://player.twitch.tv/?channel=dwangoac&parent=tasgiving.org"
        allowfullscreen
      />
    </b-container>
    <b-container class="boxes">
      <b-row class="justify-content-md-center">
        <b-col md="6">
          <b-card class="benefiting-card" text-variant="white">
            <b-card-title class="text-center">
              Benefiting
              <a href="https://www.nami.org/" target="_blank" rel="noopener"
                >NAMI</a
              >
            </b-card-title>
            NAMI, the National Alliance on Mental Illness, is the nation's
            largest grassroots mental health organization dedicated to building
            better lives for the millions of Americans affected by mental
            illness.
            <a href="https://www.nami.org/" target="_blank" rel="noopener">
              <img src="../assets/nami-logo-carousel.png" class="nami-logo" />
            </a>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-card class="schedule-card" text-variant="white">
            <b-card-title class="text-center">
              Schedule
            </b-card-title>
            <small
              >Times converted to your local timezone ({{
                Intl.DateTimeFormat().resolvedOptions().timeZone
              }})
            </small>
            <Schedule />
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import Schedule from "../components/schedule";
import Countdown from "../components/countdown";
export default {
  name: "Home",
  components: {
    Countdown,
    Schedule
  },
  props: {
    phase: {
      type: String,
      default: "hype"
    }
  },
  methods: {
    openLinkNewTab(url) {
      let win = window.open(url, "_blank");
      win.focus();
    }
  }
};
</script>

<style scoped lang="scss">
main {
  margin: 0 auto 30px auto;
  width: 100%;
}
.video {
  margin: 1em auto;
}

.countdown {
  margin: 0;
  background: #333;
  color: #ddd;
}
.boxes {
  margin-top: 3em;
}
.card {
  border: 0;
}
.card {
  font-size: 18px;
  margin-bottom: 4em;
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
.benefiting-card::after {
  content: "";
  // background-image: url("../assets/nami-logo-carousel.png");
  background-size: 65px;
  display: inline-block;
  position: absolute;
  width: 100%;
  bottom: -55px;
  height: 60px;
  background-repeat: no-repeat;
  background-position-x: center;
}
.nami-logo {
  display: block;
  width: 70%;
  margin: 2em auto;
}
.schedule-card {
  h4 {
    margin: 0;
  }
  small {
    text-align: center;
    display: block;
    margin-bottom: 1em;
  }
}
.card-title {
  font-weight: 600;
}
.schedule-card::after {
  content: "\f133";
  font-family: "Font Awesome 5 Free";
  display: inline-block;
  padding-right: 3px;
  vertical-align: middle;
  font-weight: 900;
  font-size: 60px;
  position: absolute;
  bottom: -62px;
  text-align: center;
  width: 100%;
  color: #35bcd7;
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
