<template>
  <div id="app">
    <b-button
      pill
      variant="outline-secondary"
      class="light-mode-toggle"
      @click="toggleTheme"
    >
      <span v-if="darkMode">Light mode</span>
      <span v-else>Dark mode</span>
    </b-button>
    <app-header :phase="phase" />
    <router-view :phase="phase" class="main-view" />
  </div>
</template>

<script>
import Header from "./components/header";

const timerTarget = new Date("14 Sept 2019 12:00:00 PDT");
const eaList = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
let eaIdx = 0;
export default {
  name: "App",
  components: {
    appHeader: Header
  },
  data() {
    return {
      darkMode: true,
      phase: "hype"
    };
  },
  created() {
    this.checkTimer();
    this.timeUpdateInterval = setInterval(() => {
      this.checkTimer();
    }, 1000);
  },
  mounted() {
    window.addEventListener("keyup", e => {
      if (e.key == eaList[eaIdx]) {
        eaIdx++;
      } else {
        eaIdx = 0;
      }
      if (eaIdx == eaList.length) {
        document.querySelector("html").style.filter = "invert()";
      }
    });
  },
  methods: {
    checkTimer() {
      if (timerTarget.getTime() < new Date().getTime()) {
        this.phase = "live";
        clearInterval(this.timeUpdateInterval);
      }
    },
    toggleTheme() {
      document.body.classList.toggle("lightMode");
      this.darkMode = !this.darkMode;
    }
  }
};
</script>

<style lang="scss">
html {
  min-height: 100%;
}
body {
  font: 18px "Raleway", Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  color: #303030;
  background: #222;
}

body::after {
  content: "";
  background: url(assets/bg.png);
  opacity: 0.2;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: -1;
}
.lightMode {
  background: #eee;
}
.lightMode::after {
  opacity: 0.05;
}
.light-mode-toggle {
  position: absolute;
  left: 1em;
  top: 1em;
  z-index: 100;
  color: #fff;
  @media (max-width: 576px) {
    display: none;
  }
}
#app {
  min-height: 100%;
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
.row {
  margin: 0;
}
</style>
