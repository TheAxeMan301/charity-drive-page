<template>
  <header>
    <b-container>
      <b-row>
        <b-col lg="12">
          <b-navbar toggleable="md" type="dark" class="whole-nav">
            <b-navbar-toggle target="nav-text-collapse">
              <b-navbar-toggle target="nav-text-collapse" disabled /> Links
            </b-navbar-toggle>
            <b-collapse id="nav-text-collapse" is-nav>
              <b-navbar-nav class="top-navbar-nav">
                <b-nav-item
                  href="https://tasgiving.org"
                  target="_blank"
                  rel="noopener"
                >
                  Home
                </b-nav-item>
                <b-nav-item
                  href="https://www.nami.org/"
                  target="_blank"
                  rel="noopener"
                >
                  NAMI
                </b-nav-item>
                <b-nav-item
                  href="https://horaro.org/tasgiving2020/schedule"
                  target="_blank"
                  rel="noopener"
                >
                  Schedule
                </b-nav-item>
                <b-nav-item
                  v-if="phase === 'live'"
                  href="https://tracker.tasbot.net/tracker/ui/donate/TASGiving2020"
                >
                  Donate
                </b-nav-item>
                <b-nav-item
                  v-if="phase === 'live'"
                  href="https://tracker.tasbot.net/tracker/event/TASGiving2020"
                >
                  Donation tracker
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="12" class="logo-container">
          <img
            class="tasgiving-logo"
            src="../assets/logo-cutout.png"
            alt="Logo of TASGiving"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h1>TASGiving</h1>
          <span
            >TASBot's charity marathon is here! It's 3 days of speedruns,
            TAS'es, randomizer races, and maybe even a few surprises. All
            donations, subscription, and bit proceeds will benefit NAMI.</span
          ><br />
          <span
            >November 27-29th. Live on
            <a href="https://twitch.tv/dwangoac">twitch.tv/dwangoac</a></span
          >
        </b-col>
      </b-row>
      <b-row v-if="phase === 'live'">
        <b-col>
          <b-button
            pill
            variant="danger"
            block
            href="https://tracker.tasbot.net/tracker/ui/donate/TASGiving2020  "
            >Donate now!</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    phase: {
      type: String,
      default: "hype"
    }
  }
};
</script>

<style scoped lang="scss">
header {
  background-color: #ff742a;
  background: linear-gradient(#ff8746, #ff742a);
  color: #eee;
  padding-bottom: 1em;
  h1,
  h3 {
    text-align: center;
    margin: 0;
  }
  h1 {
    font-size: 4em;
    font-weight: 700;
    @media (max-width: 576px) {
      font-size: 2em;
    }
  }
  span {
    font-size: 1em;
    display: block;
    text-align: center;
  }
  a {
    font-weight: 700;
  }
}
.logo-container {
  display: flex;
  margin-top: 1em;
  justify-content: center;
}
.tasgiving-logo {
  height: 200px;
}
nav.navbar.whole-nav {
  text-transform: uppercase;
  @media (max-width: 992px) {
    justify-content: center;
    text-align: center;
  }
  ul.navbar-nav.top-navbar-nav {
    margin-left: auto;
    margin-right: auto;

    li.nav-item {
      margin-right: 10px;
      white-space: nowrap;
    }
    a.nav-link {
      font-weight: 600;
      letter-spacing: 2px;
      color: rgba(255, 255, 255, 0.7);
    }
    a.nav-link:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
}
</style>
