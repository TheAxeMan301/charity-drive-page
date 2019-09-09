<template>
  <section
    class="countdown"
    v-if="showTimer"
  >
    <p>Begins in:</p>
    <div class="actual-counter">
      <span class="countDays">{{ dayCount }}</span>
      <span>:</span>
      <span class="countHours">{{ hourCount }}</span>
      <span>:</span>
      <span class="countMinutes">{{ minuteCount }}</span>
      <span>:</span>
      <span class="countSeconds">{{ secondCount }}</span>
    </div>
  </section>
</template>

<script>
function leadingZero (number) {
  return ('0' + number).slice(-2)
}
const timerTarget = new Date('14 Sept 2019 8:00:00 PDT')

export default {
  name: 'Countdown',
  components: {
  },
  data () {
    return {
      showTimer: true,
      dayCount: 0,
      hourCount: 0,
      minuteCount: 0,
      secondCount: 0
    }
  },
  methods: {
    updateTimer () {
      let nDiff = (timerTarget - Date.now()) / 1000
      if (nDiff >= 0) {
        let days = Math.floor(nDiff / 86400)
        nDiff -= days * 86400
        let hours = Math.floor(nDiff / 3600)
        nDiff -= hours * 3600
        let minutes = Math.floor(nDiff / 60)
        nDiff -= minutes * 60
        let seconds = Math.floor(nDiff)

        this.dayCount = leadingZero(days)
        this.hourCount = leadingZero(hours)
        this.minuteCount = leadingZero(minutes)
        this.secondCount = leadingZero(seconds)
      } else {
        this.showTimer = false
        clearInterval(this.timeUpdateInterval)
      }
    }
  },
  created () {
    this.updateTimer()
    this.timeUpdateInterval = setInterval(() => {
      this.updateTimer()
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timeUpdateInterval)
  }
}
</script>

<style scoped lang="scss">
.countdown {
  width: 100%;
  text-align: center;
  margin: 0.25em 0;

  .actual-counter {
    white-space: nowrap;
  }
  p {
    font-size: 2rem;
    margin: 0.2em;
  }
  span {
    color: #fff;
    margin: 0 0.1em;
    position: relative;
    font-size: 3em;
    padding: 0.1em;
    border-radius: 0.2em;
    margin-bottom: 40px;
  }
  span::after {
    color: #ddd;
    position: absolute;
    left: 0;
    bottom: -1.5em;
    font-size: 0.375em;
    width: 100%;
  }
  .countDays::after {
    content: "days";
  }
  .countHours::after {
    content: "hours";
  }
  .countMinutes::after {
    content: "minutes";
  }
  .countSeconds::after {
    content: "seconds";
  }
}
</style>
