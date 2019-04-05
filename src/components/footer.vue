<template>
  <div class="footer">
    <span class="find-on">Find TASBot on</span>
    <a href="https://www.youtube.com/dwangoac">
      <i class="fab fa-youtube" /> YouTube
    </a>
    <a href="https://www.twitch.tv/dwangoac">
      <i class="fab fa-twitch" /> Twitch
    </a>
    <a href="https://twitter.com/MrTASBot">
      <i class="fab fa-twitter" /> Twitter
    </a>
    <a href="discord.tasbot.net">
      <i class="fab fa-discord" /> Discord
    </a>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.footer {
  font-size: 1em;
  padding: 1em;
  width: 100%;
  background: #212121;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  margin-bottom: 10px;

  span.find-on {
    font-weight: bold;
    margin-bottom: 10px;
    margin-left: 20px;
    display: block;
  }
  a {
    margin-left: 40px;
    color: #ddd;
  }
}

</style>
