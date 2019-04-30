<template>
  <b-navbar
    toggleable="md"
    type="dark"
    class="whole-nav"
  >
    <b-navbar-toggle target="nav-text-collapse">
      <b-navbar-toggle
        target="nav-text-collapse"
        disabled
      />
      Find TASBot on
    </b-navbar-toggle>

    <b-collapse
      id="nav-text-collapse"
      is-nav
    >
      <b-navbar-nav class="top-navbar-nav">
        <b-navbar-brand>
          Find TASBot on
        </b-navbar-brand>
        <b-nav-item
          href="https://www.youtube.com/dwangoac"
          target="_blank"
          rel="noopener"
        >
          <i class="fab fa-youtube" /> YouTube
        </b-nav-item>
        <b-nav-item
          href="https://www.twitch.tv/dwangoac"
          target="_blank"
          rel="noopener"
        >
          <i class="fab fa-twitch" /> Twitch
        </b-nav-item>
        <b-nav-item
          href="https://twitter.com/MrTASBot"
          target="_blank"
          rel="noopener"
        >
          <i class="fab fa-twitter" /> Twitter
        </b-nav-item>
        <b-nav-item
          href="http://discord.tasbot.net"
          target="_blank"
          rel="noopener"
        >
          <i class="fab fa-discord" /> Discord
        </b-nav-item>
        <b-nav-item
          href="http://tasvideos.org/TASBot.html"
          target="_blank"
          rel="noopener"
        >
          <i class="fas fa-external-link-alt" /> TASVideos
        </b-nav-item>
        <b-nav-item
          href="https://gdqvods.com/category/tool-assisted-speedruns/"
          target="_blank"
          rel="noopener"
        >
          <i class="far fa-play-circle" /> GDQVods
        </b-nav-item>
        <!-- TODO: Where will donation tracker go when we are live?
        Probably a good idea to put it somewhere besides the header. -->
        <b-nav-item
          v-if="phase === 'live'"
          href="https://tracker.tasbot.net/tracker/ui/donate/BBCB2018"
        >
          <i class="fas fa-donate" /> Donate
        </b-nav-item>
        <b-nav-item
          v-if="phase === 'live'"
          href="https://tracker.tasbot.net"
        >
          Donation tracker
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  props: {
    phase: {
      type: String,
      default: 'hype'
    }
  }
}

</script>

<style scoped lang="scss">
nav.navbar.whole-nav {
  background: #212121;
  background: rgba(0, 0, 0, 0.5);
ul.navbar-nav.top-navbar-nav {
  margin-left: auto;
  margin-right: auto;

  li.nav-item {
    margin-right: 10px;
    white-space: nowrap;
  }
}
}
</style>
