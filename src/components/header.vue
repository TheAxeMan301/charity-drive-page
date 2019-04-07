<template>
  <b-navbar
    toggleable="md"
    type="dark"
    class="whole-nav"
  >
    <b-navbar-toggle target="nav-text-collapse" />

    <b-collapse
      id="nav-text-collapse"
      is-nav
    >
      <b-navbar-nav class="top-navbar-nav">
        <b-nav-item to="/">
          <i class="fas fa-home" />
        </b-nav-item>
        <b-nav-item to="/about">
          <i class="fas fa-info" /> About/FAQ
        </b-nav-item>
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
    margin-left: 10px;
  }
}
}
</style>
