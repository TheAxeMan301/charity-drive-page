<template>
  <b-container class="sponsors">
    <b-row>
      <b-col>
        <h3>Proudly sponsored by:</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6" lg="3" class="entry">
        <a
          class="sponsor_link"
          href="https://www.wilsonsignalbooster.com/weboost-drive-4g-x-otr-mobile-signal-booster-kit-470210.html?utm_source=tasbot&utm_medium=logo&utm_campaign=otr"
          target="_blank"
          rel="noopener"
        >
          <img
            src="../assets/wbs.png"
            alt="Wilson Signal Booster"
            title="Wilson Signal Booster"
          />
        </a>
      </b-col>
      <b-col md="6" lg="3" class="entry">
        <a
          class="sponsor_link"
          href="https://github.com/GlitchyLabs"
          target="_blank"
          rel="noopener"
        >
          <img
            src="../assets/glitchylabs.png"
            alt="Glitchy Labs"
            title="Glitchy Labs"
          />
        </a>
      </b-col>
      <b-col md="6" lg="3" class="entry">
        <a
          class="sponsor_link"
          href="https://crowdcontrol.live"
          target="_blank"
          rel="noopener"
        >
          <img
            src="../assets/crowd-control-logo-carousel.png"
            alt="Crowd Control"
            title="Crowd Control"
          />
        </a>
      </b-col>
      <b-col md="6" lg="3" class="entry">
        <a
          class="sponsor_link"
          href="https://gitlab.com/toolassist"
          target="_blank"
          rel="noopener"
        >
          <img
            src="../assets/toolassist.png"
            alt="ToolAssist"
            title="ToolAssist"
          />
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Sponsors",
  data() {
    return {};
  }
};
</script>

<style type="text/css">
h3 {
  text-align: center;
}
.sponsors {
  margin: 2em auto 1em auto;
  height: auto;
}
.sponsor_link {
  display: flex;
  height: 100%;
  background: #fff;
  padding: 10px;
  border-radius: 0.6em;
  align-items: center;
}
.entry {
  margin-bottom: 1em;
  height: 100px;
}
.entry img {
  margin: 0 auto;
  max-height: 100%;
  max-width: 100%;
}
</style>
