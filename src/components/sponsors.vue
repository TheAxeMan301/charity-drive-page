<template>
  <b-container class="sponsors">
    <b-row>
      <b-col><h3>Proudly sponsored by:</h3></b-col>
    </b-row>
    <b-row>
      <b-col
        md="6"
        lg="3"
        class="entry"
      >
        <a
          class="sponsor_link"
          href="https://www.wilsonelectronics.com/"
          target="_blank"
        >
          <img
            src="../assets/wilson.jpg"
            alt="Wilson Signal Booster"
            title="Wilson Signal Booster"
          >
        </a>
      </b-col>
      <b-col
        md="6"
        lg="3"
        class="entry"
      >
        <a
          class="sponsor_link"
          href="https://github.com/GlitchyLabs"
          target="_blank"
        >
          <img
            src="../assets/glitchylabs.png"
            alt="Glitchy Labs"
            title="Glitchy Labs"
          >
        </a>
      </b-col>
      <b-col
        md="6"
        lg="3"
        class="entry"
      >
        <a
          class="sponsor_link"
          href="https://crowdcontrol.live"
          target="_blank"
        >
          <img
            src="../assets/crowd-control-logo-carousel.png"
            alt="Crowd Control"
            title="Crowd Control"
          >
        </a>
      </b-col>
      <b-col
        md="6"
        lg="3"
        class="entry"
      >
        <a class="sponsor_link">
          <img
            src="../assets/toolassist.png"
            alt="ToolAssist"
            title="ToolAssist"
          >
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Sponsors',
  data () {
    return {}
  }
}
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
}
</style>
