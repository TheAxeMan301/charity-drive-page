<template>
  <header>
    <b-container>
      <b-row>
        <b-col md="12" lg="4" class="logo-container">
          <img
            class="magwestgo-logo"
            src="../assets/magwest.png"
            alt="Logo of MAGWest Go!"
          />
        </b-col>

        <b-col lg="8">
          <b-navbar toggleable="md" type="dark" class="whole-nav">
            <b-navbar-toggle target="nav-text-collapse">
              <b-navbar-toggle target="nav-text-collapse" disabled /> Links
            </b-navbar-toggle>
            <b-collapse id="nav-text-collapse" is-nav>
              <b-navbar-nav class="top-navbar-nav">
                <b-nav-item
                  href="https://go.magwest.org"
                  target="_blank"
                  rel="noopener"
                >
                  Home
                </b-nav-item>
                <b-nav-item
                  href="https://www.magwest.org/"
                  target="_blank"
                  rel="noopener"
                >
                  MAGWest
                </b-nav-item>
                <b-nav-item
                  href="https://tracker.tasbot.net/tracker/runs/MWG2019"
                  target="_blank"
                  rel="noopener"
                >
                  Schedule
                </b-nav-item>
                <b-nav-item
                  v-if="phase === 'live'"
                  href="https://tracker.tasbot.net/tracker/donate/MWG2019"
                >
                  Donate
                </b-nav-item>
                <b-nav-item
                  v-if="phase === 'live'"
                  href="https://tracker.tasbot.net/tracker/index/MWG2019"
                  >Donation tracker</b-nav-item
                >
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h1>MAGWest Go!</h1>
          <span
            >MAGWests's charity marathon is here! It's 8 hours of speed runs,
            TAS'es, randomizer races, and maybe even a few surprises. All
            donations, subscription, and bit proceeds will benefit Child's Play
            of Redmond, WA.</span
          ><br />
          <span
            >September 14. Live on
            <a href="https://twitch.tv/magfest2">twitch.tv/magfest2</a></span
          >
        </b-col>
      </b-row>
      <b-row v-if="phase === 'live'">
        <b-col
          ><b-button
            pill
            variant="danger"
            block
            href="https://tracker.tasbot.net/tracker/donate/MWG2019"
            >Donate now!</b-button
          ></b-col
        >
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
  background-color: #4aabd3;
  background: linear-gradient(#79c7ed, #4aabd3);
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
  margin-bottom: -1em;
  @media (max-width: 992px) {
    justify-content: center;
    margin-bottom: 0;
  }
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
