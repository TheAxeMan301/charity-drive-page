<template>
  <div class="header">
    <nav>
      <router-link to="/">
        <i class="fas fa-home" />
      </router-link>
      <router-link to="/about">
        <i class="fas fa-info" /> About/FAQ
      </router-link>
      <a
        v-if="phase === 'live'"
        href="https://tracker.tasbot.net/tracker/ui/donate/BBCB2018"
      >
        <i class="fas fa-donate" /> Donate
      </a>
      <a
        v-if="phase === 'live'"
        href="https://tracker.tasbot.net"
      >Donation tracker</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      phase: 'hype'
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  min-height: 3em;
  font-size: 1em;
  padding: 1em;
  width: 100%;
  background: #212121;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;

  nav {
    display: table;
    margin: 1.5em auto 0 auto;
    width: 100%;

    a {
      display: block;
      color: #ccc;
      text-decoration: none;
      padding: 0 1em;
      font-size: 1.5em;
      width: 100%;
    }

    a:hover {
      text-decoration: underline;
      color: #fff;
    }
  }
}
@media only screen and (min-width: 800px) {
  .header nav {
    display: table;
    width: auto;
    margin: 0 auto;

    a {
      width: auto;
      font-size: 1em;
      float: left;
    }
    svg {
      margin-right: 5px;
    }
  }
}
</style>
