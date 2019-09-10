<template>
  <div class="footer">
    <span class="find-on">Find TASBot on</span>
    <a href="https://www.youtube.com/dwangoac" target="_blank" rel="noopener">
      <i class="fab fa-youtube" /> YouTube
    </a>
    <a href="https://www.twitch.tv/dwangoac" target="_blank" rel="noopener">
      <i class="fab fa-twitch" /> Twitch
    </a>
    <a href="https://twitter.com/MrTASBot" target="_blank" rel="noopener">
      <i class="fab fa-twitter" /> Twitter
    </a>
    <a href="http://discord.tasbot.net" target="_blank" rel="noopener">
      <i class="fab fa-discord" /> Discord
    </a>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.footer {
  font-size: 1em;
  padding: 1em 1em 0 1em;
  width: 100%;
  background: #212121;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  margin-bottom: 0;

  span.find-on {
    font-weight: bold;
    margin-bottom: 5px;
    margin-left: 20px;
  }
  a {
    margin-left: 40px;
    color: #ddd;
    margin-bottom: 5px;
    display: inline-block;
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
}
</style>
